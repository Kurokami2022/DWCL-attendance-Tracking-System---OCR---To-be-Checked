const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('stud_data.db', sqlite3.OPEN_READONLY, (err) => {
if (err) {
  console.error(err.message);
}
console.log('Connected to the database.');
});

db.all('SELECT * FROM attendance', [], (err, rows) => {
if (err) {
  throw err;
}
const table = document.getElementById('myTable');
rows.forEach((row) => {
let tr = document.createElement('tr');
tr.innerHTML = `<td>${row.ID}</td>
                <td>${row.name}</td>
                <td>${row.course}</td>`;
table.appendChild(tr);
});
});

db.close((err) => {
if (err) {
  console.error(err.message);
}
console.log('Close the database connection.');
});
