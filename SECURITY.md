# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in AI Agent Builder, please report it by creating a private security advisory on GitHub or by emailing the maintainers.

**Please do not report security vulnerabilities through public GitHub issues.**

We will investigate all legitimate reports and do our best to quickly fix the problem.

## Security Best Practices

When using AI Agent Builder in production:

1. **API Keys**: Always use environment variables for API keys, never commit them to version control
2. **Rate Limiting**: Implement rate limiting on API endpoints to prevent abuse
3. **Input Validation**: While the application includes input validation, always validate user inputs on the server side
4. **HTTPS**: Always deploy with HTTPS enabled
5. **CORS**: Configure CORS appropriately for your production domain
6. **Authentication**: Consider adding authentication for production deployments
7. **Code Execution**: Be aware that JavaScript and conditional nodes execute user-provided code - sanitize and validate carefully in production

## Known Considerations

- JavaScript execution nodes use `Function()` constructor which can execute arbitrary code
- HTTP request nodes can make requests to any URL
- Consider implementing additional sandboxing for production use cases
