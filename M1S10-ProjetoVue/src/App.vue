<template>
    <About />
    <Home />
    <Cadastro />
</template>

<script>
    import About from "./views/About/about.vue"
    import Home from "./views/Home/Home.vue"
    import Cadastro from "./views/Talent/Talent.vue"

    export default {
        components: {
            About
            Home
            Cadastro
        }
    }
</script>

<style scoped>

</style>
