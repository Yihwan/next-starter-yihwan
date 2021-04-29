module.exports = {
  '!(package).json': `prettier --write`,
  'src/**/*.js': `eslint --fix`,
  'src/**/*.{ts,tsx}': [
    `eslint --fix`,
    () => 'npm run type-check',
  ],
};