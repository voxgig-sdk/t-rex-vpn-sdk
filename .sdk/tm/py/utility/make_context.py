# TRexVpn SDK utility: make_context

from core.context import TRexVpnContext


def make_context_util(ctxmap, basectx):
    return TRexVpnContext(ctxmap, basectx)
