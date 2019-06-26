class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :name, null: false 
      t.integer :author_id, null: false 
      t.text :description

      t.timestamps
    end
  end
end
