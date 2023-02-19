const { readFile, writeFile } = require('fs').promises

const start = async () => {
  try {
    const line = await readFile('./practice.txt', 'utf8')
    for (let i =1; i <= 10; i++) {
    await writeFile(
      './content/practice2.txt',
      `\n${line} ${i}`,
      { flag: 'a' }
    )
    console.log(`${line} ${i}`)
    }
  } catch (error) {
    console.log(error)
  }
}

start()
