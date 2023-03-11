import { getAllSortedEntries, generateSitemapXml } from '@lib/util';

export async function get() {
    return {
        body: await generateSitemapXml((await getAllSortedEntries()), { url: import.meta.env.SITE })
    }
}
