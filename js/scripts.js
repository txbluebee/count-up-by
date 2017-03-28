$(document).ready(function() {
  $("#form").submit(function(event) {
    var countToNumberInput = parseInt($("input#countToNumber").val());
    var countByNumberInput = parseInt($("input#countByNumber").val());

    if (countToNumberInput && countByNumberInput && countToNumberInput > countByNumberInput && countToNumberInput > 0 && countByNumberInput > 0) {
      for (var index = countByNumberInput; index <= countToNumberInput; index += countByNumberInput) {
        alert(index);
      }
    } else {
      alert("Please enter two positive numbers. Number to count to must be greater than number to count by.");
    }

    event.preventDefault();
  });
});
