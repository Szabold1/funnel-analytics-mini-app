<script setup lang="ts">
import type { Campaign } from '@/types/campaign'
import CampaignCard from './CampaignCard.vue'
import CampaignDetails from './CampaignDetails.vue'

const props = defineProps<{
  campaigns: Campaign[]
  selectedId: string | null
}>()

const emit = defineEmits<{
  select: [id: string]
}>()

const isSelected = (campaign: Campaign) => campaign.id === props.selectedId
</script>

<template>
  <div class="rounded-3xl p-2.5 bg-white overflow-hidden shadow-sm">
    <template v-for="campaign in campaigns" :key="campaign.id">
      <div
        class="rounded-2xl overflow-hidden border-2 transition"
        :class="
          isSelected(campaign)
            ? 'bg-teal-50/50 border-teal-700/20'
            : 'bg-white border-transparent hover:border-teal-700/20'
        "
      >
        <CampaignCard
          :campaign="campaign"
          :is-selected="isSelected(campaign)"
          @select="emit('select', campaign.id)"
        />

        <Transition name="collapse">
          <CampaignDetails v-if="isSelected(campaign)" :campaign="campaign" />
        </Transition>
      </div>
    </template>
  </div>
</template>
