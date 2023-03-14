class Product {
  constructor(public name: string, public unitPrice: number) {
    this.name = name;
    this.unitPrice = unitPrice;
  }
  getDiscountedPrice(discount: number): number {
    return this.unitPrice - discount;
  }
}

const table = new Product('Table', 100);
const discount = table.getDiscountedPrice(5);
console.log(discount);