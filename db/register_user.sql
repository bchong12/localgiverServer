insert into users (first_name, last_name, username, password)
values (${firstName}, ${lastName}, ${username}, ${password})
returning first_name, last_name, username;