import '../scss/flickr.scss';

let description = localStorage.getItem('itemDescription');
document.getElementById('flickr').innerHTML = description;