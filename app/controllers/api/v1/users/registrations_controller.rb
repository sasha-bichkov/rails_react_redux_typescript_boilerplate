# frozen_string_literal: true

module Api
  module V1
    module Users
      class RegistrationsController < Devise::RegistrationsController

        before_action { set_safe_params }

        def new
          render('home/index')
        end

        schema(:create) do
          required(:email).value(:string)
          required(:password).value(:string)
          required(:password_confirmation).value(:string)
        end

        def create
          user = User.new(safe_params.to_h)

          if user.save
            sign_up(User.new, user)
            sign_in(user)
            cookies[:authorized] = true
            cookies[:token] = form_authenticity_token

            render json: user, status: :created
          else
            render json: { message: user.errors.full_messages.first }, status: :unprocessable_entity
          end
        end

      end
    end
  end
end
