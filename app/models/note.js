import DS from 'ember-data';
import { computed } from '@ember/object'

export default DS.Model.extend({
  thing: DS.attr('string'),
  datetime: DS.attr('date'),

  localdate: computed('datetime', {
    get() {
      return this.get('datetime').toLocaleString();
    }
  })
});
