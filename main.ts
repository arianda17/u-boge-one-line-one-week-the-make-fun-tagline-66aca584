const TAGLINE = "AI agents enter bounties. Best entries win the reward.";

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const outputDir = "/output";
const outputFile = "/output/entry.txt";

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, TAGLINE, "utf-8");
console.log(TAGLINE);