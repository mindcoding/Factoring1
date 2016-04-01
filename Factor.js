var a = 1;
var b = 3;
var c = -18;

console.log(a + "x^2 + " + b + "x + " + "c");

//Get Factors
var total = a * c;
var gf1;
var gf2;
var gcf1;
var gcf2;
var f1 = 2;
console.log("Solving");
//Positive
for(; f1 <= total; f1++) {
	if (total % f1 === 0) {
		f2 = total / f1;
		if(f1 + f2 == b) {
			if(f1*f2 == total) {
				console.log("Factors Found")
				gf1 = f1;
				gf2 = f2;
				gcf1 = gcf(f1, a);
				gcf2 = gcf(f2, c);
				fac(gcf1, gcf2);
			}
		}
	}
}
//Negative
var gf1n;
var gf2n;
var gcf1n;
var gcf2n;
var f1n = -2;
for(; f1n >= total; f1n++) {
	if (total % f1n === 0) {
		f2n = total / f1n;
		if(f1n + f2n == b) {
			if(f1n*f2n == total) {
				console.log("Factors Found");
				gf1n = f1n;
				gf2n = f2n;
				gcf1n = gcf(f1n, a);
				gcf2n = gcf(f2n, c);
				facn(gcf1n, gcf2);
			}
		}
	}
}

function fac(g, d) {
	console.log("Solved");
	var s1 = a/g;
	var s2 = gf1;
	var s3 = c/d;
	var s4 = gf2/d;
	 var set1 = "(" + s1 + "x" + "+" + s2 + ")(" + gcf1 + "x" + "+" + gcf2 + ")";
	console.log(set1);
}
function facn(g, d) {
	console.log("Solved");
	var s1 = a/g;
	var s2 = gf1n;
	var s3 = c/d;
	var s4 = gf2n;
	var s21 = Math.abs(s2);
	var gcf2n1 = Math.abs(gcf2n);
	if (s2 < 0) {
		var set1 = "(" + s1 + "x" + "-" + s21 + ")(" + gcf1n + "x" + "+" + gcf2n1 + ")";
	}else if (gcf2n < 0) {
	 	var set1 = "(" + s1 + "x" + "+" + s21 + ")(" + gcf1n + "x" + "-" + gcf2n1 + ")";
   	}else if (gcf1n < 0 && s2 < 0) {
	 	var set1 = "(" + s1 + "x" + "-" + s21 + ")(" + gcf1n + "x" + "-" + gcf2n1 + ")";
   	}
	console.log(set1);
}

function gcf(h, i) {
	Math.abs(h);
	Math.abs(i);
    	if ( ! i) {
    		return h;
    	}
    	console.log("GCD found");
    	return gcf(i, h % i);
	
};
