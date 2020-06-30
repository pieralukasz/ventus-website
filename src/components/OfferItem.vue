<template>
    <div class="offer-item" @click="makeActive(name)">
        <img :src="getImage(name)"/>
        <div class="name">{{name.name}}</div>
    </div>
</template>

<script>

    import budownictwo from '../assets/budownictwo.jpg'
    import automatyka from '../assets/automatyka.jpg'
    import instalacje from '../assets/instalacje.jpg'

    export default {
        name: "OfferItem",
        data(){
            return{
                photo: [
                    {
                        name: 'Budownictwo',
                        photo: budownictwo
                    },
                    {
                        name: 'Instalacje',
                        photo: instalacje
                    },
                    {
                        name: 'Automatyka',
                        photo: automatyka
                    }
                ]
            }
        },
        props: ['name', 'makeActive'],
        methods: {
            getImage(name) {
                for(let item of this.photo) {
                    if(item.name === name.name) {
                        return item.photo
                    }
                }
            }
        }
    }
</script>

<style lang="sass">
    .offer-item
        width: 310px
        height: 310px
        background-color: #fff
        transition: .5s

        cursor: pointer

        @media (max-width: 600px)
            width: 280px
            height: 280px
            margin: 5%
        margin: 3%
        position: relative
        display: flex
        justify-content: center
        align-items: center
        overflow: hidden
        border-radius: 50%
        /*border: 3px solid grey*/

        img
            height: 100%
            opacity: .7
            transition: .3s

        .name
            position: absolute
            top: 60%
            font-family: 'Montserrat', sans-serif
            text-transform: uppercase
            padding: 20px
            border-radius: 25px
            /*border: 3px solid grey*/
            background-color: rgb(250, 250, 250, .9)
            font-weight: bold
            transition: .3s
            

        &:hover
            img
                opacity: .3

            .name
                background-color: rgb(250, 250, 250,1)



</style>