let keranjang = [];
let total = 0;

// TAMBAH KERANJANG
function tambahKeranjang(nama, harga){

  keranjang.push({
    nama:nama,
    harga:harga
  });

  total += harga;

  tampilKeranjang();

  alert(nama + " berhasil ditambahkan ke keranjang!");
}

// TAMPIL KERANJANG
function tampilKeranjang(){

  let isiKeranjang = document.getElementById("isiKeranjang");

  isiKeranjang.innerHTML = "";

  keranjang.forEach((item,index)=>{

    isiKeranjang.innerHTML += `
      <div style="margin-bottom:15px;">
        <h3>${index+1}. ${item.nama}</h3>
        <p>Harga : Rp ${item.harga.toLocaleString()}</p>
      </div>
    `;
  });

  document.getElementById("totalHarga").innerHTML =
  "Total : Rp " + total.toLocaleString();
}

// FORM PEMBELIAN
document.getElementById("formPembelian")
.addEventListener("submit", function(e){

  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let alamat = document.getElementById("alamat").value;
  let telepon = document.getElementById("telepon").value;
  let produk = document.getElementById("produkInput").value;
  let jumlah = document.getElementById("jumlah").value;

  document.getElementById("hasilPembelian").innerHTML = `
  
    <h3>Data Pemesanan</h3>

    <p><b>Nama :</b> ${nama}</p>

    <p><b>Alamat :</b> ${alamat}</p>

    <p><b>No HP :</b> ${telepon}</p>

    <p><b>Produk :</b> ${produk}</p>

    <p><b>Jumlah :</b> ${jumlah}</p>

    <p style="color:green;">
      Pesanan berhasil dikirim!
    </p>

  `;

  this.reset();

});

// FORM KONTAK
document.getElementById("formKontak")
.addEventListener("submit", function(e){

  e.preventDefault();

  let nama = document.getElementById("namaKontak").value;
  let email = document.getElementById("emailKontak").value;
  let pesan = document.getElementById("pesanKontak").value;

  document.getElementById("hasilKontak").innerHTML = `
  
    <h3>Hasil Input Kontak</h3>

    <p><b>Nama :</b> ${nama}</p>

    <p><b>Email :</b> ${email}</p>

    <p><b>Pesan :</b> ${pesan}</p>

    <p style="color:green;">
      Pesan berhasil dikirim!
    </p>

  `;

  this.reset();

});
