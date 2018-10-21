package com.example.althea.FS_search_food.io;

import org.json.JSONObject;
import com.example.althea.FS_search_food.model.Food;

public class FoodJsonParser {
    public Food parse(JSONObject data) {
        if (data == null) {
            return null;
        }

        String name = data.optString("Name");
        int id = data.optInt("FoodID");
        String foodGroup = data.optString("FoodGroup");
        String modifiers = data.optString("Modifiers");

        return new Food(id, name, foodGroup, modifiers);
    }
}
