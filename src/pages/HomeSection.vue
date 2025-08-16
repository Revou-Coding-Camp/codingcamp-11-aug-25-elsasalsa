<template>
  <section>
    <div class="text-center mt-20 mb-40 py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md mx-6 md:mx-20">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">
        Hi {{ displayName && displayName !== 'Name' ? displayName : 'there' }}, Welcome to Edvanta!
      </h1>
      <p class="text-lg md:text-xl max-w-2xl mx-auto">
        Discover our training programs and transform your career.
      </p>
      <div class="mt-10 flex justify-center">
        <a href="#profile" class="bg-white text-blue-600 font-semibold px-4 md:px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
          Learn More
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  props: ['displayName']
}
</script>
