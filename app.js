const slides = document.querySelectorAll(".card");

// console.log(slides);
// 1

// for (let slide of slides) {
//     // console.log(slide)
//     slide.addEventListener("click", function () {
//         if (slide.classList.value === "card active") {
//             slide.classList.remove("active");
//         } else {
//             clearActive();
//             slide.classList.add("active");
//         };
//   });
// };

// function clearActive() {
//     slides.forEach(function(item) {
//         item.classList.remove('active');
//     });
// };

// 2

for (let slide of slides) {
    // console.log(slide)
    slide.addEventListener("click", function () {
        if (slide.classList.value === "card active") {
            slide.classList.remove("active");
        } else {
            slides.forEach(function(item) {
                item.classList.remove('active');
            });
            slide.classList.add("active");
        };
  });
};
