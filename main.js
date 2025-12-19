    // Handle navigation fade effect
    const links = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
      link.addEventListener("click", () => {
        const targetId = link.getAttribute("data-target");
        sections.forEach(sec => {
          if (sec.id === targetId) {
            sec.classList.remove("hidden");
          } else {
            sec.classList.add("hidden");
          }
        });
      });
    });
