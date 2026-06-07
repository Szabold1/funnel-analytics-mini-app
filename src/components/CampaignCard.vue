<script setup lang="ts">
import { computed } from 'vue'
import type { Campaign } from '@/types/campaign'
import { computeOverallConversion, formatPercent, capitalize } from '@/utils/campaignMetrics'
import { conversionColors } from '@/utils/tailwindClasses'
import IconChevron from './icons/IconChevron.vue'

const props = defineProps<{
  campaign: Campaign
  isSelected?: boolean
}>()

const emit = defineEmits<{
  select: []
}>()

const overallConversion = computed(() => computeOverallConversion(props.campaign))
</script>

<template>
  <button class="w-full text-left p-5 cursor-pointer" @click="emit('select')">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
      <!-- Left: name and info -->
      <div class="flex items-center justify-between min-w-0 flex-1">
        <div class="min-w-0 flex-1">
          <h3 class="text-lg font-semibold text-gray-900 truncate">{{ campaign.name }}</h3>
          <p class="text-sm text-gray-500 mt-0.5">
            {{ capitalize(campaign.device) }} · {{ campaign.steps.length }} step{{
              campaign.steps.length > 1 ? 's' : ''
            }}
          </p>
        </div>
        <!-- Chevron on mobile only -->
        <IconChevron class="ml-4 sm:hidden" :direction="isSelected ? 'down' : 'right'" />
      </div>

      <!-- Right: conversion + chevron on sm+ -->
      <div class="flex items-center justify-between sm:justify-end gap-4">
        <div class="text-left sm:text-right shrink-0">
          <p
            class="text-2xl font-bold"
            :class="overallConversion < 10 ? conversionColors.bad : conversionColors.good"
          >
            {{ formatPercent(overallConversion) }}
          </p>
          <p class="text-xs text-gray-500">conversion</p>
        </div>
        <IconChevron class="hidden sm:block" :direction="isSelected ? 'down' : 'right'" />
      </div>
    </div>
  </button>
</template>
