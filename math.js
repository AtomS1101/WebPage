//----------------PrimeFact----------------
function add(i, dic) {
	if (dic.hasOwnProperty(i)) {
		dic[i] += 1;
	} else {
		dic[i] = 1;
	}
}

function form(dic) {
	let txt = " ";
	let count = 1;
	let sym = " * ";
	for (const key in dic) {
		if (dic.hasOwnProperty(key)) {
			if (count === Object.keys(dic).length) {
				sym = "";
			}
			const value = dic[key];
			const power = value === 1 ? "" : `^${value}`;
			txt += `${key}${power}${sym}`;
			count += 1;
		}
	}
	return txt;
}

function Pmain(X) {
	const dic = {};
	let n = X;
	let i = 2;
	while (n >= 2) {
		while (n % i === 0) {
			add(i, dic);
			n /= i;
		}
		i += 1;
	}
	return form(dic);
}

//-------------CommonlyNum-----------------
function Cmain(A, B) {
	let nA, nB, Db;
	if (A > B) {
		nA = A;
		nB = B;
	} else {
		nA = B;
		nB = A;
	}
	Db = nB;
	while (true) {
		Db = nB;
		nB = nA % Db;
		nA = Db;
		if (nB == 0) {
			break;
		}
	}
	const cmu = (A * B) / Db;
	return ["→最小公倍数 :" + cmu, "→最大公約数 :" + Db];
}
//--------------BMI script-----------------
function Bmain(hig, wei, bmi) {
	let BMI = wei / (hig / 100) ** 2;
	BMI = Math.round(BMI * 100);
	BMI = BMI / 100;

	let GoalWei = bmi * (hig / 100) ** 2;
	GoalWei = Math.round(GoalWei * 100);
	GoalWei = GoalWei / 100;

	return ["→Your BMI is " + BMI, "→Your target weight is " + GoalWei];
}
//-------------Roman number----------------
function RomanMain(num) {
	const dgt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const txt = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I",
	];

	let romanN = "";
	let i = 0;
	while (num > 0) {
		let limit = Math.floor(num / dgt[i]);
		for (let a = 0; a < limit; a++) {
			romanN += txt[i];
			num -= dgt[i];
		}
		i++;
	}
	return "→" + romanN;
}

//----------PrimeFactor MAIN---------------
function primeF() {
	var X = document.getElementById("n_in_P").value;
	let showP = Pmain(X);
	document.getElementById("nDispP").textContent = `→Result : ${showP}`;
}

//-----------CommonlyNum MAIN--------------
function commonN() {
	var A = document.getElementById("n_in_C1").value;
	var B = document.getElementById("n_in_C2").value;
	let showC = Cmain(A, B);
	document.getElementById("nDispC1").textContent = showC[0];
	document.getElementById("nDispC2").textContent = showC[1];
}

//----------------BMI MAIN-----------------
function BMI() {
	var hig = document.getElementById("n_in_BMh").value;
	var wei = document.getElementById("n_in_BMw").value;
	var bmi = document.getElementById("n_in_BMB").value;
	let showB = Bmain(hig, wei, bmi);

	document.getElementById("nDispBMI").textContent = showB[0];

	document.getElementById("nDispGwei").textContent = showB[1];
}
//--------------Roman MAIN-----------------
function Roman() {
	var num = document.getElementById("n_in_Rom").value;
	let showR = RomanMain(num);

	document.getElementById("nDispRom").textContent = showR;
}
