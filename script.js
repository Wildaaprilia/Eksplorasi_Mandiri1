function getHoroscope() {
    var sign = document.getElementById('zodiac-sign').value;

    var horoscopes = {
        aries: "Hari ini, Anda akan menemukan energi baru untuk mengejar tujuan Anda.",
        taurus: "Berhati-hatilah dengan keputusan keuangan Anda hari ini.",
        gemini: "Ini adalah hari yang baik untuk berkomunikasi dengan orang-orang terdekat Anda.",
        cancer: "Luangkan waktu untuk diri sendiri dan refleksikan tujuan hidup Anda.",
        leo: "Anda akan mendapatkan pengakuan atas usaha keras Anda.",
        virgo: "Jangan terlalu keras pada diri sendiri; istirahatlah sejenak.",
        libra: "Seimbangkan pekerjaan dan kehidupan pribadi Anda.",
        scorpio: "Hari ini, intuisi Anda sangat kuat. Dengarkan suara hati Anda.",
        sagittarius: "Anda mungkin merasa petualang hari ini. Cobalah sesuatu yang baru.",
        capricorn: "Fokus pada proyek-proyek jangka panjang Anda.",
        aquarius: "Hubungan sosial Anda akan membawa peluang baru.",
        pisces: "Luangkan waktu untuk seni dan kreativitas hari ini."
    };

    if (sign) {
        var resultText = "Ramalan Zodiak untuk " + capitalizeFirstLetter(sign) + ": " + horoscopes[sign];
        document.getElementById('zodiac-result').innerText = resultText;
    } else {
        document.getElementById('zodiac-result').innerText = "Pilih tanda zodiak yang valid!";
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
