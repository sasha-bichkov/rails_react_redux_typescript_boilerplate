# frozen_string_literal: true

require 'rails_helper'

describe ApplicationRecord, type: :model do
  it 'inherits ActiveRecord::Base' do
    expect(described_class.superclass).to eq(ActiveRecord::Base)
  end

  it 'is an abstract class' do
    expect(described_class.abstract_class).to be_truthy
  end
end
