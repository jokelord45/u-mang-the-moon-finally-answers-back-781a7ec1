import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Four billion years of wishes, howls, and 2 a.m. promises — and not one of you has ever asked how *I'm* doing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
