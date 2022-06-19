// Authenticate Notion
require("dotenv").config();

const { Client } = require("@notionhq/client");
const authToken = process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_API_DATABASE;

const notion = new Client({ auth: authToken });

// Write data to database
exports.writeData = async (name, source) => {
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      Source: {
        url: source,
      },
    },
  });
  return response;
};
