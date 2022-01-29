import * as fs from 'fs'
import { join } from 'path'

const SRC_PATH = 'projects/br-components/src/assets/img'
const DEST_PATH = 'projects/br-components/src/generated/icons'

const baseDir = join(__dirname, '..')

const srcDir = join(baseDir, SRC_PATH)
const destDir = join(baseDir, DEST_PATH)

fs.readdir(srcDir, (err, files) => {
    files.forEach((file) => {
        const srcIcon = join(srcDir, file)
        const destModule = join(destDir, `${file}.ts`)

        fs.readFile(srcIcon, 'utf8', (e, data) => {
            const content = `export default \`${data.replace(/\n$/, '')}\``
            fs.writeFileSync(destModule, content)
        })
    })
})
