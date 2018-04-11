import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', {
    defaultValue: 'admin'
  }),
  password: DS.attr('string', {
    defaultValue: '3'
  })
});
