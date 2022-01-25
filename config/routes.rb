# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do

      devise_for :users, controllers: {
        sessions: 'api/v1/users/sessions',
        # passwords: 'api/v1/users/passwords',
        registrations: 'api/v1/users/registrations',
        # confirmations: 'api/v1/users/confirmations'
      }

      namespace :test do
        get :say
      end
    end
  end

end
