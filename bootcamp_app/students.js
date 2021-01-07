const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

pool
  .query(
    `
  SELECT students.id AS student_id, students.name, cohorts.name AS cohort
  FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${process.argv[2]}%'
  LIMIT ${process.argv[3] || 5};
`
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an ID of ${user.student_id} and was in the ${user.cohort} cohort.`
      );
    });
  })
  .catch((err) => {
    console.log("query error", err.stack);
  });
