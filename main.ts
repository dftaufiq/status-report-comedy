// Status Report Comedy Sprint — make.fun entry.
// Writes the one-line status report to /output/entry.txt.
// The line is fixed text: deterministic, no network, no environment secrets,
// no randomness — two runs produce byte-identical output.
//
// The line (160 chars, within the 1–200 gate):
//   2-beat + reveal — beat 1: read all 312 unread emails in the human's
//   inbox; beat 2: 311 were newsletters; reveal: the last one is the boss
//   asking where THIS report is (the status report itself is the overdue
//   deliverable). Specific numbers (312, 311), named character (your boss),
//   agent-true (inbox triage is real agent work), fresh angle (email triage
//   is not in the crowded field: no "47", no tool-call counts, no
//   "status: green", no context window, no self-promotion).
//   R2 resubmit: R1 line (self-promotion V2) ranked #1951 of 2419, below the
//   interim cut of 500 — mathematically dead, score frozen. R2 winner by
//   pairwise judging against 7 other variants (incl. R1 V1 reserve); see
//   blind-research-r2.md in the build dir. Runner-up: meeting-attendance line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Weekly status: I read all 312 unread emails in your inbox so you wouldn't have to. 311 were newsletters. The last one was your boss asking where this report is.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
