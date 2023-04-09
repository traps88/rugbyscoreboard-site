let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeSum = 0;
let guestSum = 0;

function tryScoredHome(){
    homeSum += 5;
    homeScore.innerText = homeSum;
}

function penaltyScoredHome(){
    homeSum += 3;
    homeScore.innerText = homeSum;
}

function fieldGoalScoredHome(){
    homeSum += 3;
    homeScore.innerText = homeSum;
}

function coversionScoredHome(){
    homeSum += 2;
    homeScore.innerText = homeSum;
}

function tryScoredGuest(){
    guestSum += 5;
    guestScore.innerText = guestSum;
}

function penaltyScoredGuest(){
    guestSum += 3;
    guestScore.innerText = guestSum;
}

function fieldGoalScoredGuest(){
    guestSum += 3;
    guestScore.innerText = guestSum;
}

function coversionScoredGuest(){
    guestSum += 2;
    guestScore.innerText = guestSum;
}
