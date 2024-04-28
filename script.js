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

  // Agregar un listener al botón de alternancia para controlar la visibilidad
  switchButton.addEventListener("change", function () {
    isBusinessMode = !isBusinessMode; // Cambiar el modo cada vez que se interactúe con el botón
    toggleSectionsVisibility(isBusinessMode);
    updateDownloadButtonColor(isBusinessMode);
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
  // Función para cambiar el color del botón de descarga
  // for (let i = 1; i <= 3; i++) {
  //   document
  //     .getElementById("header" + i)
  //     .addEventListener("click", function () {
  //       toggleCard(i);
  //     });

  //   // Restaurar el estado de las tarjetas al cargar la página
  //   var state = localStorage.getItem("card" + i);
  //   if (state === "open") {
  //     document.getElementById("content" + i).style.display = "block";
  //     document.getElementById("icon" + i).textContent = "-";
  //   }
  // }
  // Llamar a toggleSectionsVisibility para asegurarse de que las secciones estén ocultas al cargar la página
  toggleSectionsVisibility(isBusinessMode);
});
