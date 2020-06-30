<template>
    <div class="offer">
        <div class="title">
            Nasze usługi
        </div>
        <div class="information">
            Obecnie Ventus to nie tylko firma kojarzona z wykonawstwem instalacji, ale również ceniony wykonawca w branży ogólnobudowlanej i wykończenia wnętrz.
        </div>
        <div class="container-for-offer" v-if="!activeOffer.active">
            <OfferItem v-for="(off, index) in offer" :key="index" :name="off" :makeActive = "makeActive" ></OfferItem>
        </div>
        <div class="container-for-offer" v-else>
            <Item :name = activeOffer.activeComponent :makeNormal = "makeNormal"></Item>
        </div>
    </div>
</template>

<script>
    import OfferItem from "./OfferItem";
    import Item from './Item.vue'
    import offer from "../assets/offer";
    export default {
        name: "Offer.vue",
        components: {
            OfferItem,
            Item
        },
        data(){
            return{
                offer,
                activeOffer: {
                    active: false,
                    activeComponent: null
                }
            }
        },
        methods: {
            makeActive(item){
                console.log(item)
                this.activeOffer.active = true
                this.activeOffer.activeComponent = item
                console.log(this.activeOffer.activeComponent)
            },
            makeNormal() {
                this.activeOffer.active = false
                this.activeOffer.activeComponent = null
            }
        }
    }
</script>

<style lang="sass">
    .offer
        width: 100%
        /*background-color: #fff*/
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: center
        padding: 3%

        .title
            padding-top: 2%
            width: 100%
            text-align: center
            font-family: 'Oxygen', sans-serif
            font-size: 2rem
            color: black
            text-transform: uppercase
            letter-spacing: 2px
            font-weight: bold

        .information
             width: 80%
             text-align: center
             font-size: 1.2rem
             display: flex
             justify-content: center
             align-items: center
             color: #372c3c
             @media (max-width: 600px)
                 font-size: 0.6rem
             font-family: 'Oxygen', sans-serif

        .ventus
             font-weight: bold

        .container-for-offer
            /*padding-top: 5%*/
            width: 100%
            height: 80%
            display: flex
            justify-content: center
            flex-wrap: wrap

            @media (max-width: 600px)
                flex-direction: column
                align-items: center




</style>