import { getAllSortedEntries, generateSitemapXml } from '@lib/util';

export async function GET() {
    return new Response(
        await generateSitemapXml((await getAllSortedEntries()), { url: import.meta.env.SITE }), {
        status: 200,
        headers: {
            'Content-Type': 'application/xml;charset=UTF-8'
        }
    });
}
