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


fetch("./assets/js/nextMovies.json")
  .then((reponse) => reponse.json())
  .then((movies) => {
    for (item of movies["results"]) {

      document.querySelector("#card-affiche-section").innerHTML += `<div
      class="bg-slate-500 w-[80vw] lg:w-[23rem] h-[38rem] flex rounded-lg self-center bg-gradient-to-t from-slate-950 from-50% via-slate-700 via-70% cursor-pointer flex-wrap">
      <div class="m-8 gap-4 flex flex-col self-end text-white">
        <h3 class="text-3xl font-semibold">${item.title}</h3>
        <div class="flex justify-between">
          <div class="flex flex-col self-end">
            <small>Date de sortie</small>
            <p>${item.release_date}</p>
          </div>
          <div class="flex flex-col self-end">
            <small>Popularité</small>
            <p>${item.vote_average}</p>
          </div>
          <div id='adult' class="hidden">+18</p>
          </div>
        </div>
        <p>${item.overview}
        </p>
      </div>
    </div>` ;
    }
  });