function calculateEarnings() {
  let amount = parseFloat(document.getElementById('amount').value);
  let days = parseFloat(document.getElementById('days').value);
  let percentage = parseFloat(document.getElementById('percentage').value);

  if (isNaN(amount) || isNaN(days) || isNaN(percentage)) {
    alert('Please enter valid numbers for amount and days.');
    return;
  }

 
  let earnings = 0;
  for (let i = 0; i < days; i++) {
    earnings += amount *( percentage/100);
    amount += amount *( percentage/100);
  }

  const outputElement = document.getElementById('output');
  outputElement.textContent = `Your earnings are: ₹${earnings.toFixed(2)}`; // Format output with 2 decimal places
}

