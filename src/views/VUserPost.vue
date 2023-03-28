<template>
  <h1>Hola {{$route.params.user}} con el post: {{$route.params.post}}</h1>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.params)
  }
}
</script>

<style>

</style>