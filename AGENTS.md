# AGENTS.md — Personal Website

## Project Overview

This repository contains my personal portfolio website, built with Next.js, TypeScript, and Tailwind CSS.

The website should be creative, interactive, responsive, and accessible, with light and dark themes.

## Development Guidelines

- Write clean, maintainable, and readable code.
- Prefer reusable components over duplicated code.
- Use TypeScript and follow existing project conventions.
- Keep dependencies minimal.
- Ensure all designs work on desktop and mobile.
- Respect accessibility standards and reduced-motion preferences.
- Avoid unnecessary complexity or premature optimization.

## Git and Commit Instructions

**Commit changes regularly throughout development.**

1. Make a Git commit after completing each meaningful, self-contained task or feature.
2. Do not wait until the entire development session is finished to commit.
3. Keep commits small, focused, and logically organized.
4. Use descriptive commit messages following Conventional Commits.

Examples:
- `feat: implement responsive hero section`
- `feat: add dark mode toggle`
- `style: improve mobile navigation`
- `fix: resolve theme hydration issue`
- `refactor: extract reusable project card`
- `docs: update project README`

5. Before committing, run relevant tests, linting, and build checks when feasible.
6. Do not commit broken or incomplete features unless explicitly instructed.
7. Do not include unrelated changes in a commit.
8. Never commit secrets, API keys, `.env` files, or unnecessary generated files.
9. Do not amend previous commits or rewrite Git history unless explicitly requested.
10. Do not push changes to GitHub unless explicitly instructed.

## Workflow

For each development task:

1. Inspect the existing code and understand the requirements.
2. Implement the requested feature.
3. Validate the implementation.
4. Review the changes using `git diff`.
5. Stage only relevant files and create a descriptive commit.
6. Continue to the next task when it is within the requested scope.

## Reporting

At the end of each development session, summarize:

- Features implemented
- Tests and checks performed
- Commits created, including commit hashes
- Any outstanding issues or recommended next steps