function convert() {
    var input = document.getElementById('wt').value;
    if (input == '') alert("Please enter input");
    else {
        var output = input / 1000.0;
        document.getElementById('result').innerHTML = `${output} kg`;
    }
  }