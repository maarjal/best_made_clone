import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  categoryName: Ember.computed('product.category', 'product.name', function() {
    return this.get('product.category') + '/ ' + this.get('product.name');
  }),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }
});
