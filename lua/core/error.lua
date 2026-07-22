-- TRexVpn SDK error

local TRexVpnError = {}
TRexVpnError.__index = TRexVpnError


function TRexVpnError.new(code, msg, ctx)
  local self = setmetatable({}, TRexVpnError)
  self.is_sdk_error = true
  self.sdk = "TRexVpn"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TRexVpnError:error()
  return self.msg
end


function TRexVpnError:__tostring()
  return self.msg
end


return TRexVpnError
