let button = document.getElementById('likeButton');
button.onclick = likeButton;

function likeButton() {
    let number = document.getElementById('number');
    let heartO = document.getElementById('heart-o');
    let heart = document.getElementById('heart');
    if (this.classList.contains('like-button_state_passive')){
        number.textContent++
        button.classList.remove('like-button_state_passive');
        button.classList.add('like-button_state_active');
        heartO.classList.add('hide');
        heart.classList.remove('hide');
    }
    else{
        number.textContent--
        button.classList.remove('like-button_state_active');
        button.classList.add('like-button_state_passive');
        heartO.classList.remove('hide');
        heart.classList.add('hide');  
    }

}
