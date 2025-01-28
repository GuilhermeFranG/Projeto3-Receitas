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
        if (i === index) {
            setTimeout(() => recipe.classList.add('active'), 350);
            recipe.classList.remove('hidden');
            setTimeout(() => isTransitioning = false, 500);
        } else {
            setTimeout(() => recipe.classList.add('hidden'), 300);
            recipe.classList.remove('active');
            setTimeout(() => isTransitioning = false, 500);
        }
    });
}

// Evento para o botão "Próximo"
nextBtn.addEventListener('click', () => {
    if (!isTransitioning) {
        currentIndex = (currentIndex + 1) % recipes.length;
        // % unidade binária: retorna o resto de uma divisão. Ex.: 12 % 5 = 2, 1 % 5 = 1 e 15 % 2 = 1  
        showRecipe(currentIndex);
    }
});

// Evento para o botão "Anterior"
prevBtn.addEventListener('click', () => {
    if (!isTransitioning) {
        currentIndex = (currentIndex - 1 + recipes.length) % recipes.length;
        showRecipe(currentIndex);
    }
});

// Inicializa com a primeira receita visível
showRecipe(currentIndex);