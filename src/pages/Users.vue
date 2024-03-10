<template>
  <defaultLayout>
    <Users />
  </defaultLayout>
</template>

<script>
import defaultLayout from '@/layouts/defaultLayout.vue'
import Users from '@/components/Datatable.vue'
export default {
  name: 'Users-page',
  components: {
    defaultLayout,
    Users
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>