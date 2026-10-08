# Portfolio Project Instructions

## 1. Project Goal

This is a personal developer portfolio website.

The portfolio should feel:

* unique
* modern
* polished
* professional
* visually memorable
* intentional rather than template-generated

Avoid common AI-generated portfolio patterns and generic developer portfolio designs.

The website should communicate personality, projects, skills, education, experience, and achievements through a strong visual presentation rather than simply displaying information in cards.

## 2. Design Consistency

The overall visual identity established in the existing implementation must be preserved.

When adding new sections:

* follow the existing typography
* follow the existing spacing system
* follow the existing visual language
* reuse established components and patterns where appropriate
* maintain consistent interaction and animation behavior

Do not redesign earlier sections just to make a new section easier to implement.

Do not introduce random visual styles that conflict with the established design.

Avoid:

* generic glassmorphism
* excessive gradients
* excessive glowing effects
* unnecessary 3D elements
* excessive animations
* cliché developer illustrations
* template-like card grids

Visual effects should have a clear purpose.

## 3. Content Accuracy

Never invent personal information.

Do not fabricate:

* projects
* achievements
* education
* work experience
* technologies
* certifications
* statistics
* awards
* testimonials
* responsibilities
* skills

Use the existing portfolio content and files as the source of truth.

If information is missing, use a placeholder or ask for clarification rather than inventing information.

## 4. Phase-Based Development

The portfolio is being developed in multiple phases.

Each phase will be provided separately.

When implementing a phase:

* implement only what that phase requests
* do not prematurely implement later phases
* do not remove completed work
* do not redesign completed sections unless explicitly requested
* inspect existing code before making changes
* make the smallest reasonable changes necessary
* preserve functionality from previous phases

The phase instructions provided by the user take priority for the specific implementation task.

## 5. Code Quality

Before changing code:

* inspect the existing implementation
* understand existing components
* reuse existing functionality where possible
* avoid duplicate components
* avoid unnecessary dependencies
* avoid unnecessary abstractions
* keep components maintainable
* use clear and consistent naming

Do not generate large amounts of unnecessary code.

## 6. Responsive Design

The portfolio must work across:

* desktop
* tablet
* mobile

Do not optimize only for desktop.

Check for:

* horizontal overflow
* clipped elements
* broken layouts
* excessive spacing
* unreadable text
* unusable interactions
* animation issues on smaller screens

## 7. Accessibility

Use:

* semantic HTML where appropriate
* accessible interactive elements
* meaningful alt text for meaningful images
* keyboard-accessible controls
* visible focus states
* readable text

Do not rely only on color to communicate important information.

## 8. Performance

Keep the website performant.

Avoid:

* unnecessary JavaScript
* unnecessary dependencies
* excessive animations
* oversized assets
* unnecessary client-side rendering

Use the framework's recommended approaches where appropriate.

## 9. Existing Work

Treat the current project as existing user work.

Never:

* reset the project
* delete unrelated files
* overwrite unrelated changes
* replace working sections unnecessarily
* revert user changes
* change the established design without instruction

When a change affects an existing section, preserve its current behavior unless the phase explicitly requires otherwise.

## 10. Verification

After implementing a future phase:

* check for build errors
* check for lint/type errors where applicable
* check the affected functionality
* check responsive behavior
* check that existing sections still work
* check that no unrelated functionality was removed

Fix issues introduced by the current implementation before considering the phase complete.

## 11. Portfolio Content Structure

The portfolio consists of multiple sections that will be developed progressively.

Do not assume that every project, technology, achievement, or personal detail belongs in the introduction.

Content should remain in the section where it has been intentionally placed.

For example, project-specific information should remain within the relevant project/experience section unless the user explicitly asks for it elsewhere.

Do not move content between sections without instruction.

## 12. Decision Making

When there are multiple reasonable implementation approaches:

* prefer the approach that preserves the current design
* prefer simplicity
* prefer maintainability
* prefer consistency with existing code

Do not make major creative decisions that change the portfolio's identity without explicit instruction.

If a requirement is genuinely ambiguous and the decision could significantly affect the result, explain the assumption before making a major change.

## 13. Current Phase Rule

Always determine which phase the user is currently working on before making changes.

Never implement future phases automatically.

The user may provide additional phase-specific instructions that override these general instructions.

## Final Rule

The portfolio should evolve as one cohesive product.

Every new phase should feel like it belongs to the same website rather than looking like a separate AI-generated section.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
