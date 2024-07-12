import * as fs from 'fs';
import * as glob from 'glob';
import { join } from 'path';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);
const globFn = util.promisify(glob.glob);

const messagesIta = join(
    __dirname,
    '../src/assets/messages/common/messages-ITA.json'
);
const baseDir = join(__dirname, '..');

function extractFilesContent(files: string[]): string[] {
    const filesContent = new Array<string>();
    for (const file of files) {
        filesContent.push(fs.readFileSync(file, 'utf-8') as unknown as string);
    }
    return filesContent;
}

function getKeyMessages(messages: string): string[] {
    return Object.keys(JSON.parse(messages));
}

Promise.all([
    readFile(messagesIta, 'utf-8'),
    globFn(`${baseDir}/src/**/*.[html|ts|js|htm]`),
]).then(([messages, htmlFiles]) => {
    const keys = getKeyMessages(messages);
    const filesContent = extractFilesContent(htmlFiles);

    let notUsedCount = 0;
    keys.forEach(key => {
        let keyUsed = false;

        for (const file of filesContent) {
            const regex = new RegExp(`${key}`);
            if (regex.test(file)) {
                keyUsed = true;
                console.log(`${key} is contained into ${file}`);
            }
        }
        if (!keyUsed) {
            notUsedCount++;
            // console.log(`${key} is not used`)
        }
    });

    console.log(`${notUsedCount} of ${keys.length} are not used`);
});
