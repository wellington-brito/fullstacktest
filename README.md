### This application has developed with technologies below:
>>back-end builded with java/springbot: jpa, spring web, dev tools and etc;
>>front-end builded with Vuejs/Vuex State Management Control, Bootstrap 5, TaillwindCss and Sweetalert2;

### It is an application to list data from "TheMealDbApi" and save meals that user clicked on blue button "SAVE"
>In the first load the application, it will connect to The MealDb Api and list all items. This first interaction NOT save on database yet.
>
>To SAVE meals on database you need to click on blue button "SAVE": an alert will be show you about the meal saved or not.
>
>There are two buttons on card in top of the page "TheMealsDbApi" and "SavedMeals" to switch between the list from: data base of aplication and external api;
>
>The input "SEARCH" above the buttons mentioned before can search ONLY by name of Meal on both list;
>
>The paging will paginate 5 by 5. Only with "SavedMeals" list from data base. Click on Home Button will load data from "SavedMeals" list";
>
>If you already have saved an meal, in the next reload of page the application will loaad list from "SavedMeals";

### About Tests
>I made an unit test to try create table and save data of two objetcs using junit on back-end but tryed runing it only on Mysql database, with succes;

### About Deploy
>For deploy, I have changed the aplication properties and dabase driver to integrate postgresql's Heroku;
>
>This aplication has hosted on [themealofday.Heroku](https://themealofday.herokuapp.com) using postgresql;
