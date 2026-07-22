package core

type TRexVpnError struct {
	IsTRexVpnError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTRexVpnError(code string, msg string, ctx *Context) *TRexVpnError {
	return &TRexVpnError{
		IsTRexVpnError: true,
		Sdk:              "TRexVpn",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TRexVpnError) Error() string {
	return e.Msg
}
