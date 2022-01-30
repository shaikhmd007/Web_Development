
  var newURL = "http://universities.hipolabs.com/search?country=india";
  
  fetch(newURL)
    .then((something) => something.json())
    .then((anything) => console.log(anything));
  
  var container = document.getElementById("container");
  var table = document.getElementById("table");
  var ul = document.getElementById("ul");
  
  //url = "http://uniies.hipolabs.com/search?country=india";
  fetch(newURL)
    .then((response) => {
      console.log("inside first then");
      return response.json();
    })
    .then((data) => {
      console.log("inside second then");
      console.log(data);
      for (let i = 0; i < data.length; i++) {
          var element = document.createElement("div");
          element.innerText = data[i].name;
          container.appendChild(element);
          var tr = document.createElement("tr");
          var td = document.createElement("td");
          td.innerText = data[i].name;
          tr.appendChild(td);
          table.appendChild(tr);
          var li = document.createElement("li");
          var div1 = document.createElement("div");
          var div2 = document.createElement("div");
          div1.innerText = data[i].name;
          div2.innerText = data[i]["state-province"];
          //   div2.innerText = data[i].state-province;
          li.appendChild(div1);
          li.appendChild(div2);
          ul.appendChild(li);
      }
    })
    .catch((err) => console.log("api has failed"));
  // var div = document.createElement("div");
  // div.innerText = "hello";
  // table.appendChild(div);

  
  fetch(newURL)
    .then((something) => something.json())
    .then((anything) => {
      // write some functionality
      // finally we get the data here
      console.log(typeof anything);
    });