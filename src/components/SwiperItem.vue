<template>
    <img :src="item.photo[1]"/>
</template>

<script>
    import realizationList from '../assets/realization'
    export default {
        name: "SwiperItem",
        props: ['item'],
        data(){
            return{
                realizationList
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>