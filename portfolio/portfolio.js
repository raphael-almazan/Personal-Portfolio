gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const about_btn = document.getElementById("about");

const exp_btn = document.getElementById("experience");

const skills_btn = document.getElementById("skills");

const project_btn = document.getElementById("project");

const education_btn = document.getElementById("education");

const contact_btn = document.getElementById("contact");

about_btn.addEventListener("click", about);

exp_btn.addEventListener("click", exp);

skills_btn.addEventListener("click", skills);

project_btn.addEventListener("click", project);

education_btn.addEventListener("click", education);

contact_btn.addEventListener("click", contact);

function about() {
  gsap.to(window, {
    duration: 0.1,
    scrollTo: {
      y: ".about-me",
      offsetY: 75,
    },
    ease: "power4.out",
  });
}

function exp() {
  gsap.to(window, {
    duration: 0.1,
    scrollTo: {
      y: ".exp",
      offsetY: 95,
    },
    ease: "power4.out",
  });
}

function skills() {
  gsap.to(window, {
    duration: 0.1,
    scrollTo: {
      y: ".Skills",
      offsetY: 120,
    },
    ease: "power4.out",
  });
}

function project() {
  gsap.to(window, {
    duration: 0.1,
    scrollTo: {
      y: ".personal-projects",
      offsetY: 100,
    },
    ease: "power4.out",
  });
}

function education() {
  gsap.to(window, {
    duration: 0.1,
    scrollTo: {
      y: ".education",
      offsetY: 210,
    },
    ease: "power4.out",
  });
}

function contact() {
  gsap.to(window, {
    duration: 0.1,
    scrollTo: {
      y: ".contact",
      offsetY: 180,
    },
    ease: "power4.out",
  });
}

ScrollTrigger.matchMedia({
  "(min-width: 1200px)": function () {
    gsap.from(".about", {
      scrollTrigger: {
        trigger: ".about",
        toggleActions: "restart reset play reset",
        // markers: true,
        start: "",
        end: "600px",
      },
      y: -100,
      opacity: 0,
      duration: 2.5,
      ease: "power4.out",
    });

    gsap.from(".exp2", {
      scrollTrigger: {
        trigger: ".exp2",
        toggleActions: "restart reset play reset",
        // markers: true,
        start: "",
        end: "",
      },
      y: -100,
      opacity: 0,
      duration: 2.5,
      ease: "power4.out",
    });

    gsap.from(".icon", {
      scrollTrigger: {
        trigger: ".icon",
        toggleActions: "restart reset play reset",
        // markers: true,
        start: "",
        end: "500px",
      },
      y: -50,
      opacity: 0,
      duration: 1.7,
      ease: "power4.out",
      stagger: 0.3,
    });

    gsap.from(".pics", {
      scrollTrigger: {
        trigger: ".pics",
        toggleActions: "restart reset play reset",
        // markers: true,
        start: "",
        end: "",
      },
      x: -100,
      opacity: 0,
      duration: 1.7,
      ease: "power4.out",
      stagger: 0.3,
    });

    gsap.from(".uoit", {
      scrollTrigger: {
        trigger: ".uoit",
        toggleActions: "restart reset play reset",
        // markers: true,
        start: "",
        end: "",
      },
      x: -50,
      opacity: 0,
      ease: "power4.out",
      duration: 2,
    });

    gsap.from(".education-info", {
      scrollTrigger: {
        trigger: ".education-info",
        toggleActions: "restart reset play reset",
        // markers: true,
        start: "",
        end: "",
      },
      x: 50,
      opacity: 0,
      ease: "power4.out",
      duration: 2,
    });

    gsap.from(".input-box", {
      scrollTrigger: {
        trigger: ".input-box",
        toggleActions: "restart reset play reset",
        // markers: true,
        start: "",
        end: "",
      },
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.5,
    });
  },
  "(max-width: 600px)": function () {
    gsap.from(".about", {
      scrollTrigger: {
        trigger: ".about",
        toggleActions: "restart reset play reset",
        start: "",
        end: "600px"
      },
      y: -100,
      opacity: 0,
      duration: 2.5,
      ease: "power4.out",
    });

    gsap.from(".exp2", {
      scrollTrigger: {
        trigger: ".exp2",
        toggleActions: "restart reset play reset"
      },
      y: -100,
      opacity: 0,
      duration: 2.5,
      ease: "power4.out",
    });

    gsap.from(".icon", {
      scrollTrigger: {
        trigger: ".icon",
        toggleActions: "restart reset play reset",
        end: "1600px"
      },
      y: -50,
      opacity: 0,
      duration: 1.7,
      ease: "power4.out",
      stagger: 0.3,
    });

    gsap.from(".pics", {
      scrollTrigger: {
        trigger: ".pics",
        toggleActions: "restart reset play reset",
        end: "1400px"
      },
      x: -100,
      opacity: 0,
      duration: 1.7,
      ease: "power4.out",
      stagger: 0.3,
    });

    gsap.from(".uoit", {
      scrollTrigger: {
        trigger: ".uoit",
        toggleActions: "restart reset play reset"
      },
      x: -50,
      opacity: 0,
      ease: "power4.out",
      duration: 2,
    });

    gsap.from(".education-info", {
      scrollTrigger: {
        trigger: ".education-info",
        toggleActions: "restart reset play reset"
      },
      x: 50,
      opacity: 0,
      ease: "power4.out",
      duration: 2,
    });

    gsap.from(".input-box", {
      scrollTrigger: {
        trigger: ".input-box",
        toggleActions: "restart reset play reset"
      },
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.5,
    });
  }
});
