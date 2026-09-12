import { Context } from './Context';
declare class TRexVpnError extends Error {
    isTRexVpnError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { TRexVpnError };
