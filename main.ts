// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes one ~100-word monologue to /output/entry.txt.
// The speaker is a specific villain (keeper of the Ashen Spire, thirty
// years into his schemes) whose tiredness lives only in the voice: the
// trailing deflections, the pauses, the small shrugs — never a plain
// statement of weariness. The sting lands in the last line.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE = [
  "Sit. The map room is cold again \u2014 tell the steward... no, don't. He'll bring the brazier and the ledger, and the ledger has opinions.",
  "Thirty years I've kept the Ashen Spire standing: the eclipse tithe, the spies, the treaty in crow's blood. It hums along without me, mostly.",
  "The generals wait below with their flags. Let them wait. You want the crown? Take it. It pinches, and the velvet smells of mothballs and old thunder.",
  "The ravens stopped bringing omens. Groceries now. Don't wake the dragon \u2014 he quit. I went to conquer the one kingdom I never could: the quiet, and the warm bed.",
].join("\n\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");

const words = MONOLOGUE.split(/\s+/).filter(Boolean).length;
console.log(`Wrote /output/entry.txt: ${MONOLOGUE.length} chars, ${words} words`);
