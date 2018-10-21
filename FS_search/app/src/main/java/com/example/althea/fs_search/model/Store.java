package com.example.althea.fs_search.model;

public class Store {
    private String name;
    // don't want to introduce inaccuracies by saving as float...
    private String latitude;
    private String longitude;
    private String address1;
    private String address2;
    private String city;
    private String state;
    private int zip1;
    private int zip2;
    private String county;
    private int id;

    public Store(String name, String latitude, String longitude, String address1,
                 String address2, String city, String state, int zip1, int zip2, String county,
                 int id) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip1 = zip1;
        this.zip2 = zip2;
        this.county = county;
        this.id = id;
    }

    public String getStoreName() {
        return this.name;
    }

    public String getLatitude() {
        return latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public String getAddress() {
        return this.address1 + "\n " + this.address2;
    }

    public String getCity() {
        return this.city;
    }

    public String getState() {
        return this.state;
    }

    public String getZip() {
        return this.zip1 + "-" + this.zip2;
    }

    public String getCounty() {
        return this.county;
    }

    public int getId() {
        return this.id;
    }

}
