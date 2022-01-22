import EmberRouter from '@ember/routing/router';
import config from 'customerio-challenge/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('customers');
  this.route('customer-page', { path: '/customers/:id' });
  this.route('edit-customer', { path: '/customers/:id/edit' });
});
