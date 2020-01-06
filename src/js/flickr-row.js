import '../scss/flickr-row.scss';

class FlickrRow extends HTMLElement {
    constructor() {
        super();
    }

    render(item) {
        const {media, title} = item; //deconstruction assignemnt ;)

        this.innerHTML = `
        <div class="row">
            <img src="${media.m}" class="row__image">
            <div class="row__info"><a class="row__info-title">${title}</a>
            </div>
        </div>`;
    }
}

export default FlickrRow;