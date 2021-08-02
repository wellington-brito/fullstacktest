<template>
<div id="app">
    <span class="text-3xl text-yellow-500">The Meal Of Day</span>
    <InputSearch />
    <MealCard />
    <div v-if="showPaginate">
        <ButtonsPaginate />
    </div>
    <Footer />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MealCard from './components/Cards/MealCard.vue'
import InputSearch from './components/Inputs/InputSearch.vue'
import ButtonsPaginate from './components/Buttons/ButtonsPaginate.vue'
import Footer from './components/Footer/Footer.vue'
import {
    mapActions
} from 'vuex'

export default {
    name: 'App',
    components: {
        HelloWorld,
        MealCard,
        InputSearch,
        ButtonsPaginate,
        Footer
    },
    data() {
        return {
            showPaginate: false,
        }
    },
    created() {
        //this.verifyBd();
         this.$store.dispatch('listFromApi');
    },

    methods: {
        ...mapActions(["listFromApi"]),
        ...mapActions(["listFromBackEnd"]),
        
        ...mapActions(["stats"]),
        verifyBd() {
            this.stats().then(async resp => {
                if (await resp) {
                  this.$store.dispatch('listFromBackEnd', 0) ;
                  this.showPaginate = true;
                } else {
                  this.$store.dispatch('listFromApi');
                  
                }
            });
        }
    }

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
