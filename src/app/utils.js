function formatCentsToDollar(centsString) {
  // Convert the string to an integer
  const cents = parseInt(centsString, 10);

  // Check if the number is valid
  if (isNaN(cents)) {
      return 'Invalid input';
  }

  // Convert cents to dollars and fix to 2 decimal places
  const dollars = (cents / 100).toFixed(2);

  // Convert to locale string for formatting
  return dollars.replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Example Usage

export { formatCentsToDollar }
