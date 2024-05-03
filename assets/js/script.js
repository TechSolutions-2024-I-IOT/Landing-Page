function toggleCard(cardNumber) {
  var content = document.getElementById("content" + cardNumber);
  var icon = document.getElementById("icon" + cardNumber);

  if (content.style.display === "none") {
    content.style.display = "block";
    icon.textContent = "-";
    localStorage.setItem("card" + cardNumber, "open");
  } else {
    content.style.display = "none";
    icon.textContent = "+";
    localStorage.setItem("card" + cardNumber, "closed");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const switchButton = document.getElementById("switchButton");
  const switchButtonMovil = document.getElementById("switchButton-movil");
  const sections = {
    passenger: ["heroPassenger", "featuresPassenger", "videoPassenger"],
    business: ["heroBusiness", "featuresBusiness", "videoBusiness"],
  };
  const colors = {
    primary: "#556bda",
    tertiary: "#ffa45a",
  };

  // Establecer la visibilidad inicial al cargar la página
  let isBusinessMode = false;
  // if (isBusinessMode) {
  //   switchButton.querySelector(".slider").classList.add("checked");
  //   switchButtonMovil.querySelector(".slider").classList.add("checked");
  // } else {
  //   switchButton.querySelector(".slider").classList.remove("checked");
  //   switchButtonMovil.querySelector(".slider").classList.remove("checked");
  // }

  // Agregar un listener al botón de alternancia para controlar la visibilidad
  switchButton.addEventListener("change", function () {
    isBusinessMode = !isBusinessMode; // Cambiar el modo cada vez que se interactúe con el botón
    toggleSectionsVisibility(isBusinessMode);
    updateDownloadButtonColor(isBusinessMode);
    switchButtonMovil.checked = switchButton.querySelector("input"); // Sincronizar el estado del switchButtonMovil con el switchButton
    if (isBusinessMode) {
      switchButton.querySelector(".slider").classList.add("checked");
      switchButtonMovil.querySelector(".slider").classList.remove("checked");
    } else {
      switchButton.querySelector(".slider").classList.remove("checked");
      switchButtonMovil.querySelector(".slider").classList.add("checked");
    }
  });
  switchButtonMovil.addEventListener("change", function () {
    isBusinessMode = !isBusinessMode; // Cambiar el modo cada vez que se interactúe con el botón móvil
    toggleSectionsVisibility(isBusinessMode);
    updateDownloadButtonColor(isBusinessMode);
    switchButton.checked = switchButtonMovil.querySelector("input"); // Sincronizar el estado del switchButton con el switchButtonMovil
    if (isBusinessMode) {
      switchButtonMovil.querySelector(".slider").classList.add("checked");
      switchButton.querySelector(".slider").classList.remove("checked");
    } else {
      switchButtonMovil.querySelector(".slider").classList.remove("checked");
      switchButton.querySelector(".slider").classList.add("checked");
    }
  });
  // Función para alternar la visibilidad de las secciones
  function toggleSectionsVisibility(isBusinessMode) {
    const mode = isBusinessMode ? "business" : "passenger";
    const sectionsToShow = sections[mode];
    const sectionsToHide = Object.values(sections)
      .filter((s) => s !== sectionsToShow)
      .flat();

    sectionsToShow.forEach((sectionId) => {
      document.getElementById(sectionId).classList.remove("hide");
    });

    sectionsToHide.forEach((sectionId) => {
      document.getElementById(sectionId).classList.add("hide");
    });
  }
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-header nav");
  // const exitButton = document.querySelector(".mobile-header nav .exit-button");
  const main = document.querySelector("main");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    main.classList.toggle("menu-open");
  });

  toggleSectionsVisibility(isBusinessMode);
  
});
