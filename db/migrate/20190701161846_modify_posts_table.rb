class ModifyPostsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :content_type, :string

    change_column_null :posts, :title, true
    change_column_null :posts, :body, true
  end
end
