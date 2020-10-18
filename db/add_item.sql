insert into cart (
    title, price
) values (
    ${title}, ${price}
)
returning title, price;