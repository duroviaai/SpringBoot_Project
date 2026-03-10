package com.example.demo.dto.response;

public class BillResponse {
    private String customerName;
    private Double totalAmount;
    private Double finalAmount;
    private Double gst;

    public BillResponse(String customerName, Double finalAmount, Double gst, Double totalAmount) {
        this.customerName = customerName;
        this.finalAmount = finalAmount;
        this.gst = gst;
        this.totalAmount = totalAmount;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Double getFinalAmount() {
        return finalAmount;
    }

    public void setFinalAmount(Double finalAmount) {
        this.finalAmount = finalAmount;
    }

    public Double getGst() {
        return gst;
    }

    public void setGst(Double gst) {
        this.gst = gst;
    }
}
