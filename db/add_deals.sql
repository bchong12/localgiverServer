insert into deals (
    business_id, title, price
)
values (
    ${businessId}, ${title}, ${price}
)
returning title, price, business_id;
