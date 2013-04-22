class TodoItemsController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => TodoItem.all }
    end
  end

  def new
  end

  def create
    @todo_item = TodoItem.create!(params[:todo_item])

    render :json => @todo_item
  end

  def update
  end

  def destroy
  end
end
