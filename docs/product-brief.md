# Zando RDC product brief

Zando RDC connects customers with verified local suppliers through a catalog managed by the Zando team. Customers discover suppliers and contact the team on WhatsApp. Trust depends on documented supplier checks and administrator approval.

This brief records the agreed product scope and brand direction. The About page structure below is the proposed presentation of those facts.

## Public discovery

- Browsing is free and requires no account.
- The home page is the supplier directory, inspired by Airbnb's browsing experience, with Lubumbashi selected initially.
- Visitors search by supplier name or offering and filter by town and category.
- The directory presents supplier cards that open dedicated supplier profile pages. Only approved, active suppliers appear publicly.
- The layout prioritizes mobile browsing and also supports desktop screens.
- Profiles contain the supplier's name, description, photos, categories, town, neighborhood, and examples of its offerings.
- Supplier phone numbers, email addresses, exact street addresses, and verification documents remain private.
- The WhatsApp contact action includes the supplier's name, town, and profile link in a French message addressed to the Zando team.
- Every supplier initially uses the shared Zando WhatsApp number, +243 832 878 704. Administrators manage this destination number.
- Contact remains available if recording a contact click fails.
- Customers and suppliers do not have accounts in the first version.

## Supplier management

- Administrators have full management authority. They can create, review, correct, reject, publish, and suspend supplier profiles.
- Administrators record verification checks before publishing suppliers they create themselves.
- Ambassadors submit suppliers for administrator review. They see their own submissions and review feedback.
- Ambassadors can propose updates to approved profiles. The existing approved version stays public until an administrator approves the changes.
- Publication requires documented checks of supplier identity, location, and business activity.
- Publication also requires a name, description, neighborhood, base town, service towns, at least one category, and at least one photo.
- The verification checklist includes contact confirmation, a location check, and supporting photos of the business or its work.
- Administrators can return submissions with specific corrections. Verification evidence stays private; the public sees only the approved verification summary.
- Public trust claims describe the checks performed without guaranteeing every transaction.
- Public profiles show "Vérifié par Zando", the verification date, and a short explanation of the completed checks.
- Likely duplicate businesses are flagged for administrator review. The first version maintains one profile per business.
- Administrators can reassign a supplier to another ambassador.
- Suspension immediately removes a supplier from discovery and disables its contact action while preserving its history.
- An administrator reviews a suspended supplier before restoring publication.

## Staff access

- Administrators create or invite ambassadors. Public account registration is removed.
- Administrators can deactivate staff accounts.
- Ambassadors can access private supplier information only for their own submissions.
- Ambassadors cannot approve suppliers or create staff accounts.

## Locations, categories, and language

- Administrators manage towns, cities, and categories.
- Suppliers have one base location, one or more service towns, and one or more categories.
- Lubumbashi is the first active city. Administrators can add towns as the team expands its service.
- The public website, staff dashboards, and prefilled WhatsApp messages launch in French.
- Initial categories are Alimentation, Mode et beauté, Maison et équipement, Construction, Électronique, and Services. Administrators can rename and expand them.
- Public supplier profiles contain real approved information. Demonstration profiles are confined to development.

## Visual direction

- Use the supplied Zando logo variants in `apps/web/public/images/logos/` for appropriate header, compact, footer, and About page placements.
- Dark mode, white text, and the supplied logo orange, `#EE731F`, define the brand direction. This replaces the earlier proposed green palette and generated text logo.
- Use supplier photography, readable typography, clear verification information, and prominent WhatsApp actions.
- The directory opens with navigation, search and filters, then supplier results. Brand storytelling belongs on the About page.
- Staff dashboards prioritize submissions, reviews, supplier management, and contact reports within the same brand direction.
- Preserve readable contrast and visible keyboard focus when applying orange to controls and selected states.

The inspected logo assets provide the following placements. All paths are relative to `apps/web/public/images/logos/`.

| Placement                | Supplied asset                | Treatment                                                    |
| ------------------------ | ----------------------------- | ------------------------------------------------------------ |
| Main header              | `IMG_20260901_202723_766.png` | Orange full logo on the dark background                      |
| Compact navigation       | `IMG_20260901_202737_148.png` | Orange square badge with the light symbol                    |
| Footer or About wordmark | `IMG_20260901_202724_311.png` | White wordmark on the dark background                        |
| About page brand mark    | `IMG_20260901_202736_695.png` | White standalone symbol                                      |
| Alternate full logo      | `IMG_20260901_202723_732.png` | White full logo when the placement needs a neutral treatment |

Preserve the supplied artwork and aspect ratios. The full logos include substantial transparent padding; size their visible artwork deliberately rather than stretching the image. Do not place dark-wordmark variants directly on dark backgrounds. Use orange borders, icons, and selected-state accents where white labels on an orange fill would lack contrast.

## About page presentation

The About page explains what Zando does, why suppliers are verified, and how visitors contact the team. It shares the directory's navigation, dark theme, white text, orange accents, and supplied brand assets.

1. Open with the supplied Zando identity, a short statement about verified local supplier discovery, and an action to browse suppliers.
2. Explain the purpose: help customers discover local suppliers through a catalog checked and managed by the Zando team, starting in Lubumbashi.
3. Explain the visitor journey: find a supplier, review its profile and verification information, then contact the Zando team on WhatsApp with that supplier's details.
4. Explain verification: an ambassador or administrator gathers evidence, and an administrator checks identity, location, and business activity before publication. State what those checks establish without guaranteeing a transaction.
5. Close with an action to return to supplier discovery. Keep supplier-specific WhatsApp contact on supplier profiles so the message retains the relevant supplier context.

Use French copy and real approved brand assets. Do not add fictional team biographies, testimonials, supplier totals, or commercial guarantees.

## Contact measurement

- Measurement is limited to supplier profile WhatsApp contact clicks, using HyperLogLog.
- Each supplier's metric estimates distinct browsers in the selected period. Repeated clicks from the same browser count once in that period.
- A random anonymous browser identifier supports deduplication without visitor login. A different browser or cleared browser storage can count separately.
- Reports offer today, the last 7 days, and the last 30 days. Daily aggregates are retained for 12 months.
- Administrators see all supplier reports. Ambassadors see reports only for their own suppliers. Reports are not public.
- The metric is labeled as an estimate of unique WhatsApp contacts, with an explanation that it measures contact clicks.
- A contact click does not prove that a WhatsApp message was sent, a booking was made, or a sale succeeded.

## Scope boundary

The application covers verified supplier discovery, staff management of the supplier catalog, and contact with the Zando team on WhatsApp. It has no customer request register, deal register, booking system, payment collection, or commission ledger. Commercial arrangements and operations after the WhatsApp handoff are outside this brief.

## Launch acceptance criteria

- A visitor can find an approved supplier by search, town, or category on mobile and desktop, inspect its profile and verification summary, and open the Zando WhatsApp conversation with that supplier's details.
- The About page explains discovery and verification using the supplied identity and approved scope.
- Public pages use French, dark mode, white text, and the supplied orange brand color.
- Private supplier contact information and verification evidence are absent from public responses and pages.
- Ambassadors can submit and revise their own profiles; only administrators can approve and publish them. Pending edits leave the approved public version unchanged.
- Suspended suppliers are absent from results and cannot be contacted through their profile. Reinstatement requires administrator review.
- Administrators can manage staff, suppliers, categories, towns, and the shared WhatsApp destination.
- Contact reports respect role boundaries, deduplicate browsers for the selected period, and clearly identify the counts as estimates. A measurement failure does not prevent contact.
- Empty search results, loading states, unavailable profiles, and submission errors offer clear French feedback. Public pages never fall back to fabricated suppliers.
- The application includes no deal, booking, payment, or commission workflows.
