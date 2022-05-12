function capitalize(value: string): string {
  return value.charAt(0).toUpperCase().concat(value.slice(1));
}

function formatList(values: string[]): string {
  // @ts-ignore: Ingoring because Intl.ListForm seems to be not within TypeScript's ESNEXT.
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  const capitalizedValues = values.map((value) => capitalize(value));

  return formatter.format(capitalizedValues);
}

export {
  capitalize,
  formatList,
}
