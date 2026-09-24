

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TRexVpnSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AuthenticationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when T_REX_VPN_TEST_LIVE=TRUE.
  afterEach(liveDelay('T_REX_VPN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TRexVpnSDK.test()
    const ent = testsdk.Authentication()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.T_REX_VPN_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'authentication.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"fo":"email","h":"Email","n":"email","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"User email address","t":"`$STRING`","key$":"email","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"password":{"a":true,"fo":"password","h":"Password","n":"password","r":true,"sh":"User password","t":"`$STRING`","key$":"password","index$":2}},"id":{"field":"id","name":"id"},"name":"authentication","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /auth/login","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/auth/login","q":{},"r":{},"s":[{"lit":"auth"},{"lit":"login"}],"t":{"req":"`reqdata`","res":"`body.user`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"authentication","name__orig":"authentication","Name":"Authentication","name_":"authentication","name-":"authentication","NAME":"AUTHENTICATION","index$":0}, {"active":true,"entity":"authentication","key$":"BasicAuthenticationFlow","kind":"basic","name":"BasicAuthenticationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"authentication_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Authentication', {"POST /auth/login":{"protocol":"http","operationId":"login","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email","password"],"properties":{"email":{"type":"string","format":"email","description":"User email address","example":"user@example.com","key$":"email"},"password":{"type":"string","format":"password","description":"User password","example":"SecurePassword123","key$":"password"}},"index$":1}}}},"responses":{"200":{"description":"Successful authentication","content":{"application/json":{"schema":{"type":"object","properties":{"token":{"type":"string","description":"Authentication token for VPN access"},"user":{"type":"object","properties":{"email":{"type":"string","format":"email","key$":"email"},"id":{"type":"string","key$":"id"}},"index$":0},"expiry":{"type":"string","format":"date-time","description":"Token expiration time"}}}}}},"400":{"description":"Bad request - Invalid input parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}},"401":{"description":"Unauthorized - Invalid credentials","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT token obtained from login endpoint"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const authentication_ref01_ent = client.Authentication()
    let authentication_ref01_data = setup.data.new.authentication['authentication_ref01']

    authentication_ref01_data = (await authentication_ref01_ent.create(authentication_ref01_data)).data()
    assert(null != authentication_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/authentication/AuthenticationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TRexVpnSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['authentication01','authentication02','authentication03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'T_REX_VPN_TEST_AUTHENTICATION_ENTID': idmap,
    'T_REX_VPN_TEST_LIVE': 'FALSE',
    'T_REX_VPN_TEST_EXPLAIN': 'FALSE',
    'T_REX_VPN_APIKEY': '',
  })

  idmap = env['T_REX_VPN_TEST_AUTHENTICATION_ENTID']

  const live = 'TRUE' === env.T_REX_VPN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['T_REX_VPN_TEST_AUTHENTICATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TRexVpnSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.T_REX_VPN_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.T_REX_VPN_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
