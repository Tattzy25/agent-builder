# Changelog

All notable changes to AI Agent Builder will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2025-11-12

### Added
- Comprehensive README documentation with setup, deployment, and troubleshooting
- SECURITY.md with security best practices and vulnerability reporting
- CONTRIBUTING.md for community contribution guidelines
- DEPLOYMENT.md with production deployment checklist
- API.md with complete API endpoint documentation
- QUICKSTART.md for fast onboarding
- LICENSE file (MIT)
- .env.example with all required environment variables
- .gitattributes for consistent line endings
- Input validation library (lib/validation.ts)
  - URL validation (only http/https protocols)
  - HTTP method validation
  - Code sanitization (blocks dangerous patterns)
  - Model name validation
  - JSON validation
- Environment variable validation (lib/env.ts)
- Workflow size limits to prevent resource exhaustion
  - Maximum 50 nodes per workflow
  - Maximum 100 edges per workflow
- Security improvements in execute-workflow API
  - JavaScript code sanitization
  - Conditional code validation
  - Tool code validation
  - Maximum code length enforcement (10,000 characters)
  - URL and HTTP method validation
- Improved .gitignore with better exclusions

### Changed
- Updated zod from 3.25.67 to ^3.25.76 (fixes peer dependency conflict)
- Updated vaul from ^0.9.9 to ^1.1.2 (React 19 compatibility)
- Improved error handling in API routes
- Added proper type coercion for node data fields in API

### Fixed
- Dependency conflicts preventing installation
- TypeScript type safety issues in API routes
- Missing documentation for setup and deployment

### Security
- All npm dependencies: 0 vulnerabilities
- CodeQL analysis: 0 alerts
- Added code execution sandboxing
- Added input validation and sanitization
- Documented security considerations

## [0.1.0] - Initial Release

### Added
- Visual workflow builder with drag-and-drop interface
- Multiple node types:
  - Start/End nodes
  - Text Model (GPT, Gemini)
  - Image Generation
  - Audio Generation
  - Embedding Models
  - HTTP Requests
  - JavaScript Execution
  - Conditional Logic
  - Prompts & Tools
  - Structured Output
- Workflow import/export (JSON)
- Code export (AI SDK)
- Live workflow execution
- Real-time execution panel
- React Flow integration
- Next.js 15 and React 19
- TypeScript support
- Vercel Analytics integration
- shadcn/ui components
- Tailwind CSS styling

[0.1.1]: https://github.com/Tattzy25/agent-builder/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/Tattzy25/agent-builder/releases/tag/v0.1.0
