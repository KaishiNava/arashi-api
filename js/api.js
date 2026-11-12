const apiItems = [
  ['TikTok Downloader','Download video TikTok melalui endpoint yang tersedia.','GET','01','Media'],
  ['Instagram Downloader','Tool media Instagram untuk kebutuhan integrasi.','GET','02','Media'],
  ['YouTube Search','Cari informasi video berdasarkan kata kunci.','GET','03','Search'],
  ['Weather Info','Informasi cuaca berdasarkan lokasi.','GET','04','Utility'],
  ['AI Chat','Endpoint percakapan berbasis AI.','POST','05','AI'],
  ['Text to Speech','Konversi teks menjadi audio.','POST','06','AI'],
  ['QR Generator','Buat data QR dari teks atau URL.','GET','07','Utility'],
  ['IP Lookup','Informasi publik berdasarkan alamat IP.','GET','08','Utility'],
  ['Wikipedia Search','Cari ringkasan informasi ensiklopedia.','GET','09','Search'],
  ['Anime Search','Temukan informasi judul anime.','GET','10','Search'],
  ['GitHub User','Ambil informasi profil publik GitHub.','GET','11','Developer'],
  ['URL Shortener','Buat tautan pendek dari URL panjang.','POST','12','Utility']
];
const grid = document.getElementById('apiGrid');
function render(items) {
  if (!grid) return;
  grid.innerHTML = items.length ? items.map(([name,desc,method,num]) => `<article class="api-card"><div class="api-card-head"><span class="api-symbol">${num}</span><span class="api-status">● PREVIEW</span></div><h3>${name}</h3><p>${desc}</p><div class="api-card-foot"><span class="method">${method}</span><a href="documentation.html">View docs ↗</a></div></article>`).join('') : '<p class="muted">No APIs match your search.</p>';
}
render(apiItems);
document.getElementById('apiSearch')?.addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  render(apiItems.filter(item => item.join(' ').toLowerCase().includes(q)));
});
