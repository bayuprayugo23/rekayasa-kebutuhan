let jobs = []

async function loadJobs(){

let { data, error } = await supabaseClient
.from("jobs")
.select("*")

if(error){
console.log(error)
return
}

jobs = data

}

// fungsi menampilkan lowongan
function tampilkanJobs(jobs){

let container = document.getElementById("jobList")

container.innerHTML=""

if(jobs.length === 0){
container.innerHTML="<p>Tidak ada lowongan yang cocok</p>"
return
}

jobs.forEach(job=>{

container.innerHTML += `

<div class="job-card">

<h3>${job.title}</h3>

<p><b>Company:</b> ${job.company}</p>

<p><b>Location:</b> ${job.location}</p>

<p><b>Major:</b> ${job.major}</p>

<p><b>Skills:</b> ${job.skills}</p>

<a class="apply-btn" href="${job.link}" target="_blank">Apply</a>

</div>

`

})

}

// fungsi cari rekomendasi
function cariLowongan(){

let prodi = document.getElementById("prodi").value.toLowerCase()
let skill = document.getElementById("skill").value.toLowerCase()
let lokasi = document.getElementById("lokasi").value.toLowerCase()

let hasil = jobs.filter(job => {

let cocokProdi = prodi === "" || job.major.toLowerCase().includes(prodi)

let cocokSkill = skill === "" || job.skills.toLowerCase().includes(skill)

let cocokLokasi = lokasi === "" || job.location.toLowerCase().includes(lokasi)

return cocokProdi && cocokSkill && cocokLokasi

})

tampilkanJobs(hasil)

}

// load data dari database
loadJobs()