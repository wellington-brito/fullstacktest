package com.wbapp.meals.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wbapp.meals.domain.Meal;

public interface MealRepository extends JpaRepository<Meal, Integer>{
   
}



