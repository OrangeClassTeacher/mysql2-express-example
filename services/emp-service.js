import { pool } from "../config/mysql-config.js";
export async function getEmployees(limit) {
  if (limit) {
    const [rows] = await pool.query(
      `SELECT emp_no FROM salaries limit ${limit}`
    );
    return rows;
  } else {
    const [rows] = await pool.query(
      `SELECT emp_no FROM salaries ORDER BY emp_no DESC LIMIT 1`
    );
    return rows[0];
  }
}
export async function getEmployee(id) {
  const [row] = await pool.query(`SELECT * FROM employees where emp_no=${id}`);
  return row[0];
}
export async function createEmployee(
  emp_no,
  birth_date,
  first_name,
  last_name,
  gender,
  hire_date
) {
  //this question marks are similar with C language => printf('%d %d', x,y)
  const [result] = await pool.query(
    `INSERT INTO employees VALUES (?, ?, ?, ?, ?, ?)`,
    [emp_no, birth_date, first_name, last_name, gender, hire_date]
  );
  return result;
}
export async function updateEmployee(emp_no, upadatedData) {
  const [result] = await pool.query(
    `UPDATE employees SET ${upadatedData}  WHERE emp_no = ${emp_no}`
  );
  return result;
}
export async function deleteEmployee(emp_no) {
  const [result] = await pool.query(
    `DELETE FROM employees WHERE emp_no='${emp_no}';`
  );
  return result;
}
