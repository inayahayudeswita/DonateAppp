DONATEAPP

🔧 Persyaratan

Node.js (disarankan versi terbaru)

NPM (Package Manager bawaan Node.js)

🚀 Cara Instalasi

Clone repository:

git clone https://github.com/username/donateapp.git

Masuk ke direktori proyek:

cd donateapp

Install dependensi:

npm install

Jalankan server development:

npm start

💻 Cara Menggunakan

Buka browser dan akses:

http://localhost:3000

Perintah yang Tersedia

Perintah

Deskripsi

npm start

Menjalankan server development

npm run build

Build untuk production

npm test

Menjalankan unit testing

📁 Struktur Folder

donateapp/
├── public/            # Asset publik
├── src/
│   ├── components/    # Komponen React
│   ├── styles/        # File CSS
│   ├── App.js        # Komponen Utama
│   └── index.js       # Entry Point
├── package.json       # Konfigurasi Proyek
└── README.md          # Dokumentasi Proyek

✏️ Cara Mengedit

Komponen

Buka folder src/components/

Edit file komponen yang diinginkan dengan format .js

Styling

Buka folder src/styles/

Edit file .css untuk styling global

Assets

Tambahkan gambar di folder public/images/

🔧 Troubleshooting

1. Error saat instalasi

npm install --force

2. Modul tidak ditemukan

npm cache clean --force && npm install

3. Jika terjadi restriksi eksekusi di Windows

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

🎯 Catatan Penting

Pastikan Node.js sudah terinstal

Gunakan Visual Studio Code untuk editing kode

Install extension berikut di VS Code:

ES7+ React Snippets

Prettier

ESLint

Selamat mengembangkan proyek DONATEAPP! 🚀

