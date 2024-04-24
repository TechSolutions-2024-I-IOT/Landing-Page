document.addEventListener("DOMContentLoaded", function () {
  const switchButton = document.getElementById("switchButton");
  const sections = {
    passenger: ["heroPassenger", "featuresPassenger", "videoPassenger"],
    business: ["heroBusiness", "featuresBusiness", "videoBusiness"],
  };

  // Establecer la visibilidad inicial al cargar la página
  const isBusinessMode = switchButton
    .querySelector("input")
    .hasAttribute("checked");

  toggleSectionsVisibility(isBusinessMode);

  // Agregar un listener al botón de alternancia para controlar la visibilidad
  switchButton.addEventListener("change", function () {
    const isBusinessMode = this.checked;
    toggleSectionsVisibility(isBusinessMode);
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
});
