#!/usr/bin/env node
// Read docs-versions.json
const CONFIG_FILE = 'docs-versions.json';
const PREVIOUS_VERSIONS_FILE = 'versions.json';
const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });
const { execSync } = require('child_process');
const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8', timeout: 10000 }).trim();

console.log(`You are currently on branch '${branch}'. You should first \`git fetch upstream && git checkout upstream/main\` and be in a detached HEAD state.\n`);

try {
    const versionData = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));

    // Get desired version string, with example (00 MMM YYYY)
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const today = new Date();
    const dateStringQuesiton = `Desired name string for new 'current' version?`;
    const exampleDateString = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`
    const questionString = `${dateStringQuesiton} Example: ${exampleDateString}: `
    const previousVersion = versionData.current.label;
    const previousVersionDashedName = previousVersion.replace(/\s+/g, '-');
    const currentVersion = prompt(questionString);
    const deprecatedVersion = Object.keys(versionData)[1];

    // Modify versions object
    //   Remove oldest one, so only two versions exist
    //   Take 'current' version and rename it
    let output = {
        current: {
            label: currentVersion
        }
    }
    output[previousVersion.replace(/\s+/g, '-')] = {
        label: previousVersion
    }

    // Write modified versions object as indented JSON
    const jsonOutput = JSON.stringify(output, null, 2);
    const previousVersionJsonOutput = JSON.stringify([previousVersionDashedName], null, 2)

    // Execute command to freeze docs
    execSync(`yarn docusaurus docs:version ${previousVersionDashedName}`);

    // Remove older version
    fs.rmSync(`versioned_docs/version-${deprecatedVersion}`, { recursive: true, force: true });
    fs.rmSync(`versioned_sidebars/version-${deprecatedVersion}-sidebars.json`, {});

    // Update config files
    fs.writeFileSync(CONFIG_FILE, jsonOutput);
    fs.writeFileSync(PREVIOUS_VERSIONS_FILE, previousVersionJsonOutput);

    // print further instructions
    console.log('\nNext, \`git add . && git stash && git checkout $YOURRELEASEBRANCHNAME && git stash pop\`\n');
    console.log('Finally, commit your changes, then PR into the upstream release branch.\n');


} catch (err) {
    console.error(err);
}
