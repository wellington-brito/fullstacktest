package com.wbapp.meals.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Meal {    
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    
    @Column(unique = true)
    private String idMeal;
    
    @Column
    private String strMeal;
    
    @Column
    private String strCategory;
    
    @Column(columnDefinition="text")
    private String strInstructions;
    
    @Column
    private String strMealThumb;

}
