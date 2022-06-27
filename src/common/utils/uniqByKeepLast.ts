export function uniqByKeepLast(data: any[], key: (it: any) => any) {
  const sort = [...data.map((x: any) => [key(x), x])];
  return [...sort];
}
