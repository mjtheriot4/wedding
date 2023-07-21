<template>
    <div id="statusBar">
        <span v-for="(l, i) in list.length" :key="i" :class="{loaded : i < loaded && objects[i] !== false}"></span>
    </div>
</template>

<script>
export default {
    name: 'Status Bar',
    props: ['list', 'loaded', 'objects'],
}
</script>
<style lang="scss">
#statusBar{
    grid-area: title;
    background-color: cornflowerblue;
    height: 30px;
    display: flex;
    align-self: center;
    span{
        flex: 1 1 auto;
        display: block;
        border-left: 1px solid seagreen;
    }
    .loaded{
        background-color: seagreen;
    }
}
</style>