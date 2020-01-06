import '../scss/flickr.scss';
import PageHeader from './page-header';

customElements.define('page-header', PageHeader);

let description = localStorage.getItem('itemDescription');
document.getElementById('flickr').innerHTML = description;