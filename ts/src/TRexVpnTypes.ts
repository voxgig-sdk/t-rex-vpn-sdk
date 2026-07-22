// Typed models for the TRexVpn SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Authentication {
  email: string
  expiry?: string
  password: string
  token?: string
  user?: Record<string, any>
}

export interface AuthenticationCreateData {
  email: string
  expiry?: string
  password: string
  token?: string
  user?: Record<string, any>
}

