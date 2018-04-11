import Route from '@ember/routing/route';

export default Route.extend({
    model: function() {
        if(this.controllerFor('notes.info').get('model')){
            return this.controllerFor('notes.info').get('model');
        } else {
            return this.store.createRecord('user');
        }
        
      }
});
