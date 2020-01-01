import '../scss/styles.scss';
import $ from 'jquery';

var list = document.getElementById('list');

const myCallback = (json) => {
    console.log(json);
};

$.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: {"format": "json"},
    jsonpCallback: 'jsonFlickrFeed'
}).then(myCallback);


for (let i = 0; i < 5; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    let image = document.createElement('img');
    image.setAttribute('src', 'https://via.placeholder.com/180x240');
    image.onclick = function() {
        window.location.href = 'http://exampleimage.com';
    };
    image.classList.add('row__image');

    let info = document.createElement('div');
    info.classList.add('row__info');

    let title = document.createElement('a');
    title.href = 'http://exampletitle.com';
    title.appendChild(document.createTextNode( 'Tityle Pubyylished: 2nd Feb 2012 at 12:00 Publi shed: 2nd Feb 2012 at 12:00 Publi shed: 2nd Feb 2012 at 12: 00 h ttps:// via.plac eh older.c om/180x 240'));
    // title.appendChild(document.createTextNode( 'Title'));
    title.classList.add('row__info-title');

    let more = document.createElement('div');
    more.classList.add('row__info-more');

    let published = document.createElement('div');
    published.appendChild(document.createTextNode( 'Published: 2nd Feb 2012 at 12:00'));
    published.classList.add('row__info-more--published');

    let author = document.createElement('a');
    author.href = 'http://exampleauthor.com';
    author.appendChild(document.createTextNode( 'Photo author'));
    author.classList.add('row__info-more--author');

    let flickr = document.createElement('a');
    flickr.href = 'http://exampleflickr.com';
    flickr.appendChild(document.createTextNode( 'View on Flickr'));
    flickr.classList.add('row__info-more--flickr');

    more.append(published,author,flickr);
    info.append(title, more);
    row.append(image, info);
    list.appendChild(row);
}


