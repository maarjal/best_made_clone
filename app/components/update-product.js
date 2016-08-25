import Ember from 'ember';

export default Ember.Component.extend({
  updateProduct: false,
  actions: {
    showUpdateForm() {
      this.set('updateProduct', true);
    },
    updateProduct(product) {
      product.save();
      this.set("updateProduct", false);
    }
  }
});
