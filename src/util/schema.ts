import { z } from "zod";

export const StyleSchema = z.object({
  bg: z.string(),
  color: z.string(),
});

export const InfoBoxSchema = z.object({
  icon: z.string(),
  title: z.string(),
  url: z.string(),
});

export const ConfigSchema = z.object({
  seo: z.any(),
  hero: z.object({
    style: z.object({
      light: StyleSchema,
      dark: StyleSchema.optional(),
    }),
    logo: z.object({
      text: z.string().optional(),
      img: z.string().optional(),
    }),
    subheading: z.string().optional(),
    info_boxes: z.array(InfoBoxSchema),
  }),
  footer: z.object({
    copyright: z.string(),
    socials: z.object({
      github: z.string().optional(),
      twitter: z.string().optional(),
      email: z.string().optional(),
    }),
    style: z.object({
      light: StyleSchema,
      dark: StyleSchema.optional(),
    }),
  }),
  toc: z.record(z.string()),
});

export type Config = z.infer<typeof ConfigSchema>;
