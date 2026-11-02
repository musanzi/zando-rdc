# Zando RDC

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Visitors find verified suppliers by town, category, name, or offering and contact the Zando team on WhatsApp. Administrators manage the catalog and staff. Ambassadors submit suppliers and updates for administrator approval.

## Product purpose

Zando RDC provides a trusted place to discover local suppliers, starting in Lubumbashi. The application ends at the WhatsApp contact action. Commercial arrangements after contact are outside its scope.

## Operating context

The public website and staff dashboards launch in French. Visitors and suppliers do not need accounts. The initial shared WhatsApp destination is +243 832 878 704, which administrators can manage.

## Capabilities and constraints

Supplier profiles require documented verification and administrator approval before publication. Supplier contact information and verification evidence remain private. Administrators manage towns and categories, and ambassadors can access only their own submissions.

HyperLogLog estimates distinct browsers that click a supplier's WhatsApp contact action. These private reports measure interest, not sent messages or completed transactions. No deal, booking, payment, or commission management belongs in the application.

The [product brief](docs/product-brief.md) is the detailed scope and acceptance reference. [GLOSSARY.md](GLOSSARY.md) defines domain terms; [architecture decisions](docs/adr/) record consequential implementation boundaries.

## Brand commitments

Use the supplied Zando logos in `apps/web/public/images/logos/`, selecting variants appropriate to each placement. The user requires dark mode, white text, and the orange in those logos as the primary brand color. The public entry point follows an Airbnb-style supplier discovery layout. A separate About page explains Zando and supplier verification.

## Evidence on hand

The repository contains the supplied logo variants. Public supplier information must come from real approved profiles; demonstration profiles belong only in development. Verification claims must reflect completed checks. Do not invent supplier counts, testimonials, or guarantees.
