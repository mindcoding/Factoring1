var a = 1;
var b = 1;
var c = 1;

console.log(a + "x^2 + " + b + "x + " + "c");

//Get Factors
var total = a * b;
var gf1;
var gf2;

for(var f1 = 1; f1 <= total; f1++) {
   if (total % f1 === 0) {
      f2 = total % f1;
      if(f1 + f2 == b) {
         if(f1*f2 == t) {
            gf1 = f1;
            gf2 = f2;
            gcf(a, f1);
            gcf(f2, c);
         }
      }
   }

}


function gcf(h, i) {
    if ( ! i) {
        return h;
    }

    return gcd(i, h % i);
};

