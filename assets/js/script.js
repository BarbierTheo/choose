moment.locale('fr')

// UNIQUEMENT POUR L'ESSAI
fetch("./assets/js/details.json")
  .then((reponse) => reponse.json())
  .then((details) => {
    document.getElementById('stackhero').innerHTML += `<a href="./movie.html" id="stack0"><img src="https://image.tmdb.org/t/p/original/${details.poster_path}" alt="poster_${details.title}" class="rounded-lg"></a>`;
  })



// CHATGPT TRANSITION

const config = {
  words: [
    "science-fiction",
    "fantasy",
    "action",
    "horreur",
    "romance",
    "drame",
  ],
  typingSpeed: 100,
  deletingSpeed: 80,
  delayBetweenWords: 2000,
};

const typewriterElement = document.querySelector(".typewriter");
let state = { wordIndex: 0, charIndex: 0, isDeleting: false };

function type() {
  const { words, typingSpeed, deletingSpeed, delayBetweenWords } = config;
  const { wordIndex, charIndex, isDeleting } = state;

  const currentWord = words[wordIndex];
  state.charIndex += isDeleting ? -1 : 1;

  typewriterElement.textContent = currentWord.slice(0, state.charIndex);

  if (!isDeleting && state.charIndex === currentWord.length) {
    setTimeout(() => (state.isDeleting = true), delayBetweenWords);
  } else if (isDeleting && state.charIndex === 0) {
    state.wordIndex = (wordIndex + 1) % words.length;
    state.isDeleting = false;
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

type();

// CHATGPT TRANSITION


// A L'AFFICHE

let i = 0;

fetch("./assets/js/movies.json")
  .then((reponse) => reponse.json())
  .then((movies) => {


    // STACK HERO HEADER
    // for (let stackrandom = 0; stackrandom <= 2; stackrandom++) {
    //   document.getElementById('stackhero').innerHTML += `<a href="./movie.html" id="stack1"><img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="poster_${details.title}" class="rounded-lg"></a>`;
    // }


    // CARDS FILMS A L'AFFICHE
    let sortiepage = 0
    for (item of movies["results"]) {


      i++;


      // ONLY FOR STARTING

      if (i <= 2) {
        document.getElementById('stackhero').innerHTML += `<a href="./movie.html" id="stack${i}"><img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="poster_${item.title}" class="rounded-lg"></a>`;
      }

      // ONLY FOR STARTING


      if (i <= 5) {
        sortiepage = 1
      } else if (i <= 10) {
        sortiepage = 2
      } else if (i <= 15) {
        sortiepage = 3
      } else if (i <= 20) {
        sortiepage = 4
      }

      document.getElementById(`card-affiche-section${sortiepage}`).innerHTML += `
            <label for="my_modal_${i}" class="flex flex-col mx-4 lg:m-0">
            <img src="https://image.tmdb.org/t/p/w500${item.poster_path}"
              class="hover:shadow-sm flex rounded-lg self-center cursor-pointer lg:w-[17rem] duration-300 ease-in-out lg:h-[26rem]">
              <p class="mt-1 font-bold text-lg lg:text-left text-center w-56 self-center lg:self-start">${item.title}</p>
            </label>
    
          <input type="checkbox" id="my_modal_${i}" class="modal-toggle" />
          <div class="modal" role="dialog">
            <div class="modal-box w-11/12 max-w-3xl bg-base-100 flex flex-col shadow-2xl">
              <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}" class="object-scale rounded mb-4" alt="">
              <div class="flex justify-between">
                <h3 class="text-3xl font-bold text-slate-50">${item.title}</h3>
                <div class="flex flex-col text-right">
                  <p class="text-gray-100 font-medium">${item.vote_average / 2}  <i class='bx bxs-star'></i></p>
                  <p class="text-gray-200 font-light">${moment(item.release_date).format('LL')}</p>
                </div>
              </div>
              <p class="text-slate-100">${item.overview}</p>
            </div>
            <label class="modal-backdrop" for="my_modal_${i}">Close</label>
          </div>
    `;
    }

    // PAGINATION STACK - A NE PAS MOVE CAR DOIT CHARGER LE JS

    const stack1 = document.getElementById('stack0')
    const stack2 = document.getElementById('stack1')
    const stack3 = document.getElementById('stack2')

    const stackhero = document.getElementById('stackhero')

    const btnstack1 = document.getElementById('btnstack1')
    const btnstack2 = document.getElementById('btnstack2')
    const btnstack3 = document.getElementById('btnstack3')


    // BTN1

    const togglestack1 = document.getElementById("btnstack1");
    function showstack1() {
      btnstack1.classList.add('text-orange-500')
      btnstack2.classList.remove('text-orange-500')
      btnstack3.classList.remove('text-orange-500')

      stackhero.appendChild(stack1)
      stackhero.appendChild(stack2)
      stackhero.appendChild(stack3)
    }
    togglestack1.addEventListener("click", showstack1)

    // BTN2

    const togglestack2 = document.getElementById("btnstack2");
    function showstack2() {
      btnstack1.classList.remove('text-orange-500')
      btnstack2.classList.add('text-orange-500')
      btnstack3.classList.remove('text-orange-500')

      stackhero.appendChild(stack2)
      stackhero.appendChild(stack1)
      stackhero.appendChild(stack3)
    }
    togglestack2.addEventListener("click", showstack2)

    // BTN3

    const togglestack3 = document.getElementById("btnstack3");
    function showstack3() {
      btnstack1.classList.remove('text-orange-500')
      btnstack2.classList.remove('text-orange-500')
      btnstack3.classList.add('text-orange-500')

      stackhero.appendChild(stack3)
      stackhero.appendChild(stack2)
      stackhero.appendChild(stack1)
    }
    togglestack3.addEventListener("click", showstack3)
  });


// PAGINATION BTN 1

const toggleaffiche1 = document.getElementById("buttoncardaffiche1");
function showaffiche1() {

  document.getElementById("card-affiche-section4").classList.remove('flex')
  document.getElementById("card-affiche-section4").classList.add('hidden')

  document.getElementById("card-affiche-section3").classList.remove('flex')
  document.getElementById("card-affiche-section3").classList.add('hidden')

  document.getElementById("card-affiche-section2").classList.remove('flex')
  document.getElementById("card-affiche-section2").classList.add('hidden')

  document.getElementById("card-affiche-section1").classList.remove('hidden')
  document.getElementById("card-affiche-section1").classList.add('flex')

  document.getElementById("buttoncardaffiche1").classList.add('btn-active')
  document.getElementById("buttoncardaffiche2").classList.remove('btn-active')
  document.getElementById("buttoncardaffiche3").classList.remove('btn-active')
  document.getElementById("buttoncardaffiche4").classList.remove('btn-active')

}
toggleaffiche1.addEventListener("click", showaffiche1)

// PAGINATION BTN 2

const toggleaffiche2 = document.getElementById("buttoncardaffiche2");
function showaffiche2() {

  document.getElementById("card-affiche-section4").classList.remove('flex')
  document.getElementById("card-affiche-section4").classList.add('hidden')

  document.getElementById("card-affiche-section3").classList.remove('flex')
  document.getElementById("card-affiche-section3").classList.add('hidden')

  document.getElementById("card-affiche-section1").classList.remove('flex')
  document.getElementById("card-affiche-section1").classList.add('hidden')

  document.getElementById("card-affiche-section2").classList.remove('hidden')
  document.getElementById("card-affiche-section2").classList.add('flex')

  document.getElementById("buttoncardaffiche2").classList.add('btn-active')
  document.getElementById("buttoncardaffiche1").classList.remove('btn-active')
  document.getElementById("buttoncardaffiche3").classList.remove('btn-active')
  document.getElementById("buttoncardaffiche4").classList.remove('btn-active')

}
toggleaffiche2.addEventListener("click", showaffiche2)

// PAGINATION BTN 3

const toggleaffiche3 = document.getElementById("buttoncardaffiche3");
function showaffiche3() {

  document.getElementById("card-affiche-section4").classList.remove('flex')
  document.getElementById("card-affiche-section4").classList.add('hidden')

  document.getElementById("card-affiche-section2").classList.remove('flex')
  document.getElementById("card-affiche-section2").classList.add('hidden')

  document.getElementById("card-affiche-section1").classList.remove('flex')
  document.getElementById("card-affiche-section1").classList.add('hidden')

  document.getElementById("card-affiche-section3").classList.remove('hidden')
  document.getElementById("card-affiche-section3").classList.add('flex')

  document.getElementById("buttoncardaffiche3").classList.add('btn-active')
  document.getElementById("buttoncardaffiche2").classList.remove('btn-active')
  document.getElementById("buttoncardaffiche1").classList.remove('btn-active')
  document.getElementById("buttoncardaffiche4").classList.remove('btn-active')

}
toggleaffiche3.addEventListener("click", showaffiche3)

// PAGINATION BTN 4

const toggleaffiche4 = document.getElementById("buttoncardaffiche4");
function showaffiche4() {

  document.getElementById("card-affiche-section3").classList.remove('flex')
  document.getElementById("card-affiche-section3").classList.add('hidden')

  document.getElementById("card-affiche-section2").classList.remove('flex')
  document.getElementById("card-affiche-section2").classList.add('hidden')

  document.getElementById("card-affiche-section1").classList.remove('flex')
  document.getElementById("card-affiche-section1").classList.add('hidden')

  document.getElementById("card-affiche-section4").classList.remove('hidden')
  document.getElementById("card-affiche-section4").classList.add('flex')

  document.getElementById("buttoncardaffiche4").classList.add('btn-active')
  document.getElementById("buttoncardaffiche2").classList.remove('btn-active')
  document.getElementById("buttoncardaffiche1").classList.remove('btn-active')
  document.getElementById("buttoncardaffiche3").classList.remove('btn-active')

}
toggleaffiche4.addEventListener("click", showaffiche4)







// AFFICHAGE DES CARTES PROCHAINES SORTIES

let a = 0;
let cardpage = 0
fetch("./assets/js/nextMovies.json")
  .then((reponse) => reponse.json())
  .then((movies) => {
    for (item of movies["results"]) {
      a = a - 1;

      if (a >= -10) {
        cardpage = 1
      } else if (a >= - 20) {
        cardpage = 2
      }

      document.getElementById(`card-sorties-section${cardpage}`).innerHTML += `
        <div class="flex flex-col gap-1">
      <img class="w-64 object-cover rounded" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="">
      </img>
      <div class="flex flex-row-reverse justify-between">
        <label for="my_modal_${a}" class="self-center cursor-pointer">
          <i class='bx bxs-info-circle text-white text-2xl'></i>
        </label>
        <div class="flex flex-col w-48">
          <h3 class="text-lg text-white font-bold">${item.title}</h3>
          <p class="text-slate-300">${moment(item.release_date).format('L')}</p>
        </div>
      </div>
    </div>


    <input type="checkbox" id="my_modal_${a}" class="modal-toggle" />
    <div class="modal" role="dialog">
      <div class="modal-box w-11/12 max-w-3xl bg-base-100 flex flex-col">
        <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}" class="object-scale rounded mb-4" alt="">
        <div class="flex justify-between">
          <h3 class="text-3xl font-bold text-gray-100">${item.title}</h3>
          <div class="flex flex-col text-right">
            <p class="text-gray-100 font-medium"> ${item.vote_average / 2}  <i class='bx bxs-star'></i></p>
            <p class="text-slate-300 font-light">${moment(item.release_date).format('LL')}</p>
          </div>
        </div>
        <p class="text-gray-100">${item.overview}</p>
      </div>
      <label class="modal-backdrop" for="my_modal_${a}">Fermer</label>
    </div>
        `

    }

    // PAGINATION BTN 1 SORTIES

    const togglesortie1 = document.getElementById("buttoncardsortie1");
    function showsortie1() {

      document.getElementById("card-sorties-section2").classList.remove('flex')
      document.getElementById("card-sorties-section2").classList.add('hidden')

      document.getElementById("card-sorties-section1").classList.remove('hidden')
      document.getElementById("card-sorties-section1").classList.add('flex')

      document.getElementById("buttoncardsortie1").classList.add('btn-active')
      document.getElementById("buttoncardsortie2").classList.remove('btn-active')

    }
    togglesortie1.addEventListener("click", showsortie1)

    // PAGINATION BTN 1 SORTIES

    const togglesortie2 = document.getElementById("buttoncardsortie2");
    function showsortie2() {

      document.getElementById("card-sorties-section1").classList.remove('flex')
      document.getElementById("card-sorties-section1").classList.add('hidden')

      document.getElementById("card-sorties-section2").classList.remove('hidden')
      document.getElementById("card-sorties-section2").classList.add('flex')

      document.getElementById("buttoncardsortie2").classList.add('btn-active')
      document.getElementById("buttoncardsortie1").classList.remove('btn-active')

    }
    togglesortie2.addEventListener("click", showsortie2)

  }
  )

