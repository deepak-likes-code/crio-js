class BillSlip {
  constructor(itemSlip) {
    this.data = Object.fromEntries(itemSlip);
  }
  #discount = 10;
  getTotal() {
    let total = 0;
    for (let items in this.data) {
      total += this.data[items];
    }
    return total;
  }

  withDiscount(total) {
    return total - total * (this.#discount / 100);
  }

  get discount() {
    return this.#discount;
  }

  set discount(value) {
    this.#discount = value;
  }
}

const items = [
  ["Choco Powder", 350],
  ["Honey Bottle", 110],
];

let Bill1 = new BillSlip(items);

console.log(Bill1.withDiscount(Bill1.getTotal()));
