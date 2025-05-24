const fs = require('fs');
const path = require('path');

describe('Project Documentation', () => {
  test('README.md exists', () => {
    const readmePath = path.resolve(process.cwd(), 'README.md');
    expect(fs.existsSync(readmePath)).toBe(true);
  });

  test('README.md has content', () => {
    const readmePath = path.resolve(process.cwd(), 'README.md');
    const content = fs.readFileSync(readmePath, 'utf8');
    expect(content.trim().length).toBeGreaterThan(0);
  });
});