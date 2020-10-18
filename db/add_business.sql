insert into businesses (
    user_id,
    name,
    location,
    sector,
    status,
    imageurl,
    youtubeUrl,
    story,
    faq
) values (
    ${userId},
    ${name},
    ${location},
    ${sector},
    ${status},
    ${imageUrl},
    ${youtubeUrl},
    ${story},
    ${faq}
)
returning user_id, name, location, sector, status, imageurl, youtubeUrl, story, faq;