
const { existsSync } = require("fs");
const { rm } = require("fs/promises");
const { resolve } = require("path");

async function clean() {
    try {
        const path = resolve(".turbo");
        if (existsSync(path)) {
            await rm(path, { recursive: true, force: true });
        }
    } catch (error) {
        console.error("Error while cleaning .turbo folder:", error);
        process.exit(1);
    }
}

clean();