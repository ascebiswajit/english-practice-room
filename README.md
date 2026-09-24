# English Room

A simple English practice website for students, built with HTML, CSS and vanilla JavaScript.

**Live website:** https://english-practice-room.biswajitnayak2402.chatgpt.site

## Features

- Common grammar and spelling checks while typing
- Clickable corrections in a highlighted review and suggestions panel
- Optional broader checking through LanguageTool
- Three original Bank PO-style reading passages, each with five written questions
- Model answers revealed after submission for self-assessment
- Responsive layout with no account or plugin required

## Run locally

From the repository directory:

```sh
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. No installation or build step is required.

## Files

- `dist/index.html`: page structure
- `dist/style.css`: responsive styles
- `dist/app.js`: grammar rules, online checking and reading exercises
- `dist/favicon.svg`: site icon

## Limitations and privacy

Basic checks use a limited set of local rules and do not detect every error. Clicking **Check online** sends the current text to LanguageTool's public service, subject to its availability and limits. Online requests are user-triggered, not automatic. See https://languagetool.org/legal/privacy.

Written comprehension answers are compared with model answers by the student; they are not automatically graded. Writing and answers are not saved between page reloads.

## Hosting

Serve the `dist` directory with any static web host. No API key, backend or AI account is required.

## Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, useful contribution ideas and the pull request checklist. Bug reports, original practice passages and accessibility improvements are welcome.

## Review and suggest updates

Anyone can explore the source, try the live website and suggest improvements through [issues](https://github.com/ascebiswajit/english-practice-room/issues) or [pull requests](https://github.com/ascebiswajit/english-practice-room/pulls). Fork the repository to work on your changes; proposed updates are reviewed before being merged.

## License

This project is available under the [MIT License](LICENSE).

## Timed Bank PO challenge

Open **Bank PO challenge** for 10 levels in each of three topics: Banking & Finance, Economy & Business, and Society & Technology. There are 30 original passages and 90 distinct written questions, moving from finding facts to critical evaluation.

- Choose a topic and level, then press **Start practice** to reveal the set.
- Each level has a 5–10 minute practice target, shown before starting.
- The countdown continues while the browser tab is inactive. At zero, responses are submitted and become read-only.
- Submit early to reveal model answers, or use the self-review checkboxes to compare key ideas. These are not automatic scores.
- After submission, retry the set, move to the next level or choose another topic.
- Responses are held only in memory. Reloading or leaving the page discards the attempt; an active attempt displays a browser leave warning where supported.

The challenge is a focused comprehension drill, not an official question paper or full Bank PO mock. Practice timings are editorial targets, not official exam timings.

`dist/po-data.js` contains the topic, level and passage data. `dist/po-practice.js` manages the deadline, submission and answer review. The original writing and untimed reading tabs remain available.

### Check the timed practice

```sh
node --check dist/app.js
node --check dist/po-data.js
node --check dist/po-practice.js
node tests/po-practice.test.cjs
```

The dependency-free tests cover content uniqueness, countdown deadlines, automatic submission, late input, early submission, restarting, topic changes and next-level navigation. They use a minimal DOM fixture and do not replace visual browser testing.
