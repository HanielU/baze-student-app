package com.bazeuni.studentapp;

import com.bazeuni.studentapp.plugins.ScreenOrientation.ScreenOrientationPlugin;
import com.bazeuni.studentapp.plugins.SmallestWidth.SmallestWidthPlugin;
import com.getcapacitor.BridgeActivity;
import android.os.Bundle;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(ScreenOrientationPlugin.class);
        registerPlugin(SmallestWidthPlugin.class);
        super.onCreate(savedInstanceState);
    }
}