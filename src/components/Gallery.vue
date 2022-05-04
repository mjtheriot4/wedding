<template>
    <div id="gallery">
        <div class="photo">
            <img    
                :srcset="getSrcSet(list[galleryCurrent])" 
                :src="'/assets/'+list[galleryCurrent]+'-3x.webp'" 
                sizes="calc(70vw - 220px)"
                alt="photo" @click="$emit('photoClicked')">
        </div>
        <nav>
            <button class="prev" @click="galleryCurrent>0 ? galleryCurrent-- : ''">&lt;</button>
            <input type="range" name="imageNumber" id="imageSlider" :max='list.length-1' v-model="galleryCurrent">
            <button class="next" @click="galleryCurrent<(Number(list.length)-1) ? galleryCurrent++ : ''">&gt;</button>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'gallery',
    props: ['list','current'],
    watch: {
        galleryCurrent: function(newVal,old){
            this.$emit('updatePhoto',newVal);
        }
    },
    data(){
        return{
            galleryCurrent: this.current,
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
#gallery{
    grid-area: 1/2/2/3; 
    display: grid;
    grid-template-columns: 80px 120px 1fr 80px;
    grid-template-rows: 150px 1fr 80px 80px;
    grid-template-areas: 
        "number number .      ."
        "left   main   main   right"
        ".      title  title  ."
        ".      bottom bottom .";
}

.title{
    grid-area: title;
    font-style: italic;
    text-transform: capitalize;
    text-align: center;
}
.photo{
    grid-area: main;
    padding: 0 30px;
    max-height: calc(100vh - 310px);
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        cursor: pointer;
        transition: transform .3s;
        &:hover{
            transform: scale3d(1.05,1.05,1.05);
        }
    }
}
nav{
    grid-area: bottom;
    display: flex;
    padding: 15px 0;
    button{
        flex: 0 0 50px;
    }
    input{
        margin: 0 15px;
        flex: 1 0 auto;
    }
}

</style>