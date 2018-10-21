package com.example.althea.FS_search_food.model;

public class Food {

    private String name;
    private String foodGroup;
    private String modifiers;
    private int id;

    public Food(int id, String name, String foodGroup, String modifiers)  {
        this.id = id;
        this.name = name;
        this.foodGroup = foodGroup;
        this.modifiers = modifiers;
    }

    public String getFoodName() {
        return this.name;
    }

    public String getFoodGroup() {
        return foodGroup;
    }

    public String getModifiers() {
        return modifiers;
    }

    public int getId() {
        return this.id;
    }

}

