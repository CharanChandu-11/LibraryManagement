export function getEarliestRenewalDate(renewalDates: string[]): string {
  if (!renewalDates.length) return '';
  return renewalDates.sort()[0];
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}