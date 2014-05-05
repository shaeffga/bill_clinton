class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.integer :yob
      t.string :name

      t.timestamps
    end
  end
end
