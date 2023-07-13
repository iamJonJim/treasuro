import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "c318328d-2f05-4cc8-9e99-429241e766da", // Get this from tina.io
  token: "37ecbbf0d6133bf044594bfc908567490194a1d0", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "boolean",
            name: "math",
            label: "Math",
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: 'f6088e8f62417624aa690c3c2ea96abf584db056',
      stopwordLanguages: ['eng']
    },
    indexBatchsize: 100,
    maxSearchIndexFieldLength: 100
  },
});
