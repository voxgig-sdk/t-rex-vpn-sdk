-- Typed models for the TRexVpn SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Authentication
---@field email? string
---@field id? string
---@field password string

---@class AuthenticationCreateData
---@field email? string
---@field id? string
---@field password string

local M = {}

return M
