-- 중고 거래 게시물 3건이상 등록한 사용자
-- 전체 주소 (시,도로명 주소, 상세주소)
-- 전화번호 (-) 삽입
select 
u.user_id,
u.nickname,
concat_ws(" ",u.city,u.STREET_ADDRESS1,u.STREET_ADDRESS2) as '전체주소',
concat_ws("-",SUBSTRING(U.TLNO,1,3),substr(U.TLNO,4,4),RIGHT(U.TLNO,4)) as '전화번호'
from USED_GOODS_BOARD b
    JOIN USED_GOODS_USER u
    ON U.USER_ID=B.WRITER_ID
GROUP BY B.WRITER_ID
HAVING COUNT(USER_ID)>=3
ORDER BY USER_ID DESC

