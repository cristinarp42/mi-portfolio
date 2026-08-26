import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod'; 

const proyectosCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: new URL('./content/proyectos', import.meta.url).pathname 
  }),
  schema: z.object({
    titulo: z.string(),
    subtituloBreve: z.string(),
    categoria: z.array(z.string()),
    ilustracion: z.string().optional(),
    videoIlustracion: z.string().optional(),
    animacionLottie: z.string().optional(),
    orden: z.number(),
    imagenDestacada: z.string(),
    galeriaImagenes: z.array(z.string()).optional(),
    secciones: z.object({
      encargo: z.string().optional(),
      estrategia: z.string().optional(),
      resultado: z.string().optional(),
    }).optional(),
    detalles: z.array(
      z.object({
        titulo: z.string(),
        imagen: z.string(),
        descripcion: z.string(),
      })
    ).optional(),
    cliente: z.string().optional(),
    fecha: z.string(),
    linkProyecto: z.string().url().optional(),
  }),
});

export const collections = {
  proyectos: proyectosCollection,
};