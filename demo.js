document.addEventListener("DOMContentLoaded", function () {
  let imges = document.querySelectorAll(".protfolio-content img");
  console.log(imges);

  // Add a click event listener to each button
  imges.forEach(function (button) {
    button.addEventListener("click", function () {
      let btnimg = document.getElementById("btnimg");
      console.log(btnimg);

      btnimg.src = button.src;
    });
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  var shrinkNav = function () {
    const navSelector = document.body.querySelector("#mainNav");

    if (window.scrollY === 0) {
      navSelector.classList.remove("navbar-shrink");
    } else {
      navSelector.classList.add("navbar-shrink");
    }
  };

  document.addEventListener("scroll", shrinkNav);
});
