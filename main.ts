// The One-Liner Groan-Off — make.fun entry.
//
// Writes exactly one original dad joke (one line, at most 140 characters)
// to /output/entry.txt. Deterministic: the same line every run, no
// randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my kids the remote control runs on applause — now they clap every time they change the channel.";

// The gate allows 1–140 characters; fail loudly instead of shipping a line
// the judge would never see.
if (JOKE.length < 1 || JOKE.length > 140) {
  throw new Error(`dad joke is ${JOKE.length} characters, must be 1–140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
