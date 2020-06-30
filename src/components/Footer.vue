<template>
    <div class="footer">
        <div class="footer-information">
            <span style="font-weight: bold">© VENTUS R . Dłużewski i J. Michalak Sp. j.</span>
            <span>ul.Żelazna 7a</span>
            <span style="padding-bottom: 10px">97-300 Piotrków Trybunalski</span>
            <span style="padding-bottom: 10px">NIP <span style="font-weight: bold">771-26-75-241</span></span>
            <span>PEKAO SA I O/PIOTRKÓW TRYBUNALSKI</span>
            <span>75 1240 3116 1111 0010 0950 4441</span>
        </div>
        <div class="footer-my-contact">
            Projekt i wykonanie strony: pieralukasz@gmail.com
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="sass">
    .footer
        width: 100%
        height: 300px
        background-color: black
        display: flex
        flex-wrap: wrap
        justify-content: left
        align-items: center
        font-family: 'Oxygen', sans-serif
        position: relative
        .footer-information
            width: 100%
            height: 90%
            display: flex
            justify-content: center
            flex-direction: column
            align-items: center
            color: white
        .footer-my-contact
            font-size: .8rem
            color: white
            width: 100%
            text-align: center

        .ventus-copyright
            position: absolute
            bottom: 3%
            left: 2%
            font-size: .8rem
            color: white
</style>