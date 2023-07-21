<template>
    <main id="category">
        <div id="cover">
            <img :src="'https://micahandmary.com/assets/' + category.coverPhoto" :alt="category.name">
            <div class="subCategories" v-if="category.hasSubCategories">
                <h3>choose your categories:</h3>
                <button v-for="subcat in subCats" :key="subcat.name" @click="flipSubActive(subcat)" :class="{'active':subcat.active}">{{subcat.name}}</button>
            </div>
            <h1>{{category.name}}</h1>
            <router-link to='/'>&lt; BACK</router-link>
            <div class="number">
                <span>{{Number(currentPhoto)+1}}</span><br>
                <span><span>of</span>{{imageList.length}}</span>
            </div>
        </div>
        <gallery v-if="imageList.length > 0" :list="imageList" :current="currentPhoto" @updatePhoto="handlePhotoUpdate" @photoClicked="lightboxOpen = true"></gallery>
        <h4 v-else>Please Select a Category</h4>
        <lightbox v-if="lightboxOpen" :list="imageList" :current="currentPhoto" @closeLightbox="lightboxOpen = false"></lightbox>
        <!-- <div class="test"></div> -->
    </main>
</template>

<script>
    // @ is an alias to /src
    import photoList from "@/photo-list.js";
    import gallery from "@/components/Gallery.vue";
    import lightbox from "@/components/Lightbox.vue";

    export default {
        name: 'Category',
        components: {gallery,lightbox},
        computed: {
            category(){
                return photoList[this.$route.params.catName];
            },
            imageList: function(){
                var arr = [];
                if(this.category.hasSubCategories){
                    this.subCats = this.category.list;
                    this.subCats.forEach(subcat => {
                        if(subcat.active){
                            for (var i=0; i<subcat.total; i++){
                                arr.push(subcat.baseFileName+i);
                            }
                        }
                    });
                }else{
                    for (var i=0; i<this.category.list.total; i++){
                        arr.push(this.category.list.baseFileName+i);
                    }
                }
                return arr;
            }
        },
        data(){
            return {
                currentPhoto: 0,
                lightboxOpen: false,
                subCats:null
            }
        },
        methods:{
            handlePhotoUpdate(i){
                this.currentPhoto = i;
            },
            flipSubActive(sub){
                console.log('clicked');
                sub.active = !sub.active;
            }
        }
    };
</script>
<style lang="scss">
    #category {
        width: 100vw;
        height: 100vh;
        display:grid;
        grid-template-columns: 30% 70%;
        >h4{
            align-self: center;
        }
    }
    #cover{
        grid-area: 1/1/2/2;
        position: relative;
        z-index: 0;
        &::after{
            content: '';
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-color: rgba(0,0,0,.75);
        }
        >a{
            position: absolute;
            top: 30px;
            left: 30px;
            background-color: maroon;
            padding: 10px;
            display:block;
            color: white;
            font-weight: bold;
            line-height: 1;
            text-decoration: none;
            z-index: 3;
            transition: transform .3s;
            &:hover{
                transform: scale3d(1.1,1.1,1.1);
            }
        }
        img{
            display:block;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        h1{
            margin: 0;
            font-weight: 900;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 300px;
            width: 300px;
            background-color: rgba(maroon,.5);
            position: absolute;
            top: 50%; transform: translateY(-50%);
            right: -80px;
            z-index: 2;
            text-transform: uppercase;
        }
        .number{
            position: absolute;
            top: 50%; right: 5px;
            transform: translateY(155px);
            z-index: 3;
            background-color: maroon;
            color: white;
            padding: 10px;
            font-weight: bold;
            line-height: 1;
            font-size: 1.5em;
            text-align: right;
            margin-bottom: 10px;
            span>span{
                font-size:.5em;
                padding-right: 2px;
            }
        }
        .subCategories{
            position: absolute;
            top: 75px;
            left: 0;
            width: 100%;
            display:flex;
            flex-wrap: wrap;
            align-items:center;
            z-index: 3;
            padding: 0 20px;
            button{
                flex: 1 1 10%;
            }
            h3{
                text-align: center;
                flex: 1 0 100%;
                color: white;
                line-height: 1;
            }
        }
    }
    button{
        border: none;
        background-color: maroon;
        color: white;
        padding: 20px;
        line-height: 1;
        cursor: pointer;
        transition: transform .3s;
        opacity:.75;
        &.active{
            opacity:1;
        }
        &:hover{
            transform: scale3d(1.1,1.1,1.1);
        }
    }
    .test{
        display:block;
        position: fixed;
        top: 30px; right: 110px;
        width: calc(70vw - 220px);
        opacity: 0.5;
        height: 70%;
        background-color: green;
    }
</style>
