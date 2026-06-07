import type { Campaign, StepMetrics } from '@/types/campaign'

const HIGH_DROP_OFF_THRESHOLD = 10 // percentage points from the worst

export function calculateStepMetrics(campaign: Campaign): StepMetrics[] {
  if (campaign.steps.length === 0) return []

  const metrics: StepMetrics[] = campaign.steps.map((step, index) => {
    const conversion = step.views > 0 ? (step.proceeds / step.views) * 100 : 0
    const dropOff = 100 - conversion

    return {
      step,
      stepIndex: index,
      conversion,
      dropOff,
      isWorst: false,
      isHighDropOff: false,
    }
  })

  const maxDropOff = Math.max(...metrics.map((m) => m.dropOff))

  return metrics.map((m) => ({
    ...m,
    isWorst: m.dropOff === maxDropOff,
    isHighDropOff: m.dropOff !== maxDropOff && maxDropOff - m.dropOff <= HIGH_DROP_OFF_THRESHOLD,
  }))
}

export function computeOverallConversion(campaign: Campaign): number {
  const firstStep = campaign.steps[0]
  const lastStep = campaign.steps[campaign.steps.length - 1]
  return firstStep && lastStep && firstStep.views > 0
    ? (lastStep.proceeds / firstStep.views) * 100
    : 0
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
