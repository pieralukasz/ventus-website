<template>
    <div class="relationship" id="Relationship">
        <div class="title">
            Z kim współpracujemy
        </div>
        <div class="container-relationship">
            <img  v-for="relat in relationship" :key="relat.name" :src="relat.logo" :alt="relat.name"/>
        </div>
    </div>
</template>

<script>
    import relationship from "../assets/relationship";
    export default {
        name: "Relationship",
        data(){
            return{
                relationship
            }
        }
    }
</script>

<style lang="sass" scoped>
    .relationship
        width: 100%
        display: flex
        justify-content: center
        align-items: center
        flex-wrap: wrap

        .title
            font-family: 'Oxygen', sans-serif
            text-transform: uppercase
            width: 100%
            text-align: center
            padding: 70px 0 20px 0

            font-size: 2rem
            letter-spacing: 2px
            font-weight: bold

            @media (max-width: 700px)
                font-size: 1.2rem


        .container-relationship
            margin-top: 20px
            width: 90%
            display: flex
            justify-content: center
            align-items: center
            flex-wrap: wrap


            img
                width: 15%
                margin: 20px


                @media (max-width: 700px)
                    width: 30%

</style>