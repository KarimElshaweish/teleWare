package com.karimashraf.teleWare;

import android.annotation.SuppressLint;
import android.location.Location;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnSuccessListener;
import com.karimashraf.teleWare.retrofit.APIInterface;
import com.karimashraf.teleWare.retrofit.CurrencyData;
import com.karimashraf.teleWare.retrofit.RetrofitClient;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import retrofit2.Call;
import retrofit2.Response;

public class NetworkModule extends ReactContextBaseJavaModule {
    NetworkModule(ReactApplicationContext context) {
        super(context);
    }
    @NonNull
    @Override
    public String getName() {
        return "NetworkModule";
    }

    @ReactMethod
    private void getCurrencyApi(Callback callBack) {
        Call<CurrencyData> call = RetrofitClient.getInstance()
                .getMyApi()
                .getCurrency();
        call.enqueue(new retrofit2.Callback<CurrencyData>() {
            @Override
            public void onResponse(Call<CurrencyData> call, Response<CurrencyData> response) {
                CurrencyData dataList = response.body();
                Log.d("Network", String.valueOf(new JSONObject(dataList.conversionRates)));
                callBack.invoke(String.valueOf(new JSONObject(dataList.conversionRates)));
            }

            @Override
            public void onFailure(Call<CurrencyData> call, Throwable t) {
                Log.d("Network", "Error => " + t.getMessage());
            }
        });
    }
}

