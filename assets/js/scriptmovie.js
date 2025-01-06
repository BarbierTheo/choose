moment.locale('fr')

function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast(item => num >= item.value);
    return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
}

/*
 * Tests
 */
//   const tests = [
//     { num: 0, digits: 1 },
//     { num: 12, digits: 1 },
//     { num: 1234, digits: 1 },
//     { num: 100000000, digits: 1 },
//     { num: 299792458, digits: 1 },
//     { num: 759878, digits: 1 },
//     { num: 759878, digits: 0 },
//     { num: 123, digits: 1 },
//     { num: 123.456, digits: 1 },
//     { num: 123.456, digits: 2 },
//     { num: 123.456, digits: 4 }
//   ];
//   tests.forEach(test => {
//     console.log("nFormatter(%f, %i) = %s", test.num, test.digits, nFormatter(test.num, test.digits));
//   });


fetch("./assets/js/details.json")
    .then((reponse) => reponse.json())
    .then((details) => {

        

        const movieruntime = moment.duration(details.runtime, 'minutes');


        document.getElementById('titlepage').innerText = `Choose - ${details.title}`

        document.getElementById('imgmovie').innerHTML += `<img src="https://image.tmdb.org/t/p/original/${details.poster_path}" alt="poster_${details.title}" class=" w-[60vh] lg:skew-y-1 max-w-[90vw] self-center min-[1100px]:self-start">`

        document.getElementById('movietitle').innerText = details.title;
        document.getElementById('year').innerText = "(" + moment(details.release_date).format('YYYY') + ")";

        document.getElementById('release').innerText = moment(details.release_date).format('LL');
        const genre = details.genres.map(genre => genre.name).join(", ")
        document.getElementById('style').innerText = genre;
        document.getElementById('runtime').innerText = `${movieruntime.hours()} h ${movieruntime.minutes()} m`;

        document.getElementById('vote').innerText = details.vote_average;
        document.getElementById('budget').innerText = nFormatter(details.budget) + " $";

        document.getElementById('tagline').innerText = details.tagline
        document.getElementById('synopsis').innerText = details.overview

        if (details.vote_average <= 2.5) {
            iconradial = "<i class='bx bx-run text-red-200 text-3xl'></i>"
            colorradial = "text-red-500"
        } else if (details.vote_average <= 5) {
            iconradial = "<i class='bx bx-body text-yellow-200 text-3xl'></i>"
            colorradial = "text-yellow-400"
        } else if (details.vote_average <= 7.5) {
            iconradial = "<i class='bx bxs-tv text-gray-100 text-3xl'></i>"
            colorradial = "text-green-300"
        } else if (details.vote_average < 9) {
            iconradial = "<i class='bx bx-check text-green-200 text-3xl'></i>"
            colorradial = "text-green-500"
        } else {
            iconradial = "<i class='bx bxs-star text-yellow-200 text-3xl'></i>"
            colorradial = "text-gray-100"
        }

        let valueradial = details.vote_average * 10

        document.getElementById('popradial').innerHTML += `<div class="radial-progress self-center ${colorradial}" style="--value:${valueradial};" role="progressbar">${iconradial}</div>`


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
                        class="flex bg-gray-300  rounded-xl px-3 py-3 pr-8 gap-4 justify-start shadow-md text-slate-800">
                        <div class="avatar">
                            <div class="w-16 h-16 rounded-lg">
                            <img src="https://image.tmdb.org/t/p/original/${item.profile_path} alt"">
                            </div>
                        </div>
                        <p class="self-center ml-2">${genrejob} <span class="flex font-bold">${item.name}</span></p>
                    </div>`
                }
            }
        }

        let a = 0
        for (item of credits.cast) {
            a++
            if (a <= 8) {
                if (a <= 4) {
                    document.getElementById('casting').innerHTML += ` <div class="flex flex-col p-3 bg-slate-900 rounded-2xl self-center"">
                    <div class="avatar self-center">
                        <div class="w-36 rounded-xl">
                            <img
                                src="https://image.tmdb.org/t/p/original/${item.profile_path}" />
                        </div>
                    </div>
                            <p class="text-lg font-bold mt-1">${item.name}</p>
                            <p class="italic">${item.character}</p>
                </div>`

                }
                else {
                    document.getElementById('casting2').innerHTML += ` <div class="flex flex-col p-3 bg-slate-900 rounded-2xl self-center"">
                    <div class="avatar self-center">
                        <div class="w-36 rounded-xl">
                            <img
                                src="https://image.tmdb.org/t/p/original/${item.profile_path}" />
                        </div>
                    </div>
                            <p class="text-lg font-bold mt-1">${item.name}</p>
                            <p class="italic">${item.character}</p>
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