window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	initialize: function($rootEl) {
	 	JournalApp.posts = new JournalApp.Collections.Posts();
		JournalApp.posts.fetch(
			{
				success: function(posts) {
					JournalApp.postsRouter = new JournalApp.Routers.PostsRouter(posts, $rootEl);
					JournalApp.postsRouter.postsIndex();
					Backbone.history.start({pushState: true})
				}
			});
		},
	}

		//new JournalApp.Routers.PostsRouter($rootEl);


		//     console.log('Hello from Backbone!');
		// // debugger
		//
	 	// JournalApp.posts = new JournalApp.Collections.Posts();
// 		JournalApp.posts.fetch({ success: function(posts) {
// 			var postsRouter = new JournalApp.Routers.PostsRouter(posts, $rootEl)
// 		});
		//
		// 	var viewContent = postsIndexView.render().$el;
		//
		// 	$rootEl.html(viewContent);
		// 	}
	// 	// });
//   }
// };

$(document).ready(function(){
	var $el = $('.content');

  JournalApp.initialize($el);
});
