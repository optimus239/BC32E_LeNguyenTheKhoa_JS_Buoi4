//--------------------Bài 5--------------------
// Mô hình 3 khối
// +Đầu vào: Nhập vào ngày, tháng, năm
// +Xử lý: -DOM id btnNgayHomQua bắt sự kiện onclick gán với hàm xử lý các sự kiên tiếp theo
// -Tạo biến ngay gán với DOM lấy id ngay lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến thang gán với DOM lấy id thang lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến nam gán với DOM lấy id nam lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến ketQua
// -if((ngay >=2 <= 31) && (thang = 1, 3, 5, 7, 8, 10, 12) => ngay - 1
// -else if(ngay = 1) && (thang = 1) => ngay = 31 thang = 12 nam - 1
// -else if(ngay = 1) && (thang = 5, 7, 8, 10, 12 ) => ngay = 30 thang - 1
// -else if(ngay = 1) && (thang = 3 ) => ngay = 28 thang - 1
// -else if(ngay >=2 <=30) && (thang = 4, 6, 9, 11) => ngay - 1
// -else if(ngay = 1) && (thang = 2, 4,6, 9, 11) => ngay = 31 thang - 1
// -else if(ngay >=2 <= 28) && (thang = 2) =>  ngay - 1
// -else => ngày không xác định
//------------
// +Xử lý: -DOM id btnNgayMai bắt sự kiện onclick gán với hàm xử lý các sự kiên tiếp theo
// -Tạo biến ngay gán với DOM lấy id ngay lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến thang gán với DOM lấy id thang lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến nam gán với DOM lấy id nam lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến ketQua
// -if((ngay >0 < 31) && (thang = 1, 3, 5, 7, 8, 10, 12) => ngay + 1
// -else if(ngay = 31) && (thang = 12) => ngay = 1 thang = 1 nam + 1
// -else if(ngay = 31) && (thang = 1, 3, 5, 7, 8, 10) => ngay = 1 thang + 1
// -else if(ngay >0 <30) && (thang = 4, 6, 9, 11) => ngay + 1
// -else if(ngay = 30) && (thang =  4, 6, 9, 11) => ngay = 1 thang + 1
// -else if(ngay >0 < 28) && (thang = 2) =>  ngay + 1
// -else if(ngay = 28) => ngay = 1 thang = 3
// -else => ngày không xác định
// In kết quả ra giao diện
// +Đầu ra: Ngày hôm qua ?, Ngày mai ?
document.getElementById("btnNgayHomQua").onclick = function (event) {
  event.preventDefault();
  var ngay = Number(document.getElementById("ngay").value);
  var thang = Number(document.getElementById("thang").value);
  var nam = Number(document.getElementById("nam").value);
  var ketQua = "";
  if (
    ngay >= 2 &&
    ngay <= 31 &&
    (thang === 1 ||
      thang === 3 ||
      thang === 5 ||
      thang === 7 ||
      thang === 8 ||
      thang === 10 ||
      thang === 12)
  ) {
    ngay--;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (ngay === 1 && thang === 1) {
    ngay = 31;
    thang = 12;
    nam--;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (
    ngay === 1 &&
    (thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12)
  ) {
    ngay = 30;
    thang--;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (ngay === 1 && thang === 3) {
    ngay = 28;
    thang--;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (
    ngay >= 2 &&
    ngay <= 30 &&
    (thang === 4 || thang === 6 || thang === 9 || thang === 11)
  ) {
    ngay--;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (
    ngay === 1 &&
    (thang === 2 || thang === 4 || thang === 6 || thang === 9 || thang === 11)
  ) {
    ngay = 31;
    thang--;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (ngay >= 2 && ngay <= 28 && thang === 2) {
    ngay--;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else {
    ketQua = "Ngày không xác định";
  }
  document.getElementById("ketQua5").innerHTML = ketQua;
};

document.getElementById("btnNgayMai").onclick = function (event) {
  event.preventDefault();
  var ngay = Number(document.getElementById("ngay").value);
  var thang = Number(document.getElementById("thang").value);
  var nam = Number(document.getElementById("nam").value);
  var ketQua = "";
  if (
    ngay > 0 &&
    ngay < 31 &&
    (thang === 1 ||
      thang === 3 ||
      thang === 5 ||
      thang === 7 ||
      thang === 8 ||
      thang === 10 ||
      thang === 12)
  ) {
    ngay++;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (ngay === 31 && thang === 12) {
    ngay = 1;
    thang = 1;
    nam++;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (
    ngay === 31 &&
    (thang === 1 ||
      thang === 3 ||
      thang === 5 ||
      thang === 7 ||
      thang === 8 ||
      thang === 10)
  ) {
    ngay = 1;
    thang++;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (
    ngay > 0 &&
    ngay < 30 &&
    (thang === 4 || thang === 6 || thang === 9 || thang === 11)
  ) {
    ngay++;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (
    ngay === 30 &&
    (thang === 4 || thang === 6 || thang === 9 || thang === 11)
  ) {
    ngay = 1;
    thang++;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (ngay > 0 && ngay < 28 && thang === 2) {
    ngay++;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else if (ngay === 28 && thang === 2) {
    ngay = 1;
    thang = 3;
    ketQua = ngay + "/" + thang + "/" + nam;
  } else {
    ketQua = "Ngày không xác định";
  }
  document.getElementById("ketQua5").innerHTML = ketQua;
};

//--------------------Bài 6--------------------
// +Đầu vào: soThang soNgay
// +Xử lý: -DOM id btnTinhNgay bắt sự kiện onclick gán với hàm xử lý các sự kiên tiếp theo
// -Tạo biến ngay gán với DOM lấy id soThang lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến nam gán với DOM lấy id soNam lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến soNgay
// -Tạo biến soNamNhuan = (soNam %4===0 && %100 !==0) || soNam%400 ===0)
// -Tạo biến ketQua
// -if(thang = 1,3,5,7,8,10,12)=> soNgay = 31
// -else if(thang=4,6,9,11) => soNgay = 30
// -else if(thang =2 && soNamNhuan = true ) =>  soNgay =29
// -else if (thang =2 && soNamNhuan = false ) => soNgay =28
// -else không xác định
// In kết quả ra giao diện
// +Đầu ra: soNgay?
document.getElementById("btnTinhNgay").onclick = function (event) {
  event.preventDefault();
  var soThang = Number(document.getElementById("soThang").value);
  var soNam = Number(document.getElementById("soNam").value);
  var soNgay = 0;
  var soNamNhuan = (soNam % 4 === 0 && soNam % 100 !== 0) || soNam % 400 === 0;
  var ketQua = "";
  if (
    soThang === 1 ||
    soThang === 3 ||
    soThang === 5 ||
    soThang === 7 ||
    soThang === 8 ||
    soThang === 10 ||
    soThang === 12
  ) {
    soNgay = 31;
    ketQua = "Tháng " + soThang + " Năm " + soNam + " có " + soNgay + " ngày ";
  } else if (
    soThang === 4 ||
    soThang === 6 ||
    soThang === 9 ||
    soThang === 11
  ) {
    soNgay = 30;
    ketQua = "Tháng " + soThang + " Năm " + soNam + " có " + soNgay + " ngày ";
  } else if (soThang === 2 && soNamNhuan == true) {
    soNgay = 29;
    ketQua = "Tháng " + soThang + " Năm " + soNam + " có " + soNgay + " ngày ";
  } else if (soThang === 2 && soNamNhuan == false) {
    soNgay = 28;
    ketQua = "Tháng " + soThang + " Năm " + soNam + " có " + soNgay + " ngày ";
  } else {
    soNgay = "Không xác định";
    ketQua = "Tháng " + soThang + " Năm " + soNam + " có " + soNgay + " ngày ";
  }
  document.getElementById("ketQua6").innerHTML = ketQua;
};

//--------------------Bài 7--------------------
// +Đầu vào: số 3 chữ số
// +Xử lý: -DOM id btnDocSo bắt sự kiện onclick gán với hàm xử lý các sự kiên tiếp theo
// -Tạo biến so3ChuSo gán với DOM lấy id nhapSo3ChuSo lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến soHangTram Tách hàng trăm => n / 100 => Làm tròn số Math.floor (1.45-1)
// -Tạo biến soHangChuc Tách lấy hàng chục => n % 100 / 10 =>Làm tròn số
// -Tạo biến soHangDonVi Tách lấy hàng đơn vị => n % 10
// switch()
// case 1 - 9 => một - chín
// +Đầu ra: In ra cách đọc
document.getElementById("btnDocSo").onclick = function (event) {
  event.preventDefault();
  var so3ChuSo = document.getElementById("nhapSo3ChuSo").value;
  var soHangTram = Math.floor(so3ChuSo / 100);
  var soHangChuc = Math.floor((so3ChuSo % 100) / 10);
  var soHangDonVi = so3ChuSo % 10;
  var ketQua = "";
  switch (soHangTram) {
    case 0:
      {
        alert((soHangTram = "Số hàng trăm không xác định được"));
      }
      break;
    case 1:
      {
        soHangTram = "một trăm";
      }
      break;
    case 2:
      {
        soHangTram = "hai trăm";
      }
      break;
    case 3:
      {
        soHangTram = "ba trăm";
      }
      break;
    case 4:
      {
        soHangTram = "bốn trăm";
      }
      break;
    case 5:
      {
        soHangTram = "năm trăm";
      }
      break;
    case 6:
      {
        soHangTram = "sáu trăm";
      }
      break;
    case 7:
      {
        soHangTram = "bảy trăm";
      }
      break;
    case 8:
      {
        soHangTram = "tám trăm";
      }
      break;
    case 9:
      {
        soHangTram = "chín trăm";
      }
      break;
  }
  switch (soHangChuc) {
    case 0:
      {
        alert((soHangChuc = "Số hàng chục không xác định được"));
      }
      break;
    case 1:
      {
        soHangChuc = "mười";
      }
      break;
    case 2:
      {
        soHangChuc = "hai mươi";
      }
      break;
    case 3:
      {
        soHangChuc = "ba mươi";
      }
      break;
    case 4:
      {
        soHangChuc = "bốn mươi";
      }
      break;
    case 5:
      {
        soHangChuc = "năm mươi";
      }
      break;
    case 6:
      {
        soHangChuc = "sáu mươi";
      }
      break;
    case 7:
      {
        soHangChuc = "bảy mươi";
      }
      break;
    case 8:
      {
        soHangChuc = "tám mươi";
      }
      break;
    case 9:
      {
        soHangChuc = "chín mươi";
      }
      break;
  }
  switch (soHangDonVi) {
    case 0:
      {
        alert((soHangDonVi = "Số hàng đơn vị không xác định được"));
      }
      break;
    case 1:
      {
        soHangDonVi = "một";
      }
      break;
    case 2:
      {
        soHangDonVi = "hai";
      }
      break;
    case 3:
      {
        soHangDonVi = "ba";
      }
      break;
    case 4:
      {
        soHangDonVi = "bốn";
      }
      break;
    case 5:
      {
        soHangDonVi = "năm";
      }
      break;
    case 6:
      {
        soHangDonVi = "sáu";
      }
      break;
    case 7:
      {
        soHangDonVi = "bảy";
      }
      break;
    case 8:
      {
        soHangDonVi = "tám";
      }
      break;
    case 9:
      {
        soHangDonVi = "chín";
      }
      break;
  }
  document.getElementById("ketQua7").innerHTML =
    soHangTram + " " + soHangChuc + " " + soHangDonVi;
};

//--------------------Bài 8--------------------
//+Đầu vào: Nhạp tên sv, tọa độ x y
//+Xử lý: -DOM id btnTim bắt sự kiện onclick gán với hàm xử lý các sự kiên tiếp theo
// -Tạo các biến tenSV DOM id lấy value
// -Tạo các biến toaDox, toaDoy gán với DOM lấy id lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến doDai1 = Math.sqrt(Math.pow((toaDoX4 - toaDoX1), 2) + Math.pow((toaDoY4 - toaDoY1)))
// -Tao biến doDai2 = Math.sqrt(Math.pow((toaDoX4 - toaDoX2), 2) + Math.pow((toaDoY4 - toaDoY2)))
// -Tạo biến doDai3 = Math.sqrt(Math.pow((toaDoX4 - toaDoX3), 2) + Math.pow((toaDoY4 - toaDoY3)))
// -Tạo biến ketQua
// -if (doDai1 > doDai2 && doDai1 > doDai3) => Sinh viên xa trường nhất :1
// -else if (doDai2 > doDai1 && doDai2 > doDai3) => Sinh viên xa trường nhất :2
// -else if (doDai3 > doDai1 && doDai3 > doDai2) => Sinh viên xa trường nhất :3
// In ra kết quả
//+Đầu ra: Sv xa trường nhất
document.getElementById("btnTim").onclick = function (event) {
  event.preventDefault();
  var tenSV1 = document.getElementById("tenSV1").value;
  var tenSV2 = document.getElementById("tenSV2").value;
  var tenSV3 = document.getElementById("tenSV3").value;
  var toaDoX1 = document.getElementById("toaDoX1").value;
  var toaDoY1 = document.getElementById("toaDoY1").value;
  var toaDoX2 = document.getElementById("toaDoX2").value;
  var toaDoY2 = document.getElementById("toaDoY2").value;
  var toaDoX3 = document.getElementById("toaDoX3").value;
  var toaDoY3 = document.getElementById("toaDoY3").value;
  var toaDoX4 = document.getElementById("toaDoX3").value;
  var toaDoY4 = document.getElementById("toaDoY3").value;
  var doDai1 = Math.sqrt(
    Math.pow(toaDoX4 - toaDoX1, 2) + Math.pow(toaDoY4 - toaDoY1, 2)
  );
  var doDai2 = Math.sqrt(
    Math.pow(toaDoX4 - toaDoX2, 2) + Math.pow(toaDoY4 - toaDoY2, 2)
  );
  var doDai3 = Math.sqrt(
    Math.pow(toaDoX4 - toaDoX3, 2) + Math.pow(toaDoY4 - toaDoY3, 2)
  );
  var ketQua = "";
  if (doDai1 < doDai2 && doDai1 < doDai3) {
    var ketQua = "Sinh viên xa trường nhất: " + tenSV1;
  } else if (doDai2 < doDai1 && doDai2 < doDai3) {
    var ketQua = "Sinh viên xa trường nhất: " + tenSV2;
  } else if (doDai3 < doDai1 && doDai3 < doDai2) {
    var ketQua = "Sinh viên xa trường nhất: " + tenSV3;
  } else {
    ketQua = "Không xác định";
  }
  document.getElementById("ketQua8").innerHTML = ketQua;
};
