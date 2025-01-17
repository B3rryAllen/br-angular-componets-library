import * as fs from 'fs';
import { join } from 'path';

const SRC_PATH = 'projects/br-components/src/assets/img';
const DEST_PATH = 'projects/br-components/src/lib/br/icons';

const baseDir = join(__dirname, '..');

const srcDir = join(baseDir, SRC_PATH);
const destDir = join(baseDir, DEST_PATH);

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

fs.readdir(srcDir, (err, files) => {
    files.forEach(file => {
        const srcIcon = join(srcDir, file);
        const destModule = join(destDir, `${file}.ts`);

        fs.readFile(srcIcon, 'utf8', (e, data) => {
            const content = `export default \`${data.replace(/\n$/, '')}\``;
            fs.writeFileSync(destModule, content);
        });
    });
});
