<template>
    <div class="element">
        <div class="title-element">{{name.name}}
            <i class="material-icons" @click="makeNormal">clear</i></div>
        <div class="container-list">
            <div class="list-item" v-for="(item, index) in name.item" :key="item.itemName">
                <div class="item-name">{{index + 1}}. {{item.itemName}}</div>
                <ul class="item-info" v-for="(info, index) in item.list" :key="index">
                    <li>{{info}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: ['name', 'makeNormal'],

    }
</script>

<style lang="sass">

    .element
        width: 100%
        font-family: 'Montserrat', sans-serif

        .title-element
            width: 100%
            text-align: center
            font-size: 1.5rem
            font-weight: bold
            color: #4e4c51
            padding: 50px
            position: relative
            text-transform: uppercase

            i
                position: absolute
                right: 5%
                top: 50%
                transform: translateY(-50%)
                cursor: pointer
                font-size: 2rem
                @media (max-width: 800px)
                    font-size: 1.6rem

        .container-list
            width: 100%
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center


            .list-item
                width: 300px
                padding: 10px

                .item-name

                    font-weight: bold
                    padding: 10px
                    margin: 5px
                    text-transform: uppercase

                .item-info
                     letter-spacing: 1px

</style>