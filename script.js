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