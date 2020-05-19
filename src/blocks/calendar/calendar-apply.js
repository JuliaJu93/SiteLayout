let apply = document.querySelector('div.blockcalendarList p:last-child');
let result = document.querySelectorAll('div.blockDateDropdownList p');

apply.onclick = Apply;

function Apply(){
    let circle = document.querySelectorAll('.calendarCircle_color_purple');
    result[0].innerText = `${circle[0].innerText}.08.2019`;
    result[1].innerText = `${circle[1].innerText}.08.2019`;
}


