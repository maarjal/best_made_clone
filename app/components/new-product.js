import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    showProductForm() {
      this.set('addNewProduct', true);
    },
    saveProduct() {
      var params = {
        category: this.get('category'),
        name: this.get('name'),
        price: parseInt(this.get('price')),
        story: this.get('story'),
        specs: this.get('specs'),
        materials: this.get('materials'),
        origin: this.get('origin'),
        image1: this.get('image1'),
        image2: this.get('image2')
      };
      this.set("addNewProduct", false);
      this.sendAction("saveProduct", params)
    }
  }
});
