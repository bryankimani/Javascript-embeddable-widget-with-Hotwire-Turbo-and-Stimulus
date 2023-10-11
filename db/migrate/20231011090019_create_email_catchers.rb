class CreateEmailCatchers < ActiveRecord::Migration[7.1]
  def change
    create_table :email_catchers do |t|
      t.string :email

      t.timestamps
    end
  end
end
