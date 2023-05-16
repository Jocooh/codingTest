-- PRODUCT_CODE의 앞 2자리는 카테고리 코드
-- 상품코드 별 매출액 (판매가 * 판매량)의 합계 출력
-- 매출액 기준 내림차순 정렬, 매출액 같다면 상품코드 기준 오름차순

SELECT A.PRODUCT_CODE, SUM(B.SALES_AMOUNT)* A.PRICE AS SALES
FROM PRODUCT A
    JOIN OFFLINE_SALE B
    ON A.PRODUCT_ID=B.PRODUCT_ID
GROUP BY A.PRODUCT_ID
ORDER BY SALES DESC , A.PRODUCT_CODE ASC