import * as fs from 'fs/promises'

import { readFile } from 'fs/promises';
import { reportParser } from './reportParser';

const run = async () => {
  const input = await readFile('src/input.txt', 'utf-8');
  const lines = input.trim().split(/\r?\n/).map(line => line.trim().split(/\s+/).map(Number));

  const safeReportsTotal = reportParser(lines);
  console.log(`# of safe reports: ${safeReportsTotal}`);
};

run();

