<template>
    <div id="lightbox">
        <button class="close" @click="$emit('closeLightbox')">x</button>
        <img 
            :srcset="getSrcSet(list[listIndex])" 
            :src="'/assets/'+list[listIndex]+'-3x.webp'" 
            sizes="calc(100vh - 160px)"
            alt="photo">
        <p>{{Number(listIndex)+1}} of {{list.length}}</p>
        <button class="prev" @click="listIndex>0 ? listIndex-- : ''">&lt;</button>
        <button class="next" @click="listIndex<(Number(list.length)-1) ? listIndex++ : ''">&gt;</button>
    </div>
</template>

<script>
export default {
    name: 'lightbox',
    props: ['list','current'],
    data(){
        return{
            listIndex: this.current, 
        }
    },
    methods:{
         getSrcSet(path){
            console.log(path);
            var str =  '/assets/'+path+'-1x.webp 360w, ';
                str += '/assets/'+path+'-2x.webp 720w, ';
                str += '/assets/'+path+'-3x.webp 1080w, ';
                str += '/assets/'+path+'-4x.webp 1440w, ';
                str += '/assets/'+path+'-7x.webp 2520w';
            return str;
        }
    }
}
</script>

<style lang="scss" scoped>
#lightbox{
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(black,.75);
    display: grid;
    grid-template-columns: 80px 1fr 80px;
    grid-template-rows: 80px 1fr 80px;
    grid-template-areas: 
        "close main   ."
        "left  main   right"
        ".     bottom .";
}
p{
    grid-area: bottom;
    font-size: .5em;
    font-weight: bold;
    line-height: 1;
    text-align: center;
    color:white;
}
button{
    grid-area: right;
    align-self: center;
    justify-self: center;
    border: none;
    background-color: maroon;
    color: white;
    padding: 20px;
    line-height: 1;
    cursor: pointer;
    transition: transform .3s;
    &:hover{
        transform: scale3d(1.1,1.1,1.1);
    }
}
.prev{
    grid-area: left;
}
.close{
    grid-area: close;
    align-self: ceter;
    justify-self: ceter;
}
img{
    grid-area: main;
    width: 100%;
    height: 100%;
    padding:20px 0;
    object-fit: contain;
}

</style>