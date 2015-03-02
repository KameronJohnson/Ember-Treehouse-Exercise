Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function() {
      alert("Dracula's real name is Bob.");
    },
    showPicture: function() {
        this.set('isPictureShowing', true);
      },
    hidePicture: function() {
        this.set('isPictureShowing', false);
      }
    }
});
