<template>
    <div class="information" >
        <div class="title">
<!--            <div class="title-up">Ventus s.c. Budownictwo, instalacje, automatyka przemysłowa. Michalak J., Dłużewski R.</div>-->
            <div class="first-information">
                <span>
                    Firma budowlana <span class="ventus">Ventus</span> istnieje od 2005 roku.
                    Posiadamy profesjonalny zespół projektantów i architektów, gotowych stworzyć
                    projekt oraz zająć się jego kompleksową realizacją. Chcesz nas poznać lepiej? <span class="ventus" style="cursor: pointer">Kliknij</span>
                </span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Information"
    }
</script>

<style lang="sass">

    .information
        height: calc(30vh - 110px)
        width: 100%
        /*background-color: #fff*/
        font-size: 1.5rem

        letter-spacing: 2px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center


        .first-information
            width: 100%
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

            span
                width: 90%

            .important
                color: #008bfb
                font-weight: bold


</style>