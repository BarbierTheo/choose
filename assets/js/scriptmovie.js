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
                if (item.gender == 1) {
                    genrejob = "Réalisatrice"
                } else {
                    genrejob = "Réalisateur"
                }
                i++
                if (i <= 4) {
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

        let a = 0
        for (item of credits.cast) {
            a++
            if (a <= 8) {
                if (a <= 4) {
                    document.getElementById('casting').innerHTML += ` <div class="flex flex-col p-3 bg-slate-900 rounded-2xl self-center">
                            <div class="avatar">
                                <div class="w-48 rounded-xl">
                                    <img
                                        src="https://image.tmdb.org/t/p/original/${item.profile_path}" />
                                </div>
                            </div>
                            <p class="text-lg font-bold mt-1">${item.name}</p>
                            <p class="italic leading-1">${item.character}</p>
                        </div>`

                }
                else {
                    document.getElementById('casting2').innerHTML += ` <div class="flex flex-col p-3 bg-slate-900 rounded-2xl self-center"">
                    <div class="avatar">
                        <div class="w-48 rounded-xl">
                            <img
                                src="https://image.tmdb.org/t/p/original/${item.profile_path}" />
                        </div>
                    </div>
                            <p class="text-lg font-bold mt-1">${item.name}</p>
                            <p class="italic leading-1">${item.character}</p>
                </div>`
                }
            }
        }
    })

const tocard2 = document.getElementById("tocard2");
function showcard2() {
    document.getElementById("casting").classList.remove('flex')
    document.getElementById("casting").classList.add('hidden')

    document.getElementById("casting2").classList.remove('hidden')
    document.getElementById("casting2").classList.add('flex')

    document.getElementById("buttoncard2").classList.add('hidden')
    document.getElementById("buttoncard1").classList.remove('hidden')
}

tocard2.addEventListener("click", showcard2)

const tocard1 = document.getElementById("tocard1");
function showcard1() {
    document.getElementById("casting").classList.remove('hidden')
    document.getElementById("casting").classList.add('flex')

    document.getElementById("casting2").classList.remove('flex')
    document.getElementById("casting2").classList.add('hidden')

    document.getElementById("buttoncard1").classList.add('hidden')
    document.getElementById("buttoncard2").classList.remove('hidden')
}

tocard1.addEventListener("click", showcard1)