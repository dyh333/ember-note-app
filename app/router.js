import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route(
    'notes',
    // TODO: liyong?
    // {
    //   path: ':user_id'
    // },
    function() {
      this.route('info');
      this.route('list');
    }
  );
});

export default Router;
