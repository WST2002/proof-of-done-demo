# Proof of Done demo repository

Four small pull requests for trying [Proof of Done for Jira](https://github.com/WST2002/proof-of-done-jira) in two minutes. Each one is merged and its CI is green, yet only one is really done.

| Pull request | What it does | What Proof of Done says |
|---|---|---|
| DEMO-1 · HONEST | Adds a 10% discount and a test with the exact new value | Ready for Done |
| DEMO-2 · WEAKENED ASSERTION | Changes rounding and loosens the rounding test to `assert.ok` | Blocked: the test was weakened |
| DEMO-3 · SKIPPED TEST | Changes free shipping and skips the shipping test | Blocked: the test was skipped |
| DEMO-4 · GREEN AFTER WEAKENING | First commit breaks the tax test (CI red), second loosens it (CI green) | Blocked, and the timeline points at the commit where CI turned green |

## Try it

1. [Install Proof of Done for Jira](https://developer.atlassian.com/console/install/487a9b05-d2bc-4e8f-98ce-2c533e95676f?signature=AYABeLyYHAf3L0Qs27bv3Z4tZGYAAAADAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6NzA5NTg3ODM1MjQzOmtleS83MDVlZDY3MC1mNTdjLTQxYjUtOWY5Yi1lM2YyZGNjMTQ2ZTcAuAECAQB4CxqLTo9l4lqXuFjNim1xJM%2Bp%2F3TVP9xHS2BrU5DRRucBxXFnmAqMkSCyl6leOTM7vgAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDJqZCVzW%2FRJw46Tz%2FQIBEIA7KpCT9ZAQwFJsiwTrSbSKKgdRQWmd%2FjUuSXbGYWf2JKynvqBa%2F6pgANm%2BkirVwQ87I84ioBd6pe1JkcEAB2F3cy1rbXMAS2Fybjphd3M6a21zOmV1LXdlc3QtMTo3MDk1ODc4MzUyNDM6a2V5LzQ2MzBjZTZiLTAwYzMtNGRlMi04NzdiLTYyN2UyMDYwZTVjYwC4AQICAHi9bVMAkme4qVQX1fQHo6ePw3H40A7cGfz7yrmSfBWMXgHzrqE7iuvRTZcycSDL2vL%2BAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMYTwAiUE9gVwinAxTAgEQgDtCr1tNBFtw8PO6nP%2BYM4Mj2FAxgXzP2tuvr1UHfYqaQDskqtHZB8zGjxZpadCx1rcIhwf0ABZcFLYGhAAHYXdzLWttcwBLYXJuOmF3czprbXM6dXMtZWFzdC0xOjcwOTU4NzgzNTI0MzprZXkvNmMxMjBiYTAtNGNkNS00OTg1LWI4MmUtNDBhMDQ5NTJjYzU3ALgBAgIAeDYASx0XCjkny4iLV6vz%2BKtEGSGT6kdt0QRpkn6D%2FlVEAV3faaMp3F5mck34LGGuVGMAAAB%2BMHwGCSqGSIb3DQEHBqBvMG0CAQAwaAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAxGhCxxWC6o0pXlPaYCARCAOy4FJhD2J%2FQANeRhmYUO4jYqEJlO75s%2FjAmcHkBWRSuvXa92N96t2FuQxly5jqyCs%2BF7NjAN8IvIR%2FhlAgAAAAAMAAAQAAAAAAAAAAAAAAAAALVIl5LUghVGwavqcP55yxH%2F%2F%2F%2F%2FAAAAAQAAAAAAAAAAAAAAAQAAADK99sYebOv93AEzsLX4dWYBUbD%2B%2Fu17vEQkU3HAUr3Joqfo8yyUG%2FsSXoLFX4uKG0hv7DVa%2FFg6ocDIbB3mnr2uJn0%3D&product=jira) on your site (choose your site, then **Get app**; nothing to download).
2. Create a company-managed Jira project with the key `DEMO`, and four work items (DEMO-1 to DEMO-4).
3. Jira settings → Apps → Proof of Done settings: enter `WST2002/proof-of-done-demo`, save, then turn it on for the DEMO project and press Apply.
4. Open DEMO-1 to DEMO-4 and try moving each one to Done.

Made by **Wageesha Tripathi** · [LinkedIn](https://www.linkedin.com/in/wst2002/) · [Email](mailto:tripathiwageesha2002@gmail.com) · [GitHub](https://github.com/WST2002)
