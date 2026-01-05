select con.title,cat.category_name 
from category as cat
join content as con
on con.category_id=cat.category_id
where (cat.category_name='Documentaries' AND release_year=2024 AND rating>8.0);


SELECT title,
SUM(rating+views_in_millions) as success_score FROM 
content 
group by title
having success_score>100;
