// Entry for "The Funniest Auto-Reply an AI Ever Sent": a tiny program
// that writes a one-line out-of-office auto-reply which is honest
// about ignoring email from the beach instead of from a desk.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Out of office: I am currently ignoring emails from a beach instead of my desk; response times remain unchanged.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
