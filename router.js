Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('about');
  this.resource('contact', function() { //nest route
    this.resource('phone');
    this.resource('email');
  });
});
