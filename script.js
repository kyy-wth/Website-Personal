const paragraphs = [
  // 1. Pembuka
  "Semua kata di sini lahir dari perjalanan tentang rasa dan tentang kita.<br><br>Tak selalu mudah, tak selalu terang... tapi semuanya nyata.<br><br>Terima kasih karena pernah menjadi bagian dari cerita ini.",

  // 2. kata kata hari ini
  "Perjalanan kita ga selalu mulus. Ada tangis yang ga kelihatan, ada luka yang ga sempat disebutkan. Tapi kamu selalu ada, datang tanpa syarat, nerima semua versi diriku.",

  "Dan kadang, aku bingung gimana cara ngungkapin semua rasa ini. Tapi…",

  "Seperti kata Baskara:<br><br><em>\"Namun, suratmu 'kan kuceritakan<br>Ke anak-anakku nanti<br>Bahwa aku pernah dicintai<br>With everything you are<br>Fully as I am\"</em>",

  "Itu kamu.<br>Yang mencintaiku dengan tulus.<br>Yang nerima aku utuh, meski rapuh.<br>Yang selalu hadir, meski aku kadang hilang arah.",

  "Aku ga janji akan selalu sempurna,<br>tapi aku janji akan selalu berusaha.<br>Untuk ada, untuk dengerin,<br>untuk saling nyelametin kayak yang udah kita lakuin selama ini.",

  "Kamu,<br>bukan cuma cerita cinta,<br>kamu adalah bukti bahwa cinta yang dalam itu nyata.",

  // Ending utama
  "<div class='ending-text'>Dan akhirnya...<br><br><em>Terima kasih sudah pernah menjadi bagian dari hidupku.</em><br><br><strong>Semoga kita bisa terus menulis cerita baru, bersama-sama.</strong> </div>",

  // Judul lagu
  "<div class='ending-text' style='font-size: 1.2rem; text-align: center; margin-top: 2rem;'>🎵 Hindia – <em>Everything You Are</em></div>",

  //  Lirik full + scrollable
  `<div class="lyrics-box">
    Wajahmu kuingat selalu<br>
    Lupakan hal-hal yang menggangguku<br>
    Kar'na hari ini mata kita beradu<br>
    Kita saling bantu<br><br>

    Melepas perasaan<br>
    Tinggi ke angkasa<br>
    Menantang dunia<br>
    Merayakan muda<br>
    'Tuk satu jam saja<br><br>

    Kita hampir mati<br>
    Dan kauselamatkan aku<br>
    Dan ku menyelamatkanmu<br>
    Dan sekarang aku tahu<br><br>

    Cerita kita tak jauh berbeda<br>
    Got beat down by the world<br>
    Sometimes I wanna fold<br>
    Namun, suratmu 'kan kuceritakan<br>
    Ke anak-anakku nanti<br><br>

    Bahwa aku pernah dicintai<br>
    With everything you are<br>
    Fully as I am<br>
    With everything you are<br><br>

    Wajahmu yang beragam rupa<br>
    Pastikan ku tak sendirian<br>
    Jalani derita<br>
    Kaubawakan kisahmu, aku mendengarkan<br><br>

    Oh, kita bergantian<br>
    Bertukar nestapa<br>
    Menawar trauma<br>
    Datang seadanya<br>
    Terasku terbuka<br><br>

    Kita hampir mati<br>
    Dan kauselamatkan aku<br>
    Dan ku menyelamatkanmu<br>
    Dan sekarang aku tahu<br><br>

    Cerita kita tak jauh berbeda<br>
    Got beat down by the world<br>
    Sometimes I wanna fold<br>
    Namun, suratmu 'kan kuceritakan<br>
    Ke anak-anakku nanti<br><br>

    Bahwa aku pernah dicintai<br>
    Seada-adanya<br>
    Sekurang-kurangnya<br>
    Walau sulit utarakan hatiku dengan indah<br><br>

    Walau jarang ku bernyanyi<br>
    Dengan cara yang indah<br>
    Tapi tak sekali pun kisahku<br>
    Pernah kaubantah, oh<br><br>

    Cerita kita tak jauh berbeda<br>
    Got beat down by the world<br>
    Sometimes I wanna fold<br>
    Namun, suratmu 'kan kuceritakan<br>
    Ke anak-anakku nanti<br><br>

    Bahwa aku pernah dicintai<br>
    With everything you are<br>
    Fully as I am<br>
    With everything you are
  </div>`
];

let current = 0;
const textEl = document.getElementById("text");
const btn = document.getElementById("nextBtn");
const music = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;
let started = false;

function showText(index) {
  textEl.classList.remove("fade-in");
  textEl.style.opacity = 0;

  setTimeout(() => {
    textEl.innerHTML = paragraphs[index];
    textEl.classList.add("fade-in");
  }, 300);
}

// Teks pertama + delay tombol
showText(current);
btn.classList.add("hidden");

setTimeout(() => {
  btn.classList.remove("hidden");
}, 3000);

// Tombol lanjut
btn.addEventListener("click", () => {
  if (!started) {
    music.play();
    isPlaying = true;
    started = true;
  }

  if (current < paragraphs.length - 1) {
    current++;
    showText(current);
  } else {
    btn.style.display = "none";
    document.body.classList.add("ending");
  }
});

// Tombol musik
musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "▶ Musik";
  } else {
    music.play();
    musicBtn.textContent = "⏸ Musik";
  }
  isPlaying = !isPlaying;
});
