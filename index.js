const FactoryGirl = require('factory-girl')
const faker = require('faker')

const factory = FactoryGirl.factory
const adapter = new FactoryGirl.MongooseAdapter()
factory.setAdapter(adapter)

faker.locale = 'zh_CN'

exports.factory = factory
exports.faker = faker
exports.mockPhone = mockPhone
exports.mockNumber = mockNumber

function mockPhone (format = '13800######') {
  return faker.phone.phoneNumber(format)
}
function mockNumber (min = 10000, max) {
  return faker.random.number({min, max})
}

