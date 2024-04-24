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
  function updateDownloadButtonColor(isBusinessMode) {
    const downloadButton = document.getElementById("extraButton");
    const color = isBusinessMode ? colors.tertiary : colors.primary;
    downloadButton.style.transition = "color 0.3s ease";
    downloadButton.style.color = color;
    downloadButton.style.borderColor = color;
  }

  // Llamar a toggleSectionsVisibility para asegurarse de que las secciones estén ocultas al cargar la página
  toggleSectionsVisibility(isBusinessMode);
});
