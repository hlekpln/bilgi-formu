var input1 = document.querySelector("#ad");
var input2 = document.querySelector("#soyad");
var input3 = document.querySelector("#yas");
var input4 = document.querySelector("#adres");
var table1 = document.querySelector("#tablo");

function adddata() {
  var satirSayisi = table1.rows.length;
  var satir = table1.insertRow(satirSayisi);

  satir.insertCell(0).innerHTML = input1.value;
  satir.insertCell(1).innerHTML = input2.value;
  satir.insertCell(2).innerHTML = input3.value;
  satir.insertCell(3).innerHTML = input4.value;
} // artık her tıklamada bilgiler  yeni satır oluşturup tabloya eklenecek .
//insertrow mdn de bak var güzel açıklama
// Resetleme////

var basBtn2 = document.querySelector("#temizle");
var originalHTML = tablo.innerHTML;

basBtn2.addEventListener("click", function() {
  tablo.innerHTML = originalHTML;
});

// 2.yol
// basBtn2.addEventListener("click", function() {
//   for (var i = table.row.length - 1; i > 0; i--) {
//     table.deleteRow(i);
//   }
// });
