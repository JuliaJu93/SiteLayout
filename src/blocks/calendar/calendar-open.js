let arrow = document.querySelectorAll('.blockDateDropdownList i');
let calendar = document.querySelector('.containerHide_type_hide');
let shadow = document.querySelector('.cardsMini');

arrow[0].onclick = arrow[1].onclick = Open;

function Open (){
    shadow.classList.remove('cardsMini_shadow_shadow');
    calendar.classList.remove('containerHide_type_hide');
}