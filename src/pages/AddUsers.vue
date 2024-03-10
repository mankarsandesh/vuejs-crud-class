<template>
  <defaultLayout>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div class="space-y-12">
        <div
          class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2 mx-auto"
        >
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
              >First name</label
            >
            <div class="mt-2">
              <Field
                name="first_name"
                type="email"
                v-model="userInfo.first_name"
                class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
              <ErrorMessage name="first_name" class="text-red-400 text-sm pt-2" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
              >Last name</label
            >
            <div class="mt-2">
              <Field
                name="last_name"
                type="text"
                v-model="userInfo.last_name"
                class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
              <ErrorMessage name="last_name" class="text-red-400 text-sm pt-2" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <Field
                name="email"
                type="email"
                v-model="userInfo.email"
                class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
              <ErrorMessage name="email" class="text-red-400 text-sm pt-2" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900"
              >Country</label
            >
            <div class="mt-2">
              <Field
                name="country"
                as="select"
                v-model="userInfo.country"
                class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option value="indian">India</option>
                <option value="Thailand">Thailand</option>
                <option value="USA">USA</option>
              </Field>
              <ErrorMessage name="country" class="text-red-400 text-sm pt-2" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900"
              >Street address</label
            >
            <div class="mt-2">
              <Field
                name="address"
                type="text"
                v-model="userInfo.address"
                class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
              <ErrorMessage name="address" class="text-red-400 text-sm pt-2" />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
            <div class="mt-2">
              <Field
                name="city"
                type="text"
                v-model="userInfo.city"
                class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
              <ErrorMessage name="city" class="text-red-400 text-sm pt-2" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900"
              >State / Province</label
            >
            <div class="mt-2">
              <Field
                name="state"
                type="text"
                v-model="userInfo.state"
                class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
              <ErrorMessage name="state" class="text-red-400 text-sm pt-2" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900"
              >ZIP / Postal code</label
            >
            <div class="mt-2">
              <Field
                name="pincode"
                type="number"
                v-model="userInfo.pincode"
                class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
              <ErrorMessage name="pincode" class="text-red-400 text-sm pt-2" />
            </div>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </Form>
  </defaultLayout>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import defaultLayout from '@/layouts/defaultLayout.vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { ref, onMounted } from 'vue'

const router = useRouter()
const route = useRoute()
const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required().email(),
  country: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  pincode: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required()
})

const userInfo = ref({
  first_name: '',
  last_name: '',
  email: '',
  country: '',
  addreess: '',
  city: '',
  state: '',
  pincode: ''
})
// Submit function to forms
function onSubmit(values) {
  const users = JSON.parse(localStorage.getItem('users'))
  //   console.log(JSON.parse(users), 'users')
  const findUsers = users.find((element) => element.email === values.email)
  if (findUsers) {
    alert('User already exists')
    return
  } else {
    users.push(values)
    localStorage.setItem('users', JSON.stringify(users))
    // literal string path
    router.push({ path: '/users' })
  }
}

onMounted(() => {
  console.log(route.query, 'route')
  const userId = route.query.id
  if (userId) {
    const users = JSON.parse(localStorage.getItem('users'))
    console.log(users[userId], 'users')
    userInfo.value = users[userId]
  }
})
</script>

<style lang="scss" scoped>
</style>