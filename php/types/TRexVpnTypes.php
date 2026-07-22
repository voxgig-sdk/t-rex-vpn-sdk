<?php
declare(strict_types=1);

// Typed models for the TRexVpn SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Authentication entity data model. */
class Authentication
{
    public string $email;
    public ?string $expiry = null;
    public string $password;
    public ?string $token = null;
    public ?array $user = null;
}

/** Request payload for Authentication#create. */
class AuthenticationCreateData
{
    public string $email;
    public ?string $expiry = null;
    public string $password;
    public ?string $token = null;
    public ?array $user = null;
}

