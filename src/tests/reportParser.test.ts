import { reportParser } from '../reportParser';
import { describe, it, expect } from 'vitest';
describe('reportParser', () => {
  it('counts ascending sequence with valid range', () => {
    const input = [[1, 2, 3]];
    expect(reportParser(input)).toBe(1);
  });

  it('counts descending sequence with valid range', () => {
    const input = [[9, 7, 5]];
    expect(reportParser(input)).toBe(1);
  });

  it('ignores increasing sequence with large gap', () => {
    const input = [[1, 5, 6]];
    expect(reportParser(input)).toBe(0);
  });

  it('ignores decreasing sequence with large gap', () => {
    const input = [[10, 4, 1]];
    expect(reportParser(input)).toBe(0);
  });

  it('ignores anything with same values', () => {
    const input = [[3, 3, 2, 1]];
    expect(reportParser(input)).toBe(0);
  });

  it('ignores unordered sequence', () => {
    const input = [[1, 3, 2]];
    expect(reportParser(input)).toBe(0);
  });

  it('counts multiple valid lines', () => {
    const input = [
      [1, 2, 3],
      [5, 4, 3],
      [10, 14, 18],
    ];
    expect(reportParser(input)).toBe(2);
  });
});
