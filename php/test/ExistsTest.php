<?php
declare(strict_types=1);

// TRexVpn SDK exists test

require_once __DIR__ . '/../trexvpn_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TRexVpnSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
