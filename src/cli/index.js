#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

const [, , cmd] = process.argv;

console.log(
    chalk.hex("#A855F7")(
        figlet.textSync("[ripplekit]", { horizontalLayout: "default" })
    )
);

switch (cmd) {
    case "build":
        import("./commands/build.js").then((m) => m.default());
        break;
    case "gen-col":
        import("./commands/colors.js").then((m) => m.default());
        break;
    case "clean":
        import("./commands/clean.js").then((m) => m.default());
        break;
    case "watch":
        import("./commands/watch.js").then((m) => m.default());
        break;
    default:
        console.log(chalk.red(`Unknown command: ${cmd}`));
        console.log("Usage: ripple [build | gen-col | clean | watch]");
        process.exit(1);
}
