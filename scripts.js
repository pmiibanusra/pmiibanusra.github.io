// Variabel Global untuk elemen DOM
const pageHeader = document.getElementById('pageHeader'); 
const hamburgerButton = document.getElementById('hamburgerButton');
const menuPanel = document.getElementById('sideMenu'); 
const closeSideMenuButton = document.getElementById('closeSideMenuButton'); 
const menuLinks = document.querySelectorAll('#sideMenu .menu-link'); 
const topLeftLogo = document.getElementById('topLeftLogo'); 
const scrollThreshold = 50; 

const gifColorOverlay = document.querySelector('.gif-color-overlay');
const bodyElement = document.body;
const originalBodyBgImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3FjMmd4YTI0eWlubTduaThqbzBobmtiYTJzeGFkYjlxaWVoc25ybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eS6c9bqOnxIPBpKFwS/giphy.gif')";

const pageHome = document.getElementById('page-home');
const pageAbout = document.getElementById('page-about');
const pageTeam = document.getElementById('page-team');
const pageRelease = document.getElementById('page-release');
const pageDatabase = document.getElementById('page-database');
const selengkapnyaButton = document.getElementById('selengkapnyaButton');
const pelajariLebihLanjutContent = document.getElementById('pelajari-lebih-lanjut-content');

const allPageWrappers = document.querySelectorAll('.page-content-wrapper');

const releaseListView = document.getElementById('release-list-view');
const releaseDetailView = document.getElementById('release-detail-view');
const backToReleaseListButton = document.getElementById('back-to-release-list');
const detailReleaseImage = document.getElementById('detail-release-image');
const detailReleaseTitle = document.getElementById('detail-release-title');
const detailReleaseDate = document.getElementById('detail-release-date');
const detailReleaseContent = document.getElementById('detail-release-content');
const latestReleasesList = document.getElementById('latest-releases-list');
const releaseGrid = document.getElementById('releaseGrid');
const homeNewsGrid = document.getElementById('homeNewsGrid'); 
const homeTestimonialGrid = document.getElementById('homeTestimonialGrid'); 
const loadMoreReleasesButton = document.getElementById('loadMoreReleasesButton'); // Tombol Baca Lainnya

// Variabel untuk paginasi berita
let currentlyDisplayedReleases = 0;
const releasesPerPage = 6; 

// Data Berita Baru
const sampleReleaseData = [
    {
        id: 1,
        title: "Muzakkir Berkomitmen Merevolusi Pendidikan di Bali Nusra",
        date: "31 Mei 2025",
        shortDesc: "Ahmad Muzakkir akan meluncurkan program beasiswa serta pelatihan vokasi guna membekali generasi muda.",
        fullDesc: "Ahmad Muzakkir, Ketua PKC PMII Bali Nusra yang baru terpilih, menyatakan komitmennya untuk meningkatkan akses dan kualitas pendidikan di wilayah Bali Nusra. Dalam rencananya, ia akan meluncurkan program beasiswa serta pelatihan vokasi guna membekali generasi muda dengan keterampilan yang relevan di era modern. Muzakkir menjelaskan bahwa ia akan bekerja sama dengan institusi pendidikan lokal untuk mengembangkan kurikulum yang selaras dengan kebutuhan industri. Program beasiswa akan diprioritaskan bagi pelajar berprestasi dari keluarga kurang mampu, sementara pelatihan vokasi akan fokus pada bidang teknologi informasi, pertanian, dan pariwisata. “Pendidikan adalah kunci masa depan, dan kami ingin memastikan setiap anak muda memiliki kesempatan untuk berkembang,” ujarnya.",
        imageUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEh1QTUM0jBBT6uldKzGqhY5jWc4owWiT2z2ycO4co0Lpja4NrzwmAMAgse0ydr3WgH2R7wNa-11jQdicoGnaJ97K_mGZUcpVpUugCJk9mPLIyXWhf50ErMTB4YV0JuZYRMSvRHofFPAz5eR7PNxd-FAJwHLJXC_JBG706SpkJbh1CtCTFZLuHWSrCQS=w640-h352",
        articleUrl: "#" 
    },
    {
        id: 2,
        title: "Muzakkir Dorong Nilai Islam dalam Pembinaan Generasi Muda",
        date: "31 Mei 2025",
        shortDesc: "Ahmad Muzakkir bertekad membentuk generasi muda berakhlak mulia melalui penguatan nilai-nilai Islam.",
        fullDesc: "Ahmad Muzakkir, Ketua PKC PMII Bali Nusra, bertekad membentuk generasi muda yang berakhlak mulia melalui penguatan nilai-nilai Islam. Ia akan mengadakan kajian Islam rutin dan program dakwah komunitas untuk menanamkan etika dalam kehidupan sehari-hari. Kajian Islam akan digelar di masjid dan sekolah dengan melibatkan ulama serta tokoh agama sebagai pembicara. Sementara itu, program dakwah komunitas akan mengajak pemuda berpartisipasi dalam kegiatan sosial berbasis nilai Islam, seperti bakti sosial dan pengajian kelompok. “Kami ingin generasi muda tidak hanya cerdas, tetapi juga memiliki moral yang kuat,” kata Muzakkir.",
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCpnVqk49BiPF7oGNRGZFL2VGBMHy916Ya4PdVSDyF4k2kN9DIaAaGYfF0fW_BEC5Q0dgt24C6pHkmMUSUUEpokOlAZ8j-vVq9QzdfQOK9gkb8Sf7_o9hskO4IAabhLC1BEikkr-hD40I2GD9PHAplU80LhqETGyjHgXey_4sIjbameJYGp1gwuYyW3ck/w1200-h630-p-k-no-nu/IMG-20241001-WA0024.jpg",
        articleUrl: "#"
    },
    {
        id: 3,
        title: "Muzakkir Prioritaskan Kesejahteraan Masyarakat Bali Nusra",
        date: "31 Mei 2025",
        shortDesc: "Ahmad Muzakkir menegaskan komitmennya untuk mewujudkan keadilan sosial melalui inisiatif bantuan.",
        fullDesc: "Ahmad Muzakkir, Ketua PKC PMII Bali Nusra, menegaskan komitmennya untuk mewujudkan keadilan sosial melalui inisiatif bantuan bagi masyarakat kurang mampu. Ia juga akan mengorganisir program sukarela untuk menangani permasalahan sosial yang mendesak di wilayah tersebut. Inisiatif ini mencakup program bantuan pangan dan kesehatan untuk keluarga miskin. Selain itu, program sukarela akan melibatkan anggota PMII dan masyarakat umum dalam aksi seperti pembersihan lingkungan dan bantuan korban bencana. “Kesejahteraan masyarakat adalah tanggung jawab bersama,” tegas Muzakkir.",
        imageUrl: "https://lombokfokus.com/wp-content/uploads/2024/10/IMG-20241001-WA0060.jpg",
        articleUrl: "#"
    },
    {
        id: 4,
        title: "Inisiatif Hijau: Rencana Muzakkir untuk Masa Depan Berkelanjutan",
        date: "31 Mei 2025",
        shortDesc: "Ahmad Muzakkir berjanji menjadikan Bali Nusra lebih hijau melalui promosi praktik ramah lingkungan.",
        fullDesc: "Ahmad Muzakkir, Ketua PKC PMII Bali Nusra, berjanji menjadikan Bali Nusra lebih hijau melalui promosi praktik ramah lingkungan dan kebijakan pelestarian sumber daya alam. Ia ingin menciptakan lingkungan yang lestari untuk generasi mendatang. Muzakkir akan berkolaborasi dengan pemerintah daerah dan organisasi lingkungan untuk mengembangkan kebijakan hijau. Praktik yang dipromosikan meliputi pengelolaan sampah, penggunaan energi terbarukan, dan penanaman pohon. “Kita harus menjaga bumi ini demi anak cucu kita,” ungkapnya.",
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRJKTksV8aJO7WLBBeBwysZf2WNpdIDgR5TsHby3y8d13RLRpkCwhFVlPQZofhNhGIS56f2BRYTQbUD_RZ_q5tpuqTx8C8hXyOQH5Dt_uGLy61DBZkRcL83huz76mmTWJyNaM-U8xlWg_xm2s5d-BzTjzm0ZA3Isq_4TVMPw-NNs_4uPFIhnTxS96mGS4/s1599/IMG-20240603-WA0021.jpg",
        articleUrl: "#"
    },
    {
        id: 5,
        title: "Membangun Kesatuan: Muzakkir Dukung Dialog Antaragama",
        date: "31 Mei 2025",
        shortDesc: "Ahmad Muzakkir akan mengadakan forum antaragama dan program pertukaran budaya untuk harmoni sosial.",
        fullDesc: "Ahmad Muzakkir, Ketua PKC PMII Bali Nusra, akan mengadakan forum antaragama dan program pertukaran budaya untuk menciptakan harmoni sosial. Ia berharap dapat mempererat hubungan antar komunitas beragama demi perdamaian yang berkelanjutan. Forum antaragama akan melibatkan tokoh lintas agama untuk berdialog, sementara program pertukaran budaya akan mengajak pemuda dari berbagai latar belakang berpartisipasi dalam kegiatan yang memupuk toleransi. “Perbedaan adalah kekayaan yang harus kita jaga,” kata Muzakkir.",
        imageUrl: "https://lombokfokus.com/wp-content/uploads/2025/05/IMG-20250502-WA0024.jpg",
        articleUrl: "#"
    },
    {
        id: 6,
        title: "Memberdayakan Generasi Muda: Fokus Muzakkir pada Kepemimpinan dan Inovasi",
        date: "31 Mei 2025",
        shortDesc: "Ahmad Muzakkir berkomitmen mendukung pemuda menjadi pemimpin dan wirausahawan melalui pelatihan.",
        fullDesc: "Ahmad Muzakkir, Ketua PKC PMII Bali Nusra, berkomitmen mendukung pemuda menjadi pemimpin dan wirausahawan melalui pelatihan kepemimpinan dan workshop inovasi. Langkah ini bertujuan mendorong kemajuan ekonomi dan sosial di wilayah tersebut. Pelatihan kepemimpinan akan mencakup komunikasi, manajemen konflik, dan pengambilan keputusan, sedangkan workshop inovasi akan fokus pada pengembangan ide bisnis dan teknologi. “Pemuda adalah agen perubahan, dan kami akan berikan mereka alat untuk sukses,” ujar Muzakkir.",
        imageUrl: "https://lombokfokus.com/wp-content/uploads/2025/05/IMG-20250530-WA0055.jpg",
        articleUrl: "#"
    },
    {
        id: 7,
        title: "Melestarikan Warisan: Visi Budaya Muzakkir",
        date: "31 Mei 2025",
        shortDesc: "Ahmad Muzakkir berencana menggelar festival budaya dan mendukung pengrajin tradisional.",
        fullDesc: "Ahmad Muzakkir, Ketua PKC PMII Bali Nusra, berencana menggelar festival budaya dan mendukung pengrajin tradisional untuk menjaga identitas lokal. Ia ingin warisan budaya Bali Nusra tetap hidup di tengah arus modernisasi. Festival budaya tahunan akan menampilkan seni, musik, dan tarian tradisional, sementara dukungan bagi pengrajin mencakup pelatihan keterampilan dan akses pasar. “Budaya adalah jati diri kita yang harus dilestarikan,” tegas Muzakkir.",
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheFXurWEeHA4quG7JngJCqt_OhEC_GhW7FhceSbF9C73-KqU7qfI8PH3rm9cGrTrS8NDu9WKISkPFYSsV3-MdZ1Am3j-fDEqdiwnxVlwWqhzGF-5IRMwi-H5DNHXE4I0GFTFWh98wtBInkwCAn6wCOC2v6A3Bk9AWInwpF_V7oOE5_XumI6iKFvppA/s1396/IMG-20220825-WA0067.jpg",
        articleUrl: "#"
    },
    {
        id: 8,
        title: "Menjembatani Kesenjangan Digital: Inisiatif Teknologi Muzakkir",
        date: "31 Mei 2025",
        shortDesc: "Ahmad Muzakkir akan meningkatkan literasi digital di kalangan pelajar dengan akses teknologi dan lokakarya.",
        fullDesc: "Ahmad Muzakkir, Ketua PKC PMII Bali Nusra, akan meningkatkan literasi digital di kalangan pelajar dengan menyediakan akses teknologi dan lokakarya terkait. Ia ingin generasi muda siap bersaing di era digital. Akses teknologi akan diwujudkan melalui penyediaan komputer dan internet di sekolah, sedangkan lokakarya akan membahas keamanan online dan pengembangan web. “Digitalisasi adalah keniscayaan, dan kita harus siap,” ungkap Muzakkir.",
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHjyJ3TxK8V36fIyMUHOw_lb9g1mIxYJ4RrirSUOHS2k5OKuZTM02yyhIHC-72raYt0ujSN55du0_7gT7cp4X0tQe_-jx-AX0w1hmx782t8sLxBT_eN6ymV2f-ZYiQnDrL2Y7-wYu96onCwLLP-K_qT6mmOni0hM2cdW7mjjm-n5mhNkuYf9MF_f7om13k/s16000-rw/IMG-20241001-WA0149.jpg",
        articleUrl: "#"
    },
    {
        id: 9,
        title: "Masyarakat Sehat: Agenda Kesehatan Muzakkir",
        date: "31 Mei 2025",
        shortDesc: "Ahmad Muzakkir menjadikan kesehatan prioritas dengan kampanye kesehatan dan peningkatan akses layanan medis.",
        fullDesc: "Ahmad Muzakkir, Ketua PKC PMII Bali Nusra, menjadikan kesehatan sebagai prioritas dengan mengadakan kampanye kesehatan dan meningkatkan akses layanan medis. Ia ingin meningkatkan kualitas hidup masyarakat secara menyeluruh. Kampanye kesehatan akan meliputi pemeriksaan gratis dan edukasi gaya hidup sehat, sementara akses layanan medis akan diperluas melalui kerjasama dengan rumah sakit lokal. “Masyarakat yang sehat adalah masyarakat yang kuat,” kata Muzakkir.",
        imageUrl: "https://kopitv.id/wp-content/uploads/2024/12/IMG-20241214-WA0045.jpg",
        articleUrl: "#"
    }
];

const sampleTestimonialData = [
    { id: 1, name: "KH Nasaruddin Umar", title: "Menteri Agama", text: "PMII telah membentuk karakter kepemimpinan yang inklusif dan moderat. Nilai-nilai ini sangat penting dalam menjaga harmoni kehidupan beragama di Indonesia.", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Menteri_Agama_Nasaruddin_Umar.jpg/250px-Menteri_Agama_Nasaruddin_Umar.jpg" },
    { id: 2, name: "Muhaimin Iskandar (Cak Imin)", title: "Menteri Koordinator Pemberdayaan Masyarakat", text: "PMII adalah kawah candradimuka yang menempa kader-kader muda menjadi pemimpin yang tangguh dan berintegritas.", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Muhaimin_Iskandar%2C_Wakil_Ketua_DPR.jpg/250px-Muhaimin_Iskandar%2C_Wakil_Ketua_DPR.jpg" },
    { id: 3, name: "Nusron Wahid", title: "Menteri Agraria dan Tata Ruang/Kepala BPN", text: "Pengalaman saya di PMII mengajarkan pentingnya keadilan sosial dan keberpihakan kepada rakyat kecil, yang saya terapkan dalam kebijakan agraria.", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nusron_Wahid%2C_Menteri_Agraria_dan_Tata_Ruang_%282024%29_%28cropped%29.png/250px-Nusron_Wahid%2C_Menteri_Agraria_dan_Tata_Ruang_%282024%29_%28cropped%29.png" },
    { id: 4, name: "Arifatul Choiri Fauzi", title: "Menteri Pemberdayaan Perempuan dan Perlindungan Anak", text: "PMII memberikan ruang bagi perempuan untuk berperan aktif dalam kepemimpinan dan pengambilan keputusan.", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Arifah_Choiri_Fauzi_saat_Serah_Terima_Jabatan_Menteri_Pemberdayaan_Perempuan_dan_Perlindungan_Anak_%282024%29.png/250px-Arifah_Choiri_Fauzi_saat_Serah_Terima_Jabatan_Menteri_Pemberdayaan_Perempuan_dan_Perlindungan_Anak_%282024%29.png" },
    { id: 5, name: "Abdul Kadir Karding", title: "Menteri Perlindungan Pekerja Migran Indonesia", text: "Nilai-nilai perjuangan dan solidaritas yang saya pelajari di PMII menjadi dasar dalam memperjuangkan hak-hak pekerja migran.", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Abdul_Kadir_Karding%2C_Menteri_Perlindungan_Pekerja_Migran_%282024%29.jpg" },
    { id: 6, name: "Aminuddin Ma’ruf", title: "Wakil Menteri BUMN", text: "PMII membentuk saya menjadi pribadi yang adaptif dan inovatif, yang sangat berguna dalam menghadapi tantangan di sektor BUMN.", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Aminuddin_Ma%27ruf%2C_Wakil_Menteri_BUMN_%282024%29.jpg/250px-Aminuddin_Ma%27ruf%2C_Wakil_Menteri_BUMN_%282024%29.jpg" }
];

// Fungsi untuk menampilkan notifikasi kustom
function showNotification(message, type = 'info', duration = 3000) {
    const notificationArea = document.getElementById('notification-area');
    if (!notificationArea) return;

    const toast = document.createElement('div');
    toast.className = `notification-toast ${type}`;
    toast.textContent = message;
    notificationArea.appendChild(toast);

    // Memicu transisi
    setTimeout(() => {
        toast.classList.add('show');
    }, 10); 

    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => {
            if (toast.parentElement) {
                 toast.remove();
            }
        });
    }, duration);
}

// Fungsi untuk menampilkan halaman
function showPage(pageToShowWrapper) {
    let activePageFound = false;
    allPageWrappers.forEach(wrapper => {
        if (wrapper.classList.contains('active-page')) {
            activePageFound = true;
            wrapper.classList.remove('active-page'); 
        }
    });

    const delay = activePageFound ? 10 : 0; 

    setTimeout(() => {
        if (pageToShowWrapper) { 
            pageToShowWrapper.classList.add('active-page');
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
            observeElementsForReveal(); 
        }

        const isHomePage = pageToShowWrapper === pageHome;

        bodyElement.style.backgroundImage = isHomePage ? originalBodyBgImage : 'none';
        bodyElement.style.backgroundColor = isHomePage ? '' : 'white'; 
        if (gifColorOverlay) {
            if (isHomePage) gifColorOverlay.classList.add('active');
            else gifColorOverlay.classList.remove('active');
        }
        
        if (isHomePage) {
            pageHeader.classList.remove('header-solid-bg');
            if (window.scrollY > scrollThreshold) {
                pageHeader.classList.add('scrolled');
            } else {
                pageHeader.classList.remove('scrolled');
            }
        } else {
            pageHeader.classList.add('header-solid-bg');
            pageHeader.classList.remove('scrolled'); 
        }

        if (pageToShowWrapper === pageRelease) {
            if(releaseListView) releaseListView.classList.remove('hidden');
            if(releaseDetailView) releaseDetailView.classList.add('hidden');
            if(releaseGrid) releaseGrid.innerHTML = ''; // Kosongkan grid sebelum render
            currentlyDisplayedReleases = 0; // Reset counter
            renderReleaseBatch(); // Render batch awal
        }
    }, delay);
}

// Event listener untuk scroll header
window.addEventListener('scroll', () => {
    if (pageHeader && !pageHeader.classList.contains('header-solid-bg')) { 
        if (window.scrollY > scrollThreshold) {
            pageHeader.classList.add('scrolled');
        } else {
            pageHeader.classList.remove('scrolled');
        }
    }
});

// Fungsi untuk membuka dan menutup side menu
function openSideMenu() {
    if(menuPanel) menuPanel.classList.add('open');
}
function closeSideMenu() {
    if(menuPanel) menuPanel.classList.remove('open');
}

if(hamburgerButton) hamburgerButton.addEventListener('click', openSideMenu);
if(closeSideMenuButton) closeSideMenuButton.addEventListener('click', closeSideMenu);

// Fungsi untuk menandai link menu yang aktif
function setActiveLink(activeLink) {
    menuLinks.forEach(link => {
        link.classList.remove('active'); 
    });
    if (activeLink) {
        activeLink.classList.add('active'); 
    }
}

// Event listener untuk link menu
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) { 
        e.preventDefault(); 
        setActiveLink(this); 
        closeSideMenu(); 
        
        const targetHref = this.getAttribute('href');
        let pageToDisplay;
        switch (targetHref) {
            case '#home':   pageToDisplay = pageHome; break;
            case '#about':  pageToDisplay = pageAbout; break;
            case '#team':   pageToDisplay = pageTeam; break;
            case '#release': pageToDisplay = pageRelease; break;
            case '#database':pageToDisplay = pageDatabase; break;
            default:        pageToDisplay = pageHome; 
        }
        showPage(pageToDisplay);
    });
});

// Event listener untuk tombol "Selengkapnya"
if(selengkapnyaButton) {
    selengkapnyaButton.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(pageHome); 
        setActiveLink(document.querySelector('#sideMenu .menu-link[href="#home"]')); 
        if(pelajariLebihLanjutContent) {
            setTimeout(() => {
                pelajariLebihLanjutContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300); 
        }
    });
}

// Tampilkan halaman utama saat pertama kali dimuat
showPage(pageHome); 
const homeLinkInitial = document.querySelector('#sideMenu .menu-link[href="#home"]'); 
if (homeLinkInitial) {
    setActiveLink(homeLinkInitial);
}

// Fungsi untuk animasi counter
function animateCounter(elementId, targetValue, duration = 2000) {
    const element = document.getElementById(elementId);
    if (!element) return;
    let startValue = 0;
    const frameDuration = 1000 / 60; 
    const totalFrames = Math.round(duration / frameDuration);
    const increment = targetValue / totalFrames;
    let currentFrame = 0;

    function updateCounter() {
        currentFrame++;
        startValue += increment;
        if (currentFrame < totalFrames) {
            element.textContent = Math.floor(startValue);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = Math.floor(targetValue); 
        }
    }
    requestAnimationFrame(updateCounter);
}

// Data untuk dropdown
const fakultasData = [
    "Adab dan Humaniora", "Dakwah dan Komunikasi", "Dirasat Islamiyah", "Ekonomi dan Bisnis", 
    "Ekonomi dan Bisnis Islam", "Filsafat", "Hukum", "Ilmu Kesehatan", "Ilmu Komputer", 
    "Ilmu Pendidikan", "Ilmu Sosial dan Ilmu Politik", "Kedokteran", "Kedokteran Gigi", 
    "Kedokteran Hewan", "Kehutanan", "Keperawatan", "Kesehatan Masyarakat", "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
    "Pendidikan", "Perikanan dan Ilmu Kelautan", "Pertanian", "Peternakan", "Psikologi", 
    "Sains dan Teknologi", "Sastra dan Budaya", "Syariah dan Hukum", "Tarbiyah dan Keguruan", 
    "Teknik", "Teknologi Industri", "Teknologi Pertanian", "Teologi", "Ushuluddin dan Pemikiran Islam"
].sort();

const universitasBaliNusra = [
    "Institut Agama Islam Hamzanwadi NW Lombok Timur", "Institut Seni Indonesia Denpasar", "Politeknik Negeri Bali", 
    "Politeknik Pariwisata Lombok", "Politeknik Pertanian Negeri Kupang", "Universitas Dhyana Pura", 
    "Universitas Flores", "Universitas Hindu Indonesia", "Universitas Islam Negeri Mataram", 
    "Universitas Katolik Widya Mandira Kupang", "Universitas Kristen Artha Wacana", "Universitas Mahasaraswati Denpasar", 
    "Universitas Mataram", "Universitas Muhammadiyah Kupang", "Universitas Muhammadiyah Mataram", 
    "Universitas Nahdlatul Ulama Nusa Tenggara Barat", "Universitas Nusa Cendana", "Universitas Pendidikan Ganesha", 
    "Universitas Teknologi Sumbawa", "Universitas Timor", "Universitas Udayana", "Universitas Warmadewa"
].sort();

const cabangBaliNusra = [
    "Kab. Alor", "Kab. Badung", "Kab. Bangli", "Kab. Belu", "Kab. Bima", "Kota Bima", "Kab. Buleleng", 
    "Kota Denpasar", "Kab. Dompu", "Kab. Ende", "Kab. Flores Timur", "Kab. Gianyar", "Kab. Jembrana", 
    "Kab. Karangasem", "Kab. Klungkung", "Kota Kupang", "Kab. Kupang", "Kab. Lembata", "Kab. Lombok Barat", 
    "Kab. Lombok Tengah", "Kab. Lombok Timur", "Kab. Lombok Utara", "Kab. Malaka", "Kab. Manggarai", 
    "Kab. Manggarai Barat", "Kab. Manggarai Timur", "Kota Mataram", "Kab. Nagekeo", "Kab. Ngada", 
    "Kab. Rote Ndao", "Kab. Sabu Raijua", "Kab. Sikka", "Kab. Sumbawa", "Kab. Sumbawa Barat", 
    "Kab. Sumba Barat", "Kab. Sumba Barat Daya", "Kab. Sumba Tengah", "Kab. Sumba Timur", "Kab. Tabanan", 
    "Kab. Timor Tengah Selatan", "Kab. Timor Tengah Utara"
].sort();

// Fungsi untuk mengisi elemen select
function populateSelect(selectId, dataArray) {
    const selectElement = document.getElementById(selectId);
    if (selectElement) {
        dataArray.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectElement.appendChild(option);
        });
    }
}

// Fungsi untuk membuat kartu anggota tim
function createTeamMemberCard(nama, jabatan, fotoUrl, delay = 0) { 
    return `
        <div class="team-member-card card reveal-on-scroll" style="transition-delay: ${delay}s;">
            <img src="${fotoUrl}" alt="Foto ${nama}" onerror="this.onerror=null;this.src='https://placehold.co/150x150/FFCB05/1F2937?text=Foto';">
            <h3 class="member-name">${nama}</h3>
            <p class="member-title">${jabatan}</p>
        </div>
    `;
}

// Fungsi untuk membuat kartu rilis
function createReleaseCard(item, delay = 0) { 
    return `
        <div class="release-card-custom card flex flex-col reveal-on-scroll" style="transition-delay: ${delay}s;">
            <img src="${item.imageUrl}" alt="Gambar ${item.title}" class="w-full h-auto object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x350/FFCB05/1F2937?text=Gagal+Muat';">
            <div class="release-content flex-grow flex flex-col">
                <h3 class="text-sm sm:text-base md:text-lg font-semibold mt-2 mb-1">${item.title.substring(0,35)}${item.title.length > 35 ? '...' : ''}</h3>
                <p class="release-date text-xs sm:text-sm mb-2">${item.date}</p>
                <p class="text-xs sm:text-sm flex-grow mb-2">${item.shortDesc.substring(0,60)}${item.shortDesc.length > 60 ? '...' : ''}</p>
                <a href="#" class="release-read-more text-xs sm:text-sm mt-auto self-start font-semibold" data-id="${item.id}">Baca Selengkapnya &rarr;</a>
            </div>
        </div>
    `;
}

// Fungsi untuk membuat kartu berita di halaman utama
function createHomeNewsCard(item, delay = 0) {
     return `
        <div class="news-card-custom-bg card flex flex-col reveal-on-scroll" style="transition-delay: ${delay}s;"> 
            <img src="${item.imageUrl}" alt="Gambar Berita ${item.title}" class="w-full h-auto object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x338/E2E8F0/4A5568?text=Gagal+Muat';">
            <div class="news-content flex-grow flex flex-col">
                <h3 class="font-semibold mt-2 mb-1 text-sm sm:text-base md:text-lg">${item.title.substring(0,30)}${item.title.length > 30 ? '...' : ''}</h3>
                <p class="text-xs sm:text-sm flex-grow mb-2">${item.shortDesc.substring(0,50)}${item.shortDesc.length > 50 ? '...' : ''}</p>
                <a href="#" class="release-read-more-home text-xs sm:text-sm mt-auto self-start font-semibold" data-id="${item.id}">Baca Selengkapnya &rarr;</a>
            </div>
        </div>
    `;
}

// Fungsi untuk membuat kartu testimoni di halaman utama
function createHomeTestimonialCard(item, delay = 0) {
    return `
        <div class="testimonial-card-custom-bg card text-center flex flex-col justify-between p-3 sm:p-4 reveal-on-scroll" style="transition-delay: ${delay}s;"> 
            <div>
                <img src="${item.photoUrl}" alt="Foto Testimoni ${item.name}" class="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-2 sm:mb-3 border-2 shadow-md" onerror="this.onerror=null;this.src='https://placehold.co/80x80/FFCB05/1F2937?text=Foto';">
                <p class="testimonial-text text-xs sm:text-sm italic mb-2">"${item.text}"</p>
            </div>
            <div>
                <p class="testimonial-name text-xs sm:text-sm font-semibold">- ${item.name}</p>
                <p class="testimonial-title text-xs">${item.title}</p>
            </div>
        </div>
    `;
}

// Fungsi untuk menampilkan detail rilis
function showReleaseDetail(itemId) {
    const item = sampleReleaseData.find(r => r.id === parseInt(itemId));
    if (item && detailReleaseImage && detailReleaseTitle && detailReleaseDate && detailReleaseContent && latestReleasesList && releaseListView && releaseDetailView) {
        detailReleaseImage.src = item.imageUrl;
        detailReleaseImage.alt = `Gambar ${item.title}`;
        detailReleaseTitle.textContent = item.title;
        detailReleaseDate.textContent = item.date;
        
        if (item.articleUrl && item.articleUrl !== "#") {
            detailReleaseContent.innerHTML = `<p class="mb-4">${item.fullDesc}</p>
                                             <p class="mt-4">Untuk detail lengkap, silakan kunjungi sumber berita asli:</p>
                                             <a href="${item.articleUrl}" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 mt-2">
                                               Baca Sumber Asli &rarr;
                                             </a>`;
        } else {
            detailReleaseContent.innerHTML = `<p class="mb-4">${item.fullDesc}</p>
                                             <p class="mt-4 text-gray-500 italic">Sumber artikel eksternal tidak tersedia untuk berita ini.</p>`;
        }


        latestReleasesList.innerHTML = ''; 
        sampleReleaseData.filter(r => r.id !== item.id).slice(0, 5).forEach(otherItem => { 
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = "#";
            a.textContent = otherItem.title;
            a.dataset.id = otherItem.id;
            a.classList.add('release-read-more'); 
            li.appendChild(a);
            latestReleasesList.appendChild(li);
        });
        
        latestReleasesList.querySelectorAll('.release-read-more').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const newId = this.dataset.id;
                showReleaseDetail(newId); 
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        releaseListView.classList.add('hidden');
        releaseDetailView.classList.remove('hidden');
        observeElementsForReveal(releaseDetailView);
    }
}

// Event listener untuk tombol kembali ke daftar rilis
if (backToReleaseListButton && releaseListView && releaseDetailView) {
    backToReleaseListButton.addEventListener('click', () => {
        releaseDetailView.classList.add('hidden');
        releaseListView.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        observeElementsForReveal(releaseListView); 
    });
}

// Intersection Observer untuk animasi scroll
let observer;
function observeElementsForReveal(container = document) {
    const revealElements = container.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;

    if (observer) { 
        observer.disconnect();
    }

    observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observerInstance.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 }); 

    revealElements.forEach(el => {
        observer.observe(el);
    });
}

// Fungsi untuk merender batch berita di halaman Release
function renderReleaseBatch() {
    if (!releaseGrid) return;
    
    const startIndex = currentlyDisplayedReleases;
    const endIndex = Math.min(startIndex + releasesPerPage, sampleReleaseData.length);
    
    let newCardsHTML = '';
    for (let i = startIndex; i < endIndex; i++) {
        newCardsHTML += createReleaseCard(sampleReleaseData[i], i * 0.05);
    }
    releaseGrid.innerHTML += newCardsHTML; // Tambahkan kartu baru
    currentlyDisplayedReleases = endIndex;

    // Tambahkan event listener ke link "Baca Selengkapnya" yang baru
    const newLinks = releaseGrid.querySelectorAll('.release-read-more:not(.listener-added)');
    newLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const itemId = this.dataset.id;
            showReleaseDetail(itemId);
        });
        link.classList.add('listener-added');
    });

    // Perbarui visibilitas tombol "Baca Lainnya"
    if (loadMoreReleasesButton) {
        if (currentlyDisplayedReleases >= sampleReleaseData.length) {
            loadMoreReleasesButton.style.display = 'none';
        } else {
            loadMoreReleasesButton.style.display = 'inline-block';
        }
    }
    observeElementsForReveal(releaseGrid); // Amati elemen baru untuk animasi scroll
}


// Event listener saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    animateCounter('counter1', 15);
    animateCounter('counter2', 45);
    animateCounter('counter3', 125);

    populateSelect('asal_rayon', fakultasData);
    populateSelect('asal_komisariat', universitasBaliNusra);
    populateSelect('asal_cabang', cabangBaliNusra);

    const namaLengkapInput = document.getElementById('nama_lengkap');
    if (namaLengkapInput) {
        namaLengkapInput.addEventListener('input', function() {
            this.value = this.value.toUpperCase();
        });
    }

    const formKartuAnggota = document.getElementById('formKartuAnggota');
    const submitKtaButton = document.getElementById('submitKtaButton');

    if(formKartuAnggota && submitKtaButton) {
        formKartuAnggota.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = formKartuAnggota.nama_lengkap.value.trim();
            const rayon = formKartuAnggota.asal_rayon.value;
            const komisariat = formKartuAnggota.asal_komisariat.value;
            const cabang = formKartuAnggota.asal_cabang.value;
            const sertifikat = formKartuAnggota.sertifikat_mapaba.files.length;

            if (!nama || !rayon || !komisariat || !cabang || !sertifikat) {
                showNotification('Harap lengkapi semua kolom formulir!', 'error');
                return;
            }
            
            submitKtaButton.classList.add('loading');
            submitKtaButton.disabled = true;

            setTimeout(() => {
                showNotification('Data formulir (simulasi) berhasil terkirim!', 'success');
                const formData = new FormData(this);
                console.log("Data Formulir:");
                for (let [key, value] of formData.entries()) {
                    console.log(key, value instanceof File ? value.name : value);
                }
                formKartuAnggota.reset(); 
                
                submitKtaButton.classList.remove('loading');
                submitKtaButton.disabled = false;
            }, 2000); 
        });
    }

    const unduhProdukHukumButton = document.getElementById('unduhProdukHukumButton');
    if (unduhProdukHukumButton) {
        unduhProdukHukumButton.addEventListener('click', () => {
            showNotification('Fitur unduh produk hukum akan segera tersedia.', 'info');
        });
    }

    const teamGrid = document.getElementById('teamGrid');
    if (teamGrid) {
        const teamData = [ 
            { name: "Mohammad Shofiyulloh Cokro", jabatan: "Ketua Umum PB PMII 2024–2027", fotoUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHjyJ3TxK8V36fIyMUHOw_lb9g1mIxYJ4RrirSUOHS2k5OKuZTM02yyhIHC-72raYt0ujSN55du0_7gT7cp4X0tQe_-jx-AX0w1hmx782t8sLxBT_eN6ymV2f-ZYiQnDrL2Y7-wYu96onCwLLP-K_qT6mmOni0hM2cdW7mjjm-n5mhNkuYf9MF_f7om13k/s3760/IMG-20241001-WA0149.jpg" },
            { name: "M. Irkham Tamrin", jabatan: "Sekretaris Jenderal PB PMII", fotoUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHjyJ3TxK8V36fIyMUHOw_lb9g1mIxYJ4RrirSUOHS2k5OKuZTM02yyhIHC-72raYt0ujSN55du0_7gT7cp4X0tQe_-jx-AX0w1hmx782t8sLxBT_eN6ymV2f-ZYiQnDrL2Y7-wYu96onCwLLP-K_qT6mmOni0hM2cdW7mjjm-n5mhNkuYf9MF_f7om13k/s3760/IMG-20241001-WA0149.jpg" },
            { name: "Sainuddin", jabatan: "Bendahara Umum PB PMII", fotoUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHjyJ3TxK8V36fIyMUHOw_lb9g1mIxYJ4RrirSUOHS2k5OKuZTM02yyhIHC-72raYt0ujSN55du0_7gT7cp4X0tQe_-jx-AX0w1hmx782t8sLxBT_eN6ymV2f-ZYiQnDrL2Y7-wYu96onCwLLP-K_qT6mmOni0hM2cdW7mjjm-n5mhNkuYf9MF_f7om13k/s3760/IMG-20241001-WA0149.jpg" },
            { name: "Acep Jamaludin", jabatan: "Ketua PB PMII", fotoUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHjyJ3TxK8V36fIyMUHOw_lb9g1mIxYJ4RrirSUOHS2k5OKuZTM02yyhIHC-72raYt0ujSN55du0_7gT7cp4X0tQe_-jx-AX0w1hmx782t8sLxBT_eN6ymV2f-ZYiQnDrL2Y7-wYu96onCwLLP-K_qT6mmOni0hM2cdW7mjjm-n5mhNkuYf9MF_f7om13k/s3760/IMG-20241001-WA0149.jpg" },
            { name: "Apriliana Eka Dani", jabatan: "Ketua PB PMII", fotoUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHjyJ3TxK8V36fIyMUHOw_lb9g1mIxYJ4RrirSUOHS2k5OKuZTM02yyhIHC-72raYt0ujSN55du0_7gT7cp4X0tQe_-jx-AX0w1hmx782t8sLxBT_eN6ymV2f-ZYiQnDrL2Y7-wYu96onCwLLP-K_qT6mmOni0hM2cdW7mjjm-n5mhNkuYf9MF_f7om13k/s3760/IMG-20241001-WA0149.jpg" },
            { name: "Muhammad Ainul Yaqin", jabatan: "Ketua PB PMII", fotoUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHjyJ3TxK8V36fIyMUHOw_lb9g1mIxYJ4RrirSUOHS2k5OKuZTM02yyhIHC-72raYt0ujSN55du0_7gT7cp4X0tQe_-jx-AX0w1hmx782t8sLxBT_eN6ymV2f-ZYiQnDrL2Y7-wYu96onCwLLP-K_qT6mmOni0hM2cdW7mjjm-n5mhNkuYf9MF_f7om13k/s3760/IMG-20241001-WA0149.jpg" }
        ];
        let teamCardsHTML = '';
        teamData.forEach((member, index) => { 
            teamCardsHTML += createTeamMemberCard(member.name, member.jabatan, member.fotoUrl, index * 0.1);
        });
        teamGrid.innerHTML = teamCardsHTML;
    }

    if (homeNewsGrid) {
        let homeNewsHTML = '';
        sampleReleaseData.slice(0,4).forEach((item, index) => { 
            homeNewsHTML += createHomeNewsCard(item, index * 0.1);
        });
        homeNewsGrid.innerHTML = homeNewsHTML;
        homeNewsGrid.querySelectorAll('.release-read-more-home').forEach(link => {
            link.addEventListener('click', function(e){
                e.preventDefault();
                const itemId = this.dataset.id;
                showPage(pageRelease); 
                setActiveLink(document.querySelector('#sideMenu .menu-link[href="#release"]'));
                setTimeout(() => showReleaseDetail(itemId), 50); 
            });
        });
    }

    if (homeTestimonialGrid) {
        let homeTestimonialHTML = '';
        sampleTestimonialData.slice(0,6).forEach((testi, index) => { 
            homeTestimonialHTML += createHomeTestimonialCard(testi, index * 0.1);
        });
        homeTestimonialGrid.innerHTML = homeTestimonialHTML;
    }

    // Inisialisasi Halaman Release dengan Paginasi
    if (releaseGrid && loadMoreReleasesButton) { 
        renderReleaseBatch(); // Tampilkan batch awal
        
        loadMoreReleasesButton.addEventListener('click', () => {
            renderReleaseBatch(); // Muat lebih banyak berita saat tombol diklik
        });
    } else if (releaseGrid) { 
         renderReleaseBatch(); 
    }
    
    observeElementsForReveal();
});
</script>
</body>
</html>
