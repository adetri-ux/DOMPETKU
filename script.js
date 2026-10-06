let totalPengeluaran = 0;


function tambahPengeluaran() {

    let nama =
        document.getElementById("nama").value;

    let nominal =
        Number(document.getElementById("nominal").value);


    if (nama === "" || nominal <= 0) {

        alert("Masukkan nama dan nominal terlebih dahulu.");

        return;
    }


    totalPengeluaran =
        totalPengeluaran + nominal;


    document.getElementById("total").textContent =
        "Rp" + totalPengeluaran.toLocaleString("id-ID");


    let daftar =
        document.getElementById("daftar");


    daftar.innerHTML += `

        <div class="transaksi">

            <span class="nama-transaksi">
                ${nama}
            </span>

            <span class="nominal-transaksi">
                Rp${nominal.toLocaleString("id-ID")}
            </span>

        </div>

    `;


    document.getElementById("nama").value = "";

    document.getElementById("nominal").value = "";

}
