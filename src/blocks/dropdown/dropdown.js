let clear = document.getElementById('clear');
let apply = document.getElementById('apply');
let guests = document.getElementById('guests');
let arrowDown = document.getElementById('arrowDown');
let list = document.getElementById ('dropdownHide');
let container = document.getElementById ('container');
let result = document.querySelectorAll('.blockDropdownMain .pCounter');
let minus = document.querySelectorAll('.blockDropdownMain button.buttonMinus');
let plus = document.querySelectorAll('.blockDropdownMain button.buttonPlus');

arrowDown.onclick = OpenList;
apply.onclick = Result;
clear.onclick = Clear;
minus[0].onclick = minus[1].onclick = minus[2].onclick = CounterMinus;
plus[0].onclick = plus[1].onclick = plus[2].onclick = CounterPlus;

function OpenList() {
  list.classList.toggle('dropdownHide');
  container.classList.toggle('removeUnderline');
}

function CounterPlus (e) {
  let p = e.target.previousSibling;
  let value = Number(p.innerText);
  value ++;
  p.innerText = value;
    if (value > 0){
      p.previousSibling.classList.remove('buttonMinus_type_inactive');
      clear.classList.remove('clearHide');
    }
}

function CounterMinus (e) {
  let p = e.target.nextSibling;
  let value = Number(p.innerText);
  if (value > 0){
  value --;
  p.innerText = value;
    if (value === 0) {
      e.target.classList.add('buttonMinus_type_inactive');
    }
  }
  if ((result[0].innerText === '0')&&(result[1].innerText === '0')&&(result[2].innerText === '0')){
    clear.classList.add('clearHide');
  } 
}

function Result() {
    let sum = 0;
  for (let i = 0; i < 3; i++){
    sum = sum + Number(result[i].innerText)   
  }
  if (sum > 0){
    switch (sum) {
      case 1:
        sum  += ' гость';
      break;
      case 2 || 3 || 4:
        sum  += ' гостя';
      break;
      default:
        sum  += ' гостей';
      break;
      }
    guests.innerText = sum;
  }
}

function Clear() {
  guests.innerText = "Сколько гостей";
  for (let i = 0; i < 3; i++){
    result[i].innerText = 0;
    minus[i].classList.add('buttonMinus_type_inactive');   
  }
}
