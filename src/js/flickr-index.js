import '../scss/flickr.scss';
import Logo from "../images/logo-flick.png";


let header = document.getElementById('header');
header.classList.add('header');
let logo = document.createElement('img');
logo.setAttribute('src', 'dist/' + Logo);
header.append(logo);


let description = localStorage.getItem('itemDescription');
document.getElementById('flickr').innerHTML = description;