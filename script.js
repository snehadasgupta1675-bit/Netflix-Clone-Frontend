const trendingMovies = [
    { name: "Michael", img: "images/movie1.jpg" },
    { name: "Bhoot Bangla", img: "images/movie2.jpg" },
    { name: "Dscoit", img: "images/movie3.jpg" },
    { name: "Weapons", img: "images/movie4.jpg" },
    { name: "The Mummy", img: "images/movie5.jpg" },
    { name: "Black Panther: Wakanda Forever", img: "images/movie6.jpg" },
    { name: "Bhay The Gaurav Tiwari Mystery", img: "images/movie7.jpg" },
    { name: "Crime 101", img: "images/movie8.jpg"}

];

const topPicks = [
    { name: "Scream 7", img: "images/movie9.jpg" },
    { name: "War Machine", img: "images/movie10.jpg" },
    { name: "Peaky Blinders", img: "images/movie11.jpg" },
    { name: "Do Not Enter", img: "images/movie12.jpg" },
    { name: "Assi", img: "images/movie13.jpg" },
    { name: "Killer Whale", img: "images/movie14.jpg" },
    { name: "Mercy", img: "images/movie15.jpg" },
    { name: "Detective Teekshana", img: "images/movie16.jpg"}
];


// LOAD MOVIES
function loadMovies(rowId, list) {
    const row = document.getElementById(rowId);
    row.innerHTML = "";

    list.forEach(movie => {
        const img = document.createElement("img");
        img.src = movie.img;
        img.setAttribute("data-name", movie.name.toLowerCase());

        row.appendChild(img);
    });
}

// Render rows
loadMovies("row1", trendingMovies);
loadMovies("row2", topPicks);


// SEARCH FUNCTION (WORKS BY NAME)
document.getElementById("searchBox").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let images = document.querySelectorAll(".row img");

    images.forEach(img => {
        let name = img.getAttribute("data-name");

        if (name.includes(value)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
});


// LOGIN FUNCTION (FRONTEND ONLY)
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter email and password");
        return;
    }

    alert("Login successful ✔");
    window.location.href = "index.html";
}


// MY LIST BUTTON
function addToList() {
    alert("Added to My List ❤️");
}