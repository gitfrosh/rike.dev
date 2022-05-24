const contentful = require('contentful');
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const client = contentful.createClient({
    space: space,
    accessToken: accessToken,
})

export async function fetchEntries() {
    const entries = await client.getEntries({
        order: '-fields.publishedAt',
        content_type: "post",
    })
    if (entries.items) return entries.items
    console.error(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchEvents() {
    const entries = await client.getEntries({
        order: '-fields.dateEnd',
        content_type: "event",
    })
    if (entries.items) return entries.items
    console.error(`Error getting Entries for ${contentType.name}.`)
}



export async function getAllPostSlugs() {
    const entries = await client.getEntries({
        select: 'fields.slug',
        content_type: "post",

    })
    if (entries.items) return entries.items
    console.error(`Error getting Entries for ${contentType.name}.`)
}

export async function getPostBySlug(slug) {
    const entries = await client.getEntries({
        'fields.slug': slug,
        content_type: "post",

    })
    if (entries.items?.length) return entries.items[0]?.fields
    console.error(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries, getAllPostSlugs, getPostBySlug }
