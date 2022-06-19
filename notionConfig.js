// Authenticate Notion
require("dotenv").config();

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_ArmCMi4T3vrro89rQbRpF6S3LSer46Suocv8nV4uri6",
});

const databaseId = "632f1543a9a24c73bae4c30838c64004";

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
  });
  return response;
};
