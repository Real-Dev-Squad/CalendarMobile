export function getUtcOffset(rawFormat: TzRawFormat) {
  const tokens = rawFormat.split(' ');
  return tokens[0];
}

export function getCities(rawFormat: TzRawFormat) {
  const tokens = rawFormat.split(' - ');
  return tokens[1];
}
