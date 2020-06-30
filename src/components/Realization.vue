<template>
    <div class="realization">
        <div class="title-realization">Nasze realizacje</div>
        <div class="background-swiper"></div>
        <RealizationSwiper/>
    </div>
</template>

<script>
    import RealizationSwiper from "./RealizationSwiper";

    export default {
        name: 'Realization',
        components: {
            RealizationSwiper
        }
    }
</script>
<style lang="sass">

    .realization
        position: relative
        width: 100%
        margin-top: 150px
        height: 60vh
        display: flex
        justify-content: center
        align-items: center
        background-color: rgb(245, 245, 245, 1)

        .background-swiper
            height: 100%
            background-color: rgb(245, 245, 245, 1)
            z-index: 1


        .title-realization
            position: absolute
            left: 50%
            transform: translateX(-50%)
            background-color: rgb(245, 245, 245, 1)
            top: -20%
            width: 100%
            text-align: center
            height: 120px
            font-size: 2rem
            text-transform: uppercase
            z-index: 2
            font-family: 'Oxygen', sans-serif
            letter-spacing: 2px
            font-weight: bold
            line-height: 120px



            @media (max-width: 700px)
                font-size: 1.1rem
                top: -10%

</style>