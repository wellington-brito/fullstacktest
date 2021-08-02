<template>
 <div>
    <div class="min-w-screen flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden  min-w-80 max-w-3xl" x-data="app()" x-init="generatePassword()">
                <div class="flex relative mt-1">
                    <input type="text" id="password" v-model="search"
                        class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Search...">
                    <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"></button>
                    <button @click="mealsDbApi()" class="flex-no-shrink bg-yellow-400 hover:bg-yellow-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-yellow-300 hover:border-yellow-500 text-white rounded-full transition ease-in duration-300">mealsDbApi</button>
                  	<button @click="mealsDb()" class="flex-no-shrink bg-yellow-400 hover:bg-yellow-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-yellow-300 hover:border-yellow-500 text-white rounded-full transition ease-in duration-300">mealsDb</button>
                </div>
                <div class="absolute top-0 left-0 w-full h-2 flex">
                    <div class="h-2 bg-yellow-500 flex-1"></div>
                </div>                
                <div class="absolute mt-3 left-0 w-full h-1 flex">                  	
                </div>
            </div>
    </div>
 </div>
</template>

<script>
import {mapMutations, mapActions} from "vuex";

export default {
  name: 'InputSearch',
  props: {
    msg: String
  },
  data(){
      return {
          search: '',
      }
  },  
  updated() {
    if (this.search) {
      this.filter(this.search);
    } else {
      this.filterMeal([]);
    }
  },
  methods: {
    ...mapActions(["filter"]),
    ...mapMutations(["filterMeal"]),
    ...mapActions(["listFromApi"]),
    ...mapActions(["listFromBackEnd"]),
    mealsDbApi(){
      this.$store.dispatch('listFromApi');
    },
    mealsDb(){
      this.$store.dispatch('listFromBackEnd', 0);
      // this.listFromBackEnd(0).then( async resp => {
      //   console.log(await resp);
      // });      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
.min-w-80 {
        min-width: 20rem;
    }
    .resize::-webkit-resizer,
    .resize-x::-webkit-resizer,
    .resize-y::-webkit-resizer {
        background-color: transparent;
    }
    .resize:after,
    .resize-x:after,
    .resize-y:after {
        display: block;
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 24px;
        height: 24px;
        content: '\F045D';
        font: normal normal normal 24px/1 "Material Design Icons";
        font-size: 24px;
        text-rendering: auto;
        line-height: 24px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: rgba(0,0,0,0.3);
    }
</style>
