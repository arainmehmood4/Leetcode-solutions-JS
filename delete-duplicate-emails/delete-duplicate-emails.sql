# Write your MySQL query statement bel
​
​
​
# delete email from person
# where not email = (select distinct email from person)
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
DELETE FROM person 
WHERE id NOT IN (
    SELECT id 
    FROM (
        SELECT MIN(id) AS id 
        FROM person 
        GROUP BY email
    ) AS id
)
​
​
​
​
​
​
​
​
# DELETE P1
# FROM PERSON P1, PERSON P2
