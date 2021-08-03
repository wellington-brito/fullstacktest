<template>
	<div>

		<div v-if="!$store.getters.mealsEnd">
			<div class="col-sm-12 align-items-center p-3 my-3 text-white-50 " v-for="meal of $store.getters.getList" :key="meal.id">				
				<b-card header-tag="header" footer-tag="footer" class="no-border text-left bg-gray-50 rounded shadow-sm" border-variant="light" ><!-- {{meal.strMeal}} -->
					<div class="col-sm-12">
						<div class="row">
							<div class="col-sm-4">
								<div class="image_cover">
									<!-- <img id="image_cover" :src="meal.strMealThumb" alt="aji" class="object-cover rounded-2xl"> -->
									<img id="" :src="meal.strMealThumb" alt="aji" class="object-cover rounded-2xl">
								</div>
							</div>
							<div class="col-sm-4">
								<div class="w-full flex-none text-lg text-gray-800 font-bold leading-none text-left">
											{{meal.strMeal}}
								</div>
								<div class="flex-auto text-gray-500 my-1">
									<span class="mr-3">{{meal.strCategory}}</span>
								</div>
								<div class="flex-auto text-gray-500 my-1" >
									<span class="mr-3">{{ meal.strInstructions | splitBigString }} ...</span>
								</div>
								<div class="flex-auto text-gray-500 my-1">										
									<p class="text-justify">{{meal.strArea}}</p>
								</div>
							</div>
							<div class="col-sm-4">
								<button @click="saveDB(meal)" class="flex-no-shrink mb-3 bg-gradient-to-r bg-blue-400 from-blue-400 to-blue-700 hover:from-pink-500 hover:to-yellow-500 hover:bg-yellow-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full transition ease-in duration-300">SAVE</button>
								<br><button @click="showInstructions(meal.strInstructions)" class="flex-no-shrink mb-3 bg-yellow-400 hover:bg-yellow-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full transition ease-in duration-300">See more</button>
							</div>
						</div>					

					</div>				
				</b-card>						
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
			console.log(resp);

			if( respData.status == 200 ){
				this.loadAlert('Saved', respData.data.strMeal+" has saved with succes on backend.", 'success');
			}else{
				this.loadAlert('Erro on save. Maybe heve you already saved this meal.', 'Chek the list of Saved Meals on top the page or try again. If not succes consider reload the page.', 'error');				
			}
			
		});		
	},
	loadAlert(title, text, icon){
		Swal.fire({
				title: title,								
				text: text,
				icon: icon,								
				confirmButtonText: 'BACK'
		});	
	}	
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image_cover{
	  width: 256px;
	  height: auto;
  }
@media screen and (max-width: 480px) {
  .image_cover{
	  width: auto;
	  height: auto;
	  margin-bottom: 15px;
  }
}


</style>
