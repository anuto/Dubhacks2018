package com.example.althea.fs_search_food;

import ui.FoodSearchActivity;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class FSSearchFoodModule extends ReactContextBaseJavaModule {

  //private static final String DURATION_SHORT_KEY = "SHORT";
  //private static final String DURATION_LONG_KEY = "LONG";

  public FSSearchFoodModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "FSSearchFoodModule";
  }

  @ReactMethod
  public void onCreate(Bundle savedInstanceState) {
    FoodSearchActivity.onCreate(savedInstanceState);
  }

  @ReactMethod
  public void onCreateOptionsMenu(Menu menu) {
    FoodSearchActivity.onCreateOptionsMenu(menu);
  }
}
