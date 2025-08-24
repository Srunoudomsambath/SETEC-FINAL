// Search Box Event
document.getElementById("findBtn").addEventListener("click", function() {
    const location = document.getElementById("location").value;
    const tourName = document.getElementById("tourName").value;
    const date = document.getElementById("date").value;
    const person = document.getElementById("person").value;

    alert(`Searching for: 
Location: ${location}
Tour: ${tourName}
Date: ${date}
Person: ${person}`);
});
// Slideshow images
const heroImages = [
    "images/travel4.jpg",
    "images/travel5.jpg",
    "images/travel6.jpg",
    "images/travel7.jpg"
];

let currentIndex = 0;
const hero = document.querySelector(".hero");

// Function to change background
function changeSlide() {
    hero.style.background = `url('${heroImages[currentIndex]}') no-repeat center/cover`;
    currentIndex = (currentIndex + 1) % heroImages.length;
}

// Start slideshow every 3 seconds
changeSlide(); // First load
setInterval(changeSlide, 3000);

// Show More Destinations
document.getElementById("showMoreBtn").addEventListener("click", function() {
    const destinationList = document.getElementById("destinationList");

    const moreDestinations = [
        { img: "images/travel8.jpg", title: "Tokyo, Japan", desc: "A mix of tradition and technology." },
        { img: "images/travel9.jpg", title: "Rome, Italy", desc: "Ancient history and delicious food." },
        { img: "images/travel10.jpg", title: "New York, USA", desc: "The city that never sleeps." },
        { img: "images/travel11.jpg", title: "Sydney, Australia", desc: "Beautiful beaches and the Opera House." },
        { img: "images/travel12.jpg", title: "Cape Town, South Africa", desc: "Stunning landscapes and rich culture." },
        { img: "images/travel13.jpg", title: "Rio de Janeiro, Brazil", desc: "Famous for its Copacabana beach and Christ the Redeemer statue." },
        { img: "images/travel14.jpg", title: "Moscow, Russia", desc: "The heart of Russia with its rich history." }

    ];

    moreDestinations.forEach(place => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${place.img}" alt="${place.title}">
            <h4>${place.title}</h4>
            <p>${place.desc}</p>
        `;
        destinationList.appendChild(card);
    });

    this.style.display = "none";
});
//login/signup functionality
document.querySelector(".login").addEventListener("click", function() {
    window.location.href = "/login.html";
});