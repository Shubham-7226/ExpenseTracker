package com.latesttest; // replace com.your-app-name with your app’s name

import android.util.Log;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.HashMap;
import java.util.Map;

public class CalendarModule extends ReactContextBaseJavaModule {

  public CalendarModule(ReactApplicationContext context) {
    super(context);
  }

  // add to CalendarModule.java
  @Override
  public String getName() {
    return "CalendarModule";
  }

  @ReactMethod
  public void createCalendarEvent(String name, String location) {
    Log.d(
      "CalendarModule",
      "Create event called with name: " + name + " and location: " + location
    );
  }
}
