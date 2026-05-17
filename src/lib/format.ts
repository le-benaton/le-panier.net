export function formatYen(value: number | string): string {
  return `¥${Number(value).toLocaleString("ja-JP")}`;
}
