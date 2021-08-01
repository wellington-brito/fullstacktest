package com.wbapp.meals.controller;

import java.util.List;
import java.util.Optional;

import com.wbapp.meals.domain.Meal;
import com.wbapp.meals.repository.MealRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/meals") 
public class MealsController {

    @Autowired
    private MealRepository mealRepository;
    
    @CrossOrigin
    @PostMapping
    public Meal insert(@RequestBody Meal meal){ 
        return mealRepository.save(meal);      
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public Meal delete(@PathVariable Integer id){ 
        Optional<Meal> meal =  mealRepository.findById(id);
        mealRepository.delete(meal.get());
        Meal mealDeleted = meal.get();
        return mealDeleted;
    } 

    @CrossOrigin
    @GetMapping("/page")
    public List<Meal> getListOfMeals(@RequestParam(required = false) Integer page){
        PageRequest pageable = PageRequest.of(page, 5);
        List<Meal> allMealS = mealRepository.findAll(pageable).toList();
        return allMealS;
        
       // return mealRepository.findAll();
    }   
    @CrossOrigin
    @GetMapping("/total")
    public Long getTotalRows(){     
        return mealRepository.count();
    }   
   
}
