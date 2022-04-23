import axios from '../utils/axios'

export const contact = {
  state: {
    contacts: [],
    contact: {}
  },
  mutations: {
    SET_CONTACT_LIST(state, payload) {
      state.contacts = payload
    },

    SET_CONTACT(state, payload) {
      state.contact = payload
    }
  },
  actions: {
    async getContactList(context) {
      try {
        const { data } = await axios.get('/contact')
        if (data.length === 0) {
          throw new Error(`API didn't find any contact`)
        }
        context.commit('SET_CONTACT_LIST', data)
      } catch (err) {
        alert(err.message)
      }
    },
    setContact(context, payload) {
      const local = localStorage.getItem('contact')
      if (local) {
        localStorage.removeItem('contact')
      }
      const json = JSON.stringify(payload)
      localStorage.setItem('contact', json)
      context.commit('SET_CONTACT', payload)
    }
  },
  getters: {
    $contactList(state) {
      return state.contacts
    },
    $getContact(state) {
      return state.contact
    }
  }
}
