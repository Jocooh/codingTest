-- 도서정보 BOOK, 저자정보 AUTHOR
-- 필요한 정보 : '경제'카테고리에 속한 도서의 ID(BOOK_ID), 저자명,출판일 리스트를 출력
-- 결과는 출판일을 기준 오름차순 정렬
SELECT B.BOOK_ID, A.AUTHOR_NAME, DATE_FORMAT(B.PUBLISHED_DATE,'%Y-%m-%d') AS PUBLISHED_DATE
FROM BOOK B
    JOIN AUTHOR A -- 다른 테이블에 있는 데이터 조합
    ON B.AUTHOR_ID=A.AUTHOR_ID
WHERE B.CATEGORY LIKE '경제'
ORDER BY B.PUBLISHED_DATE ASC;

        