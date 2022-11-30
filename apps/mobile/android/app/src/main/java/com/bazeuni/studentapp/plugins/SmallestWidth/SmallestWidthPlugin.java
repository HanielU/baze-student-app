package com.bazeuni.studentapp.plugins.SmallestWidth;
import android.content.res.Configuration;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SmallestWidth")
public class SmallestWidthPlugin extends Plugin {

    @PluginMethod()
    public void getSmallestWidth(PluginCall call) {
        Configuration config = getActivity().getResources().getConfiguration();
        JSObject ret = new JSObject();
        ret.put("value", config.smallestScreenWidthDp);
        call.resolve(ret);
    }
}