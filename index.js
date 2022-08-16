let names = [];
      document.getElementById("display").innerHTML = names;
      function pushButton() {
        names.push(box.value);
        document.getElementById("display").innerHTML = names;
        console.log(names);
        // demo.innerHTML=names;

      
      if (names.includes(box.value)) {
        alert("Name already exists");
        
      }
      
      }