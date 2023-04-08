const hamMenu = document.querySelector(".ham-menu");
const menuItems = Array.from(document.querySelectorAll(".menu-item"));
const filteredMenuItems = menuItems.filter((menuItem, index) => index % 2 == 0);
const navbar = document.querySelector(".header-content nav");
const navItemLinks = Array.from(
  document.querySelectorAll(".header-content nav ul > li > a")
);
const animationDuration = 0.15;
const animationDelay = animationDuration;

let isMenuOpen = false;
hamMenu.addEventListener("click", () => {
  if (!isMenuOpen) {
    hamMenu.classList.add("menu-open");
    menuItemCloseAnim();
    navBarOpenAnim();
    isMenuOpen = true;
  } else {
    hamMenu.classList.remove("menu-open");
    menuItemOpenAnim();
    navBarCloseAnim();
    isMenuOpen = false;
  }
});

function menuItemCloseAnim() {
  menuItems.forEach((menuItem, index) => {
    switch (index) {
      case 0:
        gsap.to(menuItem, {
          y: 6,
          duration: animationDuration,
        });
        break;
      case 1:
        gsap.to(menuItem, { opacity: "0", duration: animationDuration });
        break;
      case 2:
        gsap.to(menuItem, {
          y: -6,
          duration: animationDuration,
        });
        break;
    }
  });

  filteredMenuItems.forEach((menuItem, index) => {
    switch (index) {
      case 0:
        gsap.to(menuItem, {
          rotation: -45,
          duration: animationDuration,
          delay: animationDelay,
        });
        break;
      case 1:
        gsap.to(menuItem, {
          rotation: 45,
          duration: animationDuration,
          delay: animationDelay,
        });
        break;
    }
  });
}

function menuItemOpenAnim() {
  filteredMenuItems.forEach((menuItem, index) => {
    switch (index) {
      case 0:
        gsap.fromTo(
          menuItem,
          { rotation: -45 },
          { rotation: 0, duration: animationDuration }
        );
        break;
      case 1:
        gsap.fromTo(
          menuItem,
          { rotation: 45 },
          { rotation: 0, duration: animationDuration }
        );
        break;
    }
  });

  menuItems.forEach((menuItem, index) => {
    switch (index) {
      case 0:
        gsap.fromTo(
          menuItem,
          { y: 6 },
          { y: 0, duration: animationDuration, delay: animationDelay }
        );
        break;
      case 1:
        gsap.fromTo(
          menuItem,
          { opacity: "0" },
          { opacity: "1", duration: animationDuration, delay: animationDelay }
        );
        break;
      case 2:
        gsap.fromTo(
          menuItem,
          { y: -6 },
          { y: 0, duration: animationDuration, delay: animationDelay }
        );
        break;
    }
  });
}

function navBarOpenAnim() {
  gsap.to(navbar, {
    transform: "translateX(0)",
    duration: animationDuration + 0.25,
    ease: "circ.out",
  });

  gsap.fromTo(
    navItemLinks,
    { yPercent: 100 },
    {
      yPercent: 0,
      duration: animationDuration + 0.25,
      delay: animationDuration + 0.25,
      ease: "circ.out",
    }
  );
}

function navBarCloseAnim() {
  gsap.fromTo(
    navItemLinks,
    { yPercent: 0 },
    {
      yPercent: 100,
      duration: animationDuration + 0.25,
      ease: "circ.in",
    }
  );

  gsap.to(navbar, {
    transform: "translateX(120%)",
    duration: animationDuration + 0.25,
    delay: animationDuration + 0.25,
    ease: "circ.in",
  });
}

const header = document.querySelector("header");
document.addEventListener("scroll", () => {
  const scrollPos = Math.round(window.scrollY);
  if (scrollPos > 30) {
    header.classList.add("distinguish-header");
  } else {
    header.classList.remove("distinguish-header");
  }
});
