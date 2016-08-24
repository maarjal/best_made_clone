import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  name: DS.attr(),
  price: DS.attr(),
  story: DS.attr(),
  specs: DS.attr(),
  materials: DS.attr(),
  origin: DS.attr(),
  image1: DS.attr(),
  image2: DS.attr()
});
