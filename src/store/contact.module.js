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
    },
    DELETE_CONTACT(state, payload) {
      const index = state.contacts.findIndex(
        (contact) => contact.id === payload
      )
      console.log(index)
      state.contacts.pop(index)
    }
  },
  actions: {
    async getContactList({ commit }) {
      try {
        const { data } = await axios.get('/contact')
        if (data.length === 0) throw new Error(`API didn't find any contact`)

        commit('SET_CONTACT_LIST', data)
      } catch (err) {
        alert(err.message)
      }
    },
    setContact({ commit }, payload) {
      const local = localStorage.getItem('contact')
      if (local) {
        localStorage.removeItem('contact')
      }
      const json = JSON.stringify(payload)
      localStorage.setItem('contact', json)
      commit('SET_CONTACT', payload)
    },
    async deleteContact({ commit }, payload) {
      try {
        await axios.delete('/contact/delete', {
          data: { id: payload }
        })
        commit('DELETE_CONTACT', payload)
      } catch (err) {
        alert(err.message)
      }
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
