import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Sorry I missed the deadline — I asked my future self to finish it for me, and he said he'd already asked his future self too.", "utf8");
