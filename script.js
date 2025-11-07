document.addEventListener('DOMContentLoaded', function() {
    // Removido: const contactForm = document.getElementById('contact-form');
    // Removido: const successMessage = document.getElementById('success-message');
    // Removido: const messageArea = document.getElementById('message-area');

    // Bloco removido: if (messageArea) { ... }

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const video = card.querySelector('video');
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play();
            });
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });

    // Troca de idioma
    const translations = {
      pt: {
        title: "Estudante de Engenharia de Software",
        bio: "Entusiasta por tecnologia e desenvolvimento de soluções inovadoras. Atualmente curso Engenharia de Software e busco sempre criar projetos modernos, performáticos e com código limpo. Tenho experiência em desenvolvimento web, C++, JavaScript e estou sempre disposto a aprender mais.",
        skills: "Competências",
        projects: "Projetos em Destaque",
        project1: "Site Farmácia",
        project2: "Site Loja de Roupas",
        projectUpdate: "Projetos em atualização."
      },
      en: {
        title: "Software Engineering Student",
        bio: "Enthusiast for technology and innovative solutions development. Currently studying Software Engineering and always seeking to create modern, high-performance projects with clean code. I have experience in Full Stack Web Development. Currently, I'm learning Java and JavaScript, and I'm always willing to learn more.",
        skills: "Skills",
        projects: "Featured Projects",
        project1: "Pharmacy Website",
        project2: "Clothing Store Website",
        projectUpdate: "Projects being updated."
      }
    };

    let currentLang = "pt";

    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        currentLang = currentLang === "pt" ? "en" : "pt";
        updateLanguage();
        langBtn.textContent = currentLang === "pt" ? "EN" : "PT";
      });
      langBtn.textContent = currentLang === "pt" ? "EN" : "PT";
    }

    function updateLanguage() {
      const t = translations[currentLang];
      document.querySelector(".profile-info h2").textContent = t.title;
      document.querySelector(".bio").textContent = t.bio;
      document.querySelector(".skills-section h2").textContent = t.skills;
      document.querySelector(".projects-section h2").textContent = t.projects;
      document.querySelectorAll(".project-card h3")[0].textContent = t.project1;
      document.querySelectorAll(".project-card h3")[1].textContent = t.project2;
      document.querySelectorAll('.project-card p').forEach(p => {
        p.textContent = t.projectUpdate;
      });
    }

    // Removido: código do formulário de contato
}); 