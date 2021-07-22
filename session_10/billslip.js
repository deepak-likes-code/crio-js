function BillSlip(itemSlip) {
  this.data = Object.fromEntries(itemSlip);

  this.totalBill = function () {
    let total = 0;
    for (let items in this.data) {
      total += this.data[items];
    }
    return total;
  };

  this.withDiscount = function (total) {
    return total - total * (discount / 100);
  };
  let discount = 10;
  Object.defineProperty(this, "discount", {
    get: function () {
      return discount;
    },
    set: function (dis) {
      if (dis <= 0 || dis >= 100) return;
      discount = dis;
    },
  });
}

const items = [
  ["Choco Powder", 350],
  ["Honey Bottle", 110],
];

let Bill1 = new BillSlip(items);

console.log(Bill1.withDiscount(Bill1.totalBill()));

module.exports = BillSlip 
