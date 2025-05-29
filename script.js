<script>
    function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('from-currency').value;
  const to = document.getElementById('to-currency').value;

  const rates = {
    USD: { RWF: 1250, EUR: 0.92 },
    RWF: { USD: 0.0008, EUR: 0.00074 },
    EUR: { USD: 1.09, RWF: 1350 }
  };

  if (!amount || !rates[from] || !rates[from][to]) {
    document.getElementById('result').innerText = "Invalid input.";
    return;
  }

  const result = amount * rates[from][to];
  document.getElementById('result').innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}
</script>