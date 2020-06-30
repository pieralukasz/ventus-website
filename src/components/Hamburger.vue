<template>
    <div class="hamburger">
            <div class="container-for-hamburger">
                <div v-for="(item, index) in navItem" :key="index" class="hamburger-item">
                    {{ item }}
                </div>
                <i class="material-icons" @click="hideMenu" >clear</i>
<!--                <img src="../assets/ventus.png">-->
            </div>
    </div>
</template>

<script>
    import '../assets/ventus.png'
    export default {
        name: "Hamburger",
        props: ['navItem', 'hamburger', 'hideMenu'],

    }
</script>

<style lang="sass">

    .hamburger
        position: fixed
        left: 0
        top: 0
        height: 100vh
        width: 400px

        @media (max-width: 400px)
            width: 100%

        z-index: 10


        .container-for-hamburger

            width: 100%
            height: 100%
            display: flex
            flex-direction: column
            justify-content: left
            align-items: center
            background-color: #fff
            z-index: 20
            position: relative

            background-color: rgba(255, 255, 255)

            i
                position: absolute
                left: 5.5%
                top: 5%
                font-size: 1.8rem
                cursor: pointer
                transition: .5s

                @media (max-width: 600px)
                    top: 2%

                &:hover
                    transform: rotate(180deg)
                    color: grey

            .hamburger-item
                width: 87%
                font-family: 'Montserrat', sans-serif
                font-size: 1.0625rem
                letter-spacing: .7px
                text-transform: uppercase
                /*text-align: center*/
                padding: 20px
                margin: 5px
                cursor: pointer
                transition: .3s
                /*box-shadow: 0 2px 6px rgba(136,136,136,.26)*/


                &:first-child
                    margin-top: 20%



                &:hover
                    background-color: #bac8db
                    border-right: 5px


            img
                position: absolute
                bottom: 20%
                width: 60%




</style>