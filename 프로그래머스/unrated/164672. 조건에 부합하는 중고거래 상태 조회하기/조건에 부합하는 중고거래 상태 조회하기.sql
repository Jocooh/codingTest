-- 2022-10-05일이 등록일
-- 거래상태가 SALE이면 '판매중'
-- RESERVED "예약중"
-- DONE "거래완료"
-- 게시글 ID를 기준 내림차순
SELECT BOARD_ID,WRITER_ID,TITLE,PRICE,
case
when (STATUS="SALE") THEN "판매중"
when (status ="reserved") then "예약중"
else "거래완료"
end as status
from USED_GOODS_BOARD
where date_format(created_date ,'%Y-%m-%d') ='2022-10-05'
order by board_id desc

