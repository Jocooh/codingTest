-- 대여 시작일이 2022-09이 속하면 '장기대여' / '단기대여'
-- RENT_TYPE을 추가하여 대여기록 출력

SELECT
history_id
,car_id
,DATE_FORMAT(start_date,"%Y-%m-%d") AS start_date
,DATE_FORMAT(end_date,"%Y-%m-%d") AS end_date
,
CASE
    WHEN DATEDIFF(end_date,start_date)+1 >= 30 THEN '장기 대여'
    ELSE '단기 대여' END AS RENT_TYPE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY

WHERE start_date >= '2022-09-01 00:00:00' AND start_date < '2022-10-01 00:00:00'
ORDER BY history_id DESC


-- SELECT * FROM table_a WHERE create_dt >= '2021-03-24 00:00:00' AND create_dt <= '2021-03-25 00:00:00';