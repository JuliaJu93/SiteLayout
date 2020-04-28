let rooms = document.getElementById('rooms');
let arrowDownRoom = document.getElementById('arrowRoom');
let listRoom = document.getElementById ('dropdownRoomHide');
let containerRoom = document.getElementById ('containerRoom');
let resultRoom = document.querySelectorAll('.blockDropdownRoomMain .pCounter');
let minusRoom = document.querySelectorAll('.blockDropdownRoomMain button.buttonMinus');
let plusRoom = document.querySelectorAll('.blockDropdownRoomMain button.buttonPlus');

arrowDownRoom.onclick = OpenListRoom;
minusRoom[0].onclick = minusRoom[1].onclick = minusRoom[2].onclick = CounterMinus;
plusRoom[0].onclick = plusRoom[1].onclick = plusRoom[2].onclick = CounterPlus;

function OpenListRoom() {
  listRoom.classList.toggle('dropdownHide');
  containerRoom.classList.toggle('removeUnderline');
}

function CounterPlus (e) {
  let p = e.target.previousSibling;
  let value = Number(p.innerText);
  value ++;
  p.innerText = value;
    if (value > 0){
      p.previousSibling.classList.remove('buttonMinus_type_inactive');
    }
    RoomBad();
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
  RoomBad();
}

function RoomBad (){
    let room = resultRoom[0].innerText;
    console.log(room)
    let bad = resultRoom[1].innerText;
    switch (room) {
        case '1':
            room  += ' спальня, ';
        break;
        case '2' || '3' || '4':
            room  += ' спальни, ';
        break;
        default:
            room  += ' спален, ';
        break;
    }
    switch (bad) {
        case '1':
            bad  += ' кровать...';
        break;
        case '2' || '3' || '4':
            bad  += ' кровати...';
        break;
        default:
            bad  += ' кроватей...';
        break;
    }
    rooms.innerText = room + bad;
}