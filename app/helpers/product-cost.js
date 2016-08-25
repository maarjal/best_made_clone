import Ember from 'ember';

export function productCost(params/*, hash*/) {
    var productPrice = params[0].get('price');

    if (productPrice >= 1000) {
      return '$$$';
    } else if (productPrice >= 500) {
      return "what a bargain!";
    } else if (productPrice <= 250) {
      return "too cheap!";
    }
  }


export default Ember.Helper.helper(productCost);
