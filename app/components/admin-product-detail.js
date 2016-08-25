import Ember from 'ember';

export default Ember.Component.extend({

  categoryName: Ember.computed('product.category', 'product.name', function() {
    return this.get('product.category') + '/ ' + this.get('product.name');
  }),

  actions: {
    destroyItem(product) {
      if (confirm("You want to delete this?")) {
        this.sendAction('destroyItem', product);
      }
    }
    // updateProduct(product, params) {
    //   this.sendAction('updateProduct', product, params);
    // }
  }
});
