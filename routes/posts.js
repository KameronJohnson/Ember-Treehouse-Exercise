Blogger.PostRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});
