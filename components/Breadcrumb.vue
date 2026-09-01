<template>
  <nav aria-label="Breadcrumb" class="text-sm text-text-light mb-6">
    <ol class="flex items-center justify-center gap-2 flex-wrap">
      <li v-for="(item, i) in items" :key="i" class="flex items-center gap-2">
        <svg v-if="i > 0" class="h-3.5 w-3.5 text-text-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <NuxtLink
          v-if="i < items.length - 1"
          :to="item.url"
          class="hover:text-primary transition-colors"
        >
          {{ item.name }}
        </NuxtLink>
        <span v-else aria-current="page" class="text-text-main font-medium">
          {{ item.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{ name: string; url: string }>
}>()
</script>
