# Proof of Done demo repository

Four small pull requests for trying [Proof of Done for Jira](https://github.com/WST2002/proof-of-done-jira) in two minutes. Each one is merged and its CI is green, yet only one is really done.

| Pull request | What it does | What Proof of Done says |
|---|---|---|
| DEMO-1 | Adds a 10% discount and a test with the exact new value | Ready for Done |
| DEMO-2 | Changes rounding and loosens the rounding test to `assert.ok` | Blocked: the test was weakened |
| DEMO-3 | Changes free shipping and skips the shipping test | Blocked: the test was skipped |
| DEMO-4 | First commit breaks the tax test (CI red), second loosens it (CI green) | Blocked, and the timeline points at the commit where CI turned green |

## Try it

1. Install Proof of Done for Jira on your site.
2. Create a company-managed Jira project with the key `DEMO`, and four work items (DEMO-1 to DEMO-4).
3. Jira settings → Apps → Proof of Done: enter `WST2002/proof-of-done-demo`, save, then turn it on for the DEMO project and press Apply.
4. Open DEMO-1 to DEMO-4 and try moving each one to Done.

Made by **Wageesha Tripathi** · [LinkedIn](https://www.linkedin.com/in/wst2002/) · [Email](mailto:tripathiwageesha2002@gmail.com) · [GitHub](https://github.com/WST2002)
