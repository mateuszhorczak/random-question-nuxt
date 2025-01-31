import * as path from 'node:path'
import * as fs from 'node:fs'

export default defineEventHandler(async (event) => {
    const filePath = path.join(process.cwd(), 'public', 'questions.txt')
    const data = await fs.promises.readFile(filePath, 'utf-8')

    const array = data.split("\n").map(line => line.trim()).filter(line => line.length > 0)

    return array
})
