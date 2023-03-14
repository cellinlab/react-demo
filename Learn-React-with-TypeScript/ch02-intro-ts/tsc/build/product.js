"use strict";
class Product {
    name;
    unitPrice;
    constructor(name, unitPrice) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.name = name;
        this.unitPrice = unitPrice;
    }
    getDiscountedPrice(discount) {
        return this.unitPrice - discount;
    }
}
const table = new Product('Table', 100);
const discount = table.getDiscountedPrice(5);
console.log(discount);
