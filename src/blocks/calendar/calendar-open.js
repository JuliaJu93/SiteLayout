const arrow = document.querySelectorAll('.blockDateDropdownList i');
const calendar = document.querySelector('.containerHide_type_hide');
const shadow = document.querySelector('.cardsMini');

arrow[0].onclick=arrow[1].onclick = Open;

export function Open (){
    shadow.classList.toggle('cardsMini_shadow_shadow');
    calendar.classList.toggle('containerHide_type_hide');
}

function Close (){
    calendar.classList.add('containerHide_type_hide');
}
