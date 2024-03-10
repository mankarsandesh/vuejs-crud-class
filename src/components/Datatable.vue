<template>
  <div class="mx-auto max-w-7xl">
    <div class="py-10">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table class="min-w-full divide-y divide-gray-700 text-black">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0"
                    >
                      Name
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-black">
                      Title
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Email</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Role</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-800 text-black">
                  <tr v-for="person in people" :key="person.email">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-800 sm:pl-0"
                    >
                      {{ person.name }}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                      {{ person.title }}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                      {{ person.email }}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                      {{ person.role }}
                    </td>
                    <td
                      class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                    >
                      <a href="#" class="text-indigo-400 hover:text-indigo-800"
                        >Edit<span class="sr-only">, {{ person.name }}</span></a
                      >
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

<script setup>
const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
  }
  // More people...
]
</script>