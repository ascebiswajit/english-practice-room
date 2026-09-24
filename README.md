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

## Topic library: essay and comprehension practice

The **Topic library** tab contains the 50 requested topics in seven categories:

1. Banking, Monetary Policy & Financial Sector Reforms (8)
2. FinTech, Artificial Intelligence & Cybersecurity (7)
3. Economy, Infrastructure & Trade (8)
4. Agriculture, Rural Development & Financial Inclusion (6)
5. Social Issues, Human Capital & Education (7)
6. Environment, Sustainability & Energy Transition (5)
7. Governance, Policy & Global Geopolitics (9)

Choose a category, topic and mode. Essay mode provides a 20-minute timer, a 120–180 word practice target, a live word count and a short model response after submission. Reading mode provides the topic's original editorial passage and three written questions at each of ten levels. Each level reuses that topic passage with a different question focus, progressing from main idea to critical evaluation; it is not ten different passages per topic. Reading targets range from 5 to 10 minutes.

Both modes submit automatically at expiry, lock responses for review, and provide model answers and self-review checkboxes. Only one timed attempt can run across the Topic library and Bank PO challenge. Drafts are held only in page memory and are lost on reload; an active attempt requests the browser's standard leave warning where supported.

The preparation checklists identify data to research and link to official sources. No live statistics feed is claimed. Readers should verify reporting dates, definitions and current legal provisions. Model responses are original, short editorial practice material—not official exam answers, financial advice or legal guidance. They deliberately discuss trade-offs without inventing current numerical figures. Source links were checked on 24 September 2026.

Data and behaviour live in `dist/topic-data.js` and `dist/topic-practice.js`. Validate them with:

```sh
node --check dist/topic-data.js
node --check dist/topic-practice.js
node tests/topic-practice.test.cjs
node tests/po-practice.test.cjs
```

The tests use a small DOM fixture to validate state transitions and content completeness; visual browser testing remains separate.
