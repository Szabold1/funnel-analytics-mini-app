<script setup lang="ts">
import { ref } from 'vue'
import { campaigns } from '@/data/campaigns'
import CampaignList from '@/components/CampaignList.vue'

const selectedId = ref<string | null>(null)

function onSelect(id: string) {
  selectedId.value = selectedId.value === id ? null : id
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-6">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="rounded-3xl border border-gray-200 bg-white shadow-sm px-6 py-4">
        <h1 class="text-2xl font-bold text-gray-900">Funnel Analytics</h1>
        <p class="text-sm text-gray-500 mt-0.5">Popup campaign performance overview</p>
      </header>

      <main class="mt-6">
        <CampaignList :campaigns="campaigns" :selected-id="selectedId" @select="onSelect" />
      </main>
    </div>
  </div>
</template>
