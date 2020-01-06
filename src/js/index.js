import '../scss/flickr-row.scss';
import $ from 'jquery';
import moment from 'moment';
import PageHeader from './page-header';
import FlickrList from './flickr-list';
import FlickrRow from './flickr-row';

customElements.define('page-header', PageHeader);




// var list = document.getElementById('list');


// const myCallback = (json) => {
//
//     var items = json.items;
//
//     items.forEach((item) => {
//
//         customElements.define('flickr-row', FlickrRow(item));
//
//
//         //
//         // let row = document.createElement('div');
//         // row.classList.add('row');
//         //
//
//         //
//         //
//         // let image = document.createElement('img');
//         // image.setAttribute('src', item.media.m);
//         image.onclick = function () {
//             localStorage.setItem('itemDescription', item.description);
//             window.open('/Flickr/flickr-index.html', '_blank');
//         };
//         // image.classList.add('row__image');
//
//         // let info = document.createElement('div');
//         // info.classList.add('row__info');
//
//         // let title = document.createElement('a');
//         // title.appendChild(document.createTextNode(item.title));
//         // title.classList.add('row__info-title');
//         title.onclick = function (e) {
//             e.preventDefault();
//             localStorage.setItem('itemDescription', item.description);
//             window.open('/Flickr/flickr-index.html', '_blank');
//         };
//
//         let more = document.createElement('div');
//         more.classList.add('row__info-more');
//
//         let published = document.createElement('div');
//         published.appendChild(document.createTextNode( 'Published: ' + moment(item.published).format('Do MMM YYYY [at] h:mm')));
//         // published.classList.add('row__info-more--published');
//
//         // let author = document.createElement('a');
//         // author.href ='https://www.flickr.com/people/'+item.author_id;
//         // author.target = "_blank";
//         // author.appendChild(document.createTextNode('Photo author'));
//         // author.classList.add('row__info-more--author');
//
//
//         // let flickr = document.createElement('a');
//         // flickr.href = item.link;
//         // flickr.target = "_blank";
//         // flickr.appendChild(document.createTextNode('View on Flickr'));
//         // flickr.classList.add('row__info-more--flickr');
//         //
//         // more.append(published, author, flickr);
//         // info.append(title, more);
//         // row.append(image, info);
//         // list.appendChild(row);
//
//     })
//
// };
//
// $.ajax({
//     url: 'https://api.flickr.com/services/feeds/photos_public.gne',
//     dataType: 'jsonp',
//     data: {"format": "json"},
//     jsonpCallback: 'jsonFlickrFeed'
// }).then(myCallback);


customElements.define('flickr-list', FlickrList);
customElements.define('flickr-row', FlickrRow);