# frozen_string_literal: true

# Typed models for the TRexVpn SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Authentication entity data model.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expiry
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
Authentication = Struct.new(
  :email,
  :expiry,
  :password,
  :token,
  :user,
  keyword_init: true
)

# Request payload for Authentication#create.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expiry
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
AuthenticationCreateData = Struct.new(
  :email,
  :expiry,
  :password,
  :token,
  :user,
  keyword_init: true
)

