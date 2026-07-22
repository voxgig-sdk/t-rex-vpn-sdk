# TRexVpn SDK utility: make_context
require_relative '../core/context'
module TRexVpnUtilities
  MakeContext = ->(ctxmap, basectx) {
    TRexVpnContext.new(ctxmap, basectx)
  }
end
