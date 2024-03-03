function redirectToMenu() {
    // Yükleme animasyonunu göster
    document.getElementById("loading").style.display = "block";
    // Sayfayı yönlendir
    window.location.href = "menu.html";
}
   // İnstagram ikonuna tıklanınca yönlendirme işlemi
   document.getElementById("instagramIcon").addEventListener("click", function() {
    // Yönlendirme işlemi
    window.open("https://www.instagram.com/", "_blank"); // Instagram sayfasını yeni sekmede aç
});

// Telefon ikonuna tıklanınca telefon uygulamasını başlatma işlemi
document.getElementById("phoneIcon").addEventListener("click", function() {
    // yönlendirme işlemi

    
    window.open("tel:+902122442252");
});




// Mail ikonuna tıklanınca yönlendirme işlemi
document.getElementById("maılIcon").addEventListener("click", function() {
    window.open("mailto:info@karakoygumruk.com.tr");
});




// ACCORDION SCRİPT













