module ActivitiesHelper

  def years_lived
    yob = @activity.yob
    if yob == 1994
       "we were born the same year!"
    elsif yob >1994
      "you are younger than me"
    else 
      "you are older than me!"
    end
  end
end
