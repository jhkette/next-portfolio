

import { DocumentTextIcon } from "@sanity/icons";
import {  defineField, defineType } from "sanity";

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
  ],
});
