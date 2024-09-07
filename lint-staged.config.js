module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
  '*.{json,md,css,scss,html}': ['prettier --write', 'git add'],
}
