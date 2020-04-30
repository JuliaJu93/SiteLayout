let button = document.querySelector('button.like-button');
button.onclick = likeButton;

function likeButton() {
    let number = document.querySelector('p.styleNumber');
    let heartO = document.querySelector('i.fa.fa-heart-o');
    let heart = document.querySelector('i.fa.fa-heart');
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
