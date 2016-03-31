var a = 1;
var b = 1;
var c = 1;

console.log(a + "x^2 + " + b + "x + " + "c");

//Get Factors
var total = a * b;
var gf1;
var gf2;
var gcf1;
var gcf2;

for(var f1 = 1; f1 <= total; f1++) {
   if (total % f1 === 0) {
      f2 = total % f1;
      if(f1 + f2 == b) {
         if(f1*f2 == t) {
            gf1 = f1;
            gf2 = f2;
            gcf1 = gcf(a, f1);
            gcf2 = gcf(f2, c);
         }
      }
   }

}

function fac(g, d) {
   var s1 = a/g;
   var s2 = gf1/g;
   var s3 = c/d;
   var s4 = gf2/d;
   var set1 = "(" + s1 + "x" + s2 + ")(" + s3 + "x" + s4 + ")";
   console.log(set1);
}
function gcf(h, i) {
    if ( ! i) {
        return h;
    }

    return gcd(i, h % i);
};

