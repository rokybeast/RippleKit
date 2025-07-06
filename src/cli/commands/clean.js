// === clean.js ===
// == Cleans the dist directory and generated files. ==

import chalk from "chalk";
import fs from "node:fs";

export default function () {
    console.log(chalk.red("Cleaning dist & generated files..."));
    try {
        fs.rmSync("dist", { recursive: true, force: true });
        console.log(chalk.green("Clean complete."));
    } catch (err) {
        console.error(err);
    }
}
