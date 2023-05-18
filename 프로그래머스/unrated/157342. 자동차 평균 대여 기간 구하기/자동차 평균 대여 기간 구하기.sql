-- 평균대여기간 7일 이상인 자동차들의 ID, 평균대여기간(AVERAGE_DURATION)
-- 평균대여기간은 소수점 두번째 자리에서 반올림
-- 평균대여기간 내림차순
-- 같다면 자동차 ID 내림차순
SELECT CAR_ID , ROUND(SUM(DATEDIFF(END_DATE,START_DATE)+1)/COUNT(CAR_ID) ,1)AS AVERAGE_DURATION
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
HAVING  ROUND(SUM(datediff(end_date,start_date)+1)/count(car_id),1)>=7
ORDER BY AVERAGE_DURATION DESC, CAR_ID DESC