SELECT cohorts.name AS cohort_name, COUNT(students.id) AS student_count
FROM students
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
HAVING COUNT(students.id) > 17
ORDER BY student_count