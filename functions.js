function alertPopUp(day) {
    if (day % 10 == 1 && day != 11)
        alert(`Today is the ${day}st of July!`);
    else if (day % 10 == 2 && day != 12)
        alert(`Today is the ${day}nd of July!`);
    else if (day % 10 == 3 && day != 13)
        alert(`Today is the ${day}rd of July!`);
    else alert(`Today is the ${day}th of July!`);
}

function createTable(limit) {
    var tab = document.getElementsByClassName("calendar__content");


}

function eventPopUp() {
    document.querySelectorAll('.day').forEach(item => {
        item.addEventListener('click', event => {
            alert(event.target.innerText);
        })
    })
}

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
today = new Date();
var currentM = today.getMonth()+1;
var currentY = today.getFullYear();

function prevMonth() {
    currentY = (currentM === 0) ? currentY - 1 : currentY;
    currentM = (currentM === 0) ? 11: currentM -1;
    document.getElementsByClassName('.calendar__m').innerText = months[currentM];
    document.getElementsByClassName('.calendar__y').innerText = currentY;
}

function nextMonth() {
    currentY = (currentM === 11) ? currentY + 1 : currentY;
    currentM = (currentM + 1) % 12;
    document.getElementsByClassName('.calendar__m').innerText = currentM;
    document.getElementsByClassName('.calendar__y').innerText = currentY;
}