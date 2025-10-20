import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';

import pkg from 'contentful-management';
const { createClient } = pkg;

import contentfulImport from 'contentful-import';

const ORG_ID = '1jtZ8D4corGeQgsNmtaFM4'; // Studio Staging Org
// const ORG_ID = '5ZLP1tojPlbZtiMhmNFKzG'; // Colorful Composition Org

(async () => {
  const { cmaToken, spaceName, orgId } = await inquirer.prompt([
    {
      name: 'cmaToken',
      message: 'What is your Contentful CMA token?',
      type: 'password',
    },
    {
      name: 'spaceName',
      message: 'What would you like to call your space?',
    },
    {
      name: 'orgId',
      default: ORG_ID,
      message: 'What is your Organization ID?',
    },
  ]);

  let client;
  let space;

  try {
    client = await createClient({
      accessToken: cmaToken,
    });
  } catch (e) {
    console.log(chalk.red('Your cma token may be invalid.'));
    return;
  }

  console.log(chalk.green(`Creating your space: "${spaceName}"...`));
  console.log('\n');

  try {
    space = await client.createSpace(
      {
        name: spaceName,
      },
      orgId
    );
  } catch (e) {
    console.log(chalk.red('Your cma token may be invalid.'));
    return;
  }
  try {
    await client.rawRequest({
      method: 'PUT',
      url: `https://api.contentful.com/spaces/${space.sys.id}/enablements`,
      data: {
        crossSpaceLinks: { enabled: false },
        spaceTemplates: { enabled: false },
        studioExperiences: { enabled: true },
      },
      headers: {
        'X-Contentful-Enable-Alpha-Feature': 'enablements',
        'X-Contentful-Version': 1,
      },
    });
  } catch (e) {
    return {
      state: 'error',
      error: 'Failed to enable experiences',
      stacktrace: e,
    };
  }
  console.log(chalk.green('------------------------------'));
  console.log(chalk.green('|                            |'));
  console.log(chalk.green('|   Creating Access Tokens   |'));
  console.log(chalk.green('|                            |'));
  console.log(chalk.green('------------------------------'));
  console.log('\n');
  const tokens = await space.createApiKey({
    name: 'Studio Starter',
  });
  const deliveryToken = tokens.accessToken;
  const { accessToken: previewToken } = await space.getPreviewApiKey(
    tokens.preview_api_key.sys.id
  );

  console.log(chalk.green('------------------------------'));
  console.log(chalk.green('|                            |'));
  console.log(chalk.green('|     Creating a .env file   |'));
  console.log(chalk.green('|                            |'));
  console.log(chalk.green('------------------------------'));
  console.log('\n');

  await fs.writeFileSync(
    '.env.local',
    `NEXT_PUBLIC_SPACE_ID=${space.sys.id}
NEXT_PUBLIC_ACCESS_TOKEN=${deliveryToken}
NEXT_PUBLIC_PREVIEW_TOKEN=${previewToken}
  
NEXT_PUBLIC_STUDIO_TYPE_ID=landingPage`
  );

  console.log(chalk.blue('------------------------------'));
  console.log(chalk.blue('|                            |'));
  console.log(chalk.blue('| Importing content into     |'));
  console.log(chalk.blue('| your space. This could     |'));
  console.log(chalk.blue('| take a few minutes         |'));
  console.log(chalk.blue('|                            |'));
  console.log(chalk.blue('------------------------------'));

  await contentfulImport({
    contentFile: './content-export.json',
    spaceId: space.sys.id,
    managementToken: cmaToken,
  });

  console.log(chalk.green('------------------------------'));
  console.log(chalk.green('|                            |'));
  console.log(chalk.green('|    Setting preview urls.   |'));
  console.log(chalk.green('|                            |'));
  console.log(chalk.green('------------------------------'));
  console.log('\n');

  await client.rawRequest({
    method: "POST",
    url: `https://api.contentful.com/spaces/${space.sys.id}/preview_environments`,
    data: {
      configurations: [
        {
          contentType: "landingPage",
          enabled: true,
          example: false,
          url: `https://studio-starter-template.colorfuldemo.com/{locale}/{entry.fields.slug}?mode=preview&spaceId=${space.sys.id}&previewToken=${previewToken}&deliveryToken=${deliveryToken}`,
        },
      ],
      name: "Web Preview",
      description: "Preview content as a standard web page on a Contentful hosted frontend",
    },
  });

  await client.rawRequest({
    method: "POST",
    url: `https://api.contentful.com/spaces/${space.sys.id}/preview_environments`,
    data: {
      configurations: [
        {
          contentType: "landingPage",
          enabled: true,
          example: false,
          url: `http://localhost:3000/{locale}/{entry.fields.slug}?mode=preview`,
        },
      ],
      name: "Localhost Preview",
      description:
        "Preview content as a standard web page in your local dev environment",
    },
  });

  console.table({
    "Localhost Frontend": `http://localhost:3000/en-US`,
    "Web Preview": `https://studio-starter-template.colorfuldemo.com/en-US?mode=preview&spaceId=${space.sys.id}&previewToken=${previewToken}&deliveryToken=${deliveryToken}`,
    "Contentful Web App": `https://app.contentful.com/spaces/${space.sys.id}`,
  });
})();
