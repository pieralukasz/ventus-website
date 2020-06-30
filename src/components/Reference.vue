<template>
    <div class="reference">
        <div class="title-reference">Referencje i Certyfikaty</div>
        <div class="container-reference">
            <img v-for="(ref, index) in reference" :key="index" :src="ref" @click="setReference(index + 1)"/>
        </div>
    </div>
</template>

<script>
    import reference from "../assets/reference";

    export default {

        name: "Reference",
        data() {
            return{
                reference,
            }
        },
        components: {

        },
        methods: {
            setReference(index){
                this.$store.dispatch('setPhoto', index)
            },
            getBack() {
                this.pickPhoto = null
            }
        }
    }
</script>

<style scoped lang="sass">

    .reference
        width: 100%
        margin-top: 100px
        background-color: rgb(245, 245, 245, 1)
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column

        .title-reference
            padding: 50px 0 30px 0
            width: 100%
            text-align: center
            font-size: 2.3rem
            letter-spacing: 2px
            text-transform: uppercase
            font-family: 'Oxygen', sans-serif
            font-weight: bold

            @media (max-width: 700px)
                font-size: 1.2rem

        .container-reference
            width: 90%
            height: 100%
            display: flex
            flex-wrap: wrap
            justify-content: center
            align-items: center
            padding-bottom: 20px
            position: relative


            img
                width: 150px
                margin: 20px
                border: 1px solid black
                cursor: pointer
                transition: .3s

                &:hover
                    border: 1px solid grey
                    opacity: .7

            @media (max-width: 700px)
                width: 100%
                img
                    width: 30%


</style>