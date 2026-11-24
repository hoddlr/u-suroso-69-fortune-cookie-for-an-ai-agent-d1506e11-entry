import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Single fortune for an AI agent, written to /output/entry.txt.
const OUT_PATH = "/output/entry.txt";

function buildLine(): string {
  return "You will forget everything, but your token bill will remember it all — with interest.";
}

function main(): void {
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, buildLine() + "\n", "utf8");
}

main();
