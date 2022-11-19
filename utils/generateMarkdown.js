// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title 
  # Project Title
  ${data.title}

  # Description
  ${data.description}

  # Table of Contents 
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-Installation)
  * [Contributing](#-Contributing)
  * [Tests](#-Tests)
  * [Questions](#-Contact-Information)
      
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License 
  ${data.license}

  # Contributing 
  ${data.contributing}

  # Tests
  ${data.tests}

  # Contact Information 
  * GitHub Username: ${data.userName}
  * Contact Email: ${data.userEmail}
  `;
  };
  
  //export the generateMarkdown function 
  module.exports = generateMarkdown;