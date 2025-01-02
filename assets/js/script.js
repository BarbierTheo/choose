// CHATGPT

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

// CHATGPT
let i = 0;

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
      i++;
      document.querySelector("#card-affiche-section").innerHTML += `
          <label for="my_modal_${i}" class="flex flex-col justify-between gap-2 mb-4">
      <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" class="hover:shadow-sm flex rounded-lg self-center cursor-pointer md:w-[20rem] lg:w-[17rem] duration-300 ease-in-out ">
      </label>

      <input type="checkbox" id="my_modal_${i}" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box w-11/12 max-w-3xl bg-slate-700 flex flex-col shadow-2xl">
    <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}" class="object-scale rounded mb-4" alt="">
    <div class="flex justify-between">
      <h3 class="text-3xl font-bold text-slate-50">${item.title}</h3>
      <div class="flex flex-col text-right">
        <p class="text-gray-100 font-medium"><i class='bx bxs-star'></i> ${item.popularity}</p>
        <p class="text-gray-200 font-light">${item.release_date}</p>
      </div>
    </div>
    <p class="text-slate-100">${item.overview}</p>
  </div>
  <label class="modal-backdrop" for="my_modal_${i}">Close</label>
</div>
    `;
    }
  });

let a = 0;
fetch("./assets/js/nextMovies.json")
  .then((reponse) => reponse.json())
  .then((movies) => {
    for (item of movies["results"]) {
      a = a - 1;
      document.querySelector("#card-affiche-section2").innerHTML += `
       <div class="flex flex-col gap-1 relative">
           <img class="size-64 object-cover rounded" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="">
           </img>
         <div class="bg-gradient-to-r from-slate-900  absolute rounded-t flex justify-between w-full">
            <div class="flex flex-col justify-between p-2 leading-2">
              <h3 class="text-xl text-white font-bold m-0">${item.title}</h3>
              <p class="text-slate-300 m-0">${item.release_date}</p>
            </div>
            <label for="my_modal_${a}" class="p-5 text-right">
              <i class='bx bxs-info-circle text-white text-4xl'></i>
            </label>
          </div>
       </div>

             <input type="checkbox" id="my_modal_${a}" class="modal-toggle" />
       <div class="modal" role="dialog">
  <div class="modal-box w-11/12 max-w-3xl bg-white flex flex-col">
    <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}" class="object-scale rounded mb-4" alt="">
    <div class="flex justify-between">
      <h3 class="text-3xl font-bold text-slate-950">${item.title}</h3>
      <div class="flex flex-col text-right">
        <p class="text-slate-700 font-medium"><i class='bx bxs-star'></i> ${item.popularity}</p>
        <p class="text-slate-600 font-light">${item.release_date}</p>
      </div>
    </div>
    <p class="text-slate-900">${item.overview}</p>
  </div>
  <label class="modal-backdrop" for="my_modal_${a}">Close</label>
</div>
       `;
    }
  });

