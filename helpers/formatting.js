//this function formats the data output in the command terminal

function formatRowsToTable(rows) {
    //checking the length of the rows is not empty
  if (rows.length === 0) {
    return;
  }

  //number of keys is the number of columns 
  const columns = Object.keys(rows[0]);
  const maxLengths = {};

  // max length for each column based on rows
  for (const column of columns) {
    maxLengths[column] = Math.max(column.length, ...rows.map((row) => String(row[column]).length));
  }

  // this is to create the table header with all the columns
  let table = "";
  table += columns.map((column) => column.padEnd(maxLengths[column])).join(" | ") + "\n";
  table += "-".repeat(Object.values(maxLengths).reduce((sum, length) => sum + length + 3, 0)) + "\n";

  // this is to create the table rows 
  for (const row of rows) {
    table += columns.map((column) => String(row[column]).padEnd(maxLengths[column])).join(" | ") + "\n";
  }

  return table;
}

//exporting to be used in server.js
module.exports = formatRowsToTable;