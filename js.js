//Formatação/Animação Menu
window.addEventListener('load', function() {
    // Seleciona os elementos do menu
    const animanave = document.getElementById('navegacao');
    const animamenu = document.getElementById('menu');
    const animalogo = document.getElementById('logo');
    // Adiciona a classe 'visible' após a página carregar
    setTimeout(() => {
        animanave.classList.add('visible');
        animamenu.classList.add('visible');
        animalogo.classList.add('visible');
    }, 500); // Pequeno delay para dar um efeito mais suave
});

//Configurando o Slide
let currentSlideIndex = 0;  // Index do slide atual (começa no 0)
let isScrolling = false;    // Controle para não mudar os slides rápido demais]

    // Função para mostrar o slide atual
    function showSlides(n) {
        let slides = document.querySelectorAll('.slide');
        let dots = document.querySelectorAll('.dot');

        // Se o índice ultrapassar o número de slides, volta ao primeiro
        if (n >= slides.length) {
            currentSlideIndex = 0;
        }

        // Se o índice for menor que zero, volta ao último
        if (n < 0) {
            currentSlideIndex = slides.length - 1;
        }

        // Esconde todos os slides
        slides.forEach(slide => {
            slide.style.display = "none";
        });

        // Remove a classe "active" de todos os indicadores
        dots.forEach(dot => {
            dot.className = dot.className.replace(" active", "");
        });

        // Mostra o slide atual e marca o dot correspondente como ativo
        slides[currentSlideIndex].style.display = "block";
        dots[currentSlideIndex].className += " active";
    }

    // Função para avançar/navegar entre os slides
    function changeSlide(n) {
        currentSlideIndex += n;
        showSlides(currentSlideIndex);
    }

    // Função para ir diretamente a um slide específico
    function currentSlide(n) {
        currentSlideIndex = n - 1;
        showSlides(currentSlideIndex);
    }

    // Função para detectar rolagem do mouse
    function handleScroll(event) {
        // Limita as trocas de slides com o scroll
        if (!isScrolling) {
            if (event.deltaY < 0) {
                // Scroll para cima, vai para o slide anterior
                changeSlide(-1);
            } else if (event.deltaY > 0) {
                // Scroll para baixo, vai para o próximo slide
                changeSlide(1);
            }
            isScrolling = true;

            // Reseta o controle de scroll após um pequeno intervalo
            setTimeout(() => {
                isScrolling = false;
            }, 800);  // Tempo de espera para permitir o próximo scroll
        }
    }

    // Timer automático para mudar os slides a cada 5 segundos
    setInterval(function() {
        changeSlide(1); // Avança para o próximo slide
    }, 5000);

    // Mostra o primeiro slide ao carregar a página
    showSlides(currentSlideIndex);

    // Adiciona o evento de rolagem do mouse para mudar os slides
    window.addEventListener('wheel', handleScroll);