const sentence = require("./practice2")
const { readFile, writeFile } = require('fs')
const os = require('os');
const fs = require('fs')

console.log(sentence)

writeFile(
    './content/result-async.txt',
    `My computer user name is not in my name. I just put  ${os.userInfo().username}`,
    (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('done with this task')
    }
  )