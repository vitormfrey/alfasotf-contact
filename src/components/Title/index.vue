<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
}
h1::first-letter {
  font-weight: bold;
  color: #0451a5;
  font-size: 3rem;
}
</style>
