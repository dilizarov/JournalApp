class PostsController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index, :show]

  def index
    @posts = Post.all

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @posts }
    end
  end

  def create
    @post = Post.new(:title => params[:title], :body => params[:body])

    if @post.save
      render :json => @post, :status => 200
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

  def show
    @post = Post.find_by_id(params[:id])

    if @post
      render :json  => @post
    else
      render :json  => @post.errors.full_messages
    end
  end

end
