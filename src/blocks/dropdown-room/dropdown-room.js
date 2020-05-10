let rooms = document.querySelector('.blockDropdownRoomMain .blockRoomList p');
let arrowDownRoom = document.querySelector('.blockDropdownRoomMain .blockRoomList i');
let listRoom = document.querySelector ('.containerDropdownRoom .blockDropdownAdditional.dropdownHide');
let containerRoom = document.querySelector ('.blockDropdownRoomMain .blockRoomList');
let resultRoom = document.querySelectorAll('.containerDropdownRoom .blockDropdownAdditional.dropdownHide .pCounter');
let minusRoom = document.querySelectorAll('.containerDropdownRoom .blockDropdownAdditional.dropdownHide button.buttonMinus');
let plusRoom = document.querySelectorAll('.containerDropdownRoom .blockDropdownAdditional.dropdownHide button.buttonPlus');

arrowDownRoom.onclick = OpenListRoom;
minusRoom[0].onclick = minusRoom[1].onclick = minusRoom[2].onclick = CounterMinus;
plusRoom[0].onclick = plusRoom[1].onclick = plusRoom[2].onclick = CounterPlus;

function OpenListRoom() {
  listRoom.classList.toggle('dropdownHide');
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
    let bed = resultRoom[1].innerText;
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
    switch (bed) {
        case '1':
            bed  += ' кровать...';
        break;
        case '2' || '3' || '4':
            bed  += ' кровати...';
        break;
        default:
            bed  += ' кроватей...';
        break;
    }
    rooms.innerText = room + bed;
}