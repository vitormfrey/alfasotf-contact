<template>
  <div class="card-container">
    <div class="card">
      <img v-if="contact.image != null" :src="contact.image" />
      <img v-else src="../../assets/user.png" />
      <p class="card-name">Name: {{ contact.name }}</p>
      <p class="card-email">E-mail: {{ contact.email }}</p>
      <p class="card-phone-number">Phone: {{ contact.phone_number }}</p>
    </div>
    <div class="card-functions">
      <router-link to="/contact/details" @click="setContact"
        >More information</router-link
      >
      <button @click="showModal = !showModal">Delete</button>
      <Modal
        v-if="showModal"
        @close="showModal = !showModal"
        @delete="deleteContact"
      />
    </div>
  </div>
</template>

<script>
import Modal from '../Modal/index.vue'

export default {
  name: 'CardContact',
  props: {
    contact: Object
  },
  components: { Modal },

  data() {
    return {
      showModal: false
    }
  },

  methods: {
    setContact() {
      this.$store.dispatch('setContact', this.contact)
    },
    async deleteContact() {
      this.$store.dispatch('deleteContact', this.contact.id)
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
/* CSS de estrutura */
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 25px;
  padding: 10px;
  transition: ease-in-out 0.3s;
  box-shadow: #00000028 0px 0px 11px 4px;
  border-radius: 5px;
}
.card {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 80%;
}
.card-functions {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

/*CSS dos itens*/
.card-name,
.card-email,
.card-phone-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}
.card-name::first-letter,
.card-email::first-letter,
.card-phone-number::first-letter {
  font-weight: bold;
  color: #0451a5;
  font-size: 18px;
}
.card-functions button {
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  color: #e1e8ef;
  background-color: #d53e6b;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  transition: ease-in-out 0.3s;
}
.card-functions a {
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #000;
  transition: ease-in-out 0.3s;
}

/*CSS hover effect */
.card-functions a:hover {
  color: #0451a5;
}
.card-functions button:hover {
  background-color: #ff497f;
}
.card-container:hover {
  background-color: #dbdbdb;
}
</style>
