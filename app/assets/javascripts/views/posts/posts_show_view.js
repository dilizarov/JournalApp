JournalApp.Views.PostShowView = Backbone.View.extend({
	//render a template to show title and body

	initialize: function(options) {
		this.model = options.model;
	},

	events: {
		"click a" : "showIndex"
	},

	render: function(){

		var renderedContent = JST['posts/show']({ post: this.model });
		this.$el.html(renderedContent);
		return this;
	},

	showIndex: function(){

		event.preventDefault();

		JournalApp.postsRouter.postsIndex();
	}
})