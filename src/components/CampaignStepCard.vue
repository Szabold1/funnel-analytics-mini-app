<script setup lang="ts">
import { ref } from 'vue'
import type { StepMetrics } from '@/types/campaign'
import { formatPercent } from '@/utils/campaignMetrics'
import { stepCardColors, stepBadgeColors, conversionColors } from '@/utils/tailwindClasses'
import IconInfo from './icons/IconInfo.vue'

const props = defineProps<{
  metrics: StepMetrics
}>()

const showDescription = ref(false)

const toggleDescription = () => {
  showDescription.value = !showDescription.value
}
</script>

<template>
  <div
    class="rounded-2xl border p-4 transition-colors"
    :class="
      stepCardColors[
        props.metrics.isWorst ? 'worst' : props.metrics.isHighDropOff ? 'highDropOff' : 'normal'
      ]
    "
  >
    <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-2">
          <span
            class="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
            :class="
              stepBadgeColors[
                props.metrics.isWorst
                  ? 'worst'
                  : props.metrics.isHighDropOff
                    ? 'highDropOff'
                    : 'normal'
              ]
            "
          >
            {{ props.metrics.stepIndex + 1 }}
          </span>

          <h4 class="truncate font-semibold text-gray-900">
            {{ props.metrics.step.name }}
          </h4>

          <button
            class="inline-flex h-5 w-5 shrink-0 items-center justify-center text-gray-400 transition-colors hover:text-indigo-600"
            :title="showDescription ? 'Hide details' : 'Show details'"
            @click="toggleDescription"
          >
            <IconInfo />
          </button>
        </div>

        <div
          v-if="showDescription"
          class="mt-2 max-w-[90vw] rounded-lg border border-gray-200 bg-white p-2.5 text-sm leading-relaxed text-gray-700 shadow-lg"
        >
          {{ props.metrics.step.description }}
        </div>

        <p class="mt-2 text-sm text-gray-600">
          {{ props.metrics.step.views.toLocaleString() }} views ·
          {{ props.metrics.step.proceeds.toLocaleString() }} continued
        </p>
      </div>

      <div class="shrink-0">
        <p class="text-sm text-gray-500">Drop-off</p>
        <p
          class="text-xl font-bold"
          :class="
            props.metrics.isWorst
              ? conversionColors.bad
              : props.metrics.isHighDropOff
                ? conversionColors.highDropOff
                : conversionColors.normal
          "
        >
          {{ formatPercent(props.metrics.dropOff) }}
        </p>
      </div>
    </div>
  </div>
</template>
