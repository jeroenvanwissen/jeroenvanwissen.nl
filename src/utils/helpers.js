export function generateSlug(string) {
    return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export function generateCategories(categories) {
    let categoriesData = [];
    categories && categories.forEach((category) => {
        categoriesData.push({
            name: category,
            slug: `${generateSlug(category)}`,
        });
    });
    return categoriesData;
}
