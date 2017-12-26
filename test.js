const assert = require('assert')
const database = require('./database/database')
const dbConfigs = require('./settings/db_configs_test')

const mstuserDaoServiceTest = require('./services/test/mstusertest')
const valid = require('./utils/validateUtil')

describe('ValidateUtil', () => {
  describe('#validateName()', () => {
    it('should return true when name is valid', () => {
      assert.equal(valid.validateName('uzulove'), true)
    })
  })
})

describe('', ()=>{
  before(()=>{
    database.connect(dbConfigs, {
      onConnected: ()=>console.log('database connected at ' + Date()),
      onDisconnected: ()=>console.log('database disconnected at ' + Date()),
      onError: (err)=>console.log(err)
    })
  })

  mstuserDaoServiceTest.test()

  after(()=>{
    database.disconnect()
  })
})
