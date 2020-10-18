create table users (
    user_id serial primary key,
    first_name text,
    last_name text,
    username text,
    password text
);

create table businesses (
    business_id serial primary key,
    user_id integer references users(user_id),
    name text,
    location text,
    sector text,
    status text,
    imageurl text,
    youtubeUrl text,
    story varchar(2000),
    faq text
);

create table deals (
    deal_id serial primary key,
    business_id integer references businesses(business_id),
    title text,
    price integer
);