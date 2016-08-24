import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyItem(product) {
      if (confirm("You want to delete this?")) {
        this.sendAction('destroyItem', product);
      }
    }
  }
});
