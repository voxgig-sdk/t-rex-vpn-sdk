<?php
declare(strict_types=1);

// TRexVpn SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TRexVpnMakeContext
{
    public static function call(array $ctxmap, ?TRexVpnContext $basectx): TRexVpnContext
    {
        return new TRexVpnContext($ctxmap, $basectx);
    }
}
