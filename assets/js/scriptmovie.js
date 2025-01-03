fetch("./assets/js/details.json")
    .then((reponse) => reponse.json())
    .then((details) => {
        document.getElementById('titlepage').innerText = `Choose - ${details.title}`

        document.getElementById('imgmovie').innerHTML += `<img src="https://image.tmdb.org/t/p/original/${details.poster_path}" alt="poster_${details.title}" class=" w-[60vh] lg:skew-y-1 max-w-[90vw] self-center min-[1100px]:self-start">`

        document.getElementById('movietitle').innerText = details.title;
        document.getElementById('year').innerText = "(" + details.release_date + ")";

        document.getElementById('release').innerText = details.release_date;
        const genre = details.genres.map(genre => genre.name).join(", ")
        document.getElementById('style').innerText = genre;
        document.getElementById('runtime').innerText = details.runtime

        document.getElementById('vote').innerText = details.vote_average;
        document.getElementById('budget').innerText = details.budget + " $";

        document.getElementById('tagline').innerText = details.tagline
        document.getElementById('synopsis').innerText = details.overview

    })

    fetch("./assets/js/credits.json")
    .then((reponse) => reponse.json())
    .then((credits) => {
        let i = 0
        for (item of credits.crew) {
            if (item.job === "Director") {
                    let genrejob = ""
                    if (item.gender == 1){
                        genrejob = "Réalisatrice"
                    } else {
                        genrejob = "Réalisateur"
                    }
                    i++
                    if(i<=4){
                  document.getElementById('crew').innerHTML += `<div
                        class="flex bg-gray-200  rounded-xl px-3 py-3 pr-8 gap-4 justify-start shadow-md text-slate-800">
                        <div class="avatar">
                            <div class="w-16 h-16 rounded-lg">
                            <img src="https://image.tmdb.org/t/p/original/${item.profile_path} alt"">
                            </div>
                        </div>
                        <p class="self-center ml-2 font-light">${genrejob} <span class="flex font-bold">${item.name}</span></p>
                    </div>`
                }
            }
        }
    })