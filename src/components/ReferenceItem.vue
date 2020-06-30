<template>
    <div class="reference-item" @click="setNormal">
        <img :src="reference[pickPhoto -1]">
    </div>
</template>

<script>
    import reference from "../assets/reference";

    export default {
        name: "ReferenceItem",
        props: ['pickPhoto'],
        data(){
            return{
                reference
            }
        },
        methods: {
            setNormal(){
                this.$store.dispatch('makeNormal')
            }
        }
    }
</script>

<style scoped lang="sass">

    .reference-item
        position: fixed
        z-index: 10000
        width: 100vw
        height: 100vh
        background-color: rgb(180, 180, 180, 0.7)
        display: flex
        justify-content: center
        align-items: center

        img
            height: 80%
            border: 2px solid black

            @media (max-width: 800px)
                height: 60%



</style>