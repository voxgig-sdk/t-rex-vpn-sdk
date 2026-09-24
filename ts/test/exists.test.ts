
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TRexVpnSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TRexVpnSDK.test()
    equal(testsdk instanceof TRexVpnSDK, true,
      'TRexVpnSDK.test() must return a client synchronously')
  })

})
