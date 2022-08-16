let names = [];
      function pushButton() {
       if (!names.includes(box.value)) {
        names.push(box.value);
        display.innerHTML = names;
        console.log(names);
        }

        else{
          alert("Name already exists");
        }
      }