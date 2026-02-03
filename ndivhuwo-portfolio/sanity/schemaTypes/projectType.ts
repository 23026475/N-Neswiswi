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
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Full Stack", value: "fullstack" },
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "API", value: "api" },

          { title: "Web Application", value: "webapp" },
          { title: "Console Application", value: "consoleapp" },
          { title: "Desktop Application", value: "desktopapp" },

          { title: "Algorithms & Logic", value: "algorithms" },
          { title: "Game / Simulation", value: "game" },

          { title: "Power Platform", value: "powerplatform" },
          { title: "Internal System", value: "internalsystem" },

          { title: "AI / Intelligent Systems", value: "ai" }
        ],
      },
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
