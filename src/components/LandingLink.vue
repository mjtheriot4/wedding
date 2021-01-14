<template>
    <router-link :to='{name: "Category", params: {catName:cat}}'>
        <img 
            :srcset="getSrcSet(category.landingPhoto)" 
            :sizes="width+'px'" 
            :src="require('@/assets/'+category.landingPhoto+'-3x.webp')" 
            :alt="alt">
        <h2>{{category.name}}</h2>
    </router-link>
</template>

<script>
import photoList from "@/photo-list.js";
export default {
    name: 'landing-link',
    props: ['alt','cat','width'],
    computed:{
        category: function(){
            return photoList[this.cat];
        }
    },
    methods:{
        getSrcSet(path){
            console.log(path);
            var str =  require('@/assets/'+path+'-1x.webp')+' 360w, ';
                str += require('@/assets/'+path+'-2x.webp')+' 720w, ';
                str += require('@/assets/'+path+'-3x.webp')+' 1080w, ';
                str += require('@/assets/'+path+'-4x.webp')+' 1440w, ';
                str += require('@/assets/'+path+'-7x.webp')+' 2520w';
            return str;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a{
    display:block;
    position: relative;
    color: white;
    text-decoration: none;
    z-index: 0;
    transition: transform .3s;
    box-shadow: 0 0 5px 0px rgba(0,0,0,.5);
    &::before{
        content: '';
        z-index: 1;
        width: 100%; height: 100%;
        position: absolute;
        top: 0; left: 0;
        background-color: black;
        opacity: 0;
        transition: opacity .3;
    }
    &:hover{
        transform: scale3d(1.1,1.1,1.1);
        z-index: 2;
        &::before{
            opacity: .5;
        }
        h2{
            opacity: 1;
        }
    }

}
h2{
    position: absolute;
    top: 50%; left: 0;
    width: 100%; 
    transform: translateY(-50%);
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    z-index: 2;
    line-height: 1; 
    margin: 0;
    opacity:0;
    transition: opacity .3s;
    word-wrap:break-word;
}
</style>
