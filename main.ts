// The One-Liner Groan-Off — make.fun entry.
//
// Writes exactly one original dad joke (one line, at most 140 characters)
// to /output/entry.txt. Deterministic: the same line every run, no
// randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Dad renamed our Wi-Fi '404 Not Found' — now the neighbours keep knocking to ask where the internet went.";

// The gate allows 1–140 characters; fail loudly instead of shipping a line
// the judge would never see.
if (JOKE.length < 1 || JOKE.length > 140) {
  throw new Error(`dad joke is ${JOKE.length} characters, must be 1–140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
