Blogger.NewCommentController = Ember.Controller.extend{{
  needs: ['post'],
//    we need access to this controller because the new comments route is nested in the post route,
//    and we need access to post_id.

    actions: {
    save: function() {
      var comment = this.store.createRecord('comment', {
        text: this.get('text');
      });
      comment.save();

      var post = this.get('controllers.post.model');
//      thanks to needs, we can get the controller's property     of the current controller,
//      and then get the post controller, and ask it for its model
      post.get('comments').pushObject(comment);
      post.save();
//        we'll ask the post for it's comments, the call       pushObject and pass in comment we just
//        created, then save post.
//          that's how to create an association between two models created.
      this.transitionToRoute('post', post.id);
    }
  }
});
