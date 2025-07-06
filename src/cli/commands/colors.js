// === colors.js ===
// == Builds Colors. ==

import chalk from "chalk";
import colorsGen from "../../js/gen/colors.js";

export default function () {
    console.log(chalk.magenta("Generating colors only..."));
    colorsGen();
    console.log(chalk.green("Done generating colors."));
}
