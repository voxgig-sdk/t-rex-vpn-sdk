# TRexVpn SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TRexVpnUtility.registrar = ->(u) {
  u.clean = TRexVpnUtilities::Clean
  u.done = TRexVpnUtilities::Done
  u.make_error = TRexVpnUtilities::MakeError
  u.feature_add = TRexVpnUtilities::FeatureAdd
  u.feature_hook = TRexVpnUtilities::FeatureHook
  u.feature_init = TRexVpnUtilities::FeatureInit
  u.fetcher = TRexVpnUtilities::Fetcher
  u.make_fetch_def = TRexVpnUtilities::MakeFetchDef
  u.make_context = TRexVpnUtilities::MakeContext
  u.make_options = TRexVpnUtilities::MakeOptions
  u.make_request = TRexVpnUtilities::MakeRequest
  u.make_response = TRexVpnUtilities::MakeResponse
  u.make_result = TRexVpnUtilities::MakeResult
  u.make_point = TRexVpnUtilities::MakePoint
  u.make_spec = TRexVpnUtilities::MakeSpec
  u.make_url = TRexVpnUtilities::MakeUrl
  u.param = TRexVpnUtilities::Param
  u.prepare_auth = TRexVpnUtilities::PrepareAuth
  u.prepare_body = TRexVpnUtilities::PrepareBody
  u.prepare_headers = TRexVpnUtilities::PrepareHeaders
  u.prepare_method = TRexVpnUtilities::PrepareMethod
  u.prepare_params = TRexVpnUtilities::PrepareParams
  u.prepare_path = TRexVpnUtilities::PreparePath
  u.prepare_query = TRexVpnUtilities::PrepareQuery
  u.graphql_body = TRexVpnUtilities::GraphqlBody
  u.graphql_errors = TRexVpnUtilities::GraphqlErrors
  u.result_basic = TRexVpnUtilities::ResultBasic
  u.result_body = TRexVpnUtilities::ResultBody
  u.result_headers = TRexVpnUtilities::ResultHeaders
  u.transform_request = TRexVpnUtilities::TransformRequest
  u.transform_response = TRexVpnUtilities::TransformResponse
}
