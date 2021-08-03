<template>
 <div>   
    <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-gray-50 rounded shadow-sm">           
         <div class="container">   
            <div class="">      
              <input type="text" id="password" v-model="search"
                class="text-gray-500 w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Search...">        
            </div>         
            <div class="mt-3">      
              <button @click="mealsDbApi()" class="flex-no-shrink bg-yellow-400 hover:bg-yellow-500 mb-3 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider  hover:border-yellow-400 text-white rounded-full transition ease-in duration-300">TheMealsDbApi</button>
              <button @click="mealsDb()" class="flex-no-shrink bg-gradient-to-r bg-blue-400 from-blue-400 to-blue-700 hover:from-pink-500 hover:to-yellow-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider  hover:border-yellow-500 text-white rounded-full transition ease-in duration-300">SavedMeals</button>        
            </div>
         </div>       
    </div>
 </div>
</template>

<script>
import Swal from 'sweetalert2';
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
      //this.$store.dispatch('listFromBackEnd', 0);
       this.listFromBackEnd(0).then( async resp => {         
        let respData = await resp;
				console.log(resp.data);
        if(!resp.data)
				Swal.fire({
					title: respData.status == "Status code: "+respData.status,								
					text: respData.data,
					icon: respData.status == 200 ? 'success' : error,								
					confirmButtonText: 'OK'
				});		
       });      
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
