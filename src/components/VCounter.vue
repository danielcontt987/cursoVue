<template>
  <button @click="counter--" v-if="counter > 0">-</button>
  <h1>{{ counter }}</h1>
  <button @click="counter++">+</button>
</template>

<script>
export default {
    data: () => {
        return {
            counter: 0,
        }
    }
}
</script>

<style>

</style>