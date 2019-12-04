<template>
    <div id="header">
        <h1>Header</h1>
        <nav>
            <router-link to="/match">Match</router-link>
            <router-link to="/training">Entrainement</router-link>
            <router-link to="/referentials">Référentiels</router-link>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>

</style>
