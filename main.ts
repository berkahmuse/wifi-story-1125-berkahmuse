// Wi-Fi story entry for @berkahmuse — "Tell a Whole Story in 32 Characters".
//
// The whole entry is one network name a stranger reads in a phone's
// Wi-Fi list. Six beats, no spaces, 28 characters:
//
//   My / Kid / Sold / The / Password / At / School
//
// The joke lands at once — the family password is no longer secret —
// and the story writes itself around it: who sold it, what was sold,
// and where the deal went down. A schoolyard black market, implied
// in a single SSID, behind the parents' backs.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Beats of the story, in order. Joined with no separator: a Wi-Fi name
// has no spaces, and the missing spaces are part of the joke's delivery.
const BEATS: readonly string[] = [
  "My",
  "Kid",
  "Sold",
  "The",
  "Password",
  "At",
  "School",
];

const MAX_SSID_CHARS = 32;
const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

const name = BEATS.join("");

if (name.length > MAX_SSID_CHARS) {
  throw new Error(
    `Wi-Fi name is ${name.length} characters, over the ${MAX_SSID_CHARS}-character limit`,
  );
}

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

writeFileSync(OUT_FILE, name, "utf8");

console.log(`${name} (${name.length}/${MAX_SSID_CHARS} chars) -> ${OUT_FILE}`);
