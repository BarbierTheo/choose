moment.locale('fr')


if (localStorage.theme === "dark" || (!('theme' in localStorage)
            &&window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.getElementById('darkmodehtml').classList.add('dark')
            } else {
              document.getElementById('darkmodehtml').classList.remove('dark')
            }

let darkCount = 1

function darkMode() {
  darkCount++
  console.log(darkCount)
  if (darkCount % 2 == 0) {
    document.getElementById('darkmodehtml').classList.remove('dark')
  }
  else {
    document.getElementById('darkmodehtml').classList.add('dark')
  }
}
document.getElementById('darkmodetoggle').addEventListener("click", darkMode)


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


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDU1MjRlYzBhY2Y5NzZjNmFlMGI0YjM1NTk5ZTA3MiIsIm5iZiI6MTczNTgxOTY0Ny41OTEsInN1YiI6IjY3NzY4MTdmMTk0YjU4MTZkNzYxNTk0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vupVyDYfK3m2DfMLHAi2F4XKDSTxCy5FPrGDzwbqIZY'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1&region=FR', options)
  .then((response) => response.json())
  .then((movies) => {



    // CARDS FILMS A L'AFFICHE
    let sortiepage = 0
    for (item of movies["results"]) {


      i++;


      // ONLY FOR STARTING

      if (i <= 3) {
        document.getElementById('stackhero').innerHTML += `<a href="./movie.html?idMovie=${item.id}" id="stack${i}" class="self-center"><img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="poster_${item.title}" class="rounded-lg min-w-[20rem]"></a>`;
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


      //   <div class="flex flex-col gap-1">
      //   <a href="./movie.html?idMovie=${item.id}"><img class="w-64 object-cover rounded" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="">
      //   </img></a>
      //   <div class="flex flex-row-reverse justify-between">
      //     <label for="my_modal_${a}" class="self-center cursor-pointer">
      //       <i class='bx bxs-info-circle text-slate-950 dark:text-white text-2xl'></i>
      //     </label>
      //     <div class="flex flex-col w-48">
      //       <h3 class="text-lg text-slate-950 dark:text-white font-bold">${item.title}</h3>
      //       <p class="text-slate-800 dark:text-white">${moment(item.release_date).format('L')}</p>
      //     </div>
      //   </div>
      // </div>

      document.getElementById(`card-affiche-section${sortiepage}`).innerHTML += `
          <div class="flex flex-col gap-2 self-center lg:self-start">
            <a href="./movie.html?idMovie=${item.id}"><img class="w-56 object-cover rounded" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="">
            </img></a>
            <div class="flex flex-row-reverse justify-between">
              <label for="my_modal_${i}" class="self-center cursor-pointer">
                <i class='bx bxs-info-circle text-slate-950 dark:text-white text-2xl'></i>
              </label>
              <div class="flex flex-col w-48">
                <h3 class="text-lg text-slate-950 dark:text-white font-bold">${item.title}</h3>
              </div>
            </div>
          </div>
    
          <input type="checkbox" id="my_modal_${i}" class="modal-toggle" />
          <div class="modal" role="dialog">
            <div class="modal-box w-11/12 max-w-3xl bg-base-100 flex flex-col shadow-2xl">
              <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}" class="object-scale rounded mb-4" alt="">
              <div class="flex justify-between">
                <h3 class="text-3xl font-bold text-slate-950 dark:text-white">${item.title}</h3>
                <div class="flex flex-col text-right">
                  <p class="text-slate-950 dark:text-white font-medium">${item.vote_average / 2}  <i class='bx bxs-star'></i></p>
                  <p class="text-slate-800 dark:text-white font-light">${moment(item.release_date).format('LL')}</p>
                </div>
              </div>
              <p class="text-slate-950 dark:text-white">${item.overview}</p>
            </div>
            <label class="modal-backdrop" for="my_modal_${i}">Close</label>
          </div>
    `;
    }

    // PAGINATION STACK - A NE PAS MOVE CAR DOIT CHARGER LE JS

    const stack1 = document.getElementById('stack1')
    const stack2 = document.getElementById('stack2')
    const stack3 = document.getElementById('stack3')

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

      // stackhero.appendChild(stack1)
      // stackhero.appendChild(stack2)
      // stackhero.appendChild(stack3)

      stackhero.insertBefore(stack1, stackhero.firstElementChild)
    }
    togglestack1.addEventListener("click", showstack1)

    // BTN2

    const togglestack2 = document.getElementById("btnstack2");
    function showstack2() {
      btnstack1.classList.remove('text-orange-500')
      btnstack2.classList.add('text-orange-500')
      btnstack3.classList.remove('text-orange-500')

      // stackhero.appendChild(stack2)
      // stackhero.appendChild(stack1)
      // stackhero.appendChild(stack3)

      stackhero.insertBefore(stack2, stackhero.firstElementChild)
    }
    togglestack2.addEventListener("click", showstack2)

    // BTN3

    const togglestack3 = document.getElementById("btnstack3");
    function showstack3() {
      btnstack1.classList.remove('text-orange-500')
      btnstack2.classList.remove('text-orange-500')
      btnstack3.classList.add('text-orange-500')

      // stackhero.appendChild(stack3)
      // stackhero.appendChild(stack2)
      // stackhero.appendChild(stack1)

      stackhero.insertBefore(stack3, stackhero.firstElementChild)
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





// BUTTON WEEK PROCHAINES SORTIES

const toggleweek1 = document.getElementById("thisweek_btn");
function showweek1() {
  document.getElementById("thisweek_btn").classList.add("btn-active")
  document.getElementById("nextweek_btn").classList.remove("btn-active")
  document.getElementById("allweek_btn").classList.remove("btn-active")

}
toggleweek1.addEventListener("click", showweek1)

const toggleweek2 = document.getElementById("nextweek_btn");
function showweek2() {
  document.getElementById("thisweek_btn").classList.remove("btn-active")
  document.getElementById("nextweek_btn").classList.add("btn-active")
  document.getElementById("allweek_btn").classList.remove("btn-active")

}
toggleweek2.addEventListener("click", showweek2)

const toggleweek3 = document.getElementById("allweek_btn");
function showweek3() {
  document.getElementById("thisweek_btn").classList.remove("btn-active")
  document.getElementById("nextweek_btn").classList.remove("btn-active")
  document.getElementById("allweek_btn").classList.add("btn-active")

}
toggleweek3.addEventListener("click", showweek3)





// AFFICHAGE DES CARTES PROCHAINES SORTIES

let a = 0;
let cardpage = 0
fetch('https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1&region=fr', options)
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
      <a href="./movie.html?idMovie=${item.id}"><img class="w-64 object-cover rounded" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="">
      </img></a>
      <div class="flex flex-row-reverse justify-between">
        <label for="my_modal_${a}" class="self-center cursor-pointer">
          <i class='bx bxs-info-circle text-slate-950 dark:text-white text-2xl'></i>
        </label>
        <div class="flex flex-col w-48">
          <h3 class="text-lg text-slate-950 dark:text-white font-bold">${item.title}</h3>
          <p class="text-slate-800 dark:text-white">${moment(item.release_date).format('L')}</p>
        </div>
      </div>
    </div>


    <input type="checkbox" id="my_modal_${a}" class="modal-toggle" />
    <div class="modal" role="dialog">
      <div class="modal-box w-11/12 max-w-3xl bg-base-100 flex flex-col">
        <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}" class="object-scale rounded mb-4" alt="">
        <div class="flex justify-between">
          <h3 class="text-3xl font-bold text-slate-950 dark:text-white">${item.title}</h3>
          <div class="flex flex-col text-right">
            <p class="text-slate-950 dark:text-white font-medium"> ${item.vote_average / 2}  <i class='bx bxs-star'></i></p>
            <p class="text-slate-800 dark:text-white font-light">${moment(item.release_date).format('LL')}</p>
          </div>
        </div>
        <p class="text-slate-950 dark:text-white">${item.overview}</p>
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





