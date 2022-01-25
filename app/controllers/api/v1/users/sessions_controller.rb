# frozen_string_literal: true

# :nocov:
module Api
  module V1
    module Users
      class SessionsController < Devise::SessionsController

        before_action { set_safe_params }
        # TODO: it should be removed in the future if possible
        skip_before_action :verify_authenticity_token, only: [:destroy]

        schema(:create) do
          required(:user).hash do
            required(:email).value(:string)
            required(:password).value(:string)
            required(:remember_me).value(:integer)
          end
        end

        def create
          self.resource = warden.authenticate(auth_options)

          if resource.present?
            sign_in(User.new, resource)
            cookies[:authorized] = true
            cookies[:token] = form_authenticity_token

            return render(json: resource, status: :ok)
          end

          render json: { message: 'Invalid Email or password.' }, status: :unauthorized
        rescue StandardError => e
          render json: { message: e.message }, status: :internal_server_error
        end

        def destroy
          Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
          cookies[:authorized] = false
          cookies[:token] = form_authenticity_token

          head :no_content
        rescue StandardError => e
          render json: { message: e.message }, status: :internal_server_error
        end

      end
    end
  end
end
# :nocov:
