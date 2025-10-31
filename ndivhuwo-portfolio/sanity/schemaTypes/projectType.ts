import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "shortDescription",
      type: "string",
    }),
    defineField({
      name: "tech",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Full Stack", value: "fullstack" },
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "API", value: "api" },
          { title: "Power Platform", value: "powerplatform" },
          { title: "Desktop App", value: "desktopapp" },
          { title: "Web App", value: "webapp" },
        ],
      }
    }),
    defineField({
      name: "demoLink",
      type: "url",
    }),
    defineField({
      name: "githubLink",
      type: "url",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
