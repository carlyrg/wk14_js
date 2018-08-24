// from data.js
var data = data;

var button = d3.select('#filter-btn');
var inputField = d3.select("#datetime");
var inputValue = inputField.property("value")

function loadTable(inputValue) {


  if (inputValue.length == 0) {
    var table_body = d3.select("tbody");
    table_body.attr("class", "table table-striped")
    data.forEach(x => {
      let tb = table_body.append('tr')
      Object.entries(x).forEach(([key, value]) => {
        tb.append('td').text(value)
      })
    });
  } else {
    var table_body = d3.select("tbody");
    table_body.attr("class", "table table-striped")
    console.log(inputValue)
    d3.selectAll('tr').remove()
    var filteredDate = data.filter(x => x.datetime == inputValue)
    console.log(filteredDate)
    console.log('here')
    filteredDate.forEach(x => {
      console.log(x)
      let tb = table_body.append('tr')
      Object.entries(x).forEach(([key, value]) => {
        tb.append('td').text(value)
      })
    });
  }
}
loadTable("")

function reloadTable() {
  d3.event.preventDefault();
  console.log("Reload function is being called")
  // select the input fields  value 
  let fieldValue = d3.select("#datetime").node().value
  // call loadTable passing in that value
  loadTable(fieldValue)
}

button.on("click", reloadTable)

