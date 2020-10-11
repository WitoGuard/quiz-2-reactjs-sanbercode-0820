let warna = ["biru","merah","kuning","hijau"]

let dataBukuTambahan = [{
    penulis: "john doe",
    tahunTerbit: 2020
}]

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

let gabung1 = [...warna,...buku.warnaSampul]
let gabung2 = {...buku,...dataBukuTambahan}

console.log(gabung1)
console.log(gabung2)

//gabungkan variabel warna (gabungkan dengan atribut warna sampul) dan data buku tambahan ke variabel buku dengan menggunakan spread