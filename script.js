$(document).ready(function () {
  $("#whatsappGonder").on("click", function () {
    let ad = $("#ad").val();
    let nereden = $("#nereden").val();
    let nereye = $("#nereye").val();
    let detay = $("#detay").val();

    let mesaj =
      "Merhaba, Ankara parça eşya taşıma için fiyat almak istiyorum.%0A%0A" +
      "Adım: " + ad + "%0A" +
      "Nereden: " + nereden + "%0A" +
      "Nereye: " + nereye + "%0A" +
      "Eşya Detayı: " + detay;

    let telefon = "905352437016";
    let link = "https://wa.me/" + telefon + "?text=" + mesaj;

    window.open(link, "_blank");
  });

  $("a.nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".custom-navbar").addClass("scrolled");
    } else {
      $(".custom-navbar").removeClass("scrolled");
    }
  });
});