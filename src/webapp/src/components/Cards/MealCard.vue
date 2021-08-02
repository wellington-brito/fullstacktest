<template>
<div>
	<div class="max-w-3xl w-full mx-auto z-10">
			<!-- defualt theme -->
			<div class="max-w-3xl w-full mx-auto z-10" v-if="!$store.getters.mealsEnd">
				<div class="flex flex-col" v-for="meal of $store.getters.getList" :key="meal.id">
					<div class="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
						<div class="flex-none sm:flex">
							<div class=" relative h-32 w-32   sm:mb-0 mb-3">
								<img :src="meal.strMealThumb" alt="aji" class=" w-32 h-32 object-cover rounded-2xl">
							</div>
							<div class="flex-auto sm:ml-5 justify-evenly">
								<div class="flex items-center justify-between sm:mt-2">
									<div class="flex items-center">
										<div class="flex flex-col">
											<div class="w-full flex-none text-lg text-gray-800 font-bold leading-none text-left">{{meal.strMeal}}</div>
											<div class="flex-auto text-gray-500 my-1">
												<span class="mr-3 ">{{meal.strCategory}}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="flex flex-row items-center">
									<div class="flex">
											 <p class="text-justify" style="display: block; width: 300px;
												overflow: hidden;
												white-space: nowrap;
												text-overflow: ellipsis;">{{meal.strInstructions}}</p> 
									</div>
									</div>
									<div class="flex pt-2  text-sm text-gray-500">
										<div class="flex-1 inline-flex items-center">										
											<p class="text-justify">{{meal.strArea}}</p>
										</div>
										<div class="flex-1 inline-flex items-center">
											<button @click="showInstructions(meal.strInstructions)" class="flex-no-shrink bg-yellow-400 hover:bg-yellow-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-yellow-300 hover:border-yellow-500 text-white rounded-full transition ease-in duration-300">Instructions</button>
									
										</div>									
										<button @click="saveDB(meal)" class="flex-no-shrink bg-yellow-400 hover:bg-yellow-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-yellow-300 hover:border-yellow-500 text-white rounded-full transition ease-in duration-300">SAVE</button>
								
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>
	</div>
</div>
</template>

<script>
import Swal from 'sweetalert2';
import {mapActions} from "vuex";

export default {
  name: 'MealCard',
  props: {
    msg: String
  },

methods: {
	    ...mapActions(["save"]),
	showInstructions(instructions){
		Swal.fire({
			title: 'Instructions',
			text: instructions,				
			confirmButtonText: 'VOLTAR'
		});
	},
	saveDB(meal){
		
		this.save(meal).then( async resp => {
			let respData = await resp;
			Swal.fire({
			title: respData.status == 200 ? 'Saved' : 'Erro on save. Try again',								
			text: respData.data.strMeal+" has saved with succes on backend.",
			icon: respData.status == 200 ? 'success' : error,								
			confirmButtonText: 'VOLTAR'
		});
			
		
		});
		
	}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
