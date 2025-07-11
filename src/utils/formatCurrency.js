export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  if (typeof amount !== 'number') return '';

  return amount.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}