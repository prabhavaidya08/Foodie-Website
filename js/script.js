$(document).ready(function () {
  // banner image change
  let bannerCount = 0;
  setInterval(function () {
    hideAllBanner();
    changeBannerCount();
    changeBanner();
  }, 8000);

  function changeBanner() {
    $(".banner-item").each(function (idx) {
      if (bannerCount == idx) {
        $(this).addClass("active-banner");
      }
    });
  }

  function hideAllBanner() {
    $(".banner-item").each(function (idx) {
      $(this).removeClass("active-banner");
    });
  }

  function changeBannerCount() {
    bannerCount++;
    if (bannerCount >= $(".banner-item").length) {
      bannerCount = 0;
    }
  }

  // navigation bar toggle
  $("#navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(600);
  });

  // fixed navbar
  $(window).scroll(function () {
    let pos = $(window).scrollTop();
    if (pos >= 800) {
      $(".navbar").addClass("fxd-navbar");
    } else {
      $(".navbar").removeClass("fxd-navbar");
    }
  });
});

// food menu
const menuBtns = document.querySelectorAll(".menu-btn");
const foodItems = document.querySelectorAll(".food-item");

let activeBtn = "breakfast";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    resetActiveBtn();
    showFoodMenu(btn.id);
    btn.classList.add("active-btn");
  });
});

function resetActiveBtn() {
  menuBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

function showFoodMenu(newMenuBtn) {
  activeBtn = newMenuBtn;
  foodItems.forEach((item) => {
    if (item.classList.contains(activeBtn)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}
