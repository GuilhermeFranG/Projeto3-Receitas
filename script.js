const recipes = document.querySelectorAll('.recipe-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
let isTransitioning = false;

// Função para exibir a receita atual
function showRecipe(index) {
    if (isTransitioning) return; // Bloqueia novas transições enquanto uma está em andamento

    isTransitioning = true;

    recipes.forEach((recipe, i) => {
        if (i === index) { // Se o valor i: número da receita, for igual a o index torna-a visível
            setTimeout(() => recipe.classList.add('active'), 300);
            recipe.classList.remove('hidden');
            setTimeout(() => isTransitioning = false, 500); // timer para usar os botões novamente
        } else { // Se não, display: none; 
            setTimeout(() => recipe.classList.add('hidden'), 300);
            recipe.classList.remove('active');
            setTimeout(() => isTransitioning = false, 500);
        }
    });
}

// Botão next
nextBtn.addEventListener('click', () => {
    if (!isTransitioning) { 
        currentIndex = (currentIndex + 1) % recipes.length;
        // % unidade binária: retorna o resto de uma divisão. Ex.: 12 % 5 = 2, 1 % 5 = 1 e 15 % 2 = 1  
        showRecipe(currentIndex);
    }
});

// Botão previous
prevBtn.addEventListener('click', () => {
    if (!isTransitioning) {
        currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
        showRecipe(currentIndex);
    }
});

// Inicializa com a primeira receita visível
showRecipe(currentIndex);


// Evento de scroll no menu fixo
let lastScroll = window.scrollY; // Armazena a posição inicial do scroll

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY; // Posição atual depois do último scroll
    // .scrollY = pega o valor do scroll vertical da página
    if (currentScroll < lastScroll) {
        document.getElementById("menu-container").style.top = "0px";
    } else {
        document.getElementById("menu-container").style.top = "-50px";
    }

    lastScroll = currentScroll; // Atualiza a posição do scroll
});