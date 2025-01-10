if (localStorage.theme === "dark" || (!('theme' in localStorage)
  &&window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.getElementById('darkmodehtml').classList.add('dark')
  } else {
    document.getElementById('darkmodehtml').classList.remove('dark')
  }


let darkCount = 1

function darkMode () {
  darkCount++
  console.log(darkCount)
  if (darkCount%2 == 0) {
    document.getElementById('darkmodehtml').classList.remove('dark')
  }
  else {
    document.getElementById('darkmodehtml').classList.add('dark')
  }
}
document.getElementById('darkmodetoggle').addEventListener("click", darkMode)



let params = new URLSearchParams(document.location.search);
let movieName = params.get("nameMovie")

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDU1MjRlYzBhY2Y5NzZjNmFlMGI0YjM1NTk5ZTA3MiIsIm5iZiI6MTczNTgxOTY0Ny41OTEsInN1YiI6IjY3NzY4MTdmMTk0YjU4MTZkNzYxNTk0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vupVyDYfK3m2DfMLHAi2F4XKDSTxCy5FPrGDzwbqIZY'
    }
};
if(movieName){
fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=fr-FR&page=1`, options)
    .then(response => response.json())
    .then(movies => {

            movies.results.forEach(film => {
                    document.getElementById("card-similar-section").innerHTML += `
                    <a href="./movie.html?idMovie=${film.id}" class="flex flex-col gap-1 h-fit">
                    <img src="https://image.tmdb.org/t/p/w500${film.poster_path}"
                    class="w-[14rem] h-[18rem] rounded-lg" alt="">
                    <div class="flex justify-between">
                    <p class="lg:text-lg font-bold w-32">${film.title}</p>
                    <i class='bx bxs-info-circle self-center text-white text-2xl'></i>
                    </div>
                    </a>`
           
            })
        })
    }