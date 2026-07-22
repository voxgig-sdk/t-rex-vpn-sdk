<?php
declare(strict_types=1);

// TRexVpn SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TRexVpnFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TRexVpnBaseFeature();
            case "test":
                return new TRexVpnTestFeature();
            default:
                return new TRexVpnBaseFeature();
        }
    }
}
