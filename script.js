/* =====================================================
   DATA 12 SHIO
===================================================== */

const shioData = [

    {
        nama: "TIKUS",
        gambar: "images/TIKUS.png"
    },

    {
        nama: "KERBAU",
        gambar: "images/KERBAU.png"
    },

    {
        nama: "MACAN",
        gambar: "images/MACAN.png"
    },

    {
        nama: "KELINCI",
        gambar: "images/KELINCI.png"
    },

    {
        nama: "ULAR",
        gambar: "images/ULAR.png"
    },

    {
        nama: "NAGA",
        gambar: "images/NAGA.png"
    },

    {
        nama: "KUDA",
        gambar: "images/KUDA.png"
    },

    {
        nama: "KAMBING",
        gambar: "images/KAMBING.png"
    },

    {
        nama: "MONYET",
        gambar: "images/MONYET.png"
    },

    {
        nama: "AYAM",
        gambar: "images/AYAM.png"
    },

    {
        nama: "ANJING",
        gambar: "images/ANJING.png"
    },

    {
        nama: "BABI",
        gambar: "images/BABI.png"
    }

];
/* =====================================================
   SHIO + NOMOR BUKU MIMPI 00 - 99
===================================================== */

const nomorShioBukuMimpi = {

    "TIKUS": [
        "00","01","02","03",
        "04","05","06","07"
    ],

    "KERBAU": [
        "08","09","10","11",
        "12","13","14","15"
    ],

    "MACAN": [
        "16","17","18","19",
        "20","21","22","23"
    ],

    "KELINCI": [
        "24","25","26","27",
        "28","29","30","31"
    ],

    "NAGA": [
        "32","33","34","35",
        "36","37","38","39"
    ],

    "ULAR": [
        "40","41","42","43",
        "44","45","46","47"
    ],

    "KUDA": [
        "48","49","50","51",
        "52","53","54","55"
    ],

    "KAMBING": [
        "56","57","58","59",
        "60","61","62","63"
    ],

    "MONYET": [
        "64","65","66","67",
        "68","69","70","71"
    ],

    "AYAM": [
        "72","73","74","75",
        "76","77","78","79"
    ],

    "ANJING": [
        "80","81","82","83",
        "84","85","86","87"
    ],

    "BABI": [
        "88","89","90","91",
        "92","93","94","95",
        "96","97","98","99"
    ]

};


/* =====================================================
   AMBIL NOMOR BERDASARKAN SHIO
===================================================== */

function nomorUntukShio(namaShio) {

    if (!namaShio) {
        return [];
    }

    const nama =
        namaShio
            .toUpperCase()
            .trim();

    return nomorShioBukuMimpi[nama] || [];

}


/* =====================================================
   CARI NOMOR DI BUKU MIMPI
===================================================== */

function cariBukuMimpiNomor(nomor) {

    const input =
        document.getElementById(
            "searchMimpi"
        );

    if (!input) {

        console.warn(
            "searchMimpi tidak ditemukan."
        );

        return;

    }


    /*
       Masukkan nomor
    */

    input.value = nomor;


    /*
       Reset filter
    */

    if (
        typeof activeFilter !==
        "undefined"
    ) {

        activeFilter = "Semua";

    }


    /*
       Kembali halaman pertama
    */

    if (
        typeof currentPage !==
        "undefined"
    ) {

        currentPage = 1;

    }


    /*
       Jalankan render Buku Mimpi
    */

    if (
        typeof render ===
        "function"
    ) {

        render();

    }


    /*
       Scroll menuju Buku Mimpi
    */

    const bukuPanel =
        document.getElementById(
            "bukuPanel"
        );

    if (bukuPanel) {

        setTimeout(
            function() {

                bukuPanel.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            },
            100
        );

    }

}


/* =====================================================
   TAMPIL NOMOR PADA KARTU SHIO
===================================================== */

function nomorShioHTML(namaShio) {

    const nomor =
        nomorUntukShio(
            namaShio
        );

    if (
        !nomor ||
        nomor.length === 0
    ) {

        return `
            <span class="shio-no-number">
                -
            </span>
        `;

    }


    return nomor
        .map(
            angka => `
                <button
                    type="button"
                    class="shio-buku-number"
                    onclick="
                        cariBukuMimpiNomor('${angka}')
                    "
                    title="
                        Cari nomor ${angka}
                        di Buku Mimpi
                    "
                >
                    ${angka}
                </button>
            `
        )
        .join("");

}


/* =====================================================
   TAMPIL 12 SHIO
===================================================== */

function tampilShio() {

    const container =
        document.getElementById(
            "shioContainer"
        );

    if (!container) {
        return;
    }


    container.innerHTML = "";


    shioData.forEach(
        function(
            shio,
            index
        ) {

            const nomor =
                nomorUntukShio(
                    shio.nama
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "shio-card";


            card.innerHTML = `

                <img
                    src="${shio.gambar}"
                    alt="${shio.nama}"
                    onerror="
                        this.style.display='none';
                    "
                >

                <div class="shio-number">
                    SHIO ${index + 1}
                </div>

                <div class="shio-name">
                    ${shio.nama}
                </div>


                <div class="shio-book-title">
                    📖 NOMOR BUKU MIMPI
                </div>


                <div class="shio-book-numbers">

                    ${
                        nomorShioHTML(
                            shio.nama
                        )
                    }

                </div>

            `;


            container.appendChild(
                card
            );

        }
    );

}

/* =====================================================
   DATA MARKET
===================================================== */

const markets = [

    {
        id: "sydney",
        nama: "SYDNEY",
        tutup: "13:50"
    },

    {
        id: "singapore",
        nama: "SINGAPORE",
        tutup: "17:45"
    },

    {
        id: "hongkong",
        nama: "HONGKONG",
        tutup: "23:00"
    },

    {
        id: "taipei",
        nama: "TAIPEI",
        tutup: "23:00"
    }

];


/* =====================================================
   HASIL DEMO
===================================================== */

const hasilDemo = {

    sydney: "4806",

    singapore: "4091",

    hongkong: "9864",

    taipei: "7416"

};


/* =====================================================
   WAKTU
===================================================== */

function sekarang() {

    return new Date();

}


function tanggalHariIni() {

    const d = sekarang();

    return (

        d.getFullYear()
        + "-"
        + String(
            d.getMonth() + 1
        ).padStart(2, "0")
        + "-"
        + String(
            d.getDate()
        ).padStart(2, "0")

    );

}


function tampilTanggal() {

    return sekarang()
        .toLocaleDateString(
            "id-ID",
            {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );

}


function tampilJam() {

    return sekarang()
        .toLocaleTimeString(
            "id-ID"
        );

}


/* =====================================================
   CEK SINGAPORE
   SELASA = 2
   JUMAT = 5
===================================================== */

function singaporeTutupHariIni() {

    const hari =
        sekarang().getDay();

    return (
        hari === 2 ||
        hari === 5
    );

}


/* =====================================================
   STATUS MARKET
===================================================== */

function statusMarket(market) {

    /* Singapore tutup Selasa & Jumat */

    if (
        market.id === "singapore"
        &&
        singaporeTutupHariIni()
    ) {

        return "TUTUP";

    }


    const now =
        sekarang();


    const bagian =
        market.tutup.split(":");


    const tutup =
        new Date();


    tutup.setHours(
        Number(bagian[0]),
        Number(bagian[1]),
        0,
        0
    );


    if (now >= tutup) {

        return "TUTUP";

    }


    return "BUKA";

}


/* =====================================================
   SEED ANGKA
   BERDASARKAN TANGGAL
===================================================== */

function buatSeed(text) {

    let hash = 0;


    for (
        let i = 0;
        i < text.length;
        i++
    ) {

        hash =
            (
                (
                    hash << 5
                )
                -
                hash
            )
            +
            text.charCodeAt(i);


        hash |= 0;

    }


    return Math.abs(hash);

}


/* =====================================================
   RANDOM DETERMINISTIK
===================================================== */

function angkaSeed(seed) {

    const x =
        Math.sin(seed) *
        10000;


    return (
        x -
        Math.floor(x)
    );

}


/* =====================================================
   BUAT DATA ANGKA OTOMATIS
===================================================== */

function buatPrediksi(
    marketId
) {

    const seed =
        buatSeed(
            tanggalHariIni()
            + "-"
            + marketId
        );


    const top2d = [];

    const top3d = [];


    /* 2D */

    for (
        let i = 0;
        i < 10;
        i++
    ) {

        const angka =
            Math.floor(
                angkaSeed(
                    seed + i * 17
                )
                * 100
            );


        top2d.push(
            String(angka)
                .padStart(2, "0")
        );

    }


    /* 3D */

    for (
        let i = 0;
        i < 10;
        i++
    ) {

        const angka =
            Math.floor(
                angkaSeed(
                    seed
                    + 100
                    + i * 31
                )
                * 1000
            );


        top3d.push(
            String(angka)
                .padStart(3, "0")
        );

    }


    /* angka panas */

    const panas = [

        top2d[0][0],

        top2d[1][0],

        top2d[2][0],

        top2d[3][0],

        top2d[4][0]

    ];


    /* colok */

    const colok = [

        top2d[0][0],

        top2d[1][0],

        top2d[2][0]

    ];


    return {

        top2d: top2d,

        top3d: top3d,

        panas: panas,

        colok: colok

    };

}


/* =====================================================
   SHIO BERDASARKAN TANGGAL
===================================================== */

function shioUntukMarket(index) {

    const hari =
        sekarang().getDate();


    return shioData[
        (
            hari - 1 + index
        )
        %
        shioData.length
    ];

}


/* =====================================================
   LIST ANGKA
===================================================== */

function buatList(
    data,
    className = ""
) {

    if (
        !data ||
        data.length === 0
    ) {

        return `
            <span class="number-item">
                -
            </span>
        `;

    }


    return data
        .map(
            angka => {

                return `
                    <span
                        class="
                            number-item
                            ${className}
                        "
                    >
                        ${angka}
                    </span>
                `;

            }
        )
        .join("");

}


/* =====================================================
   COUNTDOWN
===================================================== */

function countdown(market) {

    /* Singapore tutup Selasa/Jumat */

    if (
        market.id === "singapore"
        &&
        singaporeTutupHariIni()
    ) {

        return "TIDAK ADA PREDIKSI";

    }


    const now =
        sekarang();


    const bagian =
        market.tutup.split(":");


    let target =
        new Date();


    target.setHours(
        Number(bagian[0]),
        Number(bagian[1]),
        0,
        0
    );


    if (
        target <= now
    ) {

        target.setDate(
            target.getDate() + 1
        );

    }


    const selisih =
        target - now;


    const jam =
        Math.floor(
            selisih /
            3600000
        );


    const menit =
        Math.floor(
            (
                selisih %
                3600000
            )
            /
            60000
        );


    const detik =
        Math.floor(
            (
                selisih %
                60000
            )
            /
            1000
        );


    return (

        String(jam)
            .padStart(2, "0")
        + ":"
        +
        String(menit)
            .padStart(2, "0")
        + ":"
        +
        String(detik)
            .padStart(2, "0")

    );

}


/* =====================================================
   TAMPIL MARKET
===================================================== */

function tampilMarket() {

    const container =
        document.getElementById(
            "marketContainer"
        );


    container.innerHTML = "";


    markets.forEach(
        function(
            market,
            index
        ) {


            const status =
                statusMarket(
                    market
                );


            const shio =
                shioUntukMarket(
                    index
                );


            const liburSingapore =
                (
                    market.id ===
                    "singapore"
                )
                &&
                singaporeTutupHariIni();


            const prediksi =
                buatPrediksi(
                    market.id
                );


            const statusClass =
                status
                    .toLowerCase();


            let top2d =
                buatList(
                    prediksi.top2d
                );


            let top3d =
                buatList(
                    prediksi.top3d
                );


            let panas =
                buatList(
                    prediksi.panas,
                    "hot"
                );


            let colok =
                buatList(
                    prediksi.colok,
                    "colok"
                );


            let result =
                "----";


            /* Singapore libur */

            if (
                liburSingapore
            ) {

                top2d = `
                    <span class="number-item">
                        TIDAK ADA PREDIKSI
                    </span>
                `;


                top3d = `
                    <span class="number-item">
                        TIDAK ADA PREDIKSI
                    </span>
                `;


                panas = `
                    <span class="number-item">
                        -
                    </span>
                `;


                colok = `
                    <span class="number-item">
                        -
                    </span>
                `;


                result =
                    "TUTUP";

            }


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "market";


            card.innerHTML = `

                <div class="market-header">

                    <div class="market-name">
                        ${market.nama}
                    </div>

                    <div
                        class="
                            status
                            ${statusClass}
                        "
                    >
                        ${status}
                    </div>

                </div>


                <div class="countdown">

                    Tutup:
                    <strong>
                        ${market.tutup}
                    </strong>

                    &nbsp; | &nbsp;

                    Countdown:
                    <strong
                        id="count-${market.id}"
                    >
                        ${countdown(market)}
                    </strong>

                </div>


                <div class="result-box">

                    <div class="result-title">

                        RESULT
                        ${market.nama}

                    </div>


                    <div
                        id="result-${market.id}"
                        class="result-number"
                    >
                        ${result}
                    </div>

                </div>


                <div class="info-grid">

                    <div class="info-box">

                        <div class="info-title">
                            TOP 2D
                        </div>

                        <div
                            class="info-value"
                            id="top2-${market.id}"
                        >
                            ${liburSingapore
                                ? "-"
                                : prediksi.top2d[0]
                            }
                        </div>

                    </div>


                    <div class="info-box">

                        <div class="info-title">
                            TOP 3D
                        </div>

                        <div
                            class="info-value"
                            id="top3-${market.id}"
                        >
                            ${liburSingapore
                                ? "-"
                                : prediksi.top3d[0]
                            }
                        </div>

                    </div>


                    <div class="info-box">

                        <div class="info-title">
                            SHIO
                        </div>

                        <div class="info-value">
                            ${shio.nama}
                        </div>

                    </div>

                </div>


                <div class="number-section">

                    <div class="section-title">
                        🔢 TOP 2D LENGKAP
                    </div>

                    <div
                        class="number-list"
                        id="list2d-${market.id}"
                    >
                        ${top2d}
                    </div>

                </div>


                <div class="number-section">

                    <div class="section-title">
                        🔢 TOP 3D LENGKAP
                    </div>

                    <div
                        class="number-list"
                        id="list3d-${market.id}"
                    >
                        ${top3d}
                    </div>

                </div>


                <div class="number-section">

                    <div class="section-title">
                        🔥 ANGKA PANAS
                    </div>

                    <div
                        class="number-list"
                    >
                        ${panas}
                    </div>

                </div>


                <div class="number-section">

                    <div class="section-title">
                        🎯 COLOK
                    </div>

                    <div
                        class="number-list"
                    >
                        ${colok}
                    </div>

                </div>


                <div class="detail">

                    <div class="detail-row">

                        <span>
                            Jam Tutup
                        </span>

                        <span>
                            ${market.tutup}
                        </span>

                    </div>


                    <div class="detail-row">

                        <span>
                            Status
                        </span>

                        <span>
                            ${status}
                        </span>

                    </div>


                    <div class="detail-row">

                        <span>
                            Shio
                        </span>

                        <span
                            class="market-shio"
                        >

                            <img
                                src="${shio.gambar}"
                                alt="${shio.nama}"
                            >

                            <span
                                class="
                                    market-shio-name
                                "
                            >
                                ${shio.nama}
                            </span>

                        </span>

                    </div>


                    <div class="detail-row">

                        <span>
                            Tanggal Update
                        </span>

                        <span>
                            ${tampilTanggal()}
                        </span>

                    </div>

                </div>

            `;


            container.appendChild(
                card
            );


            /* Update status atas */

            const statusAtas =
                document.getElementById(
                    "status-" +
                    market.id
                );


            if (
                statusAtas
            ) {

                statusAtas.textContent =
                    status;

                statusAtas.className =
                    "";

                if (
                    status ===
                    "TUTUP"
                ) {

                    statusAtas.classList
                        .add("tutup");

                }

                if (
                    status ===
                    "RESULT"
                ) {

                    statusAtas.classList
                        .add("result");

                }

            }


            /*
               Result bergerak
               hanya untuk market yang buka
            */

            if (
                !liburSingapore
            ) {

                mulaiRolling(
                    "result-" +
                    market.id,

                    hasilDemo[
                        market.id
                    ]
                );

            }

        }
    );

}


/* =====================================================
   RESULT BERGERAK
===================================================== */

function random4D() {

    return Math.floor(
        Math.random() *
        100000
    )
    .toString()
    .padStart(
        4,
        "0"
    );

}


function mulaiRolling(
    id,
    hasil
) {

    const element =
        document.getElementById(
            id
        );


    if (!element) {

        return;

    }


    element.classList
        .add("rolling");


    let jumlah =
        0;


    const interval =
        setInterval(
            function() {

                element.textContent =
                    random4D();


                jumlah++;


                if (
                    jumlah >= 0
                ) {

                    clearInterval(
                        interval
                    );


                    element.textContent =
                        hasil;


                    element.classList
                        .remove(
                            "rolling"
                        );


                    element.classList
                        .add(
                            "final"
                        );

                }

            },
            80
        );

}


/* =====================================================
   TAMPIL 12 SHIO
===================================================== */

function tampilShio() {

    const container =
        document.getElementById(
            "shioContainer"
        );


    container.innerHTML = "";


    shioData.forEach(
        function(
            shio,
            index
        ) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "shio-card";


            card.innerHTML = `

                <img
                    src="${shio.gambar}"
                    alt="${shio.nama}"
                    onerror="
                        this.style.display='none';
                    "
                >

                <div
                    class="shio-number"
                >
                    SHIO ${index + 1}
                </div>

                <div
                    class="shio-name"
                >
                    ${shio.nama}
                </div>

            `;


            container.appendChild(
                card
            );

        }
    );

}


/* =====================================================
   UPDATE COUNTDOWN
===================================================== */

function updateCountdown() {

    markets.forEach(
        function(market) {

            const element =
                document.getElementById(
                    "count-" +
                    market.id
                );


            if (
                element
            ) {

                element.textContent =
                    countdown(
                        market
                    );

            }

        }
    );

}


/* =====================================================
   UPDATE JAM
===================================================== */

function updateJam() {

    document.getElementById(
        "jam"
    ).textContent =
        tampilJam();

}


/* =====================================================
   UPDATE STATUS
===================================================== */

function updateStatus() {

    markets.forEach(
        function(market) {

            const status =
                statusMarket(
                    market
                );


            const element =
                document.getElementById(
                    "status-" +
                    market.id
                );


            if (
                element
            ) {

                element.textContent =
                    status;

                element.className =
                    "";


                if (
                    status ===
                    "TUTUP"
                ) {

                    element.classList
                        .add("tutup");

                }


                if (
                    status ===
                    "RESULT"
                ) {

                    element.classList
                        .add("result");

                }

            }

        }
    );

}


/* =====================================================
   DETEKSI PERGANTIAN TANGGAL
===================================================== */

let tanggalTerakhir =
    tanggalHariIni();


function cekTanggal() {

    const tanggalSekarang =
        tanggalHariIni();


    if (
        tanggalSekarang !==
        tanggalTerakhir
    ) {

        tanggalTerakhir =
            tanggalSekarang;


        /*
           Buat tampilan baru
           untuk tanggal baru
        */

        tampilMarket();

        tampilShio();

    }

}


/* =====================================================
   MULAI WEBSITE
===================================================== */

document.getElementById(
    "tanggal"
).textContent =
    tampilTanggal();


document.getElementById(
    "jam"
).textContent =
    tampilJam();


tampilMarket();

tampilShio();


/* =====================================================
   UPDATE SETIAP 1 DETIK
===================================================== */

setInterval(
    function() {

        updateJam();

        updateCountdown();

        updateStatus();

        cekTanggal();

    },
    1000
);

/* ==========================================
   BUKU MIMPI 00 - 99
========================================== */

const bukuMimpi = {

    "00": "Orang Tua",
    "01": "Sepasang Kekasih",
    "02": "Anak Kecil",
    "03": "Dokter",
    "04": "Polisi",
    "05": "Guru",
    "06": "Petani",
    "07": "Nelayan",
    "08": "Pedagang",
    "09": "Raja",

    "10": "Burung",
    "11": "Kucing",
    "12": "Anjing",
    "13": "Ayam",
    "14": "Kuda",
    "15": "Kerbau",
    "16": "Kambing",
    "17": "Monyet",
    "18": "Harimau",
    "19": "Gajah",

    "20": "Ular",
    "21": "Naga",
    "22": "Kelinci",
    "23": "Tikus",
    "24": "Babi",
    "25": "Ikan",
    "26": "Katak",
    "27": "Kupu-kupu",
    "28": "Lebah",
    "29": "Burung Hantu",

    "30": "Pohon",
    "31": "Bunga",
    "32": "Buah",
    "33": "Gunung",
    "34": "Laut",
    "35": "Sungai",
    "36": "Hujan",
    "37": "Matahari",
    "38": "Bulan",
    "39": "Bintang",

    "40": "Rumah",
    "41": "Sekolah",
    "42": "Pasar",
    "43": "Toko",
    "44": "Jembatan",
    "45": "Jalan",
    "46": "Mobil",
    "47": "Motor",
    "48": "Sepeda",
    "49": "Pesawat",

    "50": "Kapal",
    "51": "Kereta",
    "52": "Uang",
    "53": "Emas",
    "54": "Cincin",
    "55": "Jam",
    "56": "Telepon",
    "57": "Buku",
    "58": "Kunci",
    "59": "Pintu",

    "60": "Meja",
    "61": "Kursi",
    "62": "Tempat Tidur",
    "63": "Cermin",
    "64": "Lampu",
    "65": "Payung",
    "66": "Sepatu",
    "67": "Tas",
    "68": "Topi",
    "69": "Baju",

    "70": "Pedang",
    "71": "Pisau",
    "72": "Palu",
    "73": "Tangga",
    "74": "Lilin",
    "75": "Kamera",
    "76": "Televisi",
    "77": "Radio",
    "78": "Komputer",
    "79": "Telepon",

    "80": "Bola",
    "81": "Layangan",
    "82": "Boneka",
    "83": "Mainan",
    "84": "Kapal Terbang",
    "85": "Bunga Mawar",
    "86": "Pohon Kelapa",
    "87": "Air",
    "88": "Api",
    "89": "Angin",

    "90": "Batu",
    "91": "Pasir",
    "92": "Tanah",
    "93": "Rumput",
    "94": "Hutan",
    "95": "Pantai",
    "96": "Rumah Sakit",
    "97": "Masjid",
    "98": "Gereja",
    "99": "Istana"

};


/* ==========================================
   TAMPILKAN 00 - 99
========================================== */

function tampilBukuMimpi() {

    const container =
        document.getElementById(
            "bukuMimpi"
        );

    if (!container) return;

    container.innerHTML = "";

    for (
        let i = 0;
        i <= 99;
        i++
    ) {

        const angka =
            String(i).padStart(2, "0");

        const item =
            document.createElement("div");

        item.className =
            "mimpi-item";

        item.textContent =
            angka;

        item.onclick =
            function() {

                bukaMimpi(angka);

            };

        container.appendChild(item);

    }

}


/* ==========================================
   BUKA DETAIL
========================================== */

function bukaMimpi(angka) {

    const arti =
        bukuMimpi[angka]
        || "Belum ada arti";


    const detail =
        document.getElementById(
            "mimpiDetail"
        );


    detail.innerHTML = `

        <div class="mimpi-number">
            ${angka}
        </div>

        <div class="mimpi-title">
            ${arti}
        </div>

        <div class="mimpi-desc">
            Arti Buku Mimpi ${angka}
        </div>

    `;


    document.getElementById(
        "mimpiModal"
    ).style.display = "flex";

}


/* ==========================================
   TUTUP POPUP
========================================== */

function tutupMimpi() {

    document.getElementById(
        "mimpiModal"
    ).style.display = "none";

}


/* ==========================================
   JALANKAN
========================================== */

tampilBukuMimpi();

/* BUKU MIMPI */

