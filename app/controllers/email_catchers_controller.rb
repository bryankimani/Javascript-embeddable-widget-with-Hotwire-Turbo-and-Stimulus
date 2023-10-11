class EmailCatchersController < ApplicationController
  def index
    @emails = EmailCatcher.all
  end
end
