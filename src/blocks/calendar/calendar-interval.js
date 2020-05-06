let date = document.querySelectorAll('td');

function CreateDiv(){
    return document.createElement('div');
}

for (var i = 0; i < date.length; i++){
    date[i].onclick = DatePicker;
}

let counterDatePicker = 0;

function DatePicker(e){
    if (counterDatePicker<2){
    e.target.classList.add('calendarCircle');
    e.target.classList.add('calendarCircle_color_purple');
    }
    counterDatePicker++;
    if (counterDatePicker===2){
        ColoringInterval();
    }
}

function ColoringInterval(){
    let interval = document.querySelectorAll('.calendarCircle');
    let parentOne = interval[0].parentNode;
    let parentTwo = interval[1].parentNode;
    let tdOne = parentOne.childNodes;
    let tdTwo = parentTwo.childNodes;

    if (parentOne.getAttribute('id') < parentTwo.getAttribute('id')){
        for (let j = 0; j < tdOne.length; j++) {
            if (tdOne[j] === interval[0]){
                for (let k = j; k < tdOne.length; k++){
                    tdOne[k].classList.add('intervalColor');
                }
            }
        }
        for (let j = 0; j < tdTwo.length; j++) {
            if (tdTwo[j] === interval[1]){
                for (let k = j; k >= 0; k--){
                    tdTwo[k].classList.add('intervalColor');
                }
            }
        }
        if (parentOne.nextSibling !== parentTwo) {
            parentOne.nextSibling.classList.add('intervalColor'); 
            if (parentTwo.previousSibling !== parentOne) {
                parentTwo.previousSibling.classList.add('intervalColor');
                if ((parentOne.nextSibling.nextSibling !== parentTwo.previousSibling) && (parentOne.nextSibling.nextSibling !== parentTwo)){
                    parentOne.nextSibling.nextSibling.classList.add('intervalColor');
                }
            }
        }
        let divOne = CreateDiv();
        let divTwo = CreateDiv();
        divOne.classList.add('colorDiv'); 
        interval[0].append(divOne);
        divTwo.classList.add('colorDiv'); 
        divTwo.classList.add('colorDiv_position_left'); 
        interval[1].append(divTwo);
    }

    if (parentOne.getAttribute('id') === parentTwo.getAttribute('id')){
        for (let j = 0; j < tdOne.length; j++) {
            if (tdOne[j] === interval[0]){
                for (let k = j; k < tdOne.length; k++){
                    if(tdOne[k] === interval[1]){
                        break;
                    }
                    else {tdOne[k].classList.add('intervalColor');
                    }
                }
            }
        }
        let divOne = CreateDiv();
        let divTwo = CreateDiv();
        divOne.classList.add('colorDiv'); 
        interval[0].append(divOne);
        divTwo.classList.add('colorDiv'); 
        divTwo.classList.add('colorDiv_position_left'); 
        interval[1].append(divTwo);
    }
}

