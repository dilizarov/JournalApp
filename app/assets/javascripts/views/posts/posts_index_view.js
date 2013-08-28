JournalApp.Views.PostsIndexView = Backbone.View.extend({

	initialize: function(options) {
		this.collection = options.collection;

		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "change:title", this.render);
		this.listenTo(this.collection, "remove", this.render);
		this.listenTo(this.collection, "reset", this.render);

	},

	events: {
		"click  ul li input": "delete",
		"click ul li a": "showPost",
		"click #formLink": "goForm"
	},

	render: function() {
		var that = this;

		var renderedContent = JST['posts/index']({ posts: that.collection });
		that.$el.html(renderedContent);
		return that;
	},

	delete: function() {

		event.preventDefault();

		var child = this.collection.get($(event.target).attr('id'));
		var that = this;
		child.destroy();
	},

	showPost: function() {

		event.preventDefault();

		var id = $(event.target).attr('id');
		JournalApp.postsRouter.showPost(id);
	},

	goForm: function() {

		event.preventDefault();

		var postObject = new JournalApp.Models.Post({title: "", body: ""});
		postObject.url = '/posts';

		JournalApp.postsRouter.postForm(postObject);
	}

})