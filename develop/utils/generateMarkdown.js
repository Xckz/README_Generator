// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "Apache 2.0") {
        return `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
    }

    if (license === "MIT") {
        return `https://img.shields.io/badge/License-MIT-yellow.svg`;
    }

    if (license === "GPL 3.0") {
        return `https://img.shields.io/badge/License-GPLv3-blue.svg`;
    }

    if (license === "BSD 3.0") {
        return `https://img.shields.io/badge/License-BSD_3--Clause-blue.svg`;
    }

    if (license === "") {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "Apache 2.0") {
        return `https://opensource.org/licenses/Apache-2.0`;
    }

    if (license === "MIT") {
        return `https://opensource.org/licenses/MIT`;
    }

    if (license === "GPL 3.0") {
        return `https://www.gnu.org/licenses/gpl-3.0`;
    }

    if (license === "BSD 3.0") {
        return `https://opensource.org/licenses/BSD-3-Clause`;
    }

    if (license === "") {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `[![License: ${license}](${renderLicenseBadge(
        license
    )})](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}


    ## Description

    ${data.descr}

    ## Table of Contents

    * [Installation](#installation)

    * [Usage](#usage)

    * [License](#license)

    * [Contributing](#contribute)

    * [Tests](#tests)

    * [Questions](#questions)

    ## Installation

    To install necessary dependencies, run the following command:

    
    ${data.dependencies}
    

    ## Usage

    ${data.repo}

    ## License

    ${data.license}
    ${renderLicenseSection(data.license)}

    ## Contributing

    ${data.contribtute}

    ## Tests

    To run tests, enter the following command:

    ${data.tests}

    ## Questions

    If you have any questions about the repo, open an issue or contact me directly at ${
        data.email
    }. You can find more of my work at my [GitHub Page](https://github.com/${
        data.github
    }) .
`;
}

module.exports = generateMarkdown;
