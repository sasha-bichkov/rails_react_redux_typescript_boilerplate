# frozen_string_literal: true

class Say < ApplicationOperation

  include Dry::Monads[:result]

  def call(value:)
    Success("Hello, #{value}")
  rescue StandardError => e
    Failure(message: e.message)
  end

end
