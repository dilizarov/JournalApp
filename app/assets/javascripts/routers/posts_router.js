JournalApp.Routers.PostsRouter = Backbone.Router.extend({
	routes: {
		"" : "postsIndex",
		"posts/:id" : "showPost",
		"posts/form" : "postForm"
	},

	initialize: function(posts, $rootEl){
		this.posts = posts;
		this.$rootEl = $rootEl;
	},

	postsIndex: function(){
		var postsView = new JournalApp.Views.PostsIndexView({
			collection: this.posts
		});

		this.$rootEl.html(postsView.render().$el);
	},

	showPost: function(id){

		var postView = new JournalApp.Views.PostShowView({
			model: this.posts.get(id)
		});

		this.$rootEl.html(postView.render().$el);
	},

	postForm: function(postObject){
		var postForm = new JournalApp.Views.PostFormView({
			model: postObject
		});

		this.$rootEl.html(postForm.render().$el);
	}
});