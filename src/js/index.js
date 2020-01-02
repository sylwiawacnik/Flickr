import '../scss/styles.scss';
import $ from 'jquery';
import moment from 'moment';

var list = document.getElementById('list');

const myCallback = (json) => {
    // console.log(json.items);

    var items = json.items;

    items.forEach((item) => {

        // console.log(item);

        let row = document.createElement('div');
        row.classList.add('row');

        let image = document.createElement('img');
        image.setAttribute('src', item.media.m);
        //zrób swoją strone
        image.onclick = function () {
            window.open('http://myappcom', '_blank');
        };
        image.classList.add('row__image');

        let info = document.createElement('div');
        info.classList.add('row__info');

        let title = document.createElement('a');
        //zrób swoją strone
        title.href = 'http://myappcom';
        title.target = "_blank";
        title.appendChild(document.createTextNode(item.title));
        title.classList.add('row__info-title');

        let more = document.createElement('div');
        more.classList.add('row__info-more');

        let published = document.createElement('div');
        published.appendChild(document.createTextNode( 'Published: ' + moment(item.published).format('Do MMM YYYY [at] h:mm')));
        published.classList.add('row__info-more--published');

        let author = document.createElement('a');
        author.href ='https://www.flickr.com/people/'+item.author_id;
        author.target = "_blank";
        author.appendChild(document.createTextNode('Photo author'));
        author.classList.add('row__info-more--author');


        let flickr = document.createElement('a');
        flickr.href = item.link;
        flickr.target = "_blank";
        flickr.appendChild(document.createTextNode('View on Flickr'));
        flickr.classList.add('row__info-more--flickr');

        more.append(published, author, flickr);
        info.append(title, more);
        row.append(image, info);
        list.appendChild(row);

    })

};

$.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: {"format": "json"},
    jsonpCallback: 'jsonFlickrFeed'
}).then(myCallback);



