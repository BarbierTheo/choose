// CHATGPT 

const config = {
  words: ["science-fiction", "fantasy", "action", "horreur", "romance", "drame"],
  typingSpeed: 100,
  deletingSpeed: 80,
  delayBetweenWords: 2000
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
    setTimeout(() => state.isDeleting = true, delayBetweenWords);
  } else if (isDeleting && state.charIndex === 0) {
    state.wordIndex = (wordIndex + 1) % words.length;
    state.isDeleting = false;
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

type();

// CHATGPT


fetch("./assets/js/movies.json")
  .then((reponse) => reponse.json())
  .then((movies) => {
    for (item of movies["results"]) {

    //   document.querySelector("#card-affiche-section").innerHTML += `
    //   <div
    //   class="bg-slate-500 w-[80vw] lg:w-[23rem] h-[38rem] flex rounded-lg self-center bg-gradient-to-t from-slate-950 from-50% via-slate-700 via-70% cursor-pointer flex-wrap">
    //   <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" class ="cardimg" alt="">
    //   <div class="m-8 gap-4 flex flex-col self-end text-white">
    //     <h3 class="text-3xl font-semibold">${item.title}</h3>
    //     <div class="flex justify-between">
    //       <div class="flex flex-col self-end">
    //         <small>Date de sortie</small>
    //         <p>${item.release_date}</p>
    //       </div>
    //       <div class="flex flex-col self-end">
    //         <small>Popularité</small>
    //         <p>${item.vote_average}</p>
    //       </div>
    //       <div id='adult' class="hidden">+18</p>
    //       </div>
    //     </div>
    //     <p>${item.overview}
    //     </p>
    //   </div>
    // </div>` ;


          document.querySelector("#card-affiche-section").innerHTML += `
          <div class="flex flex-col justify-between gap-2 mb-4">
      <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" class="cardimg flex rounded-lg self-center cursor-pointer">
      <button type="button" class="cardimg self-center py-2.5 px-5 me-2 mb-2 text-sm font-semibold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-slate-700">+ d'infos</button>
      </div>
    ` ;


    }
  });


  fetch("./assets/js/nextMovies.json")
  .then((reponse) => reponse.json())
  .then((movies) => {
    for (item of movies["results"]) {

          document.querySelector("#card-affiche-section2").innerHTML += `
       <div class="flex flex-col gap-1 relative">
           <img class="size-64 object-cover rounded" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="">
           </img>
         <div class="bg-gradient-to-r from-slate-900 absolute rounded-t flex justify-between w-full">
            <div class="flex flex-col justify-between p-2">
              <h3 class="text-xl text-white font-bold">${item.title}</h3>
              <p class="text-slate-300">${item.release_date}</p>
            </div>
            <a href="" class="p-5 text-right">
              <i class='bx bxs-info-circle text-white text-4xl'></i>
            </a>
          </div>
       </div>` ;


    }
  });