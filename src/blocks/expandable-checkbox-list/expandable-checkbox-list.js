let arrow = document.getElementById("arrow");
let checkboxList = document.getElementById("checkboxList");
arrow.onclick = dropdownList;

function dropdownList(){
    if (this.classList.contains('fa-flip-vertical')){
        this.classList.remove('fa-flip-vertical');
        checkboxList.classList.add('hide');
    }
    else{
    this.classList.add('fa-flip-vertical');
    checkboxList.classList.remove('hide');
    }
    }
