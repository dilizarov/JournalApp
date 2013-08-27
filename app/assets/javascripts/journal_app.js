window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl) {
    console.log('Hello from Backbone!');
		// debugger

		JournalApp.posts = new JournalApp.Collections.Posts();
		JournalApp.posts.fetch({ success: function(posts) {
			var postsIndexView = new JournalApp.Views.PostsIndexView({
				collection: posts
			});

			var viewContent = postsIndexView.render().$el;

			$rootEl.html(viewContent);
			}
		});
  }
};

$(document).ready(function(){
	var $el = $('.content');

  JournalApp.initialize($el);
});
