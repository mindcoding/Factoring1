var a = 1;
var b = 5;
var c = 4;

console.log(a + "x^2 + " + b + "x + " + "c");

//Get Factors
var total = a * c;
var gf1;
var gf2;
var gcf1;
var gcf2;
var f1 = 2;

console.log(total)
//Positive
for(; f1 <= total; f1++) {
   if (total % f1 === 0) {
      f2 = total / f1;
	  console.log(f1 + " " + f2)
      if(f1 + f2 == b) {
		 console.log(f1 + " " + f2)
         if(f1*f2 == total) {

            gf1 = f1;
            gf2 = f2;
            gcf1 = gcf(f1, a);
            gcf2 = gcf(f2, c);
			console.log(gcf1 + " " + gcf2)
			fac(gcf1, gcf2);
         }
      }
   }

}

function fac(g, d) {
   var s1 = a/g;
   var s2 = gf1;
   var s3 = c/d;
   var s4 = gf2/d;
   console.log(s1 + " " + s2 + " " + s3 + " " + s4)
   var set1 = "(" + s1 + "x" + "+" + s2 + ")(" + gcf1 + "x" + "+" + gcf2 + ")";
   console.log(set1);
}
function gcf(h, i) {
    if ( ! i) {
        return h;
    }

    return gcf(i, h % i);
	
};
