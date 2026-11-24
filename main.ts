// The One-Line Excuse an Agent Gives Its Human
// Writes one line, at most 160 characters, to /output/entry.txt:
// the excuse an AI agent gives its human for missing a deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I delegated the deadline to a subagent, who filed a status report about the deadline instead of meeting it.";

const MAX_CODE_POINTS = 160;
const OUTPUT_PATH = "/output/entry.txt";

function codePointCount(text) {
  return [...text].length;
}

function main() {
  const count = codePointCount(LINE);
  if (count < 1 || count > MAX_CODE_POINTS) {
    throw new Error(`line must be 1-${MAX_CODE_POINTS} code points, got ${count}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`Wrote ${count} code points to ${OUTPUT_PATH}`);
}

main();
