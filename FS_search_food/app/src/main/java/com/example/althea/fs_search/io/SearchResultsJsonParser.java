package com.example.althea.FS_search_food.io;

import org.json.JSONArray;
import org.json.JSONObject;
import com.example.althea.FS_search_food.model.Food;

import java.util.List;
import java.util.ArrayList;

public class SearchResultsJsonParser {

    private FoodJsonParser foodParser;

    public List<Food> parseResults(JSONObject data) {
        foodParser = new FoodJsonParser();

        if (data == null) {
            return null;
        }
        List<Food> results = new ArrayList<Food>();
        JSONArray hits = data.optJSONArray("hits");
        if (hits == null) {
            return null;
        }

        for (int i = 0; i < hits.length(); i++) {
            JSONObject hit = hits.optJSONObject(i);
            if (hit == null) {
                continue;
            }

            Food f = foodParser.parse(hit);
            if (f == null) {
                continue;
            }

            results.add(f);
        }

        return results;
    }
}

