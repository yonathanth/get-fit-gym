// One-time image optimiser.
// Reads full-size photos from ./photo-originals/<group>/ and writes small,
// web-ready WebP files to ./public/images/<group>/.
//
//   node scripts/optimize-images.mjs
//
// Re-running is safe: existing outputs are skipped unless --force is passed.
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("photo-originals");
const OUT = path.resolve("public/images");
const force = process.argv.includes("--force");

// Longest edge per group. Hero banners fill the screen; the rest are cards.
const MAX_EDGE = { hero: 2560, facilities: 1920, others: 1920, "main-team": 1400, trainers: 1200 };
const QUALITY = 80;
const EXT = /\.(jpe?g|png|heic|heif|tiff?|webp)$/i;

const slug = (name) =>
  path.parse(name).name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

let saved = 0;
for (const group of await readdir(SRC)) {
  const dir = path.join(SRC, group);
  if (!(await stat(dir)).isDirectory()) continue;
  await mkdir(path.join(OUT, group), { recursive: true });
  const max = MAX_EDGE[group] ?? 1920;

  for (const file of await readdir(dir)) {
    if (!EXT.test(file)) continue;
    const input = path.join(dir, file);
    const output = path.join(OUT, group, `${slug(file)}.webp`);
    if (!force && (await stat(output).catch(() => null))) continue;
    try {
      const info = await sharp(input)
        .rotate() // apply camera orientation, then metadata is dropped
        .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 6, smartSubsample: true })
        .toFile(output);
      const before = (await stat(input)).size;
      saved += before - info.size;
      console.log(
        `${group}/${file}  ${(before / 1048576).toFixed(1)}MB -> ${(info.size / 1024).toFixed(0)}KB  (${info.width}x${info.height})`
      );
    } catch (err) {
      console.warn(`SKIPPED ${group}/${file}: ${err.message}`);
    }
  }
}
console.log(`\nSaved ${(saved / 1048576).toFixed(0)} MB`);
