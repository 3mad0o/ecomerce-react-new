export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  if (typeof amount !== 'number') amount= parseFloat(amount);

  return amount.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}