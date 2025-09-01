# Cek Tingkat Stres Mahasiswa

![Next.js](https.img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

Aplikasi berbasis web untuk membantu mahasiswa melakukan skrining (screening) awal terhadap tingkat stres, kecemasan, dan depresi menggunakan kuesioner.

## ✨ Latar Belakang

Kesehatan mental merupakan isu penting di kalangan mahasiswa. Tingginya tuntutan akademik, masalah sosial, dan tekanan lainnya dapat memicu stres, kecemasan, hingga depresi. Aplikasi ini dibuat sebagai alat bantu skrining awal yang modern dan mudah diakses, sehingga mahasiswa dapat lebih sadar terhadap kondisi psikologis mereka.

## 🎯 Fitur Utama

-   **Kuesioner:** Antarmuka interaktif untuk mengisi pertanyaan standar.
-   **Perhitungan Skor Otomatis:** Sistem secara otomatis menghitung skor berdasarkan jawaban yang diberikan.
-   **Hasil & Interpretasi:** Menampilkan hasil skor beserta interpretasi tingkatannya (Normal, Sedang, Tinggi).
-   **Riwayat Hasil:** Pengguna dapat melihat riwayat pengerjaan tes yang pernah dilakukan sebelumnya.

## 💻 Tampilan Aplikasi

<table>
  <tr>
    <td align="center"><strong>Halaman Utama</strong></td>
    <td align="center"><strong>Halaman Kuesioner</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/cherrylnh17/cek-stress-mahasiswa/blob/main/img/Screenshot%20(132).png?raw=true" alt="Halaman Utama" width="400"/></td>
    <td><img src="https://github.com/cherrylnh17/cek-stress-mahasiswa/blob/main/img/Screenshot%20(133).png?raw=true" alt="Halaman Kuesioner" width="400"/></td>
  </tr>
   <tr>
    <td align="center"><strong>Halaman Hasil</strong></td>
    <td align="center"><strong>Halaman Riwayat</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/cherrylnh17/cek-stress-mahasiswa/blob/main/img/Screenshot%20(134).png?raw=true" alt="Halaman Hasil" width="400"/></td>
    <td><img src="https://github.com/cherrylnh17/cek-stress-mahasiswa/blob/main/img/Screenshot%20(135).png?raw=true" alt="Halaman Riwayat" width="400"/></td>
  </tr>
</table>

## 🛠️ Teknologi yang Digunakan

-   **Framework:** Next.js
-   **Library:** React
-   **Styling:** Tailwind CSS
-   **Animation:** Data AOS
-   **Alert:** Sweetalert 2

## 🚀 Instalasi & Konfigurasi Lokal

Pastikan Anda sudah memiliki prasyarat berikut:
-   [Node.js](https://nodejs.org/) 
-   [Git](https://git-scm.com/)
-   Database MySQL yang sedang berjalan.

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/cherrylnh17/cek-stress-mahasiswa.git](https://github.com/cherrylnh17/cek-stress-mahasiswa.git)
    cd cek-stress-mahasiswa
    ```

2.  **Install semua dependency:**
    Gunakan `npm`, `yarn`, atau `pnpm`.
    ```bash
    npm install
    ```

3.  **Konfigurasi Environment Variable:**
    Salin file `.env.example` menjadi `.env` dan sesuaikan koneksi database Anda.
    ```bash
    cp .env.example .env
    ```
    Buka file `.env` dan atur `DATABASE_URL`:
    ```env
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
    # Contoh:
    # DATABASE_URL="mysql://root:@localhost:3306/db_stress"
    ```

4.  **Migrasi Database dengan Prisma:**
    Jalankan perintah ini untuk membuat tabel di database Anda sesuai dengan skema Prisma.
    ```bash
    npx prisma migrate dev
    ```

5.  **Jalankan Aplikasi:**
    ```bash
    npm run dev
    ```

6.  Buka browser Anda dan kunjungi `http://localhost:3000`.

## 🤝 Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repositori dan buat *pull request*. Setiap kontribusi akan sangat dihargai.

---

Dibuat dengan ❤️ oleh **[Cheryl](https://github.com/cherrylnh17)**.
