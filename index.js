var mainArray = [];
var realNumberArray = [];

// hàm xắp xếp mảng:
function f_sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
function addNumberToArray() {
  var n = Number(document.getElementById("n").value);
  mainArray.push(n);
  document.querySelector(".showMainArray").innerHTML = mainArray;
  return mainArray;
}

/*
! Bài 1: Tổng các số dương trong mảng
!input: 
mảng nhập 
!progress: 
cho một biến đệm nếu mảng tại vị trí i >= 0 thì dem += array[i].
var sumPositiveNumbers = 0;
  for (var i = 0; i < mainArray.length; i++) {
    if (mainArray[i] >= 0) {
      sumPositiveNumbers += mainArray[i];
    }
  }
!output: 
Tổng các số dương trong mảng
 */
function sumPositiveNumbers() {
  var sumPositiveNumbers = 0;
  for (var i = 0; i < mainArray.length; i++) {
    if (mainArray[i] >= 0) {
      sumPositiveNumbers += mainArray[i];
    }
  }
  document.querySelector(".showSumPositiveNumbers").innerHTML =
    "Tổng các số dương: " + sumPositiveNumbers;
}
/* ========================================================= */

/*
! Bài 2: Đếm có bao nhiêu số dương trong mảng
!input: 
mảng nhập 
!progress: 
cho một biến đệm nếu mảng tại vị trí i > 0 thì đệm++.
var countPositiveNumbers = 0;
  for (var i = 0; i < mainArray.length; i++) {
    if (mainArray[i] > 0) {
      countPositiveNumbers++;
    }
  }
!output: 
Có bao nhiêu số dương trong mảng
 */
function countPositiveNumbers() {
  var countPositiveNumbers = 0;
  for (var i = 0; i < mainArray.length; i++) {
    if (mainArray[i] > 0) {
      countPositiveNumbers++;
    }
  }
  document.querySelector(".showCountPositiveNumbers").innerHTML =
    "Tổng số dương: " + countPositiveNumbers;
}
/* ========================================================= */

/*
! Bài 3: Tìm số nhỏ nhất trong mảng
!input: 
mảng nhập 
!progress: 
mainArray.sort(function (a, b) {
      return a - b;
    }) Xắp xếp mảng theo thứ tự từ nhỏ đến lớn
!output: 
Số nhỏ nhất trong mảng
 */
function findMinNumberOfArray() {
  mainArray.sort(function (a, b) {
    return a - b;
  });
  document.querySelector(".showFindMinNumberOfArray").innerHTML =
    "Số nhỏ nhất trong mảng: " + mainArray[0];
}
/* ========================================================= */

/*
! Bài 4: Tìm số dương nhỏ nhất trong mảng.
!input: 
mảng nhập 
!progress: 
mainArray.sort() Xắp xếp mảng theo thứ tự từ nhỏ đến lớn
for (var i = 0; i < mainArray.length; i++) {
    if (mainArray[i] > 0) {
      break;
    }
  }
!output: 
Số nhỏ nhất trong mảng
 */
function maxPositiveNumbersOfArray() {
  mainArray.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < mainArray.length; i++) {
    if (mainArray[i] > 0) {
      break;
    }
  }
  document.querySelector(".showMinNumberOfArray").innerHTML =
    "Số dương nhỏ nhất trong mảng: " + mainArray[i];
}

/* ========================================================= */
/*
! Bài 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
!input: 
mảng nhập 
!progress: 
mainArray.sort() Xắp xếp mảng theo thứ tự từ nhỏ đến lớn
for (var i = 0; i < mainArray.length; i++) {
    if (mainArray[i] > 0) {
      break;
    }
  }
!output: 
Số chẵn cuối cùng của mảng nếu không có trả về không
 */
function endEvenNumberOfArray() {
  var temp = 0;
  var showMainArray;
  for (var i = mainArray.length - 1; i >= 0; i--) {
    if (mainArray[i] % 2 == 0) {
      showMainArray = mainArray[i];
      break;
    } else {
      temp++;
    }
  }
  if (temp == mainArray.length) {
    showMainArray = -1;
  }
  document.querySelector(".showEndEvenNumberOfArray").innerHTML =
    "Số chẵn cuối cùng của mảng: " + showMainArray;
}
/* ========================================================= */

/*
! Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
!input: 
mảng nhập, vị trí 1, vị trí 2  
!progress: 
mainArray.sort() Xắp xếp mảng theo thứ tự từ nhỏ đến lớn
để cho ui/ux vị trí nhập để đổi chổ trong mảng bắt đầu từ 1 đến = arr.length
for (var i = 0; i < mainArray.length; i++) {
    if (mainArray[i] > 0) {
      break;
    }
  }
!output: 
mảng nhập sau khi đổi chổ
 */
function swapInArray() {
  var vt1 = Number(document.getElementById("vt1").value);
  var vt2 = Number(document.getElementById("vt2").value);
  var temp = mainArray[vt1 - 1];
  mainArray[vt1 - 1] = mainArray[vt2 - 1];
  mainArray[vt2 - 1] = temp;

  document.querySelector(".showSwapInArray").innerHTML =
    "Mảng sau khi đổi chỗ: " + mainArray;
}
/* ========================================================= */

/*
! Bài 7: Sắp xếp mảng theo thứ tự tăng dần
!input: 
mảng nhập 
!progress: 
mainArray.sort()Sắp xếp mảng theo thứ tự tăng dần
!output: 
thứ tự mảng tăng dần
 */
function arrangeArray() {
  // var sortArrays = mainArray.sort();

  document.querySelector(".showArrangeArray").innerHTML =
    "Mảng sắp xếp từ nhỏ đến lớn: " +
    mainArray.sort(function (a, b) {
      return a - b;
    });
}

/* ========================================================= */
/*
! Bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
!input: 
mảng nhập 
!progress: 
Kiểm tra số đó có phải là số nguyên tố không
nếu phải trả về true ngược lại false
-tìm số nguyên tố đầu tiên trong mảng nếu trong có trả về -1
!output: 
số nguyên tố đầu tiên trong mảng
 */
function checkPrimeNumber(primeNumber) {
  var temp = true;

  if (primeNumber < 2) {
    temp = false;
    return temp;
  } else {
    for (var i = 2; i <= Math.sqrt(primeNumber); i++) {
      if (primeNumber % 2 == 0) {
        temp = false;
        break;
      }
    }
  }
  return temp;
}
function findFirstPrimeNumberInArray() {
  var showPrimeNumber;
  for (var i = 0; i < mainArray.length; i++) {
    if (checkPrimeNumber(mainArray[i]) == true) {
      showPrimeNumber = mainArray[i];
      break;
    } else {
      showPrimeNumber = -1;
    }
  }

  document.querySelector(".showFirstPrimeNumberInArray").innerHTML =
    "Số nguyên tố đầu tiên trong mảng: " + showPrimeNumber;
}

/* ========================================================= */
/*
! Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
!input: 
mảng số thực
!progress: 
tạo một biến nhớ 
kiểm tra số trong mảng nếu là số thực thì biến nhớ +1
!output: 
Số lượng số nguyên trong cả 2 mảng
 */
function addRealNumberArray() {
  var nArr = Number(document.getElementById("nArr").value);
  realNumberArray.push(nArr);
  document.querySelector(".showNewArray").innerHTML = realNumberArray;
}
function findIntNumber() {
  var tempInt = 0;
  for (var i = 0; i < realNumberArray.length; i++) {
    if (Number.isInteger(realNumberArray[i]) == true) {
      tempInt++;
    }
  }
  document.querySelector(".showIntNumber").innerHTML = tempInt;
}
/* ========================================================= */
/*
! Bài 10: . So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
!input: 
mảng 
!progress: 
đếm số lượng số dương và số âm trong mảng 
số sánh chúng

!output
số âm > số dương or số âm < số dương or số âm == số dương 
 */
function compare() {
  var negativeNumber = 0;
  var positiveNumber = 0;
  var showCompare;
  for (var i = 0; i < mainArray.length; i++) {
    if (mainArray[i] > 0) {
      positiveNumber++;
    } else if (mainArray[i] < 0) {
      negativeNumber++;
    } else {
      continue;
    }
  }
  if (positiveNumber > negativeNumber) {
    showCompare = "Số lượng số dương > Số lượng số âm";
  } else if (positiveNumber < negativeNumber) {
    showCompare = "Số lượng số dương < Số lượng số âm";
  } else {
    showCompare = "Số lượng số dương = Số lượng số âm";
  }
  document.querySelector(".showCompare").innerHTML = showCompare;
}
