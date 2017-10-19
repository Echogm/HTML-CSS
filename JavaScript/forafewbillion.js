var num = 0.01;

for (var i = 0; ; i++) {
    var num = num*2;
    console.log(num);
    console.log(i);
    if (num == Infinity) {
        break
    }
    else if (i == 30) {
        var x = Math.floor (num)
        console.log("The servant has",i,"on day",x);
    }
}
