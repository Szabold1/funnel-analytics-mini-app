/** Card border and background colors based on step status */
export const stepCardColors = {
  worst: 'border-red-300 bg-red-50',
  highDropOff: 'border-amber-300 bg-amber-50',
  normal: 'border-gray-200 bg-white',
} as const

/** Step badge (circle number indicator) colors based on step status */
export const stepBadgeColors = {
  worst: 'bg-red-500 text-white',
  highDropOff: 'bg-amber-400 text-white',
  normal: 'bg-gray-300 text-gray-700',
} as const

/** Conversion rate / drop-off percentage text colors */
export const conversionColors = {
  bad: 'text-red-600',
  good: 'text-green-600',
  highDropOff: 'text-amber-600',
  normal: 'text-gray-800',
} as const
