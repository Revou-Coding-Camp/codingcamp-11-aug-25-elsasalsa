<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
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
      <MessageUsSection id="message" @update-display-name="updateDisplayName" />
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
      displayName: 'Name' 
    }
  },
  methods: {
    updateDisplayName(name) {
      this.displayName = name
    }
  }
}
</script>
