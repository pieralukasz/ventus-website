
<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for ="(item, index) in realizationList" :key="index">
            <SwiperItem :item="item"></SwiperItem>
            <div class="white-rectangle">
                <span>{{item.name}}</span>
            </div>
        </swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import realizationList from "../assets/realization";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import SwiperItem from "./SwiperItem";

    console.log(realizationList)
    export default {
        name: 'RealizationSwiper',
        components: {
            SwiperItem,
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                realizationList,
                pagination: {
                    el: '.swiper-pagination'
                },
                swiperOption: {
                    spaceBetween: 10,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    breakpoints: {
                        1100: {
                            slidesPerView: 3
                        },
                        800: {
                            slidesPerView: 2
                        },
                        700: {
                            slidesPerView: 1
                        }

                    },

                }
            }
        }
    }
</script>

<style lang="sass" scoped>


    .left-icon
        position: absolute
        font-size: 2rem
        left: 40%
        bottom: -20%

    .swiper-slide
        width: 100vw
        display: flex
        justify-content: center
        align-items: center
        position: relative




        img
            width: 90%
            height: 100%
            border-radius: 10px
            cursor: pointer
            opacity: .7
            transition: .3s
            border: 3px solid white



        .white-rectangle
            position: absolute
            background-color: #fff
            width: 90.3%
            height: 13%
            left: 50%
            transform: translateX(-50%)
            bottom: 3%

            cursor: pointer
            opacity: .6
            font-family: 'Oxygen', sans-serif
            display: flex
            justify-content: center
            align-items: center
            text-align: center
            text-transform: uppercase
            transition: .3s
            padding: 10px
            letter-spacing: 1px
            span
                width: 90%

            @media (max-width: 600px)
                font-size: .8rem



        &:hover
            img
                opacity: 1
            .white-rectangle
                opacity: 1
</style>