// let twit = document.querySelector(".tw");
// let fb = document.querySelector(".fb");
// let inst = document.querySelector(".itg");

// let ttwit = document.querySelector(".twit-text");
// let tfb = document.querySelector(".fb-text");
// let instext = document.querySelector(".inst-text");

// twit.addEventListener("click", function () {
//   ttwit.classList.remove("animation");
//   tfb.classList.add("animation");
//   instext.classList.add("animation");
//   this.style.color = "#08a0e9";
//   fb.style.color = "black";
//   inst.style.color = "black";
// });

// fb.addEventListener("click", function () {
//   ttwit.classList.add("animation");
//   tfb.classList.remove("animation");
//   instext.classList.add("animation");
//   this.style.color = "#0866ff";
//   inst.style.color = "black";
//   twit.style.color = "black";
// });

// inst.addEventListener("click", function () {
//   ttwit.classList.add("animation");
//   tfb.classList.add("animation");
//   instext.classList.remove("animation");
//   this.style.color = "#dd2a7b";
//   fb.style.color = "black";
//   twit.style.color = "black";
// });

$(document).ready(function () {
  let twit = $(".tw");
  let fb = $(".fb");
  let inst = $(".itg");

  let ttwit = $(".twit-text");
  let tfb = $(".fb-text");
  let instext = $(".inst-text");

  $(twit).click(function () {
    $(ttwit).removeClass("animation");
    $(tfb).addClass("animation");
    $(instext).addClass("animation");
    $(this).css({ color: "#08a0e9" });
    $(fb).css({ color: "black" });
    $(inst).css({ color: "black" });
  });

  $(fb).click(function () {
    $(ttwit).addClass("animation");
    $(tfb).removeClass("animation");
    $(instext).addClass("animation");
    $(this).css({ color: "#0866ff" });
    $(twit).css({ color: "black" });
    $(inst).css({ color: "black" });
  });

  $(inst).click(function () {
    $(ttwit).addClass("animation");
    $(tfb).addClass("animation");
    $(instext).removeClass("animation");
    $(this).css({ color: "#dd2a7b" });
    $(fb).css({ color: "black" });
    $(twit).css({ color: "black" });
  });
});
