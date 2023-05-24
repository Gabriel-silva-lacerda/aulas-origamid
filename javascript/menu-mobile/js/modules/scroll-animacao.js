export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
        sections.forEach((section) => {
            const sectioTop = section.getBoundingClientRect().top;
            const isSectionBisible = (sectioTop - windowMetade) < 0;
            if(isSectionBisible) {
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo');
            }
        });
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}