# Contributing to English Room

Contributions that make English practice clearer, more accurate and more accessible are welcome.

## Get started

1. Fork the repository, then clone your fork.
2. Create a branch: `git switch -c improve/your-change`.
3. Start the site with `python3 -m http.server 8080 --directory dist`.
4. Make a focused change and check it at http://localhost:8080.
5. Commit, push your branch and open a pull request against `main`.

## Useful contributions

- Grammar rules with both incorrect and correct sentence examples
- Original Bank PO-style passages with carefully checked model answers
- Keyboard accessibility and mobile layout improvements
- Clearer instructions, error messages and documentation

## Before submitting

- Run `node --check dist/app.js`.
- Check writing, applying corrections, clearing text and the example button.
- Check passage switching, submitting answers and retrying.
- Keep model answers hidden until submission.
- Check keyboard navigation and a narrow mobile screen.
- Describe what changed, why, and how you checked it. Include screenshots for visual changes.

Do not submit copied exam passages, private student answers, credentials or personal information. Keep online grammar checks user-triggered and preserve the LanguageTool attribution and privacy notice. Prefer small changes without new dependencies.

## Report a bug

Open an issue with the steps to reproduce, expected behaviour, actual behaviour, and browser/device. Use a short invented sentence instead of personal writing.
