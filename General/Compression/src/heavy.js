// Pretend this file is heavy (e.g., big math, charts, etc.)
export function heavyWork() {
  // Some fake heavy operation
  let s = 0;
  for (let i = 0; i < 2_000_000; i++) s += i % 7;
  return s;
}
