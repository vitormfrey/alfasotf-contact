<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  margin: 0px 60px;
}
</style>
