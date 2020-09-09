const calendar = document.querySelector('table.tableCalendar');

function CreateLine(){
    return document.createElement('tr');
}

function CreateCell(){
    return document.createElement('td');
}

function CreateCalendarStructure (){
for (let j = 1; j <= 5; j++) {
    let tr = CreateLine();
    tr.id = `line${j}`;
    tr.classList.add('calendarBox');
    tr.classList.add('text');
    tr.classList.add('text_type_h3');
    tr.classList.add('text_color_50');
    tr.classList.add('text_weight_normal');
    for (let i = 1; i <= 7; i++) {
        let td = CreateCell();
        let day = FillingCalendar ();
        td.append(day);
        tr.append(td);
    }
    calendar.append(tr);
}
}

let counter1 = 0;
let counter2 = -1;
let dayStart = 29;

function FillingCalendar (){
    let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    counter1++;
    if (dayStart-2+counter1 < days.length){
        return days[dayStart-2+counter1];
    }
    else {
        counter2++;
        if (counter2 === 31){
            counter2 = 0;
            return days[counter2];
        }
        else{
        return days[counter2];
        }
    }
}

CreateCalendarStructure ();

function SelectionOfDays(){
    const twoLine = document.querySelector('tr:nth-child(2)');
    const tdTwoLine = twoLine.querySelectorAll('td');
    const lastLine = document.querySelector('tr:nth-child(6)');
    const tdLastLine = lastLine.querySelectorAll('td');
    for (let i = 0; i < 7; i++){
        if(tdTwoLine[i].innerText > 7){
        tdTwoLine[i].classList.add('text_color_25');
        }
        if(tdLastLine[i].innerText < 25){
            tdLastLine[i].classList.add('text_color_25');
        }
    }
}

SelectionOfDays();

