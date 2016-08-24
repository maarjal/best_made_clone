import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  currentTotal: 0,

  add(item) {
    this.get('items').pushObject(item);
    this.get('updateTotal')(this);
  },

  updateTotal: function(context) {
    var total = 0;
    context.get('items').forEach(function(item) {
      total += parseInt(item.get('price'));
    }.bind(total));
    context.set('currentTotal', total);
  }
});
