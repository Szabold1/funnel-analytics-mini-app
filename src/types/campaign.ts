export interface CampaignStep {
  id: string
  name: string
  type: string
  views: number
  proceeds: number
  description: string
}

export interface Campaign {
  id: string
  name: string
  device: string
  steps: CampaignStep[]
}

export interface StepMetrics {
  step: CampaignStep
  stepIndex: number
  conversion: number
  dropOff: number
  isWorst: boolean
  isHighDropOff: boolean
}

export interface CampaignMetrics {
  campaign: Campaign
  overallConversion: number
  stepMetrics: StepMetrics[]
  worstStep: StepMetrics | null
  highDropOffSteps: StepMetrics[]
}
