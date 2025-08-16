<template>
  <section :id="id" class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 py-12 px-8">
    
    <div class="text-center max-w-3xl">
      <h2 class="text-4xl font-bold mb-4 text-gray-800">About Edvanta</h2>
      <p class="text-lg text-gray-600">
        We are a team of passionate educators and trainers focused on helping individuals and businesses master digital skills.
      </p>
    </div>

    <div class="mt-10 grid md:grid-cols-2 gap-8 max-w-5xl w-full">

      <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col space-y-4">
        <div class="flex items-center space-x-3">
          <h3 class="text-2xl font-semibold text-gray-800">Vision</h3>
        </div>
        <p class="text-gray-600 leading-relaxed">
          To be the leading platform for <span class="text-blue-600 font-semibold">practical digital skills training</span> 
          that <span class="text-blue-600 font-semibold">empowers people worldwide</span> to grow, innovate, and succeed in the modern era.
        </p>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col space-y-4">
        <div class="flex items-center space-x-3">
          <h3 class="text-2xl font-semibold text-gray-800">Mission</h3>
        </div>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-start space-x-2">
            <span class="text-blue-600 mt-1">✔</span>
            <span>Provide high-quality, practical training for individuals and businesses</span>
          </li>
          <li class="flex items-start space-x-2">
            <span class="text-blue-600 mt-1">✔</span>
            <span>Foster innovation, creativity, and problem-solving skills</span>
          </li>
          <li class="flex items-start space-x-2">
            <span class="text-blue-600 mt-1">✔</span>
            <span>Build a supportive community for continuous learning and growth</span>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  props: ['id']
}
</script>
