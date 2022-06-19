// Authenticate Notion
require("dotenv").config();

const { Client } = require("@notionhq/client");
const databaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

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
      Status: null,
      Topic: null,
    },
    children: null,
  });
  return response;
};
