SELECT id, name, email, cohort_id 
FROM students
WHERE GITHUB IS NULL
ORDER BY cohort_id