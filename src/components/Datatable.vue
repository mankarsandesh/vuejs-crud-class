<template>
  <div class="mx-auto max-w-7xl">
    <div class="py-10">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table class="min-w-full divide-y divide-gray-700 text-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0"
                    >
                      Full Name
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Email</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Address</th>

                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Country</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-800 text-gray-600">
                  <tr v-for="(person, index) in people" :key="person.email">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">
                      {{ person.first_name }} {{ person.last_name }}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm">
                      {{ person.email }}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm">
                      {{ person.address }}
                    </td>

                    <td class="whitespace-nowrap px-3 py-4 text-sm">
                      {{ person.country }}, {{ person.city }},
                      {{ person.pincode }}
                    </td>
                    <td
                      class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                    >
                      <router-link
                        :to="{
                          path: `add-users`,
                          params: { id: index },
                          query: { id: index }
                        }"
                        class="text-indigo-400 hover:text-indigo-800"
                      >
                        Edit
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: 'Data-table',
  data() {
    return {
      people: []
    }
  },
  methods: {
    // Add your methods here
    getFetchData() {
      const users = localStorage.getItem('users')
      this.people = JSON.parse(users)
    }
  },
  mounted() {
    this.getFetchData()
  }
}
</script>