function capitalize(value: string): string {
  return value.charAt(0).toUpperCase().concat(value.slice(1));
}

function formatList(values: string[]): string {
  // @ts-ignore
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  const capitalizedValues = values.map((value) => capitalize(value));

  return formatter.format(capitalizedValues);
}

export {
  capitalize,
  formatList,
}
