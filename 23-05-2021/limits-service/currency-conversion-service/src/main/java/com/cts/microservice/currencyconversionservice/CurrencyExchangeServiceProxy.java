package com.cts.microservice.currencyconversionservice;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

//import com.cts.microservice.currencyexchangeservice.ExchangeValue;
//@RibbonClient(name = "currency-exchange-service")
//@FeignClient(name = "currency-exchange-service")
@FeignClient(name = "currency-exchange-service", url = "localhost:8084")
public interface CurrencyExchangeServiceProxy {

	@GetMapping("/currency-exchange/from/{from}/to/{to}")
	public CurrencyConversionBean retrieveExchangeValue(@PathVariable("from") String from, @PathVariable("to") String to);

}
