// Authenticate Notion
require("dotenv").config();

const { Client } = require("@notionhq/client");
const { url } = require("inspector");
const { uuid } = require("uuidv4");

const notion = new Client({
  auth: "secret_ArmCMi4T3vrro89rQbRpF6S3LSer46Suocv8nV4uri6",
});

const databaseId = "632f1543a9a24c73bae4c30838c64004";

// Read data from database
exports.readData = async () => {
  const response = await notion.databases.query({ database_id: databaseId });
  return response;
};

// Write data to database
exports.writeData = async ({ title }) => {
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      title: {
        title: [
          {
            type: "text",
            text: {
              content: title,
            },
          },
        ],
      },
    },
  });
  return response;
};
