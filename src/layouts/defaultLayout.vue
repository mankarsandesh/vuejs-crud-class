<template>
  <div class="min-h-full bg-gray-800">
    <div class="pb-32 h-full">
      <HeaderNav />
      <!-- <header class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-white">{{ currentPageName }}</h1>
        </div>
      </header> -->
    </div>

    <main class="-mt-32">
      <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6 h-screen"><slot /></div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
const currentPageName = useRoute().name
</script>