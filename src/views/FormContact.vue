<template>
  <Container>
    <Title :title="titlePage" />
    <Form />
  </Container>
</template>

<script>
import Container from '../components/Container/index'
import Form from '../components/Form/index.vue'
import Title from '../components/Title/index.vue'
const URL_NAME = 'Create Contact'
export default {
  name: 'FormContact',
  components: { Container, Form, Title },

  data() {
    return {
      titlePage: 'Create contact'
    }
  },

  created() {
    this.verifyPage()
  },
  methods: {
    verifyPage() {
      let path = this.$route.name
      if (path != URL_NAME) {
        this.titlePage = 'About contact'
      }
    }
  }
}
</script>

<style scoped></style>
