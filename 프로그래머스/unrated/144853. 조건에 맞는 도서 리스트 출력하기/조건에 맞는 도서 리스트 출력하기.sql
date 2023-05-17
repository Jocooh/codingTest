-- 2021출판 , '인문', ID/출판일 (ASC)
SELECT BOOK_ID , DATE_FORMAT(PUBLISHED_DATE,"%Y-%m-%d") FROM BOOK
WHERE YEAR(DATE_FORMAT(PUBLISHED_DATE,"%Y-%m-%d"))="2021" AND CATEGORY = "인문"
order by published_date asc
