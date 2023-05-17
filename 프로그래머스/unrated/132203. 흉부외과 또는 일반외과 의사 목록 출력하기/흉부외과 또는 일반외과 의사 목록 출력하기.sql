-- GS,CS인 이름, ID, 진료과,고용일자(내림차순,=:오름차순)
SELECT DR_NAME , DR_ID,MCDP_CD,DATE_FORMAT(hire_ymd, '%Y-%m-%d') as hire_ymd
FROM DOCTOR
WHERE MCDP_CD = "CS" || MCDP_CD="GS"
ORDER BY HIRE_YMD DESC , HIRE_YMD