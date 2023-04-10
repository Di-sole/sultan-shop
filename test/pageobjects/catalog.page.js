const Page = require('./page');

class CatalogPage extends Page {
    get pageContent () {
        return $('[data-testid="catalog-page"]');
    }

    open () {
        return super.open('/sultan-shop/');
    }
}

module.exports = new CatalogPage();