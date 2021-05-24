<template>
    <main id="landing">
        <landing-link :cat="'prep'" :alt="'prep'" :width="230"></landing-link>
        <landing-link :cat="'portraits'" :alt="'portraits'" :width="185"></landing-link>
        <landing-link :cat="'details'" :alt="'details'" :width="210"></landing-link>
        <landing-link :cat="'before'" :alt="'before'" :width="180"></landing-link>
        <landing-link :cat="'procession'" :alt="'procession'" :width="185"></landing-link>
        <landing-link :cat="'mass'" :alt="'mass'" :width="255"></landing-link>
        <landing-link :cat="'party'" :alt="'party'" :width="185"></landing-link>
        <landing-link :cat="'reception'" :alt="'reception'" :width="260"></landing-link>
        <landing-link :cat="'end'" :alt="'end'" :width="185"></landing-link>
    </main>
</template>

<script>
    // @ is an alias to /src
    
    import landingLink from "@/components/LandingLink.vue"
    export default {
        name: 'Landing',
        components: {landingLink}
    }
</script>
<style lang="scss">
    @mixin cover(){
        align-self: stretch;
        justify-self: stretch;
        img{
            width:100%;
            height: 100%;
            object-fit: cover;
        }
    }
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    #landing {
        width: 100%;
        max-width: 107vh;
        margin: auto;
        min-height: 100vh;
        display: grid;
        grid-template-columns: 15px .65fr .2fr .9fr .33fr 0.535fr .33fr .66fr .2fr 15px;
        grid-template-rows: 15px auto min-content auto 15px;
        gap: 5px;
        >:first-child{
            grid-area: 2 / 3 / 3 / 5;
            align-self:end;
            justify-self:end
        }
        >:nth-child(2){
            grid-area: 2 / 5 / 3 / 7;
            align-self: end;
        }
        >:nth-child(3){
            grid-area: 2 / 7 / 3 / 9;
            align-self: end;
        }
        >:nth-child(4){
            grid-area: 3 / 2 / 5 / 4;
            align-self: start;
        }
        >:nth-child(5){
            grid-area: 3 / 4 / 4 / 5;
            @media(min-width:750px){
            @include cover();
            }
        }
        >:nth-child(6){
            grid-area: 3 / 5 / 4 / 8;
        }
        >:nth-child(7){
            grid-area: 3 / 8 / 5 / 10;
            align-self: start;
        }
        >:nth-child(8){
            grid-area: 4 / 4 / 5 / 6;
            align-self: start;
        }
        >:nth-child(9){
            grid-area: 4 / 6 / 5 / 8;
            align-self: start;
        }
        .bounding-box{
            grid-area: 2 / 2 / -2 / -2!important;
            border: 1px solid black;
        }
        @media(max-width:750px){
            min-height: auto;
            min-height: 100vh;
            grid-template-columns: 15px 2fr 1fr 1fr 1fr 1fr 2fr 15px;
            grid-template-rows: 5vw 26vw 12vw 26vw 26vw 5vw;
            >:first-child{
                @include cover();
                grid-area: 2 / 2 / 3 / 4;
            }
            >:nth-child(2){
                @include cover();
                grid-area: 2 / 4 / 4 / 6;
                align-self: stretch;
            }
            >:nth-child(4){
                grid-area: 2 / 6 / 4 / 8;
                @include cover();
            }
            >:nth-child(3){
                grid-area: 3 / 2 / 5 / 4;
                @include cover();
            }
            >:nth-child(5){
                grid-area: 4 / 4 / 5 / 7;
                @include cover();
            }
            >:nth-child(9){
                grid-area: 4 / 7 / 5 / 8;
                @include cover();
            }
            >:nth-child(7){
                grid-area: 5 / 2 / 6 / 3;
                @include cover();
            }
            >:nth-child(8){
                @include cover();
                grid-area: 5 / 3 / 6 / 6;
            }
            >:nth-child(6){
                grid-area: 5 / 6 / 6 / 8;
                @include cover();
            }
            .bounding-box{
                grid-area: 2 / 2 / -2 / -2!important;
                border: 1px solid black;
            }
        }
    }
    img {
        display: block;
        width: 100%;

    }
</style>
