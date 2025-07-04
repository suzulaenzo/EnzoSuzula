document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const messageArea = document.getElementById('message-area');

    if (messageArea) {
        messageArea.addEventListener('focus', function() {
            messageArea.classList.add('expanded');
        });

        messageArea.addEventListener('blur', function() {
            if (messageArea.value === '') {
                messageArea.classList.remove('expanded');
            }
        });
    }

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

    // Lógica de troca de idioma
    const translations = {
      pt: {
        title: "Estudante de Engenharia de Software",
        bio: "Entusiasta por tecnologia e desenvolvimento de soluções inovadoras. Atualmente curso Engenharia de Software e busco sempre criar projetos modernos, performáticos e com código limpo. Tenho experiência em desenvolvimento web, C++, JavaScript e estou sempre disposto a aprender mais.",
        skills: "Competências",
        projects: "Projetos em Destaque",
        project1: "Site Farmácia",
        project2: "Site Loja de Roupas",
        contact: "Contato",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "Seu e-mail",
        messagePlaceholder: "Sua mensagem",
        send: "Enviar",
        successTitle: "Mensagem enviada com sucesso!",
        successMsg: "Obrigado pelo seu contato. Retornarei em breve."
      },
      en: {
        title: "Software Engineering Student",
        bio: "Enthusiast for technology and innovative solutions development. Currently studying Software Engineering and always seeking to create modern, high-performance projects with clean code. I have experience in web development, C++, JavaScript and I'm always eager to learn more.",
        skills: "Skills",
        projects: "Featured Projects",
        project1: "Pharmacy Website",
        project2: "Clothing Store Website",
        contact: "Contact",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Your message",
        send: "Send",
        successTitle: "Message sent successfully!",
        successMsg: "Thank you for your contact. I will get back to you soon."
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
    }

    function updateLanguage() {
      const t = translations[currentLang];
      document.querySelector(".profile-info h2").textContent = t.title;
      document.querySelector(".bio").textContent = t.bio;
      document.querySelector(".skills-section h2").textContent = t.skills;
      document.querySelector(".projects-section h2").textContent = t.projects;
      document.querySelectorAll(".project-card h3")[0].textContent = t.project1;
      document.querySelectorAll(".project-card h3")[1].textContent = t.project2;
      document.querySelector(".contact-section h2").textContent = t.contact;
      document.querySelector("input[name='name']").placeholder = t.namePlaceholder;
      document.querySelector("input[name='email']").placeholder = t.emailPlaceholder;
      document.getElementById("message-area").placeholder = t.messagePlaceholder;
      document.querySelector(".contact-form button").textContent = t.send;
      document.querySelector("#success-message h3").textContent = t.successTitle;
      document.querySelector("#success-message p").textContent = t.successMsg;
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        const json = JSON.stringify(object);

        // Adiciona um feedback visual de que o envio está em andamento
        const submitButton = contactForm.querySelector('button');
        submitButton.innerHTML = 'Enviando...';
        submitButton.disabled = true;

        fetch('https://formsubmit.co/ajax/suzulaenzo@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(response => response.json())
        .then(data => {
            if (data.success === "true" || data.success === true) { // FormSubmit retorna "true" como string
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                // Se o FormSubmit retornar um erro
                throw new Error('Ocorreu um erro no servidor. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente manualmente enviando para: suzulaenzo@gmail.com.');
            // Restaura o botão em caso de erro
            submitButton.innerHTML = 'Enviar';
            submitButton.disabled = false;
        });
    });
}); 