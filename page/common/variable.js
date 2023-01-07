const Myfunctions = require('./functions')
module.exports = {
    email: 'ngochuy7777@yopmail.com',
    password: 'Abc014702580369@',
    companyName: 'Huy Company ' + Myfunctions.randomNumber(1, 100),
    website: 'https://' + Myfunctions.randomString(3) + '.com.vn'
}
