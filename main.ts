// Famous Last Words: The Funniest Epitaph.
//
// One line for a headstone, stamped out exactly the same on every run.
// No randomness, no clock, no network, no input files — the sentence
// below is the program's entire output, and the only thing taken from
// the environment is the destination folder.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The last words. The opening ("died doing what he loved") promises a
// noble, heroic death; the ending swaps the heroics for a stubborn,
// everyday habit everyone recognises — ignoring the check-engine light
// until the car gave up first. The joke lands on the final words, needs
// no setup beyond the formula itself, and fits on a stone: 61 chars.
const LAST_WORDS =
  "He died doing what he loved: ignoring the check-engine light.";

const MAX_EPITAPH_CHARS = 150;

function assertEpitaphOk(text: string): void {
  if (text.length < 1 || text.length > MAX_EPITAPH_CHARS) {
    throw new Error(`epitaph breaks the length gate: ${text.length} characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("epitaph must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("epitaph must be exactly one line");
  }
  if (/[^\x00-\x7F]/.test(text)) {
    throw new Error(`epitaph must be plain ASCII: ${JSON.stringify(text)}`);
  }
}

function inscribe(text: string, dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/entry.txt`, text, "utf8");
  const carved = readFileSync(`${dir}/entry.txt`, "utf8");
  if (carved !== text) {
    throw new Error(
      `read-back mismatch: disk has ${JSON.stringify(carved)}, expected ${JSON.stringify(text)}`,
    );
  }
}

// Gate (RULES.txt): /output/entry.txt holds UTF-8 text of 1 to 150
// characters, not only whitespace. Check the line, carve it, echo it.
function run(): void {
  const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  assertEpitaphOk(LAST_WORDS);
  inscribe(LAST_WORDS, destination);
  console.log(LAST_WORDS);
}

run();
