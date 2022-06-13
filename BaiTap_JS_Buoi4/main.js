//-------------------Bài 1-----------------------
//Mô hình 3 khối
// +Đầu vào:
// -Người dùng nhập vào 3 số
// +Xử lý:
// -DOM id btnSapXep bắt sự kiện onclick gán với hàm xử lý các sự kiên tiếp theo
// -Tạo biến soThuNhat gán với DOM lấy id soThuNhat lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến soThuHai gán với DOM lấy id soThuHai lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến soThuBa gán với DOM lấy id soThuBa lấy value từ người dùng nhập vào => ép kiểu number
// -Xét điều kiện:
// -if (soThuNhat lớn hơn soThuHai và lớn hơn soThuBa) => { soThuBa < soThuHai < soThuNhat }
// -else if (soThuNhat lớn hơn soThuHai và soThuBa lớn hơn soThuHai) => {soThuHai < soThuBa < soThuNhat}
// -else if (soThuNhat lớn hơn soThuHai và soTHuBa lớn hơn soThuNhat) => {soThuHai < soThuNhat < soThuBa}
// -else if (soThuHai lớn hơn soThuNhat và soThuBa) => {soThuBa < soThuNhat < soThuHai}
// -else if (soThuHai lớn hơn soThuBa và soThuBa lớn hơn soThuNhat) => (soThuNhat < soThuBa < soThuHai)
// -else => (soThuNhat < soThuHa < soThuBa)
// +Đầu ra:
// -ketQua1 = số thứ tự tăng dần

document.getElementById("btnSapXep").onclick = function (event) {
  event.preventDefault();
  var soThuNhat = Number(document.getElementById("soThuNhat").value);
  var soThuHai = Number(document.getElementById("soThuHai").value);
  var soThuBa = Number(document.getElementById("soThuBa").value);
  var ketQua = "";
  if (soThuNhat > soThuHai && soThuNhat > soThuBa && soThuHai > soThuBa) {
    ketQua = soThuBa + "<" + soThuHai + "<" + soThuNhat;
  } else if (soThuNhat > soThuHai && soThuBa > soThuHai) {
    ketQua = soThuHai + "<" + soThuBa + "<" + soThuNhat;
  } else if (soThuNhat > soThuHai && soThuBa > soThuNhat) {
    ketQua = soThuHai + "<" + soThuNhat + "<" + soThuBa;
  } else if (soThuHai > soThuNhat && soThuHai > soThuBa) {
    ketQua = soThuBa + "<" + soThuNhat + "<" + soThuHai;
  } else if (soThuHai > soThuBa && soThuBa > soThuNhat) {
    ketQua = soThuNhat + "<" + soThuBa + "<" + soThuHai;
  } else ketQua = soThuNhat + "<" + soThuHai + "<" + soThuBa;
  document.getElementById("ketQua1").innerHTML = ketQua;
};

//-------------------Bài 2-----------------------
//Mô hình 3 khối
//+Đầu vào: Người dùng chọn thành viên
//+XỬ lý: -DOM id btnGuiLoiChao bắt sự kiện onclick gán với hàm xử lý các sự kiên tiếp theo
// -Tạo biến thanhVien gán với DOM lấy id chonThanhVien lấy value
// -Tạo biến ketQua
// -Dùng switch(thanhVien)
// -case "B" => Xin chào Bố
// -case "M" => Xin chào Mẹ
// -case "A" => Xin chào Anh trai
// -case "E" => Xin chào Em gái
// -case "" => Xin chào Người lạ ơi
// -DOM id ketQua2 hiển thị ketQua ra
//+Đầu ra: Xin chào + tv được chọn

document.getElementById("btnGuiLoiChao").onclick = function (event) {
  event.preventDefault();
  var thanhVien = document.getElementById("chonThanhVien").value;
  var ketQua = "";
  switch (thanhVien) {
    case "B":
      {
        ketQua = "Xin chào Bố!";
      }
      break;
    case "M":
      {
        ketQua = "Xin chào Mẹ!";
      }
      break;
    case "A":
      {
        ketQua = "Xin chào Anh trai!";
      }
      break;
    case "E":
      {
        ketQua = "Xin chào Em gái!";
      }
      break;
    case "":
      {
        ketQua = "Xin chào Người lạ ơi!";
      }
      break;
  }
  document.getElementById("ketQua2").innerHTML = ketQua;
};

//-------------------Bài 3-----------------------
// Mô hình 3 khối
// +Đầu vào: Người dùng nhập vào 3 số
// +Xử lý:
// -DOM id btnDemSoChanLe bắt sự kiện onclick gán với hàm xử lý các sự kiên tiếp theo
// -Tạo biến soThu1 gán với DOM lấy id soThu1 lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến soThu2 gán với DOM lấy id soThu2 lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến soThu3 gán với DOM lấy id soThu3 lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến soChan
// -Tạo biến soLe
// -Tạo biến demSoChan
// -Dùng If(soThu1 % 2 === 0) => soChan++
// -If(soThu2 % 2 === 0) => soChan++
// -If(soThu3 % 2 === 0) => soChan++
// -soLe = 3 - soChan
// -DOM id ketQua3 in ra kết quả
// +Đầu ra: Có ? soLe, ? soChan

document.getElementById("btnDemSoChanLe").onclick = function (event) {
  event.preventDefault();
  var soThu1 = Number(document.getElementById("soThu1").value);
  var soThu2 = Number(document.getElementById("soThu2").value);
  var soThu3 = Number(document.getElementById("soThu3").value);
  var soChan = 0;
  var soLe = 0;
  if (soThu1 % 2 === 0) {
    soChan++;
  }
  if (soThu2 % 2 === 0) {
    soChan++;
  }
  if (soThu3 % 2 === 0) {
    soChan++;
  }
  soLe = 3 - soChan;
  document.getElementById("ketQua3").innerHTML =
    "Có " + soChan + " số chẵn, " + soLe + " số lẻ";
};

//-------------------Bài 4-----------------------
// Mô hình 3 khối
// +Đầu vào: Người dùng nhập vào 3 số cạnh
// +Xử lý:
// -DOM id btnDuDoan bắt sự kiện onclick gán với hàm xử lý các sự kiên tiếp theo
// -Tạo biến canhThuNhat gán với DOM lấy id canhThuNhat lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến canhThuHai gán với DOM lấy id canhThuHai lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến canhThuBa gán với DOM lấy id canhThuBa lấy value từ người dùng nhập vào => ép kiểu number
// -Tạo biến ketQua
// -Tạo biến exCanhThuNhat = (canhThuNhat^2 === canhThuHai^2 + canhThuBa^2)
// -Tạo biến exCanhThuHa = (canhThuHai^2 === canhThuNhat^2 + canhThuBa^2)
// -Tạo biến exCanhThuBa = (canhThuBa^2 === canhThuNhat^2 + canhThuHai^2)
// -if(canhThuNhat === canhThuHai === canhThuBa) => ketQua = tam giác đều
// -else if(canhThuNhat === canhThuHai || canhThuNhat === canhThuBa || canhThuHai === canhThuBa) => ketQua = tam giác cân
// -else if (exCanhThuNhat === true || exCanhThuHai === true || exCanhThuBa === true)
// => ketQua = tam giác vuông
// -else => một loại tam giác nào đó
// -Đầu ra: Loại tam giác ?

document.getElementById("btnDuDoan").onclick = function (event) {
  event.preventDefault();
  var canhThuNhat = Number(document.getElementById("canhThuNhat").value);
  var canhThuHai = Number(document.getElementById("canhThuHai").value);
  var canhThuBa = Number(document.getElementById("canhThuBa").value);
  var ketQua = "";
  var exCanhThuNhat =
    Math.pow(canhThuNhat, 2) ===
    Math.pow(canhThuHai, 2) + Math.pow(canhThuBa, 2);
  var exCanhThuHai =
    Math.pow(canhThuHai, 2) ===
    Math.pow(canhThuNhat, 2) + Math.pow(canhThuBa, 2);
  var exCanhThuBa =
    Math.pow(canhThuBa, 2) ===
    Math.pow(canhThuNhat, 2) + Math.pow(canhThuHai, 2);
  if (canhThuNhat === canhThuHai && canhThuHai === canhThuBa) {
    ketQua = "Hình tam giác đều";
  } else if (
    canhThuNhat === canhThuHai ||
    canhThuNhat === canhThuBa ||
    canhThuHai === canhThuBa
  ) {
    ketQua = "Hình tam giác cân";
  } else if (
    exCanhThuNhat === true ||
    exCanhThuHai === true ||
    exCanhThuBa === true
  ) {
    ketQua = "Hình tam giác vuông";
  } else {
    ketQua = "Một loại tam giác nào đó";
  }
  document.getElementById("ketQua4").innerHTML = ketQua;
};
