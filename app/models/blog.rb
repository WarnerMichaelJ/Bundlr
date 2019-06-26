class Blog < ApplicationRecord
  validates :name, length: { maximum: 50 }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

end
