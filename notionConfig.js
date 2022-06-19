// Authenticate Notion
require("dotenv").config();

const { Client } = require("@notionhq/client");
const { url } = require("inspector");
const { uuid } = require("uuidv4");

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

// Read data from database
exports.readData = async () => {
  const response = await notion.databases.query({ database_id: databaseId });
  return response;
};

// Write data to database
exports.writeData = async ({ title, source }) => {
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      [process.env.NOTION_NAME_ID]: {
        title: [
          {
            type: "text",
            text: {
              content: title,
            },
          },
        ],
      },
      [process.env.NOTION_SOURCE_ID]: {
        url: source,
      },
    },
  });
  return response;
};
