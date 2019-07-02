class Post < ApplicationRecord
  validates :title, presence: true 

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User',
    optional: true

  has_one_attached :photo

  has_many :likes 

end

