# frozen_string_literal: true

module Api
  module V1
    class TestController < ApiController

      schema(:say) do
        required(:phrase).value(:string)
      end

      def say
        result = RailsReactReduxTypescriptBoilerplate::Container['say'].call(value: safe_params.to_h[:phrase])

        if result.success?
          render json: { message: result.value! }, status: :ok
        else
          render json: { message: result.failure[:message] }, status: :internal_server_error
        end
      end

    end
  end
end
