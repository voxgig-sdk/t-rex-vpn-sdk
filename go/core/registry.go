package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAuthenticationEntityFunc func(client *TRexVpnSDK, entopts map[string]any) TRexVpnEntity

