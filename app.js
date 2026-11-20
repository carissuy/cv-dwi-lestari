// Application JavaScript for Dwi Lestari Mukti Palupi Portfolio Website

// Master Data of 49 Seminars & Workshops
const WORKSHOPS_DATA = [
  { no: 1, title: "Workshop Pengisian Borang AIPT dan Klinik Konsultasi", title_en: "Institutional Accreditation (AIPT) Form Workshop & Consultation Clinic", org: "APTISI Komisariat II Surakarta", year: 2014, category: "akreditasi" },
  { no: 2, title: "Aplikasi Terkini Patient Safety dalam Praktek Keperawatan Profesional", title_en: "Contemporary Patient Safety Applications in Professional Nursing Practice", org: "IKM Prodi DIII STIKes Kusuma Husada", year: 2014, category: "klinis" },
  { no: 3, title: "Seminar Nasional dan Workshop Easy with NANDA NIC-NOC: A Simple Approach", title_en: "National Conference & Workshop: Easy with NANDA NIC-NOC - A Simple Approach", org: "STIKes Kusuma Husada", year: 2014, category: "klinis" },
  { no: 4, title: "Workshop Pengisian Borang Akreditasi LAM-PTKes", title_en: "LAM-PTKes Health Accreditation Form Completion Workshop", org: "AIPDiKI Regional IV Jawa Tengah & D.I Yogyakarta", year: 2014, category: "akreditasi" },
  { no: 5, title: "Aplikasi Terkini Patient Safety dalam Praktek Keperawatan Profesional", title_en: "Patient Safety Current Applications in Professional Nursing", org: "IKM STIKES Kusuma Husada Surakarta", year: 2014, category: "klinis" },
  { no: 6, title: "Workshop Pengembangan Kurikulum DIII Keperawatan", title_en: "Diploma III Nursing Curriculum Development Workshop", org: "AKPER 17 Karanganyar", year: 2014, category: "akreditasi" },
  { no: 7, title: "Semnas Pelatihan Duta Kesehatan Tulang", title_en: "National Seminar & Bone Health Ambassador Training", org: "RS. Orthopedi Prof. DR. R. Soeharso Surakarta", year: 2014, category: "klinis" },
  { no: 8, title: "Pelatihan Buku Ajar bagi Dosen Perguruan Tinggi Swasta", title_en: "Textbook Writing Training for Private University Faculty", org: "Kopertis Wilayah VI Jawa Tengah", year: 2014, category: "akademik" },
  { no: 9, title: "Penyaji dalam Rangka Capping Day: Patient Safety", title_en: "Key Presenter on Capping Day: Patient Safety in Nursing", org: "AKPER 17 Karanganyar", year: 2014, category: "klinis" },
  { no: 10, title: "Lokakarya Pengembangan Ketrampilan Dasar Teknik Instruksional (PEKERTI)", title_en: "Basic Instructional Skills Development Workshop (PEKERTI)", org: "Kopertis Wilayah VI Jawa Tengah", year: 2015, category: "pedagogik" },
  { no: 11, title: "Workshop Penguatan Sistem Penjaminan Mutu Internal (SPMI) Perguruan Tinggi", title_en: "Internal Higher Education Quality Assurance System (SPMI) Workshop", org: "AIPDiKI Regional V Jawa Tengah dan D.I Yogyakarta", year: 2015, category: "akreditasi" },
  { no: 12, title: "Workshop Penelitian dan Pengabdian Masyarakat Dosen", title_en: "Faculty Research & Community Engagement Workshop", org: "AKPER 17 Karanganyar", year: 2015, category: "riset" },
  { no: 13, title: "Panitia Pelatihan Basic Trauma Cardiac Life Support (BTCLS)", title_en: "Organizing Committee: Basic Trauma Cardiac Life Support (BTCLS) Training", org: "Gadar Medik Indonesia", year: 2015, category: "klinis" },
  { no: 14, title: "Workshop dan Klinik Penyusunan Proposal Pengabdian kepada Masyarakat", title_en: "Community Service Proposal Writing Clinic & Workshop", org: "LPPM STIKES PKU Muhammadiyah Surakarta", year: 2015, category: "riset" },
  { no: 15, title: "Workshop Pendekatan Terapan (Applied Approach / AA) bagi Dosen PTS", title_en: "Applied Approach (AA) Pedagogical Development for Higher Education Faculty", org: "Kopertis Wilayah VI Jawa Tengah", year: 2016, category: "pedagogik" },
  { no: 16, title: "Workshop Pembelajaran dan Penelitian untuk Meningkatkan Kualitas Pendidikan", title_en: "Interactive Learning & Research Workshop for Quality Education", org: "AKPER 17 Karanganyar", year: 2016, category: "akademik" },
  { no: 17, title: "Workshop Percepatan Pengusulan Jabatan Fungsional Dosen PTS", title_en: "Academic Rank & Functional Position Acceleration Workshop", org: "Kopertis Wilayah VI Jawa Tengah", year: 2016, category: "akademik" },
  { no: 18, title: "Participation in Expert Lectures: 'How Memory Works in the Brain' with Prof. Akichika Mikami, MD., Ph.D (Chubu Gakuin University of Japan)", title_en: "Expert Lectures: 'How Memory Works in the Brain' with Prof. Akichika Mikami, MD., Ph.D (Chubu Gakuin Univ, Japan)", org: "STIKES PKU Muhammadiyah Surakarta", year: 2016, category: "internasional" },
  { no: 19, title: "Seminar dan Workshop Keperawatan: Penanganan Trauma Pasca Bencana", title_en: "Nursing Seminar & Workshop: Post-Disaster Trauma Care and Management", org: "RSJ dr. Arif Zainudin Surakarta", year: 2016, category: "klinis" },
  { no: 20, title: "Panitia Pelatihan Basic Trauma Cardiac Life Support (BTCLS)", title_en: "Organizing Committee: Basic Trauma Cardiac Life Support (BTCLS) Training", org: "Gadar Medik Indonesia", year: 2017, category: "klinis" },
  { no: 21, title: "Seminar Nasional: Reformasi Birokrasi untuk Tata Kelola Bersih dan Transparan", title_en: "National Conference: Bureaucratic Reform for Clean and Transparent Governance", org: "Universitas Sebelas Maret (UNS)", year: 2017, category: "akademik" },
  { no: 22, title: "Seminar Keperawatan Evidence-Based Nursing pada CKD on Hemodialisis", title_en: "Evidence-Based Nursing in Chronic Kidney Disease (CKD) on Hemodialysis", org: "DPD PPNI Kabupaten Karanganyar", year: 2017, category: "klinis" },
  { no: 23, title: "Panitia Pelatihan Basic Trauma Cardiac Life Support (BTCLS)", title_en: "Organizing Committee: Basic Trauma Cardiac Life Support (BTCLS) Training", org: "Gadar Medik Indonesia", year: 2018, category: "klinis" },
  { no: 24, title: "Seminar Keperawatan Solo Update: Bedah Orthopedi 2", title_en: "Solo Nursing Update: Orthopedic Surgical Nursing 2", org: "RSO Prof. dr. R. Soeharso Surakarta", year: 2018, category: "klinis" },
  { no: 25, title: "Workshop Review Soal Uji Kompetensi Nasional DIII Keperawatan", title_en: "National Nursing Competency Exam Question Item Review Workshop", org: "AIPViKI", year: 2018, category: "akreditasi" },
  { no: 26, title: "Bimbingan Teknis Keprotokolan bagi Tenaga Keprotokolan PTS", title_en: "Protocol & Diplomatic Etiquette Technical Guidance for Universities", org: "Kopertis Wilayah VI Jawa Tengah", year: 2018, category: "akademik" },
  { no: 27, title: "Workshop dan Klinik Penyusunan Proposal Penelitian Kemenristekdikti", title_en: "National Competitive Research Proposal Writing Clinic (Kemenristekdikti)", org: "Universitas Duta Bangsa Surakarta", year: 2019, category: "riset" },
  { no: 28, title: "Workshop Penyusunan Proposal Pengabdian Masyarakat Kemenristekdikti 2020", title_en: "National Community Service Proposal Writing Workshop (Kemenristekdikti)", org: "Universitas Duta Bangsa Surakarta", year: 2019, category: "riset" },
  { no: 29, title: "Seminar Nasional Keperawatan: Evidence-Based untuk Asuhan Keperawatan", title_en: "National Nursing Conference: Evidence-Based Clinical Nursing Practice", org: "IKMA KESMAS Pascasarjana UNS", year: 2019, category: "klinis" },
  { no: 30, title: "Management and Prevention of Sexually Transmitted Diseases during Pregnancy & Lactation", title_en: "Management & Prevention of Sexually Transmitted Diseases in Pregnancy", org: "DPW PPNI Jawa Tengah", year: 2019, category: "klinis" },
  { no: 31, title: "Seminar Nasional Keperawatan: Deteksi Dini & Manajemen Gagal Jantung", title_en: "National Nursing Conference: Early Detection & Management of Heart Failure", org: "DPW PPNI Jawa Tengah", year: 2019, category: "klinis" },
  { no: 32, title: "Penulisan Buku Ajar untuk Meningkatkan Kompetensi Dosen", title_en: "Academic Textbook Writing for Advancing Faculty Academic Excellence", org: "Universitas Duta Bangsa Surakarta", year: 2020, category: "akademik" },
  { no: 33, title: "Pengembangan Media Pembelajaran Inovatif Berbahasa Inggris di Era Industri 4.0", title_en: "Innovative English-Language Learning Media Development in Industry 4.0", org: "Universitas Duta Bangsa Surakarta", year: 2020, category: "pedagogik" },
  { no: 34, title: "Penyusunan Media Pembelajaran Digital Interaktif untuk Kompetensi Dosen", title_en: "Interactive Digital Learning Media Production for Higher Education", org: "Universitas Duta Bangsa Surakarta", year: 2020, category: "pedagogik" },
  { no: 35, title: "Penyusunan Proposal Penelitian Kemenristekdikti 2020", title_en: "National Research Proposal Formulations for Kemenristekdikti Grants", org: "Universitas Duta Bangsa Surakarta", year: 2020, category: "riset" },
  { no: 36, title: "Peningkatan Pembelajaran D3 Keperawatan dengan Project Based Learning (PBL)", title_en: "Project-Based Learning (PBL) Implementation in Degenerative Nursing", org: "Universitas Duta Bangsa Surakarta", year: 2023, category: "pedagogik" },
  { no: 37, title: "Aplikasi Standar SDKI, SIKI, SLKI dalam Asuhan Keperawatan", title_en: "Clinical Implementation of Indonesian Nursing Standards (SDKI, SIKI, SLKI)", org: "STIKES Tujuh Belas", year: 2023, category: "klinis" },
  { no: 38, title: "Management Chronic Care in Chronic Kidney Disease (CKD)", title_en: "Comprehensive Chronic Care Management in Chronic Kidney Disease", org: "Universitas Duta Bangsa Surakarta", year: 2023, category: "klinis" },
  { no: 39, title: "Aplikasi SDKI, SLKI, SIKI dalam Praktik Pelayanan Keperawatan", title_en: "Practical Integration of SDKI, SLKI, SIKI in Inpatient Clinical Care", org: "DPK PPNI RSUD Karanganyar", year: 2023, category: "klinis" },
  { no: 40, title: "Peninjauan Kurikulum Prodi D3 Keperawatan Fakultas Ilmu Keperawatan", title_en: "Nursing Curriculum Modernization & Review, Faculty of Health Sciences", org: "Universitas Duta Bangsa Surakarta", year: 2023, category: "akreditasi" },
  { no: 41, title: "In Recognition as Invited Guest Speaker: Contemporary Nursing & Health Challenges", title_en: "Distinguished International Guest Speaker at Universiti Kuala Lumpur", org: "UniKL (Universiti Kuala Lumpur, Malaysia)", year: 2024, category: "internasional" },
  { no: 42, title: "Penyusunan Buku Ajar: Kesehatan dan Keselamatan Kerja (K3)", title_en: "Author: Occupational Health and Safety (K3) Academic Textbook", org: "Penerbitan Buku Akademik", year: 2024, category: "akademik" },
  { no: 43, title: "Improving Mental Health through Various Fields of Health Sciences", title_en: "Improving Mental Health through Diverse Health Sciences Perspectives", org: "Universitas Duta Bangsa Surakarta", year: 2024, category: "klinis" },
  { no: 44, title: "Sertifikasi Keanggotaan Asosiasi Pengelola Jurnal Indonesia (APJI) (2025–2029)", title_en: "Certified Membership: Indonesian Association of Scientific Journal Managers (APJI)", org: "APJI Nasional", year: 2025, category: "akademik" },
  { no: 45, title: "IHT Penguji Objective Structured Clinical Examination (OSCE) Regional VII Jateng", title_en: "In-House Training: Certified Clinical OSCE Examiner, Central Java Region VII", org: "Universitas Duta Bangsa Surakarta", year: 2025, category: "klinis" },
  { no: 46, title: "Implementasi Kurikulum Berbasis Luaran (Outcome-Based Education / OBE)", title_en: "Outcome-Based Education (OBE) Higher Education Curriculum Implementation", org: "PT Mahakarya Citra Utama Group", year: 2026, category: "akreditasi" },
  { no: 47, title: "Mengenal dan Strategi Menghadapi Narcissistic Personality Disorder (NPD)", title_en: "Clinical Insights and Management Strategies for Narcissistic Personality Disorder", org: "Pengurus Alumni Sekolah Pascasarjana UNS", year: 2026, category: "klinis" },
  { no: 48, title: "Environmental Adaptation Strategies to Build Public Health Resilience", title_en: "Environmental Adaptation Strategies to Build Public Health Resilience in Climate Change", org: "Universitas Duta Bangsa Surakarta", year: 2026, category: "internasional" },
  { no: 49, title: "Pengawas Try Out Uji Kompetensi Nasional (UKOM) Keperawatan", title_en: "Official Proctor: National Nursing Competency Licensure Exam (Try Out UKOM)", org: "Universitas Kusuma Husada", year: 2026, category: "akreditasi" }
];

// Translations dictionary
const I18N = {
  id: {
    nav_home: "Beranda",
    nav_about: "Tentang",
    nav_edu: "Pendidikan",
    nav_exp: "Pengalaman",
    nav_research: "Riset",
    nav_workshops: "49+ Pelatihan",
    nav_books: "Prestasi",
    nav_contact: "Kontak",
    btn_download_cv: "Unduh CV ▾",
    btn_download_cv_full: "Unduh Berkas CV ▾",
    btn_explore: "Jelajahi 49+ Seminar & Riset",
    btn_print: "Cetak",
    hero_badge: "Dosen Tetap & Peneliti Kesehatan • Lektor 200",
    hero_role: "Dosen Fakultas Ilmu Kesehatan • Universitas Duta Bangsa Surakarta",
    hero_bio: "Lebih dari 20 tahun mendedikasikan ilmu di bidang Keperawatan Klinis, Kesehatan Masyarakat, dan Kedokteran Keluarga. Mengintegrasikan asuhan keperawatan berbasis bukti dengan teknologi kecerdasan buatan (AI) untuk peningkatan derajat kesehatan masyarakat Indonesia.",
    stat_exp: "Tahun Pengalaman",
    stat_degrees: "Gelar Akademik",
    stat_research: "Artikel & Riset",
    stat_workshops: "Seminar & Workshop",
    badge_nidn: "NIDN: 0603037901",
    badge_nip: "NIP: 110319105",
    badge_rank: "Jabatan: Lektor 200",
    search_placeholder: "Cari kegiatan, topik, atau penyelenggara...",
    filter_all: "Semua Kategori",
    filter_clinical: "Klinis & Asuhan",
    filter_accreditation: "Kurikulum & Mutu",
    filter_research: "Riset & Hibah",
    filter_international: "Internasional",
    th_no: "No",
    th_activity: "Nama Kegiatan / Seminar / Workshop",
    th_organizer: "Penyelenggara / Institusi",
    th_year: "Tahun",
    contact_title: "Hubungi & Kolaborasi Akademik",
    contact_desc: "Terbuka untuk kolaborasi penelitian, pembicara seminar, uji klinis, dan pengabdian masyarakat.",
    send_msg: "Kirim Pesan"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_edu: "Education",
    nav_exp: "Experience",
    nav_research: "Research",
    nav_workshops: "49+ Workshops",
    nav_books: "Honors",
    nav_contact: "Contact",
    btn_download_cv: "Download CV ▾",
    btn_download_cv_full: "Download Full CV ▾",
    btn_explore: "Explore 49+ Papers & Seminars",
    btn_print: "Print",
    hero_badge: "Tenured Faculty & Health Researcher • Assistant Professor",
    hero_role: "Lecturer, Faculty of Health Sciences • Universitas Duta Bangsa Surakarta",
    hero_bio: "Over 20 years of dedicated professional practice across Clinical Nursing, Public Health, and Family Medicine. Bridging evidence-based nursing interventions with artificial intelligence innovations to advance community well-being.",
    stat_exp: "Years Experience",
    stat_degrees: "Academic Degrees",
    stat_research: "Papers & Research",
    stat_workshops: "Workshops & Seminars",
    badge_nidn: "NIDN: 0603037901",
    badge_nip: "Employee ID: 110319105",
    badge_rank: "Rank: Lektor 200",
    search_placeholder: "Search events, topics, or organizing bodies...",
    filter_all: "All Categories",
    filter_clinical: "Clinical & Care",
    filter_accreditation: "Curriculum & QA",
    filter_research: "Research & Grants",
    filter_international: "International",
    th_no: "No",
    th_activity: "Program / Workshop / Scientific Meeting",
    th_organizer: "Host / Organizing Body",
    th_year: "Year",
    contact_title: "Get In Touch & Research Collaboration",
    contact_desc: "Open for academic research collaborations, keynote invitations, clinical OSCE examinations, and community service.",
    send_msg: "Send Message"
  }
};

let currentLang = 'id';
let activeCategory = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderWorkshopsTable();
  setupEventListeners();
});

function setupEventListeners() {
  // Language Switch
  const btnId = document.getElementById('lang-id');
  const btnEn = document.getElementById('lang-en');
  
  if (btnId && btnEn) {
    btnId.addEventListener('click', () => switchLanguage('id'));
    btnEn.addEventListener('click', () => switchLanguage('en'));
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Dropdown Toggles
  const navCvBtn = document.getElementById('nav-cv-btn');
  const navCvMenu = document.getElementById('nav-cv-menu');
  if (navCvBtn && navCvMenu) {
    navCvBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navCvMenu.classList.toggle('show');
      const heroMenu = document.getElementById('hero-cv-menu');
      if (heroMenu) heroMenu.classList.remove('show');
    });
  }

  const heroCvBtn = document.getElementById('hero-cv-btn');
  const heroCvMenu = document.getElementById('hero-cv-menu');
  if (heroCvBtn && heroCvMenu) {
    heroCvBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      heroCvMenu.classList.toggle('show');
      if (navCvMenu) navCvMenu.classList.remove('show');
    });
  }

  // Close dropdowns on outside click
  window.addEventListener('click', () => {
    if (navCvMenu) navCvMenu.classList.remove('show');
    if (heroCvMenu) heroCvMenu.classList.remove('show');
  });

  // Live Search in Workshops
  const searchInput = document.getElementById('ws-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderWorkshopsTable();
    });
  }

  // Category filter pills
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category');
      renderWorkshopsTable();
    });
  });

  // Print Button
  const btnPrint = document.getElementById('btn-print');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }

  // Contact Form Mock Action
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(currentLang === 'id' 
        ? "Terima kasih! Pesan Anda telah terkirim ke email palupilestari@udb.ac.id." 
        : "Thank you! Your message has been routed to palupilestari@udb.ac.id.");
      contactForm.reset();
    });
  }
}

function switchLanguage(lang) {
  currentLang = lang;
  document.getElementById('lang-id').classList.toggle('active', lang === 'id');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });

  // Update placeholders
  const searchInput = document.getElementById('ws-search');
  if (searchInput) {
    searchInput.placeholder = I18N[lang]['search_placeholder'];
  }

  // Toggle bilingual content blocks
  document.querySelectorAll('.lang-block-id').forEach(el => {
    el.style.display = lang === 'id' ? 'block' : 'none';
  });
  document.querySelectorAll('.lang-block-en').forEach(el => {
    el.style.display = lang === 'en' ? 'block' : 'none';
  });
  
  // Re-render table for translated workshop titles
  renderWorkshopsTable();
}

function renderWorkshopsTable() {
  const tbody = document.getElementById('workshops-tbody');
  const countBadge = document.getElementById('workshops-count');
  if (!tbody) return;

  tbody.innerHTML = '';

  const filtered = WORKSHOPS_DATA.filter(item => {
    // Category match
    const catMatch = (activeCategory === 'all') || (item.category === activeCategory);
    
    // Search match
    const title = currentLang === 'id' ? item.title : item.title_en;
    const textToSearch = `${title} ${item.org} ${item.year}`.toLowerCase();
    const searchMatch = !searchQuery || textToSearch.includes(searchQuery);

    return catMatch && searchMatch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} / 49 Kegiatan`;
  }

  if (filtered.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `
      <td colspan="4" style="text-align: center; padding: 24px; color: #94a3b8;">
        ${currentLang === 'id' ? 'Tidak ada kegiatan yang sesuai pencarian.' : 'No events matched your search query.'}
      </td>
    `;
    tbody.appendChild(emptyRow);
    return;
  }

  filtered.forEach((item, index) => {
    const tr = document.createElement('tr');
    const displayTitle = currentLang === 'id' ? item.title : (item.title_en || item.title);
    
    tr.innerHTML = `
      <td style="font-weight: 600; color: #64748b;">${item.no}</td>
      <td>
        <strong style="color: #0f172a; font-size: 0.92rem;">${displayTitle}</strong>
        <div style="font-size: 0.78rem; margin-top: 2px;">
          <span class="table-tag">${item.category.toUpperCase()}</span>
        </div>
      </td>
      <td style="color: #334155;">${item.org}</td>
      <td><span class="year-tag">${item.year}</span></td>
    `;
    tbody.appendChild(tr);
  });
}
