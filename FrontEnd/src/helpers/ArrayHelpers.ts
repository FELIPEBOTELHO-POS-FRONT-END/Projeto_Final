export function generateArrayWithNumbers(start: number, end: number) {
  const array = Array(end - start + 1)
    .fill(end - start)
    .map((_, idx) => start + idx);
  return array;
}
