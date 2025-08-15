<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <!-- Modal untuk input nama -->
    <div
      v-if="showNameModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 class="text-xl font-bold mb-4 text-gray-800">Welcome to SkillBoost!</h2>
        <p class="text-gray-600 mb-4">Please enter your name:</p>
        <input
          v-model="tempName"
          type="text"
          placeholder="Your name"
          class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div class="mt-4 flex justify-end space-x-2">
          <button
            @click="submitName"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg fixed w-full z-10">
      <div class="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4 md:px-12">
        <a href="/" class="text-lg font-bold tracking-wide">SkillBoost</a>
        <nav class="flex flex-wrap space-x-4 md:space-x-12">
          <a href="#home" class="hover:text-yellow-300 transition">Home</a>
          <a href="#profile" class="hover:text-yellow-300 transition">Our Profile</a>
          <a href="#message" class="hover:text-yellow-300 transition">Message Us</a>
        </nav>
      </div>
    </header>

    <!-- Content -->
    <main class="flex-1 pt-28">
      <HomeSection id="home" :displayName="displayName" />
      <ProfileSection id="profile" />
      <MessageUsSection id="message" :displayName="displayName" @update-display-name="updateDisplayName" />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white text-center py-3 text-sm">
      © {{ new Date().getFullYear() }} SkillBoost. All rights reserved.
    </footer>
  </div>
</template>

<script>
import HomeSection from './pages/HomeSection.vue'
import ProfileSection from './pages/ProfileSection.vue'
import MessageUsSection from './pages/MessageUsSection.vue'

export default {
  components: { HomeSection, ProfileSection, MessageUsSection },
  data() {
    return {
      displayName: localStorage.getItem('displayName') || 'Name',
      showNameModal: false,
      tempName: ''
    }
  },
  mounted() {
    if (this.displayName === 'Name') {
      this.showNameModal = true
    }
  },
  methods: {
    updateDisplayName(name) {
      this.displayName = name
      localStorage.setItem('displayName', name)
    },
    submitName() {
      if (this.tempName.trim()) {
        this.updateDisplayName(this.tempName.trim())
        this.showNameModal = false
      } else {
        alert('Please enter your name!')
      }
    }
  }
}
</script>
