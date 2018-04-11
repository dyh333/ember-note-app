import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    // let username = this.controllerFor('login').get('username');
    // return username;
    // this.transitionTo('login');

    if (this.controllerFor('login').get('model')) {
      return this.controllerFor('login').get('model');
    } else {
      this.transitionTo('login');
    }
  }
});
