const ProductPage = require('../pageobjects/product.page');

describe('Product page', () => {
    it('should open page', async () => {
        await ProductPage.open();
        await expect(ProductPage.countEl).toBeExisting();
    });

    it('should increase and decrease product count', async () => {
        await ProductPage.open();
        await ProductPage.increaseCount();
        await expect(ProductPage.countEl).toHaveTextContent('2');
    })
})



