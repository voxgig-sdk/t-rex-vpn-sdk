# TRexVpn SDK utility: prepare_body
require_relative 'media'
module TRexVpnUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return TRexVpnUtilities.raw_body(ctx.reqdata) if TRexVpnUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
