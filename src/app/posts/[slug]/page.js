import logger from "@/logger"
import { remark } from "remark"
import html from "remark-html"
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import db from "../../../../prisma/db";

import styles from './page.module.css'
import { CardPost } from "@/components/CardPost";
import { notFound, redirect } from "next/navigation";

async function getPostBySlug(slug) {
    try {
        const post = await db.post.findFirst({
            where: {
                slug
            },
            include: {
                author: true
            }
        })

        if (!post) {
            throw new Error(`Post como slug ${slug} não encontrado`)
        }

        const processedContent = await remark()
            .use(html)
            .process(post.markdown)

        const window = new JSDOM('').window;
        const purify = DOMPurify(window);

        const sanitizedHtml = purify.sanitize(processedContent.toString());

        post.markdown = sanitizedHtml

        return post
    } catch (error) {
        logger.error('Falha ao obter o post como slug:', {
            slug,
            error
        })
    }
    redirect('/not-found')
}



const PagePost = async ({ params }) => {
    const post = await getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div>
            <CardPost post={post} highlight />
            <h3 className={styles.subtitle}>Código:</h3>
            <div className={styles.code}>
                <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
            </div>
        </div>
    )


}

export default PagePost