import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('forms', function() {
    this.route('form-builder', function() {});
  });
  this.route('login');

  this.route('form-builder', function() {
    this.route('form-builder-blank');
    this.route('form-builder-new');
    this.route('form-builder-edit-settings');
    this.route('form-builder-filled-out');
    this.route('conditional-fields');
    this.route('form-builder-activate');
    this.route('form-builder-deactivate');
  });
  this.route('forms-archive');
});

export default Router;
