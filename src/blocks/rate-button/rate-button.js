let starOne = document.getElementById('starOne');
starOne.onclick = Star;
let starTwo = document.getElementById('starTwo');
starTwo.onclick = Star;
let starThree = document.getElementById('starThree');
starThree.onclick = Star;
let starFour = document.getElementById('starFour');
starFour.onclick = Star;
let starFife = document.getElementById('starFife');
starFife.onclick = Star;

let starStorage = [starOne, starTwo, starThree, starFour, starFife];

function Star () {
    let number = starStorage.indexOf(this);
    if (this.classList.contains('fa-star')){
        number = number+1;
        for (let i = number; i<starStorage.length; i++){
            if (starStorage[i].classList.contains('fa-star')){
            starStorage[i].classList.remove('fa-star');
            starStorage[i].classList.add('fa-star-o');
            }
        } 
    }
    else{
        for (let i = 0; i<=number; i++){
            starStorage[i].classList.add('fa-star');
            starStorage[i].classList.remove('fa-star-o');
        }
    }

}