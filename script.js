function getBill() {
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var total = bill / people;
    total = Math.round(total * Math.pow(10, 2)) / Math.pow(10, 2);
    document.getElementById("totalSplit").innerHTML = "$" + total;
    return total;
  }
  function getTip(x) {
    var bill = document.getElementById("bill").value;
    var x = x;
    var tipAmount = bill * x;
    var people = document.getElementById("people").value;
    var tipSplit = tipAmount / people;
    var total = getBill() + tipSplit;
    console.log(total);
    tipSplit = Math.round(tipSplit * Math.pow(10, 2)) / Math.pow(10, 2);
    total = Math.round(total * Math.pow(10, 2)) / Math.pow(10, 2);
    document.getElementById("tipSplit").innerHTML = "$" + tipSplit;
    document.getElementById("totalSplit").innerHTML = "$" + total;
  }