import '../scss/flickr-row.scss';
import moment from 'moment';

class FlickrRow extends HTMLElement {
    constructor() {
        super();
        this.itemDescription = '';
        this.onClick = this.onClick.bind(this);
    }

    connectedCallback() {
        const image = this.getElementsByClassName('row__image')[0];
        image.onclick = this.onClick;

        const title = this.getElementsByClassName('row__info-title')[0];
        title.onclick = this.onClick;
    }


    onClick(e) {
        e.preventDefault();
        localStorage.setItem('itemDescription', this.itemDescription);
        window.open('/Flickr/flickr-index.html', '_blank');
    }

    render(item) {
        const {media, title, author_id, link, published, description} = item;
        let publishedDate = moment(published).format('Do MMM YYYY [at] h:mm');

        this.itemDescription = description;
        this.innerHTML = `
                          <div class="row">
                              <img alt="${title}" src="${media.m}" class="row__image">
                              <div class="row__info"><a class="row__info-title">${title}</a>
                                  <div class="row__info-more">
                                      <div class="row__info-more--published">Published: ${publishedDate}</div>
                                      <a href="https://www.flickr.com/people/${author_id}" target="_blank"
                                              class="row__info-more--author">Photo author</a><a
                                          href="${link}" target="_blank"
                                          class="row__info-more--flickr">View on Flickr</a></div>
                              </div>
                          </div>
                          `;
    }
}

export default FlickrRow;
