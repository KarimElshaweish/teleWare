package com.karimashraf.teleWare.retrofit;

import retrofit2.Call;
import retrofit2.http.GET;

public interface APIInterface {
    @GET("latest/USD/")
    Call<CurrencyData> getCurrency();
}
