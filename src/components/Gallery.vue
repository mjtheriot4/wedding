<template>
    <div id="gallery">
        <div class="photo" ref="photoSpace">
            <h2 v-if="currentImage == undefined">Loading...</h2>
            <h2 v-else-if="currentImage == false">Missing!</h2>
            <img v-else :src="currentImage" alt="photo" @click="$emit('photoClicked')">
        </div>
        <nav>
            <button class="prev" @click="current>0 ? current-- : ''">&lt;</button>
            <input type="range" name="imageNumber" id="imageSlider" :max='list.length-1' v-model="current">
            <button class="next" @click="current<(Number(list.length)-1) ? current++ : ''">&gt;</button>
        </nav>
        <StatusBar :list="list" :objects="urlObjects" :loaded="lastLoaded" />
    </div>
</template>

<script>
import StatusBar from '@/components/StatusBar.vue';
export default {
    name: 'gallery',
    props: ['list','current'],
    components: {StatusBar},
    watch: {
        current: function(newVal,old){
            this.$emit('updatePhoto',newVal);
        }
    },
    data(){
        return{
            lastLoaded: 0,
            urlObjects: []
        }
    },
    computed:{
        currentImage(){
            if(this.urlObjects.length == 0){
                return 'https://micahandmary.com/assets/'+this.list[this.current]+'-1x.webp';
            }
            console.log(this.current);
            return this.urlObjects[this.current];
        } ,
        photoSize(){
            let width = this.$refs['photoSpace'].clientWidth;
            if(width <= 360){  return '-1x'}
            if(width <= 720){  return '-2x'}
            if(width <= 1080){ return '-3x'}
            if(width <= 1440){ return '-4x'}
            return '-7x';
        }
    },
    methods:{
        getSrcSet(path){
            console.log(path);
            var str =  'https://micahandmary.com/assets/'+path+'-1x.webp 360w, ';
                str += 'https://micahandmary.com/assets/'+path+'-2x.webp 720w, ';
                str += 'https://micahandmary.com/assets/'+path+'-3x.webp 1080w, ';
                str += 'https://micahandmary.com/assets/'+path+'-4x.webp 1440w, ';
                str += 'https://micahandmary.com/assets/'+path+'-7x.webp 2520w';
            return str;
        },
        fetchImages(){
            if(this.lastLoaded >= this.list.length){return}
            fetch(`https://micahandmary.com/assets/${this.list[this.lastLoaded]+this.photoSize}.webp`)
            .then(r => {
                if (!r.ok) { throw new Error(r); }
                return r.blob();
            })
            .then(b => {
                this.urlObjects.push(URL.createObjectURL(b));
                this.lastLoaded++;
                this.fetchImages();
            })
            .catch(e => {
                console.log(e);
                this.urlObjects.push(false);
                this.lastLoaded++;
                this.fetchImages();
            });
        }
    },
    mounted(){
        this.fetchImages()
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