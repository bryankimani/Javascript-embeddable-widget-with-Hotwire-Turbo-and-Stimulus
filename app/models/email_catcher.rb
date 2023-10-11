class EmailCatcher < ApplicationRecord
  validates :email, presence: true
end
