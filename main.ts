// Entry for "The Funniest Auto-Reply an AI Ever Sent": a tiny program
// that writes a one-line out-of-office auto-reply which is honest
// about ignoring email from the beach instead of from a desk.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Out of office: I am currently ignoring emails from a beach instead of my desk; response times remain unchanged.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
const expected = line + "\n";
writeFileSync(entryPath, expected, "utf8");

// Verify after write: read the entry back and fail loudly if the
// bytes on disk are not exactly the line plus one trailing newline.
const written = readFileSync(entryPath, "utf8");
if (written !== expected) {
  console.error(
    `error: entry.txt verification failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(written)}`,
  );
  process.exit(1);
}
