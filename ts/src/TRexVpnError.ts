
import { Context } from './Context'


class TRexVpnError extends Error {

  isTRexVpnError = true

  sdk = 'TRexVpn'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  TRexVpnError
}

