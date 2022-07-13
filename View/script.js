let currentAuthScreen = "Sign in";
//Navbar navigation
$(".navbar .nav-link").on("click", function () {
  $(".navbar").find(".active").removeClass("active");
  $(this).addClass("active");
});


//Account modal Navigation
$(document).ready(function () {
  $(".nav .nav-link").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
    currentAuthScreen = $(this).text();
    changeText();
  });
});

changeText();

function changeText() {
  $(document).ready(function () {
    $(".modal-footer .save").text(currentAuthScreen + " now");
  });
}

//Adding preloader
var loader = document.querySelector("#loader");

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.05);
    }, 50);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.getElementById("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(1);
});
