<script setup lang="ts">
import { computed } from 'vue'
import type { Campaign } from '@/types/campaign'
import { calculateStepMetrics } from '@/utils/campaignMetrics'
import CampaignStepCard from './CampaignStepCard.vue'

const props = defineProps<{
  campaign: Campaign
}>()

const stepMetrics = computed(() => calculateStepMetrics(props.campaign))
</script>

<template>
  <div class="p-6">
    <h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
      Step-by-step funnel
    </h3>

    <div class="space-y-3">
      <CampaignStepCard v-for="sm in stepMetrics" :key="sm.step.id" :metrics="sm" />
    </div>
  </div>
</template>
