let names = [];
      function pushButton() {
        names.push(box.value);
        display.innerHTML = names;
        console.log(names);

      
      if (names.includes(box.value)) {
        alert("Name already exists");
        
      }
      
      }