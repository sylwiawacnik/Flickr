import $ from 'jquery';

class FlickrList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.myCallback = this.myCallback.bind(this);
        $.ajax({
            url: 'https://api.flickr.com/services/feeds/photos_public.gne',
            dataType: 'jsonp',
            data: {"format": "json"},
            jsonpCallback: 'jsonFlickrFeed'
        }).then(this.myCallback);
    };

    myCallback(json) {
        var items = json.items;

        items.forEach((item) => {
            const row = document.createElement('flickr-row');
            row.render(item);
            this.appendChild(row);
        });
    };

}

export default FlickrList;
