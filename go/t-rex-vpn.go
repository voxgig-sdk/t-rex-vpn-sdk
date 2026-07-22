package voxgigtrexvpnsdk

import (
	"github.com/voxgig-sdk/t-rex-vpn-sdk/go/core"
	"github.com/voxgig-sdk/t-rex-vpn-sdk/go/entity"
	"github.com/voxgig-sdk/t-rex-vpn-sdk/go/feature"
	_ "github.com/voxgig-sdk/t-rex-vpn-sdk/go/utility"
)

// Type aliases preserve external API.
type TRexVpnSDK = core.TRexVpnSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TRexVpnEntity = core.TRexVpnEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TRexVpnError = core.TRexVpnError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAuthenticationEntityFunc = func(client *core.TRexVpnSDK, entopts map[string]any) core.TRexVpnEntity {
		return entity.NewAuthenticationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTRexVpnSDK = core.NewTRexVpnSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTRexVpnSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TRexVpnSDK  { return NewTRexVpnSDK(nil) }
func Test() *TRexVpnSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
