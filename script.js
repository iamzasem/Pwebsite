// Toggle Hamburger Menu (unchanged)
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// "See More / See Less" Toggle Functionality with Fade Animations
document.getElementById("see-more-btn").addEventListener("click", function () {
  // Assume the first .projects-grid is the initial projects,
  // and the second (index 1) holds the extra projects.
  const projectGrids = document.querySelectorAll(".projects-grid");
  const extraProjects = projectGrids[1];
  const seeMoreBtn = document.getElementById("see-more-btn");
  const projects = extraProjects.querySelectorAll(".details-container");

  if (extraProjects.classList.contains("hidden")) {
    // Remove the hidden class to display the extra projects (with spacing, see CSS below)
    extraProjects.classList.remove("hidden");

    // Staggered fade-in for each project
    projects.forEach((project, index) => {
      project.style.opacity = 0; // Start hidden
      setTimeout(() => {
        project.style.opacity = 1;
      }, index * 200);
    });

    seeMoreBtn.textContent = "See Less";
  } else {
    // Staggered fade-out for each project
    projects.forEach((project, index) => {
      setTimeout(() => {
        project.style.opacity = 0;
      }, index * 200);
    });

    // Wait until the fade-out completes before hiding the container
    setTimeout(() => {
      extraProjects.classList.add("hidden");
      seeMoreBtn.textContent = "See More";
    }, projects.length * 200 + 500); // Adjust delay as needed
  }
});
