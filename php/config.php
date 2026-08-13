<?php
declare(strict_types=1);

// TRexVpn SDK configuration

class TRexVpnConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "TRexVpn",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://t-rex.top/api",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "authentication" => [],
                ],
            ],
            "entity" => [
        'authentication' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'email',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'password',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
          ],
          'name' => 'authentication',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/auth/login',
                  'parts' => [
                    'auth',
                    'login',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.user`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return TRexVpnFeatures::make_feature($name);
    }
}
