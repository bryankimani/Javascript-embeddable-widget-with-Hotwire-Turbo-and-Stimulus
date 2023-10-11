class Api::V1::EmailCatchersController < ApplicationController
  def new
    @email_catcher = EmailCatcher.new
    respond_to do |format|
      format.turbo_stream
    end
  end

  def create
    @email_catcher = EmailCatcher.new(email_catcher_params)

    respond_to do |format|
      if @email_catcher.save
        format.turbo_stream
      else
        format.turbo_stream { render :new }
      end
    end
  end

  private

  def email_catcher_params
    params.require(:email_catcher).permit(:email)
  end
end
