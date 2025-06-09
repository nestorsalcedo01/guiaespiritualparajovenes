document.addEventListener('DOMContentLoaded', function() {
    // Para el acordeón (ejemplo usado en alejarse.html y profundiza.html)
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;

            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });

    // Puedes añadir más funcionalidades aquí si las necesitas, por ejemplo,
    // para un menú de hamburguesa en móvil si lo implementas.
});
