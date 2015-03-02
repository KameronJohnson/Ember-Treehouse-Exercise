Blogger.ContactController = Ember.Controller.extend({
  messageSent: false,
  actions: {
    sendMessage: function() {
      var message = prompt("What you wanna say?");
      this.set('confirmationNumber', Math.round(Math.randon() * 5000));
      this.set('messageSent', true);
    }
  }
});
