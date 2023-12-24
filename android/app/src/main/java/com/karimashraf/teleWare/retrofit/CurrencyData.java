package com.karimashraf.teleWare.retrofit;

import com.google.gson.annotations.SerializedName;

import java.util.Map;

public class CurrencyData {
    @SerializedName("result")
    public String result;
    @SerializedName("documentation")
    public String documentation;
    @SerializedName("terms_of_use")
    public String terms;
    @SerializedName("base_code")
    public String basCode;
    @SerializedName("conversion_rates")
    public Map<String,Double> conversionRates;
}
