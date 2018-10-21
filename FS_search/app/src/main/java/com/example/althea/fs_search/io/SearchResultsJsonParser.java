package com.example.althea.fs_search.io;

import org.json.JSONArray;
import org.json.JSONObject;
import com.example.althea.fs_search.model.Store;
import java.util.List;
import java.util.ArrayList;

public class SearchResultsJsonParser {

    private StoreJsonParser storeParser;

    public List<Store> parseResults(JSONObject data) {
        storeParser = new StoreJsonParser();

        if (data == null) {
            return null;
        }
        List<Store> results = new ArrayList<Store>();
        JSONArray hits = data.optJSONArray("hits");
        if (hits == null) {
            return null;
        }

        for (int i = 0; i < hits.length(); i++) {
            JSONObject hit = hits.optJSONObject(i);
            if (hit == null) {
                continue;
            }

            Store store = storeParser.parse(hit);
            if (store == null) {
                continue;
            }

            results.add(store);
        }

        return results;
    }
}

