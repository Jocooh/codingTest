-- 코드를 입력하세요
SELECT HOUR(DATE_FORMAT(DATETIME,'%T')) AS  HOUR , COUNT(DATETIME) AS COUNT FROM ANIMAL_OUTS
WHERE HOUR(DATE_FORMAT(DATETIME,'%T')) BETWEEN '09:00:00' AND '19:59:00'
GROUP BY HOUR
ORDER BY HOUR ASC