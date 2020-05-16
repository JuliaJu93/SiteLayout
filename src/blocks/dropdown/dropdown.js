let clear = document.querySelector('.blockDropdownAdditional .blockDropdownList:last-child p:first-child');
let apply = document.querySelector('.blockDropdownAdditional .blockDropdownList:last-child p:last-child');
let guestsDropdown = document.querySelector('.containerDropdownList p');
let arrowDown = document.querySelector('.blockDropdownMain .containerDropdownList i');
let list = document.querySelector ('.dropdownHide');
let container = document.querySelector('.blockDropdownAdditional .blockDropdownList:first-child');
let result = document.querySelectorAll('.blockDropdownAdditional .pCounter');
let minus = document.querySelectorAll('.blockDropdownAdditional button.buttonMinus');
let plus = document.querySelectorAll('.blockDropdownAdditional button.buttonPlus');

arrowDown.onclick = OpenList;
apply.onclick = Result;
clear.onclick = Clear;
minus[0].onclick = minus[1].onclick = minus[2].onclick = CounterMinus;
plus[0].onclick = plus[1].onclick = plus[2].onclick = CounterPlus;

function OpenList() {
  list.classList.toggle('dropdownHide');
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
  let sum = Number(result[0].innerText)+Number(result[1].innerText);   
    switch (sum) {
      case 1:
        sum  += ' гость';
      break;
      case 2:
        sum  += ' гостя';
      break;
      case 3:
        sum  += ' гостя';
      break;
      case 4:
        sum  += ' гостя';
      break;
      case 0:
        sum  = 0;
      break;
      default:
        sum  += ' гостей';
      break;
    }
  let baby = Number(result[2].innerText);
    switch (baby) {
      case 1:
        baby  += ' младенец';
      break;
      case 2:
        baby  += ' младенца';
      break;
      case 3:
        baby  += ' младенца';
      break;
      case 4:
        baby  += ' младенца';
      break;
      case 0:
        baby  = 0;
      break;
      default:
        baby  += ' младенцев';
      break;
    }
  if (baby === 0 && sum !== 0){
    guestsDropdown.innerText = sum;
  }
  else if (sum === 0 && baby !== 0){
    guestsDropdown.innerText = 'Необходимо добавить взрослого';
  }
  else if (sum !== 0 && baby !== 0){
    guestsDropdown.innerText = sum + ', ' + baby;
  }
  else if(sum === 0 && baby === 0){
    guestsDropdown.innerText = 'Сколько гостей';
  }
}

function Clear() {
  guestsDropdown.innerText = "Сколько гостей";
  for (let i = 0; i < 3; i++){
    result[i].innerText = 0;
    minus[i].classList.add('buttonMinus_type_inactive');   
  }
}
