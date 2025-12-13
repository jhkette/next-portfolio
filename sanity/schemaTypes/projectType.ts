import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "projectName",
      type: "string",
    }),
    defineField({
      name: "techstack",
      type: "string",
    }),
    defineField({
      name: "category",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "projectImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "link",
      title: "Project Links",
      type: "object",
      fields: [
        defineField({
          name: "code",
          type: "url",
          title: "Code Repository",
        }),
        defineField({
          name: "visit",
          type: "url",
          title: "Live Project",
        }),
      ],
    }),
  ],
});