function checkCashRegister(price, cash, cid) {
    var changeObj = { status: "", change: [] };
    let currencies =
        [{ type: 'penny', value: 0.01 },
        { type: 'nickel', value: 0.05 },
        { type: 'dime', value: 0.1 },
        { type: 'quarter', value: 0.25 },
        { type: 'one', value: 1 },
        { type: 'five', value: 5 },
        { type: 'ten', value: 10 },
        { type: 'twenty', value: 20 },
        { type: 'one hundred', value: 100 }]
    let cashOnHand = 0;
    for (var i = 0; i < cid.length; i++) {
        for (var j = 1; j < cid[i].length; j += 2) {
            cashOnHand += (cid[i][j]);
        }
    }
    if (cashOnHand > price) {
        changeObj.status = 'OPEN';
    }
    console.log(cashOnHand.toFixed(2));

}


//console.log(cashOnHand);


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
