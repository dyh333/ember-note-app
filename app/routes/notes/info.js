import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    // let username = this.controllerFor('login').get('username');
    // return username;

    return this.controllerFor('notes').get('model');
  }
});
