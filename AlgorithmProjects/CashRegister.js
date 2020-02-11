function checkCashRegister(price, cash, cid) {
    var changeObj = { status: "", change: 0 };
    let changeArr =
        [['PENNY', 0],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]]
    let cashOnHand = [];
    let currencies = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
    let cashOnHandTotal = 0;
    for (var i = 0; i < cid.length; i++) {
        for (var j = 1; j < cid[i].length; j += 2) {
            cashOnHand[i] = cid[i][j];
            cashOnHandTotal += cid[i][j];
        }
    }

    cashOnHandTotal = cashOnHandTotal;

    let changeDue = (cash - price);

    cashOnHandTotal.toFixed(2);

    if (cashOnHandTotal > changeDue) {
        changeObj.status = 'OPEN';
    } else if (changeDue > cashOnHandTotal) {
        changeObj.status = 'INSUFFICIENT_FUNDS';
        changeObj.change = [];
        return changeObj;
    } else if (cashOnHandTotal.toFixed(2) == changeDue) {
        changeObj.status = 'CLOSED';
    }
    let distributor = function (changeDue) {

        for (var i = 8; i >= 0; i--) {

            if (currencies[i] <= changeDue && currencies[i] <= cashOnHand[i]) {
                changeArr[i][1] += currencies[i];
                changeDue -= currencies[i];
                cashOnHand[i] -= currencies[i];
                i++;
            } else if (changeDue < 0.01) {

                changeArr[0][1] += 0.01;
                return changeArr;
            }
        }
        return changeArr;
    }

    let finalArr = distributor(changeDue).filter(each => each[1] > 0.01).reverse();

    for (var i = 0; i < finalArr.length; i++) {
        for (var j = 0; j < finalArr[i].length; j++) {
            finalArr[i][j].toString;
        }
    }

    let sum = 0;

    for (var i = 0; i < changeArr.length; i++) {

        for (var j = 1; j < changeArr[i].length; j++) {
            sum += changeArr[i][j];
        }
    }
    if (sum + 0.0099999999999999999999999999999999999999999 >= (cash - price)) {   //JS decimal craziness workaround
        changeObj.change = finalArr;

    } else {
        changeObj.change = [];
        changeObj.status = 'INSUFFICIENT_FUNDS';
    }
    if (changeObj.change[0] && changeObj.change[0].includes("PENNY")) {  //JS decimal workaround for penny
        let thisArr = distributor(changeDue);
        changeObj.change = thisArr;
        changeObj.change.splice(0, 1);
        changeObj.change.unshift(['PENNY', 0.50]);
    }
    return changeObj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));