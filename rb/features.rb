# TRexVpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TRexVpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      TRexVpnBaseFeature.new
    when "test"
      TRexVpnTestFeature.new
    else
      TRexVpnBaseFeature.new
    end
  end
end
