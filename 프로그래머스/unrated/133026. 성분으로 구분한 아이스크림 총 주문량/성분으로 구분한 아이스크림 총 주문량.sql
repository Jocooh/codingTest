-- 코드를 입력하세요
SELECT I.INGREDIENT_TYPE , SUM(H.TOTAL_ORDER) AS TOTAL_ORDER
    FROM ICECREAM_INFO I ,FIRST_HALF H
WHERE I.FLAVOR = H.FLAVOR
GROUP BY I.INGREDIENT_TYPE
HAVING COUNT (I.INGREDIENT_TYPE)
ORDER BY TOTAL_ORDER ASC


