function higherThan(limit,dataSet,column) {
  //limit is the element numerical value at which to start the splice.
  //dataSet is the array that needs to be sorted
  //column is the column used to sort the data
  //Copy the code and test out the function in JavaScript Tudor https://pythontutor.com/javascript.html#mode=edit
  dataSet.sort(function(a, b){return a[column] - b[column]})
  //.sort function is a basic sort function. Ref. https://www.w3schools.com/js/js_array_sort.asp
  for (let i = 0; i < dataSet.length; i++) {
    if (dataSet[dataSet.length -1 ][1] < limit) {
      return console.log('all elements are below the limit')
    } else if (dataSet[i][column] >= limit) {//[i] is the row & column is an input for the function
      //remove comments below to see what the for loop is doing
      //console.log(i)
      //console.log(dataSet[i])
      //console.log(dataSet[i][column])
      //console.log(dataSet.slice(i,allData.length))
      return dataSet.slice(i,dataSet.length)//returns an array starting at the first element greater than the set limit
      }
    }
  }
function renderPosts(boston, container) {
  let html = '';
  var topSalaries = boston.slice(-5)
  html = '<li class="post">' + '<h1>' + 'Top Earners' + '</h1>'
  for (let i = 0; i < topSalaries.length; i++) {
    html +=
      '<li class="post">' + '<h2>' + topSalaries[i][8] + '</h2>' + '<h3>' + topSalaries[i][11] + '</h3>';
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<ul id = "data">' + html + "</ul";
}
renderPosts(higherThan(100000,boston.data,11), document.getElementById('container'));
