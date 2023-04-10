const Page = require('./page');

class ProductPage extends Page {
    get increaseBtn () {
        return $('[data-testid="increase-btn"]');
    }

    get decreaseBtn () {
        return $('[data-testid="decrease-btn"]');
    }

    get countEl () {
        return $('[data-testid="countbar-value"]');
    }

    async increaseCount () {
        await this.increaseBtn.click();
    }

    async decreaseCount () {
        await this.decreaseBtn.click();
    }

    open () {
        return super.open('/sultan-shop/product/8809407726061');
    }
}

module.exports = new ProductPage();
