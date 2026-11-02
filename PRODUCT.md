# Zando RDC

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Visitors find verified suppliers by town, category, name, or offering and contact the Zando team on WhatsApp. Administrators manage the catalog and staff. Ambassadors submit suppliers and updates for administrator approval.

## Product purpose

Zando RDC provides a trusted place to discover local suppliers, starting in Lubumbashi. The application ends at the WhatsApp contact action. Commercial arrangements after contact are outside its scope.

## Positioning

Today, customers in Lubumbashi find suppliers through Facebook groups, WhatsApp word of mouth, and markets. On Zando, every public supplier has passed documented checks of identity, location, and business activity and has received administrator approval. The Zando team also remains the customer's contact point: customers reach the team's WhatsApp channel with the supplier's details, and the supplier's phone number is never shared. A directory or social group cannot honestly make both claims.

## Operating context

The public website and staff dashboards launch in French. Visitors and suppliers do not need accounts. The initial shared WhatsApp destination is +243 832 878 704, which administrators can manage.

Most visitors browse on mid-range phones over mobile data, often on slow or unreliable connections. Ambassadors work in the field. They visit suppliers in person and use a phone on site to submit profiles, upload photos, and record verification evidence.

## Capabilities and constraints

Supplier profiles require documented verification and administrator approval before publication. Supplier contact information and verification evidence remain private. Administrators manage towns and categories, and ambassadors can access only their own submissions.

HyperLogLog estimates distinct browsers that click a supplier's WhatsApp contact action. These private reports measure interest, not sent messages or completed transactions. No deal, booking, payment, or commission management belongs in the application.

The [product brief](docs/product-brief.md) is the detailed scope and acceptance reference. [GLOSSARY.md](GLOSSARY.md) defines domain terms; [architecture decisions](docs/adr/) record consequential implementation boundaries.

## Brand commitments

Use the supplied Zando logos in `apps/web/public/images/logos/`, selecting variants appropriate to each placement. The user requires dark mode, white text, and the orange in those logos as the primary brand color. The public entry point follows an Airbnb-style supplier discovery layout. A separate About page explains Zando and supplier verification.

## Evidence on hand

The repository contains the supplied logo variants. Public supplier information must come from real approved profiles; demonstration profiles belong only in development. Verification claims must reflect completed checks. Do not invent supplier counts, testimonials, or guarantees.

## Product principles

1. **Verification claims.** Verification appears only where checks were actually completed. It states what was checked and never promises a transaction.
2. **WhatsApp handoff.** Discovery succeeds when a visitor reaches the Zando team with the right supplier's details. Contact must still work when measurement fails.
3. **Mobile performance.** Public pages must load and work on mid-range phones over slow mobile data. Page weight, especially photo weight, is a product cost.
4. **Field-ready staff tools.** Ambassadors submit from a phone at the supplier's location, so submission and verification flows must be fully usable on mobile.
5. **Privacy.** Supplier contact details and verification evidence never reach public pages or public responses.

## Accessibility & inclusion

- Public pages and ambassador flows must stay usable over slow or unreliable mobile data, with clear French loading, empty, and error states.
- Orange controls and selected states must keep readable contrast and visible keyboard focus. Where white text on an orange fill would lack contrast, use orange borders, icons, or accents instead.
