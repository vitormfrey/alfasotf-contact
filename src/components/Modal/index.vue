<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>Are you sure?</h3>
          <p>Do you really want to delete this contact?</p>
          <div class="body">
            <button class="modal-button delete" @click="$emit('delete')">
              Delete
            </button>
            <button class="modal-button" @click="$emit('close')">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.body {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.body button {
  margin: 0px 0px 0px 20px;
  font-family: 'Montserrat', sans-serif;
}
.modal-button {
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  color: #e1e8ef;
  background-color: #727172;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  transition: ease-in-out 0.3s;
}

.delete {
  background-color: #d53e6b;
}
.delete:hover {
  background-color: #ff497f;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
