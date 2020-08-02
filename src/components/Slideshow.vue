<template>
    <div class="slider">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide><img class ="slide" src="https://www.build-review.com/wp-content/uploads/2019/12/construction-2.jpg" alt="1"></swiper-slide>
        <swiper-slide> <img class ="slide" src="https://www.build-review.com/wp-content/uploads/2020/06/home-1920-x-1080.jpg" alt="2"></swiper-slide>
        <swiper-slide><img class ="slide" src="https://www.build-review.com/wp-content/uploads/2019/03/Diebel-and-Company-Architects-3.jpg" alt="3"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    import '../assets/slide1.jpg'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Slideshow",
        data() {
          return {
            actualSlide: 0,
            swiperOptions: {
              autoplay: {
                delay: 2500,
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,

              },
            }
          }
        },
      components: {
          Swiper,
          SwiperSlide
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.$swiper
        }
      },
      mounted() {


      }
    }
</script>

<style lang="sass">

    .slider
        width: 100%
        height: 70vh
        margin-top: 110px

        @media (max-width: 600px)
            margin-top: 60px

        img
            height: 70vh
            width: 100%


    // Slides styles
    .slide
        display: block
        height: 500px
        object-fit: cover
        width: 100%
</style>