<template>
    <div class="navigation">
        <nav ref="navigation">
            <div class="logo item" ref="logo">
                <img src="../assets/ventus.png">
            </div>
            <ul>
                <li v-for="(item, index) in navItem" :key="index" ref="item-nav">
                    {{ item }}
                </li>
            </ul>
            <i class="material-icons" @click="showMenu">menu</i>
            <div class="hamburger-logo" ref="hamburger-logo">
                <img src="../assets/ventus.png">
            </div>
        </nav>

        <transition name="fade">
            <Hamburger :navItem = navItem :hamburger = hamburger :hideMenu="hideMenu" v-show="hamburger" />
        </transition>
        <transition name="fade">
            <div class="background-for-hamburger" @click="hideMenu" v-show="hamburger"></div>
        </transition>
    </div>
</template>

<script>
    import '../assets/ventus.png'

    import Hamburger from './Hamburger'
    export default {
        name: 'Navigation',
        data(){
            return{
                hamburger: false,
                navItem: ['O nas', 'Oferta', 'Realizacje', 'Współpraca', 'Referencje', 'Kontakt']
            }
        },
        components:{
          Hamburger
        },
        created() {
            window.addEventListener('scroll', this.makeTransparent)
            window.addEventListener('resize', this.makeLogo)
        },
        methods: {
            showMenu(){
                this.hamburger = true
            },
            hideMenu(){
                this.hamburger = false
            },
            makeTransparent(){

                if(window.pageYOffset > 150) {
                    this.$refs['navigation'].style.backgroundColor = "rgb(255, 255, 255, .3)"
                    this.$refs['navigation'].style.color = "#000"
                    this.$refs['navigation'].style.fontWeight = 'bold'
                    this.$refs['logo'].style.left = "-100%"
                    this.$refs['hamburger-logo'].style.right = '-100%'
                } else {
                    this.$refs['navigation'].style.backgroundColor = '#fff'
                    this.$refs['navigation'].style.fontWeight = 'normal'
                    this.$refs['navigation'].style.color = "#000"
                    if(window.innerWidth < 974) {
                        this.$refs['logo'].style.left = "-100%"
                        this.$refs['hamburger-logo'].style.right = '5%'
                    } else {
                        this.$refs['logo'].style.left = "5%"
                        this.$refs['hamburger-logo'].style.right = '-100%'
                    }
                }
            },
            makeLogo(){
                if(window.pageYOffset < 150){
                    if(window.innerWidth < 974) {
                        this.$refs['logo'].style.left = "-100%"
                        this.$refs['hamburger-logo'].style.right = '5%'
                    } else {
                        this.$refs['logo'].style.left = "5%"
                        this.$refs['hamburger-logo'].style.right = '-100%'
                    }
                }

            }
        }
    }
</script>

<style lang="sass">

    .fade-enter-active, .fade-leave-active
        transition: opacity .3s ease-out

    .fade-enter, .fade-leave-to
        opacity: 0



    .navigation
        position: fixed
        left: 0
        top: 0
        width: 100%
        height: 110px
        z-index: 100

        @media (max-width: 600px)
            height: 60px


        .background-for-hamburger
            position: fixed
            top: -110px
            width: 100%
            height: calc(100vh + 110px)
            z-index: 8
            background-color: rgb(60, 60, 60, 0.2)



        nav
            width: 100%
            height: 100%
            position: relative
            background-color: #fff
            transition: .3s

            .hamburger-logo
                position: absolute
                right: -100%
                top: 50%
                transform: translateY(-50%)
                height: 100%
                display: flex
                justify-content: center
                align-items: center
                transition: .3s

                @media (max-width: 974px)
                    right: 5%

                img

                    height: 80%


            i
                position: absolute
                left: -100%
                top: 50%
                transform: translateY(-50%)
                font-size: 2rem
                cursor: pointer

                &:hover
                    color: black

                @media (max-width: 974px)
                    left: 5%



            .logo
                position: absolute
                left: 5%
                top: 50%
                transform: translateY(-50%)
                transform-origin: bottom
                height: 100%
                display: flex
                justify-content: center
                align-items: center
                transition: .3s


                @media (max-width: 974px)
                    left: -100%


                img
                    height: 80%

            ul
                position: absolute
                right: 5%
                list-style-type: none
                display: flex
                justify-content: center
                align-items: center
                height: 100%
                font-family: 'Montserrat', sans-serif

                @media (max-width: 974px)
                    right: -300%


                li
                    font-size: 1rem
                    letter-spacing: 1px
                    display: flex
                    justify-content: center
                    align-items: center
                    padding: 10px
                    height: 100%
                    cursor: pointer
                    text-transform: uppercase
                    /*font-weight: bold*/
                    color: black
                    position: relative

                    &:hover
                        /*background-color: #fbf7fb*/
                        border-radius: 10px
                        height: 105px
                        color: blue

            



</style>
