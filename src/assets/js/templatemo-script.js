const initBg = (autoplay = true) => {
  const bgImgsNames = [
    "715066_b08af277a1b948b49c5f45486562bcb6~mv2.jpg",
    "valerie-v-zSrksQgp4W0-unsplash.jpg",
    "scott-blake-M5wPcXukAVM-unsplash.jpg",
    "jared-brashier-duNHkmSkW6M-unsplash.jpg",
    "max-bottinger-Gup8MCvSsf0-unsplash.jpg",
    "FMB-Sketch.jpg",
    "scott-graham-OQMZwNd3ThU-unsplash.jpg",
  ];
  const bgImgs = bgImgsNames.map((img) => "assets/img/" + img);

  $.backstretch(bgImgs, { duration: 4000, fade: 500 });

  if (!autoplay) {
    $.backstretch("pause");
  }
};

const setBg = (id) => {
  $.backstretch("show", id);
};

const setBgOverlay = () => {
  const windowWidth = window.innerWidth;
  const bgHeight = $("body").height();
  const tmBgLeft = $(".tm-bg-left");

  $(".tm-bg").height(bgHeight);

  if (windowWidth > 768) {
    tmBgLeft
      .css("border-left", `0`)
      .css("border-top", `${bgHeight}px solid transparent`);
  } else {
    tmBgLeft
      .css("border-left", `${windowWidth}px solid transparent`)
      .css("border-top", `0`);
  }
};

$(document).ready(function () {
  const autoplayBg = true; // set Auto Play for Background Images
  initBg(autoplayBg);
  setBgOverlay();

  const bgControl = $(".tm-bg-control");
  bgControl.click(function () {
    bgControl.removeClass("active");
    $(this).addClass("active");
    const id = $(this).data("id");
    setBg(id);
  });

  $(window).on("backstretch.after", function (e, instance, index) {
    const bgControl = $(".tm-bg-control");
    bgControl.removeClass("active");
    const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);
    current.addClass("active");
  });

  $(window).resize(function () {
    setBgOverlay();
  });
});
