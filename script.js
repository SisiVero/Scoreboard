let guestScore = 0;
let homeScore = 0;

let guestScoreEl = document.getElementById("guest-score");
guestScoreEl.textContent = guestScore;

let homeScoreEl = document.getElementById("home-score");
homeScoreEl.textContent = homeScore;

function add1() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function add2() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function add3() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function addOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}
function addTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}
function addThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}