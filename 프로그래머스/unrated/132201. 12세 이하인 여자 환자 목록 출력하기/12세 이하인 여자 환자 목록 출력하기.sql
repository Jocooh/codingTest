-- 12세 이하 여자환자, 이름,번호,성별코드,나이,전화번호(없을 경우 'none') (출력 나이 DESC,:=환자이름 ASC)
SELECT PT_NAME,PT_NO,GEND_CD,AGE, IFNULL(TLNO, 'NONE') FROM PATIENT
WHERE GEND_CD="W" AND AGE<=12
ORDER BY AGE DESC , PT_NAME ASC


