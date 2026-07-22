# TRexVpn SDK feature factory

from feature.base_feature import TRexVpnBaseFeature
from feature.test_feature import TRexVpnTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TRexVpnBaseFeature(),
        "test": lambda: TRexVpnTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
