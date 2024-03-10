<template>
  <defaultLayout>
    <div>
      <h3 class="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
        <div
          v-for="item in stats"
          :key="item.name"
          class="overflow-hidden rounded-lg bg-white px-4 border-t py-5 shadow sm:p-6"
        >
          <dt class="truncate text-sm font-medium text-gray-500">{{ item.name }}</dt>
          <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ item.stat }}</dd>
        </div>
      </dl>
    </div>
  </defaultLayout>
</template>

<script>
import defaultLayout from '@/layouts/defaultLayout.vue'
export default {
  name: 'Home-page',
  components: {
    defaultLayout
  },
  setup() {
    const stats = [
      { name: 'Total Users', stat: '71,897' },
      { name: 'Avg. Open Rate', stat: '58.16%' },
      { name: 'Avg. Click Rate', stat: '24.57%' },
      { name: 'Avg. Click Rate', stat: '24.57%' }
    ]
    return {
      stats
    }
  }
}
</script>

<style lang="scss" scoped>
</style>