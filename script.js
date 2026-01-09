let keranjang = [];
let total = 0;

function tambahKeranjang(nama, harga) {
    keranjang.push({ nama, harga });
    total += harga;
    renderKeranjang();
}

function renderKeranjang() {
    const list = document.getElementById("daftarKeranjang");
    const totalEl = document.getElementById("totalHarga");

    list.innerHTML = "";

    keranjang.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.nama + " - Rp " + item.harga.toLocaleString("id-ID");
        list.appendChild(li);
    });

    totalEl.textContent = total.toLocaleString("id-ID");
}

function checkout() {
    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    const nama = document.getElementById("nama").value.trim();
    const wa = document.getElementById("wa").value.trim();
    const alamat = document.getElementById("alamat").value.trim();

    if (!nama || !wa || !alamat) {
        alert("Lengkapi data pembeli!");
        return;
    }

    // Isi struk
    document.getElementById("strukNama").textContent = nama;
    document.getElementById("strukWa").textContent = wa;
    document.getElementById("strukAlamat").textContent = alamat;
    document.getElementById("strukTotal").textContent = total.toLocaleString("id-ID");

    const listStruk = document.getElementById("strukBarang");
    listStruk.innerHTML = "";

    keranjang.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.nama + " - Rp " + item.harga.toLocaleString("id-ID");
        listStruk.appendChild(li);
    });

    document.getElementById("struk").style.display = "block";
    document.getElementById("struk").scrollIntoView({ behavior: "smooth" });

    alert("Pembayaran berhasil!");
}

// Tanggal di footer
document.addEventListener("DOMContentLoaded", () => {
    const tgl = document.getElementById("tanggal");
    if (tgl) {
        tgl.textContent = "Tanggal Akses: " + new Date().toLocaleDateString("id-ID");
    }
});
