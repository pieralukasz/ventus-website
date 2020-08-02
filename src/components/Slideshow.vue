<template>
    <div class="slider">
        <agile class="slideshow-slider" :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade pause-on-hover pause-on-dots-hover autoplay>
            <img class ="slide" src="https://www.build-review.com/wp-content/uploads/2019/12/construction-2.jpg">
            <img class ="slide" src="https://www.build-review.com/wp-content/uploads/2020/06/home-1920-x-1080.jpg">
            <img class ="slide" src="https://www.build-review.com/wp-content/uploads/2019/03/Diebel-and-Company-Architects-3.jpg">
        </agile>
    </div>
</template>

<script>
    import '../assets/slide1.jpg'
    export default {
        name: "Slideshow"
    }
</script>

<style lang="sass">

    .slider
        width: 100%
        height: 70vh
        margin-top: 110px

        @media (max-width: 600px)
            margin-top: 60px
        z-index: -100

        img
            height: 70vh

            width: 100%

    // VueAgile styles
    .agile
        &__dots
            bottom: 10px
            padding: 10px
            transform: translateX(50%)
            right: 50%
            position: absolute
        &__dot
            margin: 5px 0

            button
                background-color: #fff
                border: 1px solid #fff
                cursor: pointer
                display: block
                height: 10px
                font-size: 0
                line-height: 0
                margin: 5px
                border-radius: 50%
                padding: 0
                transition-duration: .3s
                width: 10px

            &--current,
            &:hover
                button
                    background-color: #3831db
                    border: 1px solid #3831db

    // Slides styles
    .slide
        display: block
        height: 500px
        object-fit: cover
        width: 100%
</style>