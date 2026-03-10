package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.BillRequest;
import com.example.demo.dto.response.BillResponse;
import com.example.demo.service.ProductService;


@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;
    public  ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/calculate-bill")
    public BillResponse calculateBill(@RequestBody BillRequest request) {
        return productService.calculateBill(request);
    }
}
