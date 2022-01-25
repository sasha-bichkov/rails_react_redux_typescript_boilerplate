# frozen_string_literal: true

module Api
  module V1
    class ApiController < ActionController::API

      before_action { set_safe_params }
      before_action { validate_params! }

      def validate_params!
        if safe_params&.failure?
          render(json: { errors: safe_params.errors.to_h }, status: :conflict)
        end
      end

    end
  end
end
