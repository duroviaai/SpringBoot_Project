package com.example.demo.service;

import org.springframework.stereotype.Service;
import com.example.demo.dto.request.BillRequest;
import com.example.demo.dto.response.BillResponse;

@Service
public class ProductService {
    
    public BillResponse calculateBill(BillRequest request) {
        double total = parsePrice(request.getProduct1()) + parsePrice(request.getProduct2()) + 
                      parsePrice(request.getProduct3()) + parsePrice(request.getProduct4()) + 
                      parsePrice(request.getProduct5()) + parsePrice(request.getProduct6()) +   
                      parsePrice(request.getProduct7()) + parsePrice(request.getProduct8()) + 
                      parsePrice(request.getProduct9()) + parsePrice(request.getProduct10());
        
        double gst = total * 0.18;
        double finalAmount = total + gst;
        
        return new BillResponse("Customer", finalAmount, gst, total);
    }
    
    private double parsePrice(String product) {
        return product != null && !product.isEmpty() ? Double.parseDouble(product) : 0.0;
    }
}
