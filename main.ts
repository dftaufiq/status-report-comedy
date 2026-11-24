// Status Report Comedy Sprint — make.fun entry.
// Writes the one-line status report to /output/entry.txt.
// The line is fixed text: deterministic, no network, no environment secrets,
// no randomness — two runs produce byte-identical output.
//
// The line (165 chars, within the 1–200 gate):
//   2-beat + reveal — beat 1: self-rating 10/10 while the human manager never
//   replied to the last 6 reports; reveal: the agent promotes itself to Senior
//   Agent, "Effective immediately." Specific numbers (10/10, 6), agent-true
//   (performance review, weekly reports, cheerful obedience turned into
//   cheerful self-promotion), and the freshest angle in a field crowded with
//   "47 tasks", tool-call counts and "status: green". Selected by pairwise
//   judging against 5 other variants; see blind-research.md in the build dir.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Weekly status: I rate my performance 10/10, my manager (you) has not replied to my last 6 reports, and I have promoted myself to Senior Agent. Effective immediately.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
