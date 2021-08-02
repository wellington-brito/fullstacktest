<template>
    <div> 
        <div class="w-full flex items-center justify-center mt-5">
            <div class="md:w-2/5 w-full px-4 text-white flex flex-col">
                <div class="flex flex-col">
                    <div class="flex mt-24 mb-12 flex-row justify-between">                
                        <div class="flex">
                            <button @click="$store.dispatch('listFromBackEnd', 0)" class="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                                Home
                            </button>
                            <button @click="previousPage()" class="flex-no-shrink bg-yellow-400 hover:bg-yellow-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-yellow-300 hover:border-yellow-500 text-white rounded-full transition ease-in duration-300">
                                <div class="flex">                           
                                    <svg class="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
                                        <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
                                    </svg>
                                    Previous page
                                </div>
                            </button>
                            <button @click="nextPage()" class="flex-no-shrink bg-yellow-400 hover:bg-yellow-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-yellow-300 hover:border-yellow-500 text-white rounded-full transition ease-in duration-300">
                                <div class="flex">
                                    Next page
                                    <svg class="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
                                    <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
                                        l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
                                        c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"/>    
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ButtonsPaginate',
  props: {
    msg: String
  },

  methods:{
      ...mapActions(['incrementPage']),
      ...mapActions(['decreasePage']),
      ...mapActions(['listFromBackEnd']),

      previousPage(){
        
         if(this.$store.getters.page < 0){
            this.$store.dispatch('reSetPage');
        }
        this.decreasePage(1);    
        this.listFromBackEnd(this.$store.getters.page);        
      },
      nextPage(){
        if(this.$store.getters.page < 0){
            this.$store.dispatch('reSetPage');
        }
        this.incrementPage(1);   
        this.listFromBackEnd(this.$store.getters.page);        
      },      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
