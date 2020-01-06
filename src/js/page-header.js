import Logo from '../images/logo-flick.png';
import styles from '../scss/page-header.scss'

class PageHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
                <div class="header">
                <img src="dist/${Logo}"></div>
                `;
    }
}

export default PageHeader;