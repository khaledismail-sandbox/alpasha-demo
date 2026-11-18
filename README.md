# PAŞA Sığorta mobile browser simulation

**Status: ready for Khaled’s manual GitHub upload.** The 26 screens, four persona/status combinations, live main-app SDK delivery, premium revenue, attribution and genuine Medium-masked Replay were checked on 18 November 2026. The subsequent login correction was checked locally only; it sent nothing to Amplitude and needs its changed files uploaded to update a hosted copy. The published GitHub Pages origin still needs its final check after the actual URL exists. No repository or site was published by this builder.

The normal app initializes its integrations automatically for a selected account. There is no localhost restriction, allowlist, expiry or hidden activation step. The treatment is intentionally presentation-only, per Khaled’s instruction.

Final intended site source is in this folder, under `Codex Files` as requested. All 26 screens have physical `index.html` files. Plain HTML, CSS and JavaScript; no packages or build step.

**Treatment scope updated by Khaled:** the standalone coverage-summary page is presentation-only. It loads no SDK, analytics wrapper or shared identity/state module, performs no tracking or recording and uses no browser storage. It has no normal-app navigation or experiment routing. This replaces the earlier requirement to initialize clients on that page; no treatment write approval is needed.

The approved live rehearsal used four fictional run-22 identities plus one incomplete run-21 attempt, with no real customer data. Three policy purchases produced **165 AZN** in ingested premium revenue; a separate **18 AZN** Marketplace purchase was not counted as insurance premium. The existing classifier returned three Direct users and one Paid Search user. Required clients initialized and returned real service responses; no published guide/survey was created or activated. See verification.md for the receipts and limits.

The other chat completed the authorized frozen upload: 59,371 events and 2,000 profile updates acknowledged, with zero rejected or uncertain batches. The website does not contain or upload that historical dataset.

## Local non-sending preview

The builder used the existing Python server implementation in `_tools/preview.py`, with its single Analytics response replaced by a test stand-in. Local preview base: `http://127.0.0.1:8765/pasha-insurance-demo/`. This checks UI and navigation only. Tests in `_tools/check.cjs` and `_tools/bootstrap-check.cjs` use Node's existing built-in modules; no packages are installed. Their results are not SDK delivery evidence. Do not upload `_tools/` or `_reference/`.

## Confident purchaser: click-by-click

1. Open the demo base. The login is explicitly simulated; use no real identity or payment data.
2. Enter a fictional **Name** and **Demo number** (default 1) in the login form. The full **User ID** updates live. At the very bottom, expand **Preferences**. Leave **I know the cover I need** selected and **Existing motor policyholder** unchecked for a new prospect. Use a different demo number for each persona/status recording.
3. Return to **Continue**. Bir ID/MyGov ID are labels for fictional access only. **Create an account** exercises the corresponding separate account-created action.
4. On Home, click the **Next stop, Georgia** banner. Click **Get a quote**.
5. Keep Georgia, 1–7 December 2026 and 1 traveler. Click **See my quote**. The example premium is **45.00 AZN**.
6. Click **Continue to checkout** directly. Do not open help in this scripted persona journey.
7. Tick the illustrative-purchase acknowledgement. Click **Complete payment · 45.00 AZN**.
8. Click **Open policy → Insurance certificate**. The certificate is a sample, not valid insurance. Download produces a plain-text sample; Share uses the browser share sheet or clipboard fallback.
9. Refresh confirmation or certificate: it must not purchase again.

## Coverage explorer: click-by-click

1. Open the base. Enter a fictional **Name** and a fresh **Demo number** in the login form; check the live User ID. Expand bottom **Preferences**, select **Help me understand the cover**, and independently choose existing motor-policyholder status. Do not start a live recording without its write approval.
2. Click **Continue → Georgia banner → Get a quote → See my quote**.
3. Click **Review cover to continue** (or **Understand the cover**). This is an actual help interaction, not an automatic friction event.
4. Optionally open **Emergency medical care** or **Trip disruption**, then **Return to my quote**. Alternatively use **Back to my quote** directly from help.
5. Click **Understand the cover** again. Help should show that it has opened twice for the same quote.
6. Click **Back to my quote**, then **Save and leave**. This explicitly saves and abandons the quote and takes you to Home. It does not end the session.
7. Click **Support**, then explore help, or return Home and click **Return to quote**. Continue interacting so an authorized future Replay includes behavior after abandonment.
8. Session Ended belongs only to **Account → Sign out**.

## Independent motor → Travel

1. At sign-in choose either coverage preference and tick **Existing motor policyholder**.
2. On Home open the synthetic Motor policy, then click its **Explore cover** Travel recommendation. The same recommendation is available under **For you** on Home.
3. Continue the corresponding Travel journey. A new prospect has no initial policy. Purchasing Travel never changes the fixed entry baseline from prospect to existing policyholder.

## Medical and Marketplace

1. After Travel purchase, return to Home or Products. Scroll to the **Explore Medical cover** recommendation; click **Explore cover**.
2. Click **Get a quote → See my quote → Continue to checkout**, acknowledge the simulation, and complete the **75.00 AZN** example purchase. Open its own policy/certificate.
3. On Home or Products scroll to **A little more travel-ready → Explore organizer**.
4. Read the fictional accessory, click **Continue to checkout**, then **Complete purchase · 18.00 AZN**. These are separate exploration, intent and completion interactions. Marketplace spend is not insurance premium.
5. In Products, **Other** also exposes Medical and the limited Marketplace. Search accepts only the safe catalog words Travel, Medical, Motor, Property and Other for analytics; other entered text is never sent as search content.

## Tabs and account

Home, Products, Services and Support are the four tabs. Services opens policies and certificates; Support opens working in-app coverage help. Account is behind the avatar, not a fifth tab. Notifications and policy information open local sheets. No real customer identity, cards, medical records or credentials are collected.

## Reset, identity and attribution

- The main login collects editable **Name + Demo number** (default 1) and shows the generated full User ID live. The exact format is `cleanname_number_YYYYMMDD`, using the Dubai date; for example `aylin_1_20261118`. Name normalization trims, lowercases and removes non-ASCII letters/digits, falling back to `user`. Account shows the same full ID. Only coverage preference, independent motor status and the optional local recorder are in the small bottom Preferences disclosure. Different persona/status recordings must use different demo numbers; the app refuses to reuse a stored identity for a different segment. Existing legacy-format profiles are not merged or rewritten. A new Dubai date requires sign-in again.
- Ordinary navigation/refresh retains the current quote, selected policy and session. Intentional sign-in starts a clean journey: quotes, plans, cart, abandonment state, policies, recommendations and local recorder state clear; baseline and original acquisition remain tied to that identity. A new demo number means a fresh identity. Live checks verified separate device/session identities on deliberate persona/status changes and continuity within ordinary navigation.
- Sign out is the explicit session boundary and clears dependent local state. First-touch attribution stays with the retained fictional profile, so returning users are not manufactured as Direct.
- Incoming attribution uses the exact supplied vocabulary. Pasting a Google-tagged link sets observed URL tags, **not** a fake google.com referrer. Fresh Direct has absent UTM/referrer fields; custom descriptive fields say direct/direct/not_applicable. No native install attribution is claimed.
- Local fixtures are browser state, not a historical Amplitude upload. The frozen 2,000-user data remains outside this site. Its separately authorized upload was completed in the companion chat; no browser upload action exists.

## Incoming-link examples (owner reference)

Use fresh approved identities to check first-touch differences. Replace the **planned** base with the real published URL only once it exists.

| Entry | Query appended to the base |
|---|---|
| Direct | no query |
| Paid Search | `?utm_source=google&utm_medium=search&utm_campaign=pasha_travel_search` |
| Organic Search | `?utm_source=google&utm_medium=organic%20search&utm_campaign=not_applicable` |
| Instagram | `?utm_source=instagram&utm_medium=social&utm_campaign=pasha_travel_social` |
| Facebook | `?utm_source=facebook&utm_medium=social&utm_campaign=pasha_travel_social` |
| Partner | `?utm_source=demo_travel_partner&utm_medium=affiliate&utm_campaign=pasha_travel_partner` |
| LLM Search | `?utm_source=chatgpt&utm_medium=llm&utm_campaign=not_applicable` |

These URLs do not simulate a referring site or campaign exposure/click. Visible in-app recommendations separately record explicitly simulated campaign exposure, click and entry. Exposure waits for at least half the card to be visible.

For a returning signed-in user, append `?touchpoint_source=demo_email&touchpoint_medium=email&touchpoint_campaign=pasha_quote_resume&promoted_product=travel` to `travel/quote/review/`; this records the actual landing, not an email impression/click that was never performed. Other supported campaigns: pasha_motor_to_travel, pasha_travel_to_medical, pasha_travel_to_marketplace, with matching promoted product. In-app links set demo_in_app/in_app. First touch stays unchanged. Server-side checks returned Direct=3 and Paid Search=1 for the approved four-user rehearsal, using saved classifier identifier `b7237e34-b4fd-4d61-9d61-863545c5076a`, `derivedV2`; do not substitute its display label.

## Manual treatment

**Planned URL, not live:** `https://khaledismail-sandbox.github.io/pasha-insurance-demo/treatment/coverage-summary/`.

1. Open that URL manually in a fresh context; it requires no login. No normal app link, flag or campaign routes here. This page can be shown without authorizing data collection.
2. The quote remains visible while its contextual summary scrolls. Read coverage, illustrative limits and exclusions.
3. Close with the × button, reopen **Understand this cover**, then click **I understand this cover**.
4. It has no user identity or SDK clients. All state lasts only for this page visit. Closing, reopening and acknowledging the summary are local presentation actions with no events or recordings.

## GitHub WEBSITE publishing

Khaled publishes manually. No repository has been created or deployed by this builder.

1. Sign in on GitHub as **khaledismail-sandbox**. Click **+ → New repository**. Name it **pasha-insurance-demo**, choose visibility appropriate for Pages, then **Create repository**. If it already exists, open that repository instead; preserve unrelated files.
2. Open **Code → Add file → Upload files**, or the empty repository’s upload-existing-file link.
3. In Finder open **GPT Project → Codex Files → pasha-insurance-demo**. Upload its **CONTENTS** to repository root, keeping screen directories intact. Do not upload the enclosing Codex Files or pasha-insurance-demo folder.
4. **Skip `_reference/`, `_tools/`, verification.md**, research/data-review, private logs, historical batches and the build prompt. GitHub’s website uploader ignores `.gitignore`; it does not protect dragged folders. Only intended browser source/media and public owner docs belong in the repository. The supplied browser ingestion key is expected public app configuration; no secret/server key is included.
5. Include root `.nojekyll`. If hidden in Finder, use **Add file → Create new file**, name it `.nojekyll`, add a harmless comment if needed and commit. Verify root `index.html`, `assets/` and all screen folders, preserving case.
6. Enter a commit message, select main, then **Commit changes**. Later uploads should replace only intended changed files while preserving folder structure/case.
7. Open **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**. Wait for GitHub’s actual deployment URL.
8. **Planned base, not live:** `https://khaledismail-sandbox.github.io/pasha-insurance-demo/`. Return with the actual URL for hosted verification. Khaled has approved the necessary verification; use fresh rehearsal identities for hosted checks and do not replay historical batches.
9. After the actual URL is provided, the approved necessary hosted checks must verify styling, cold links/refresh, both personas, resets, treatment isolation, actual requests, ingested country/revenue and genuine Medium-masked Replay with fresh rehearsal identities. Check actual response headers and Web Experiment script behavior for visual-editor compatibility. GitHub’s name alone is not evidence.

## Integration ownership

Browser SDK 2.49.3, Replay plugin 1.37.0, Feature Experiment 1.24.0 and separate project-managed Web Experiment/Engagement scripts. One wrapper, one bootstrap per document, no unified loader. Public configuration uses PASHA project 911590, US, organization 432322. All live writes require the exact named batch and go first. Do not create charts, experiment, flag, guide or notebook from this app build.

See brand.md for the measured palette/font approximation, and verification.md for actual evidence and unfinished checks. Five-screen visual audit only: Home, Products, Policy detail, Quote review, treatment. One visual fix pass completed; no claim of a full native clone.

## Performance update
Replace `assets/analytics.js` in the GitHub repository to apply the loading/timer correction. The login update uses `assets/app.js` and `assets/state.js`; keep those updated copies. Independent libraries load concurrently, with privacy checked before capture; events still require acknowledged identity and accepted delivery before navigation. The correction was tested offline only with no Amplitude writes; published performance has not been measured.
