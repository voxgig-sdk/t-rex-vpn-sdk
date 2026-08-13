# TRexVpn SDK exists test

import pytest
from trexvpn_sdk import TRexVpnSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TRexVpnSDK.test(None, None)
        assert testsdk is not None
