class ActivitiesController < ApplicationController

  def index
  end

  def create 
    @activity = Activity.new(activity_params)
    if @activity.save
      flash[:success] = "Kenny is a FGT!"
      redirect_to @activity
    else 
      render 'new'
    end
  end 

  def new
    @activity = Activity.new
  end

  def show
    @activity = Activity.find(params[:id])
  end

  private
  
  def activity_params
    params.fetch(:activity, {}).permit(:name, :yob)
  end
end
 
