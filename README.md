Pengujian dilakukan untuk memastikan bahwa sistem rekomendasi lowongan kerja dapat berjalan sesuai dengan fungsi yang telah dirancang. 
Metode pengujian yang digunakan adalah Black Box Testing, yaitu menguji sistem berdasarkan input yang diberikan pengguna dan output 
yang dihasilkan oleh sistem tanpa melihat kode program secara langsung.
Berikut adalah hasil pengujian aplikasi:

| No | Fitur yang Diuji             | Skenario Pengujian                       | Input                       | Output yang Diharapkan                           | Hasil                             | Status   |
| -- | ---------------------------- | ---------------------------------------- | --------------------------- | ------------------------------------------------ | --------------------------------- | -------- |
| 1  | Halaman utama                | Membuka aplikasi melalui browser         | URL website                 | Halaman utama tampil dengan form profil alumni   | Halaman tampil dengan benar       | Berhasil |
| 2  | Input nama alumni            | User mengisi nama pada form              | "Bayu"                      | Sistem menerima input nama                       | Nama berhasil terbaca oleh sistem | Berhasil |
| 3  | Input program studi          | User mengisi jurusan                     | "Informatika"               | Sistem menyimpan data jurusan                    | Jurusan berhasil terbaca          | Berhasil |
| 4  | Input skill                  | User memasukkan skill                    | "Python, JavaScript"        | Sistem membaca skill untuk proses rekomendasi    | Skill terbaca oleh sistem         | Berhasil |
| 5  | Input lokasi                 | User memilih lokasi kerja                | "Surabaya"                  | Sistem menyimpan lokasi pilihan                  | Lokasi berhasil diproses          | Berhasil |
| 6  | Pencarian rekomendasi        | User menekan tombol "Cari Rekomendasi"   | Data profil alumni          | Sistem melakukan pencocokan dengan database      | Rekomendasi lowongan muncul       | Berhasil |
| 7  | Filter berdasarkan jurusan   | User mencari dengan jurusan tertentu     | Informatika                 | Sistem menampilkan lowongan sesuai jurusan       | Lowongan bidang IT muncul         | Berhasil |
| 8  | Filter berdasarkan skill     | User mencari pekerjaan sesuai skill      | Python                      | Sistem menampilkan lowongan dengan skill Python  | Lowongan sesuai skill muncul      | Berhasil |
| 9  | Filter berdasarkan lokasi    | User memilih lokasi tertentu             | Surabaya                    | Sistem menampilkan lowongan di Surabaya          | Lowongan di Surabaya muncul       | Berhasil |
| 10 | Mengambil data dari database | Sistem mengambil data dari database      | Data lowongan pada database | Data lowongan berhasil ditampilkan               | Data tampil di halaman web        | Berhasil |
| 11 | Menampilkan daftar lowongan  | Sistem menampilkan hasil rekomendasi     | Data lowongan yang cocok    | Lowongan tampil dalam bentuk kartu               | Kartu lowongan tampil             | Berhasil |
| 12 | Tombol Apply                 | User menekan tombol Apply                | Klik tombol Apply           | Sistem membuka halaman link lowongan             | Halaman perusahaan terbuka        | Berhasil |
| 13 | Jika tidak ada hasil         | User memasukkan skill yang tidak ada     | Skill langka                | Sistem menampilkan pesan tidak ada lowongan      | Pesan muncul                      | Berhasil |
| 14 | Tampilan responsif           | Website dibuka pada ukuran layar berbeda | Desktop / Laptop            | Tampilan tetap rapi                              | Tampilan tetap baik               | Berhasil |
| 15 | Validasi input kosong        | User tidak mengisi form                  | Input kosong                | Sistem tetap berjalan dan menampilkan hasil umum | Sistem tidak error                | Berhasil |

Kesimpulan Pengujian
Berdasarkan hasil pengujian yang dilakukan, seluruh fitur utama pada sistem rekomendasi lowongan kerja telah berjalan dengan baik. 
Sistem mampu menerima input pengguna, memproses data berdasarkan jurusan, skill, dan lokasi, serta menampilkan rekomendasi lowongan yang relevan dari database. 
Dengan demikian, aplikasi telah memenuhi aspek kualitas dasar yaitu fungsionalitas, keakuratan rekomendasi, dan kemudahan penggunaan.
