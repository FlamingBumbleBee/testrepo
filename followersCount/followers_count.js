let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function decreaseCount() {
    if (count > 0) {
        count--;
    }
    displayCount();
}

function resetCount() {
    count = 0;
    displayCount();
    alert("Your follower count has been reset.")
}

function checkCountValue() {
    if (count === 10) {
        alert("Your post gained 10 followers!")
    } else if (count ===20 ) {
        alert("Your post gained 20 followers")
    }
}