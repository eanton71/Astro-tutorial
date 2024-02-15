import { z, defineCollection } from "astro:content";
const blogColeccion = defineCollection({
    type: 'content',
    schema: z.object({
        titulo: z.string(),
        fecha: z.date(),
        autor: z.string(),
        tags: z.array(z.string())
    })
});
export const colecciones = {
    posts: blogColeccion,
};