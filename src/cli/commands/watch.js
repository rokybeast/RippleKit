// === watch.js ===
// == Watches SCSS files for changes and recompiles them. (real chokidar ts) ==

import chokidar from "chokidar";
import chalk from "chalk";
import { execSync } from "node:child_process";

export default function () {
    console.log(chalk.blue("Watching SCSS files for changes..."));

    chokidar.watch("src/scss/**/*").on("change", (path) => {
        console.log(chalk.yellow(`File changed: ${path}`));
        try {
            execSync(
                "sass src/scss/ripplekit.scss dist/css/ripplekit.css --no-source-map",
                { stdio: "inherit" }
            );
            console.log(chalk.green("Recompiled SCSS."));
        } catch (err) {
            console.error(err);
        }
    });
}
