package com.wbapp.meals.repository;
import com.wbapp.meals.domain.Meal;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MealRepositoryTests {
    @Autowired //gerenciar o objeto de meal -> injetar uma instancia do objeto
    private MealRepository mealRepository;

    @Test
    public void create(){   
        
        Meal meal1 = new Meal(null, "1", "Miojo", "Pasta", "No instructions", "No urlThumb");
        Meal meal2 = new Meal(null, "2", "Fried Eggs", "Protein", "Easy to do", "No urlThumb");
    
        mealRepository.save(meal1);
        mealRepository.save(meal2);
    }   

}
