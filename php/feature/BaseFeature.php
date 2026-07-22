<?php
declare(strict_types=1);

// TRexVpn SDK base feature

class TRexVpnBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TRexVpnContext $ctx, array $options): void {}
    public function PostConstruct(TRexVpnContext $ctx): void {}
    public function PostConstructEntity(TRexVpnContext $ctx): void {}
    public function SetData(TRexVpnContext $ctx): void {}
    public function GetData(TRexVpnContext $ctx): void {}
    public function GetMatch(TRexVpnContext $ctx): void {}
    public function SetMatch(TRexVpnContext $ctx): void {}
    public function PrePoint(TRexVpnContext $ctx): void {}
    public function PreSpec(TRexVpnContext $ctx): void {}
    public function PreRequest(TRexVpnContext $ctx): void {}
    public function PreResponse(TRexVpnContext $ctx): void {}
    public function PreResult(TRexVpnContext $ctx): void {}
    public function PreDone(TRexVpnContext $ctx): void {}
    public function PreUnexpected(TRexVpnContext $ctx): void {}
}
