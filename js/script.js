document.addEventListener('DOMContentLoaded', function() {
    // Código para todos los acordeones en la página
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            
            // Cierra todos los otros acordeones abiertos antes de abrir el actual
            document.querySelectorAll('.accordion-content').forEach(content => {
                if (content !== accordionContent && content.style.maxHeight !== '0px') {
                    content.style.maxHeight = 0;
                    content.previousElementSibling.classList.remove('active');
                }
            });

            button.classList.toggle('active');
            if (button.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });

    // Puedes añadir más funcionalidades aquí si las necesitas.
    // Por ejemplo, para un menú de hamburguesa en móvil:
    // const menuToggle = document.querySelector('.menu-toggle');
    // const navLinks = document.querySelector('.nav-links');
    // if (menuToggle) {
    //     menuToggle.addEventListener('click', () => {
    //         navLinks.classList.toggle('active');
    //     });
    // }
});
