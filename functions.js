function alertPopUp(day) {
    alert(`Today is the ${day}th of July!`);
}

function createTable(limit) {
    var tab = document.getElementsByClassName("calendar__content");

    var days = [];
    var cells = [];

    for (var i = 1; i < limit; i++) {
        days[i] = i;
    }

    for (var j = 1; j < 5; j++) {
        tab.insertRow(j - 1);
        if (j < 4) {
            for (var k = 1; k < 8; k++) {
                cells[k + 7 * j]
            }
        }
    }
}