---
name: Portafolio 2.0 — The Receiving File
description: Single-page portfolio read as a commissioning dossier of sealed delivery records (Background, Systems, Record, Signature).
colors:
  seal: "#b3352b"
  seal-ink: "#8e2a22"
  seal-tint: "#f7e8e4"
  paper: "#f6f2e9"
  card: "#fffdf7"
  ink: "#1c1710"
  muted: "#5c5546"
  faint: "#6e675a"
  line: "#e2dccb"
  line-dark: "#c9c2ac"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  small:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.12em"
  caption:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    letterSpacing: "0.04em"
rounded:
  sm: "3px"
  md: "6px"
  focus: "2px"
spacing:
  section: "5rem"
  rule-gap: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.seal}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.seal-ink}"
  button-outline:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  seal-stamp:
    backgroundColor: "{colors.seal-tint}"
    textColor: "{colors.seal-ink}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  acta-record:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "20px 24px"
---

# Design System: Portafolio 2.0 — The Receiving File

## Overview

**Creative North Star: "The Receiving File"**

The page is the commissioning dossier of one engineer: background, six delivery
records — four sealed, two filed — work history with credentials, and a signature block. The material is warm
paper flooded edge to edge, ink text, hairline rules, and a single utilitarian red
that appears only where something was received, stamped, or must be signed. Roman
clause numerals (I–IV) are the only structure because the sequence is the file's
order, not decoration. Nothing glows, nothing floats in, nothing performs — except
the seals, which press onto the page exactly once. Every image carries a source line
because a record without provenance is hearsay.

**Key Characteristics:**
- Warm paper ground, ink text, one stamp-red accent; warm ledger grays for the rest.
- Ruled rows, 2px ink rules opening each clause, sharp acta corners.
- Grotesk headlines with a point of view; mono reserved for form data (folios, dates, stacks, exhibits).
- One authored moment: the seal press. Everything else swaps instantly.

## Colors

Desk-of-records palette: warm paper, neutral-warm ink, one red that always means "received".

### Primary
- **Stamp Red** (#B3352B): seals, primary actions, the active exhibit marker. Its rarity is the point.
- **Seal Ink** (#8E2A22): seal lettering and links on light grounds where red must hold 4.5:1; hover state of primary buttons.
- **Seal Tint** (#F7E8E4): grounds the seal stamps paired with Seal Ink text.

### Neutral
- **File Paper** (#F6F2E9): page ground, flooded edge to edge.
- **Record Card** (#FFFDF7): acta records, masthead-adjacent panels, signature block.
- **File Ink** (#1C1710): headings and body text.
- **Muted Umber** (#5C5546): secondary prose and descriptions.
- **Faint Ledger** (#6E675A): form data only (folios, dates, stacks, issuers, counts); floor is 4.5:1.
- **Hairline** (#E2DCCB): row rules and exhibit frames.
- **Ledger Edge** (#C9C2AC): record borders, control borders, scrollbars.

### Named Rules
**The One Red Rule.** Stamp red appears only on seals, primary actions, and proof of received work. Anything else wanting emphasis uses weight or size.
**The 4.5 Rule.** No text ships below 4.5:1 on its ground. Faint Ledger is the lightest ink allowed, and only for data.

## Typography

**Display Font:** Archivo (800) with system sans fallback
**Body Font:** Archivo (400/500/600) with system sans fallback
**Label/Mono Font:** JetBrains Mono (400/500/600), form data only

**Character:** A workhorse grotesk set tight and heavy for the masthead and clause
names against quiet, legible record prose; the mono speaks only what a clerk would
file — folios, dates, stacks, exhibit counts — never decoration.

### Hierarchy
- **Display** (800, clamp(2.25rem, 6vw, 3.75rem), 1.0): the subject's name in the masthead. Once per page.
- **Headline** (700, 1.25rem–2.25rem, tight): clause names ("II. Systems delivered") and acta titles.
- **Title** (600, 1rem, 1.4): row names, experience roles.
- **Body** (400, 1rem/0.94rem, 1.625): prose and evidence; measure capped at 2xl widths.
- **Small** (400, 0.9375rem/15px, 1.6): secondary descriptions, row detail, acta one-liners.
- **Label** (mono 500, 0.69rem/11px, +0.12em, uppercase): folio lines, masthead meta, data lines.
- **Caption** (mono 400, 0.625rem/10px): provenance captions under figures only.

### Named Rules
**The Clause Speaks Rule.** Clause names are the headings themselves ("II. Systems delivered"). No eyebrow or kicker label sits above any heading, ever.
**The Mono Files Rule.** Mono appears on data a file would store. A heading set in mono is a costume change, not a style.

## Layout

One 3xl file column, centered, opening with a masthead (file title plus folio/date/place ledger) and closing with a 2px ink rule and a file-closed footer. Clauses open with a 2px ink rule and generous air above; inside, ruled rows stack edge to edge with 1px hairlines. Content measure never exceeds 2xl. No sidebar: a file is read top to bottom.

## Elevation & Depth

Flat by construction. Depth is conveyed by hairline rules, the 2px clause rules, and tonal layering (paper against record card), never by shadow.

### Named Rules
**The Flat File Rule.** No box shadows anywhere on the page. A surface that needs emphasis gets a darker rule or a tinted ground, not a lift.

## Shapes

Utilitarian document corners: acta records are sharp (0px) like filed forms; stamps, chips, and photos take a slight 3px cut; buttons and panels take a modest 6px rounding. Borders are 1px hairlines or ledger edges, 2px for ink clause rules and seal stamps. Photo frames are plain rectangles, never masks or blobs. Focus rings are 2px seal outlines at 2px offset.

## Components

### Buttons
- **Shape:** modest rounding (6px).
- **Primary:** stamp-red ground, white text, semibold 0.875rem; padding 10px 20px.
- **Hover / Focus:** ground deepens to seal ink; focus ring is 2px seal outline. Instant, no transition.
- **Outline:** record-card ground, ledger-edge border, ink text; border hardens to ink on hover.
- **Copy-email:** outline button with a copied state that swaps its label and icon for two seconds.

### Seals
- **Style:** seal-tint ground, seal-ink uppercase mono lettering, 2px stamp-red border, 3px corners, rotated −8deg.
- **State:** seals press onto the page once when scrolled into view (260ms press, overshoot settle); under reduced motion they render statically. A seal marks only Deployed, Paper, and Award records; other statuses file as plain ledger text, never decoration.

### Acta records
- **Corner Style:** sharp (0px); record-card ground; ledger-edge border.
- **Header row:** a button (mono folio, title, seal, plus/minus marker) expanding the record in place — never a modal.
- **Evidence:** captioned exhibits with a mono count-and-provenance line; dotted exhibit selectors harden to a red bar on the live exhibit.

### Navigation
- **None persistent.** The file reads top to bottom; the masthead folio and clause numerals are the wayfinding. Mobile and desktop share the single column.

### Signature block
- **Style:** record-card ground, ledger-edge border; subject name set as display type, mono file line beneath, contact actions below. Sign-off happens by email.

## Do's and Don'ts

### Do:
- **Do** number clauses I–IV and acta folios as tabular data; the sequence is the file's order.
- **Do** expand acta and diploma detail in place with named show/hide controls.
- **Do** caption every shipping raster with its source line.
- **Do** theme browser surfaces from the palette: red text selection, seal focus rings, paper scrollbars, tabular numerals on counts.

### Don't:
- **Don't** put any kicker, eyebrow, or section index above a heading.
- **Don't** open modals, draw glow or gradients, or lift surfaces with shadow.
- **Don't** set headings or decoration in mono, or stand an emoji where an icon belongs.
- **Don't** animate anything except the one seal press; all other state changes swap instantly.
- **Don't** invent testimonials, clients, metrics, or any claim the evidence does not carry.
