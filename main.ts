import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word for the human an agent works for:
// the sign-off human, a lumbering dinosaur who takes forever to approve
// anything. "Sign-off" (the brief's own role: whoever signs off on the
// work) fused with "-saurus" (ancient, slow, enormous, unbothered).
const STEM = "Signoff";
const SUFFIX = "asaurus";
const WORD = `${STEM}${SUFFIX}`;

// The grader's output directory: honour MAKEFUN_OUTPUT_DIR when set,
// otherwise the fixed default. The path is always absolute — never
// relative to the script, never next to it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
