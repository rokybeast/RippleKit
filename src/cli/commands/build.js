// === build.js ===
// == Builds the RippleKit CSS from all the generators. ==

import chalk from "chalk";
import colorsGen from "../../generators/colors.js";
import spacingGen from "../../generators/spacing.js";
import { execSync } from "node:child_process";

export default function () {
    console.log(chalk.hex("#A855F7")(":: RippleKit Build Started ::"));

    console.log(chalk.magenta("➜ Generating colors..."));
    colorsGen();

    console.log(chalk.magenta("➜ Generating spacing..."));
    spacingGen();

    // Add more here

    console.log(chalk.yellow("➜ Compiling SCSS → CSS..."));
    try {
        execSync(
            "sass src/scss/ripplekit.scss dist/css/ripplekit.css --no-source-map",
            { stdio: "inherit" }
        );
        console.log(chalk.green("✓ SCSS compiled successfully!"));
    } catch (err) {
        console.error(chalk.red("✗ SCSS compilation failed!"));
        console.error(err);
    }

    console.log(chalk.hex("#A855F7")(":: RippleKit Build Complete ::"));
}
