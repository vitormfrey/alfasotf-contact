<template>
  <Container>
    <h1>Contact list</h1>
    <CardContact
      v-for="contact in $contactList"
      :key="contact.id"
      :contact="contact"
    />
    <div class="create-button">
      <button><router-link to="/contact/create">Create</router-link></button>
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container/index.vue'
import CardContact from '../components/CardContact/index.vue'
export default {
  name: 'Contacts',
  components: { Container, CardContact },

  created() {
    this.getContactLists()
  },
  methods: {
    async getContactLists() {
      await this.$store.dispatch('getContactList')
    }
  },
  computed: {
    $contactList() {
      return this.$store.getters.$contactList
    }
  }
}
</script>

<style scoped>
.create-button {
  margin-top: 20px;
}
.create-button button {
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  background-color: #0576f1;
}
.create-button a {
  font-family: 'Montserrat', sans-serif;
  color: #e1e8ef;
  font-size: 16px;
  text-decoration: none;
}
h1 {
  font-family: 'Montserrat', sans-serif;
}
h1::first-letter {
  font-weight: bold;
  color: #0451a5;
  font-size: 38px;
}
</style>
