import { getSortedPostsByType, generateSitemapXml } from '@lib/util';

export async function GET() {
    return new Response(
        await generateSitemapXml((await getSortedPostsByType('post', 'all')), { url: import.meta.env.SITE }), {
        status: 200,
        headers: {
            'Content-Type': 'application/xml;charset=UTF-8'
        }
    });
}
