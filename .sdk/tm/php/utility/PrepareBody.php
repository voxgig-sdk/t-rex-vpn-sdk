<?php
declare(strict_types=1);

// TRexVpn SDK utility: prepare_body

class TRexVpnPrepareBody
{
    public static function call(TRexVpnContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
