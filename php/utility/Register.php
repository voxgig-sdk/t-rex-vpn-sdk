<?php
declare(strict_types=1);

// TRexVpn SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TRexVpnUtility::setRegistrar(function (TRexVpnUtility $u): void {
    $u->clean = [TRexVpnClean::class, 'call'];
    $u->done = [TRexVpnDone::class, 'call'];
    $u->make_error = [TRexVpnMakeError::class, 'call'];
    $u->feature_add = [TRexVpnFeatureAdd::class, 'call'];
    $u->feature_hook = [TRexVpnFeatureHook::class, 'call'];
    $u->feature_init = [TRexVpnFeatureInit::class, 'call'];
    $u->fetcher = [TRexVpnFetcher::class, 'call'];
    $u->make_fetch_def = [TRexVpnMakeFetchDef::class, 'call'];
    $u->make_context = [TRexVpnMakeContext::class, 'call'];
    $u->make_options = [TRexVpnMakeOptions::class, 'call'];
    $u->make_request = [TRexVpnMakeRequest::class, 'call'];
    $u->make_response = [TRexVpnMakeResponse::class, 'call'];
    $u->make_result = [TRexVpnMakeResult::class, 'call'];
    $u->make_point = [TRexVpnMakePoint::class, 'call'];
    $u->make_spec = [TRexVpnMakeSpec::class, 'call'];
    $u->make_url = [TRexVpnMakeUrl::class, 'call'];
    $u->param = [TRexVpnParam::class, 'call'];
    $u->prepare_auth = [TRexVpnPrepareAuth::class, 'call'];
    $u->prepare_body = [TRexVpnPrepareBody::class, 'call'];
    $u->prepare_headers = [TRexVpnPrepareHeaders::class, 'call'];
    $u->prepare_method = [TRexVpnPrepareMethod::class, 'call'];
    $u->prepare_params = [TRexVpnPrepareParams::class, 'call'];
    $u->prepare_path = [TRexVpnPreparePath::class, 'call'];
    $u->prepare_query = [TRexVpnPrepareQuery::class, 'call'];
    $u->result_basic = [TRexVpnResultBasic::class, 'call'];
    $u->result_body = [TRexVpnResultBody::class, 'call'];
    $u->result_headers = [TRexVpnResultHeaders::class, 'call'];
    $u->transform_request = [TRexVpnTransformRequest::class, 'call'];
    $u->transform_response = [TRexVpnTransformResponse::class, 'call'];
});
