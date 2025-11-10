document.addEventListener('DOMContentLoaded', function() {
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

    // Traduções

    const translations = {
      pt: {
        title: "Desenvolvedor Full Stack",
        bio: "Entusiasta por tecnologia e desenvolvimento de soluções inovadoras. Atualmente curso Engenharia de Software e busco sempre criar projetos modernos, performáticos e com código limpo. Tenho experiência em Desenvolvimento Web Full Stack. Atualmente estou aprendendo React, Java e JavaScript. Estou sempre disposto a aprender mais.",
        skills: "Competências",
        projects: "Projetos em Destaque",
        project1Title: "Portal do Contribuinte",
        project1Desc: "Sistema web desenvolvido para a Prefeitura de Duque de Caxias. Feito para ser algo didático e que atendesse clientes de todas as idades, permitindo acesso a informações cadastrais e financeiras dos imóveis de Duque de Caxias. Implementado com HTML, CSS, JavaScript e integração com banco de dados municipal.",
        project2Title: "Site Loja de Roupas",
        project2Desc: "Website moderno e responsivo desenvolvido para uma loja de roupas, com foco em design atrativo, praticidade e integração com carrinho de compras.",
      },
      
      en: {
        title: "Full Stack Developer",
        bio: "I am enthusiastic about technology and developing innovative solutions. I am currently studying Software Engineering and always strive to create modern, high-performance projects with clean code. I have experience in Full Stack Web Development. I am currently learning React, Java, and JavaScript. I am always willing to learn more.",
        skills: "Skills",
        projects: "Featured Projects",
        project1Title: "Portal do Contribuinte",
        project1Desc: "Web system developed for the City Hall of Duque de Caxias. Designed to be educational and accessible to clients of all ages, it allows access to property registration and financial information. Built with HTML, CSS, JavaScript, and integrated with the municipal database.",
        project2Title: "Clothing Store Website",
        project2Desc: "A modern and responsive website developed for a clothing store, focusing on attractive design, usability, and shopping cart integration.",
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

      // --- Atualiza cada projeto individualmente ---
      const projectTitles = document.querySelectorAll(".project-card h3");
      const projectDescs = document.querySelectorAll(".project-card p");

      if (projectTitles[0]) projectTitles[0].textContent = t.project1Title;
      if (projectDescs[0]) projectDescs[0].textContent = t.project1Desc;

      if (projectTitles[1]) projectTitles[1].textContent = t.project2Title;
      if (projectDescs[1]) projectDescs[1].textContent = t.project2Desc;
    }
});
