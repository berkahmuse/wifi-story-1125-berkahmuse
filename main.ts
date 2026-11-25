// Tell a Whole Story in 32 Characters — @berkahmuse entry.
//
// One Wi-Fi network name, 28 characters, that lands the joke and implies
// a whole story in the few words a passer-by sees in a phone's network
// list: a kid, a password, and a schoolyard black market.
//
// The joke: the family Wi-Fi password is no longer a secret — the kid
// sold it at school. The story it implies: who (my kid), what happened
// (sold the password), and where (at school) — a whole little economy
// running behind the parents' backs, told in six words.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "MyKidSoldThePasswordAtSchool";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
