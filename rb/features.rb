# TRexVpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TRexVpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      TRexVpnBaseFeature.new
    when "ratelimit"
      TRexVpnRatelimitFeature.new
    when "retry"
      TRexVpnRetryFeature.new
    when "test"
      TRexVpnTestFeature.new
    when "timeout"
      TRexVpnTimeoutFeature.new
    else
      TRexVpnBaseFeature.new
    end
  end
end
