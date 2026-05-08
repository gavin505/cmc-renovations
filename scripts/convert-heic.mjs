import heicConvert from 'heic-convert';
import { readdir, readFile, writeFile, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '..', 'public', 'images');

const files = await readdir(imagesDir);
const heicFiles = files.filter(f => extname(f).toLowerCase() === '.heic');

console.log(`Converting ${heicFiles.length} HEIC files to JPEG...`);

for (const file of heicFiles) {
  const srcPath = join(imagesDir, file);
  const destName = basename(file, extname(file)) + '.jpg';
  const destPath = join(imagesDir, destName);

  const input = await readFile(srcPath);
  const output = await heicConvert({ buffer: input, format: 'JPEG', quality: 0.85 });
  await writeFile(destPath, Buffer.from(output));
  await unlink(srcPath);
  console.log(`  ${file} → ${destName}`);
}

console.log('Done.');
