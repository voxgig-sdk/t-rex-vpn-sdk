<?php
declare(strict_types=1);

// TRexVpn SDK utility: result_body

class TRexVpnResultBody
{
    public static function call(TRexVpnContext $ctx): ?TRexVpnResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
