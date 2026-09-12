import { TRexVpnEntityBase } from '../TRexVpnEntityBase';
import type { TRexVpnSDK } from '../TRexVpnSDK';
import type { Control } from '../types';
import type { Authentication, AuthenticationCreateData } from '../TRexVpnTypes';
declare class AuthenticationEntity extends TRexVpnEntityBase<Authentication> {
    constructor(client: TRexVpnSDK, entopts: any);
    make(this: AuthenticationEntity): AuthenticationEntity;
    create(this: any, reqdata?: AuthenticationCreateData, ctrl?: Control): Promise<AuthenticationEntity>;
}
export { AuthenticationEntity };
