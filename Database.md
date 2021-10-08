
// quetsion 1
// 1. Find the name of the supplier who supplies the part **'motor belt'**.
// 2. Find the supplier detail who supplies all parts.
// 3. Find the details of parts supplied by at least two different suppliers.

1> 

SELECT S1.sname  FROM 
Supplier AS S1 JOIN Catalog AS C1 
ON S1.sid = C1.sid
JOIN Parts AS P1
ON P1.pid = C1.pid
AND pname = 'motor belt';

2>

SELECT *  FROM 
Supplier AS S1 JOIN Catalog AS C1 
ON S1.sid = C1.sid
JOIN Parts AS P1
ON P1.pid = C1.pid

3>

SELECT P1.pid,P1.pname,P1.color from 
Parts AS P1 JOIN Catalog AS C1 
ON P1.pid = C1.pid
AND C1.sid = (SELECT distinct sid from Catalog);
<!-- limit 2 -->



// question 2

SELECT B1.brand_name, U1.user_name, U1.email, T1.point_value 
FROM USER AS U1 JOIN TRANSACTION AS T1 ON U1.user_id = T1.user_id
JOIN BRAND B1 ON B1.brand_id = T1.brand_id;



