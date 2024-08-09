let tanggal = document.querySelector(".tanggal");
let pengingat = document.querySelector(".pengingat");
let piket = document.querySelector(".piket");
let jadwal = document.querySelector(".jadwal")

let tampilTanggal = prompt("tambahkan tanggal besok");
let Hari = prompt("Besok Hari Apa?")
let GanjilGenap = prompt("besok minggu ganjil atau genap?");

let JadwalGanjilSenin = "- Proyek Ilmu Pengetahuan. -Informatika.";
let JadwalGanjilSelasa = "-Informatika. -Dasar Dasar Kejuruan PPLG.";
let jadwalGanjilRabu = "- Dasar Dasar Kejuruan PPLG. -BP/BK. -Proyek Ilmu Pengetahuan Dan Sosial."
let jadwalGanjilKamis = "- - Dasar Dasar Kejuruan PPLG"
let jadwalGanjilJumat = "-Dasar Dasar Kejuruan PPLG.";

let jadwalGenapSenin = "- Bahasa Indonesia. - Matematika.- Bahasa Sunda.";
let jadwalGenapSelasa = "- Sejarah. -Pendidikan Pancasila. -Bahasa Inggris. -BP/BK. -Pendidikan Agama Islam Dan Budi Pekerti."
let jadwalGenapRabu = "-Pendidikan Jasmani Dan Olahraga (Bawa Baju Olga). -Seni. -Bahasa inggris. -Bahasa Inggris. -Bahasa Indonesia."
let jadwalGenapKamis = "-Matematika. -Sejarah. -Pendidikan Pancasila. -Seni. -Bahasa Sunda";
let jadwalGenapJumat = "- Pendidikan Olahraga dan Kesehatan(Bawa Baju Olga). -Pendidikaan Agama Islam DAn Budi Pekerti."

let jadwalPiketSenin = "1.Taufik. 2.Haikal. 3.Ratih. 4.Fatimah. 5.Nopi. 6.Salsa. 7.Sinta."
let jadwalPiketSelasa = "1.Dienal. 2.Lucky. 3.Azka. 4.Zahra.N. 5..Qitri. 5.Ajeng. 6.Fanisa."
let jadwalPiketRabu = "1.Naufal. 2.Zaky. 3.Zahra.k. 4.Rifha. 5.Suci. 6.Yuli. 7.Jihan.";
let jadwalPiketKamis = "1.Rizal. 2.Paundra. 3.Yunita. 4.Mia. 5.Kanisa. 6.Linda. 7.Fitria."
let jadwalPiketJumat ="1.Fardan. 2.Algi. 3.Ahmad. 4.Aqila. 5.Manda. 6.Enok. 7.Bela. 8.Zaskiya. "

if(GanjilGenap == "Genap" && Hari == "Senin"){
    jadwal.innerHTML = jadwalGenapSenin;
} else if(GanjilGenap == "Genap" && Hari == "Selasa"){
 jadwal.innerHTML = jadwalGenapSelasa;
} else if(GanjilGenap == "Genap" && Hari == "Rabu"){
 jadwal.innerHTML = jadwalGenapRabu;
} else if(GanjilGenap == "Genap" && Hari == "Kamis"){
    jadwal.innerHTML = jadwalGenapKamis
} else if(GanjilGenap == "Genap" && Hari == "Jumat"){
 jadwal.innerHTML = jadwalGenapJumat;
} else{
    // jadwal.innerHTML = "Tolong Tulis yang Benar"
};

if(GanjilGenap == "Ganjil" && Hari == "Senin"){
    jadwal.innerHTML = JadwalGanjilSenin;
} else if(GanjilGenap == "Ganjil" && Hari == "Selasa"){
 jadwal.innerHTML = JadwalGanjilSelasa;
} else if(GanjilGenap == "Ganjil" && Hari == "Rabu"){
 jadwal.innerHTML = jadwalGanjilRabu;
} else if(GanjilGenap == "Ganjil" && Hari == "Kamis"){
    jadwal.innerHTML = jadwalGanjilKamis
} else if(GanjilGenap == "Ganjil" && Hari == "Jumat"){
 jadwal.innerHTML = jadwalGanjilJumat;
} else{
    // jadwal.innerHTML = "Tolong Tulis yang Benar"
};

if(Hari == "Senin"){
    piket.innerHTML = jadwalPiketSenin
} else if(Hari == "Selasa"){
    piket.innerHTML =
    jadwalPiketSelasa
} else if(Hari == "Rabu"){
piket.innerHTML = jadwalPiketRabu;
} else if(Hari == "Kamis"){
    piket.innerHTML = jadwalPiketKamis;
} else if(Hari == "Jumat"){
    piket.innerHTML = jadwalPiketJumat;
} else{
    piket.innerHTML = "Tolong Tulis Yang Benar"
};

tanggal.innerHTML =tampilTanggal;

if(Hari == "Senin"){
    pengingat.innerHTML = "-Alat Sholat. -Bekal. -Buku Tulis📒(Sesuai Mapel)"
} else if(Hari == "Selasa"){
    pengingat.innerHTML = "-Alat Sholat. -Bekal. -Buku Tulis📒(Sesuai Mapel)"
} else if(Hari == "Rabu"){
    pengingat.innerHTML = "-Alat Sholat. -Bekal. -Buku Tulis📒(Sesuai Mapel). -Baju Olahraga"
} else if(Hari == "Kamis"){
    pengingat.innerHTML = "-Alat Sholat. -Bekal. -Buku Tulis📒(Sesuai Mapel)"
} else if(Hari == "Jumat"){
    pengingat.innerHTML = "-Alat Sholat. -Bekal. -Buku Tulis📒(Sesuai Mapel). -Baju Olahraga"
}