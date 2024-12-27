const data = [
  {
    star: 5,
    count: 95020,
    color: "#FFD700", // Gold
    size: "1.5rem",
  },
  {
    star: 4,
    count: 60710,
    color: "#C0C0C0", // Silver
    size: "1.4rem",
  },
  {
    star: 3,
    count: 15060,
    color: "#CD7F32", // Bronze
    size: "1.3rem",
  },
  {
    star: 2,
    count: 8700,
    color: "#FF6347", // Tomato
    size: "1.2rem",
  },
  {
    star: 1,
    count: 5020,
    color: "#8B0000", // Dark Red
    size: "1.1rem",
  },
];

function getRatingCountTotal() {
  return data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.count;
  }, 0);
}

function getTotalRatingBasedOnStars() {
  return data.reduce((accumulator, rating) => {
    return accumulator + rating.count * rating.star;
  }, 0);
}

function getAverageStarRating() {
  return (getTotalRatingBasedOnStars() / getRatingCountTotal()).toFixed(1);
}

data.forEach((rating) => {
  let barWidth = Math.ceil((rating.count / getRatingCountTotal()) * 100);
  let rating_progress = `
        <div class="rating__progress-value" style="font-size: ${rating.size}; color: ${rating.color};">
            <p>${rating.star} <span class="star">&#9733;</span></p>
            <div class="progress">
              <div class="bar" style="width: ${barWidth}%; background-color: ${rating.color};"></div>
            </div>
            <p>${rating.count.toLocaleString()}</p>
          </div>
        `;

  document.querySelector(".rating__progress").innerHTML += rating_progress;
});

document.querySelector(".rating__average p").innerHTML =
  getRatingCountTotal().toLocaleString();

document.querySelector(".rating__average h1").innerHTML =
  getAverageStarRating();

document.querySelector(".rating__average .star-inner").style.width = `
  ${(getAverageStarRating() / 5) * 100}%`;
