import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

export default new Vuex.Store({
    state: {
        meals: [],
        mealsAux: [],
        mealSaved: false,
        page: 0,
        mealsEnd: false,
    },
    mutations: {
        list(state, list) {
            state.meals = list;
            state.mealsAux = list;
        },
        save(state, status) {
            state.mealSaved = status;
        },
        incrementPage(state, value) {
            state.page = state.page + value;
        },
        decreasePage(state, value) {
            state.page = state.page - value;
        },
        setEndList(state, value) {
            state.mealsEnd = value;
        },
        reSetPage(state) {
            state.page = 0;
        },
        filterMeal(state, mealsFiltered) {
            if (mealsFiltered.length > 0)
                state.meals = mealsFiltered;
            else
                state.meals = state.mealsAux;
        }
    },
    actions: {
        listFromApi({ commit }) {
            axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
                .then(function(response) {
                    commit('list', response.data.meals);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        listFromBackEnd({ commit }, page) {
            page >= 0 ?
                page = page :
                page = 0;

            return axios.get('http://localhost:8080/meals/page', { params: { page: page } }, { headers: headers })
                .then(function(response) {
                    //commit('list', response.data);
                    if (response.data.length > 0) {
                        commit('list', response.data);
                        commit('setEndList', false);
                        return response.data;
                    } else {
                        commit('setEndList', true);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        save({ commit }, meal) {
            let mealToSave = {
                idMeal: meal.idMeal,
                strMeal: meal.strMeal,
                strCategory: meal.strCategory,
                strInstructions: meal.strInstructions,
                strMealThumb: meal.strMealThumb
            }
            return axios.post('http://localhost:8080/meals', mealToSave, { headers: headers })
                .then(function(response) {
                    commit('save', true);
                    return response;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        incrementPage({ commit }, value) {
            commit('incrementPage', value);
        },
        decreasePage({ commit }, value) {
            commit('decreasePage', value);
        },
        reSetPage({ commit }) {
            commit('reSetPage');
        },
        filter({ commit, state }, search) {
            let mealsFiltered = state.mealsAux.filter(callback => {
                let searchLowerCase = search.toLowerCase();
                let strMealLowerCase = callback.strMeal.toLowerCase();
                let listFiltered = callback.strMeal.includes(searchLowerCase);
                listFiltered = listFiltered + strMealLowerCase.includes(searchLowerCase);
                return listFiltered;
            });
            if (mealsFiltered.length > 0) {
                commit('filterMeal', mealsFiltered);
                return mealsFiltered;
            }
        },
        stats() {
            return axios.get('http://localhost:8080/meals/total', { headers: headers })
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    },
    getters: {
        getList(state) {
            return state.meals;
        },
        mealSaved(state) {
            return state.mealSaved;
        },
        page(state) {
            return state.page;
        },
        mealsEnd(state) {
            return state.mealsEnd;
        }
    }
})