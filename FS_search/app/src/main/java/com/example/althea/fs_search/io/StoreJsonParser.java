package com.example.althea.fs_search.io;

import org.json.JSONObject;

import com.example.althea.fs_search.model.Store;

public class StoreJsonParser {
    public Store parse(JSONObject data) {
        if (data == null) {
            return null;
        }

        String name = data.optString("Store_Name");
        String longitude = data.optString("Longitude");
        String latitude = data.optString("Latitude");
        String address1 = data.optString("Address");
        String address2 = data.optString("Address Line #2");
        String city = data.optString("City");
        String state = data.optString("State");
        int zip1 = data.optInt("Zip5");
        int zip2 = data.optInt("Zip4");
        String county = data.optString("County");
        int id = data.optInt("objectID");

        return new Store(name, longitude, latitude, address1, address2,
                city, state, zip1, zip2, county, id);
    }
}
