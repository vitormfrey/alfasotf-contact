<template>
  <div class="form-container">
    <form @submit.prevent="formDispatch" class="form">
      <label for="name">Name</label>

      <input
        type="text"
        id="name"
        v-model="contact.name"
        :disabled="disable"
        placeholder="Ex. Charles Xavier"
      />

      <label for="email">E-mail</label>
      <input
        type="email"
        id="email"
        v-model="contact.email"
        placeholder="Ex. contact@contact.com"
        :disabled="disable"
      />

      <label for="contact">Contact</label>
      <input
        type="tel"
        id="contact"
        v-model="contact.phone_number"
        pattern="([0-9]{2})[0-9]{5}-[0-9]{4}"
        placeholder="Ex. 1988888-9999"
        :disabled="disable"
      />

      <label for="picture">Picture</label>
      <input
        type="text"
        id="picture"
        v-model="contact.image"
        placeholder="Ex. https://www.yourImageLink.com"
        :disabled="disable"
      />
      <img v-show="contact.image" :src="contact.image" />

      <div class="form-button">
        <button v-if="isEditContact" type="save">Save</button>
        <button v-else type="save">Create</button>
        <button
          v-show="isEditContact"
          @click.prevent="() => (this.disable = !this.disable)"
        >
          Edit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
import Contact from '../../models/ContactClass'
import axios from '../../utils/axios'

const URL_NAME = 'Create Contact'
//TODO: usar o Watch

export default {
  name: 'Form',
  data() {
    return {
      contact: new Contact('', '', '', null),
      isEditContact: false,
      disable: false
    }
  },

  created() {
    this.verifyPage()
  },

  methods: {
    /**
     * @function verifyPage
     * Essa função verifica se o formulário
     * vai usado para edição dos dados ou
     * criação de um novo contato
     */

    verifyPage() {
      const local = localStorage.getItem('contact')
      let path = this.$route.name
      if (path != URL_NAME) {
        this.isEditContact = true
        this.disable = true
        this.contact = JSON.parse(local)
      }
    },
    async createContact() {
      const data = await axios.post('/contact', this.contact)
      if (data.statusText == 'OK') {
        alert('Contact created!!')
      }
      this.$router.push('/')
    },

    async updateContact() {
      const res = await axios.put('/contact/update', this.contact)
      if (res.statusText == 'OK') {
        alert(`${res.data.result}`)
      }
      this.$router.push('/')
    },

    async formDispatch() {
      if (this.isEditContact) {
        this.updateContact()
      } else await this.createContact()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.form-container {
  display: flex;
  justify-content: center;
}
.form {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 5px;
}
/*CSS itens */
.form label,
input,
.form-button button {
  font-family: 'Montserrat', sans-serif;
}
.form label::first-letter {
  font-weight: bold;
  color: #0451a5;
}
.form input {
  border: 1px solid;
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  outline-color: #0451a5;
  margin-bottom: 10px;
}

.form-button {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.form-button button {
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  background-color: #0576f1;
  color: #e1e8ef;
  transition: ease-in-out 0.3s;
}
.form-button button:hover {
  background-color: #055bff;
}
.form-button button[type='save'] {
  background-color: #218838;
}
.form-button button[type='save']:hover {
  background-color: #2aae47;
}
img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>
