JournalApp.Views.PostsIndexView = Backbone.View.extend({
	collection: JournalApp.Collections.Posts,

	initialize: function() {

	this.listenTo(this.collection, "add", this.render);
	this.listenTo(this.collection, "change:title", this.render);
	this.listenTo(this.collection, "remove", this.render);
	this.listenTo(this.collection, "reset", this.render);

	},

	events: {
		"click  ul li input": "delete"
	},

	render: function() {
		var $ul = $('<ul></ul>');

		this.collection.each( function (el) {

			var $li = $('<li>' + el.escape('title') + " " + el.escape('body') + '</li>');
			$li.append("<form><input type='submit' value='delete' id=" + el.id + "></form>");
			$ul.append($li);
		});

		this.$el.html($ul);
		return this;
	},

	delete: function() {

		event.preventDefault();

		var child = this.collection.get($(event.target).attr('id'));
		var that = this;
		child.destroy();
	}
})