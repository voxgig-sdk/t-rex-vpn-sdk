
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TRexVpnSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TRexVpnSDK.test()
    equal(null !== testsdk, true)
  })

})
