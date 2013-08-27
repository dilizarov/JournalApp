class PostsController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def index
    @posts = Post.all

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @posts }
    end
  end

  def create
    @post = Post.new(params[:post])

    if @post.save
      render :json => @post
    else
      render :json => @post.errors.full_messages, :status => 422
    end
  end

  def destroy
    @post = Post.find_by_id(params[:id]);
    if @post
      @post.destroy
      render :json => @post
    else
      render :json => @post.errors.full_messages, :status => 422
    end
  end

end
