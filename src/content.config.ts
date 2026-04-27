import {defineCollection} from 'astro:content';
import {z} from 'zod';
import {glob} from 'astro/loaders';


const blogCollection = defineCollection({
    // 로더를 사용해 어떤 파일을 가져올지 명시
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: 'src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.any(),
        uploadDate: z.any(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        })
    })
});

export const collections = {blog: blogCollection};
