<template>
    <div v-if="loading" class="loader">
      <div>🌀</div> Cargando...
    </div>
</template>

<script>
export default {
    name: 'loading',
    computed:{
        loading() {
            return this.$store.state.loading;
        }
    }
}
</script>

<style>

</style>
