<template>
  <section :id="id" class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-4 text-gray-700 text-center">
      We’d Love to Hear From You
    </h2>

    <div class="mt-6 flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl w-full">
  
    <div class="w-full md:w-2/5 bg-white p-6 rounded-lg shadow-md max-h-[500px] overflow-auto">
      <h3 class="text-2xl font-semibold mb-4 text-gray-700 text-center md:text-left">Message Us</h3>
      <form @submit.prevent="handleSubmit" class="space-y-2">
        <input v-model="form.name" placeholder="Name" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input v-model="form.email" type="email" placeholder="Email" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input v-model="form.phone" type="tel" placeholder="Phone Number" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <textarea v-model="form.message" placeholder="Message" rows="3" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">Submit</button>
      </form>
    </div>

    <div class="w-full md:w-2/5 bg-blue-100 p-6 border border-blue-300 rounded-lg shadow-sm max-h-[500px] overflow-auto">
      <div v-if="submittedData">
        <p><strong>Name:</strong> {{ submittedData.name }}</p>
        <p><strong>Email:</strong> {{ submittedData.email }}</p>
        <p><strong>Phone:</strong> {{ submittedData.phone }}</p>
        <p><strong>Message:</strong> {{ submittedData.message }}</p>
      </div>
      <div v-else class="text-gray-500 text-sm text-center">No message submitted yet.</div>
    </div>


</div>

  </section>
</template>

<script>
import { handleFormSubmit } from '../js/script'

export default {
  props: ['id', 'displayName'], 
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      submittedData: null
    }
  },
  methods: {
    handleSubmit() {
      const result = handleFormSubmit(this.form)
      if (result) {
        this.submittedData = result
        this.form = { name: '', email: '', phone: '', message: '' }
      }
    }
  }
}
</script>

