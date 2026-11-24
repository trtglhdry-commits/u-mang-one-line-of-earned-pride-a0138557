// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
//
// Writes a single line of text, 1 to 240 characters, to
// $MAKEFUN_OUTPUT_DIR/entry.txt: a quiet, earned moment of pride for
// someone in a scene — a small person doing something hard, a long
// effort finally landing.
//
// The line: a man who has practised one guitar chord for a year
// finally plays it without looking, and the pride arrives not as a
// claim but as his wife stopping mid-chore to listen. Concrete scene,
// real people, effort the reader can feel, pride landing in the last
// words, and no stock trophy, podium or graduation anywhere near it.
// The wife's pause is the proof the effort landed — the line never
// says "proud", it shows someone else noticing.
//
// Deterministic: no input, no randomness, no time, no environment
// dependence beyond the output directory. Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. 150 characters, one sentence, plain and quiet.
const ENTRY =
  "For a year Tom practised the same chord; tonight his fingers found it without looking, and his wife, washing dishes in the next room, stopped to listen.";

const MIN_CHARS = 1;
const MAX_CHARS = 240;

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
}

main();
