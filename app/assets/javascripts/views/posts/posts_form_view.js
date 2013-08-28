JournalApp.Views.PostFormView = Backbone.View.extend({
	//render a template to show title and body

	initialize: function(options) {
		this.postObject = options.model;
	},

	events: {
		"click #submitButton" : "processForm"
	},

	render: function(){

		var renderedContent = JST['posts/form']({ post: this.postObject });
		this.$el.html(renderedContent);
		return this;
	},


	processForm: function(){

		event.preventDefault();

		var formData = $("#postData").serializeJSON();
		var that = this;

		this.postObject.set(formData);
		this.postObject.save( formData, {
			success: function (responseData) {
				JournalApp.posts.push(that.postObject);
				//JournalApp.postsRouter.postsIndex();
				Backbone.history.navigate("", {trigger: true});
			},
			error: function(responseData) {
				console.log("He");
				JournalApp.postsRouter.postForm(that.postObject);
			}
		});

	}
})