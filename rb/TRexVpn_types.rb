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
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String]
Authentication = Struct.new(
  :email,
  :id,
  :password,
  keyword_init: true
)

# Request payload for Authentication#create.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String]
AuthenticationCreateData = Struct.new(
  :email,
  :id,
  :password,
  keyword_init: true
)

