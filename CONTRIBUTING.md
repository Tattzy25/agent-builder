# Contributing to AI Agent Builder

Thank you for your interest in contributing to AI Agent Builder! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue on GitHub with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (OS, Node version, browser, etc.)

### Suggesting Enhancements

We welcome feature requests! Please create an issue with:
- A clear description of the enhancement
- Why this enhancement would be useful
- Example use cases

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes thoroughly
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/agent-builder.git
cd agent-builder

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your API keys to .env.local

# Start development server
npm run dev
```

### Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Write clear, descriptive commit messages
- Add comments for complex logic
- Keep functions small and focused

### Testing

- Test your changes manually
- Ensure the application builds without errors (`npm run build`)
- Check for console errors in the browser

### Commit Messages

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Keep the first line under 50 characters
- Add a detailed description if needed

Example:
```
Add image generation node

- Implemented new image generation node type
- Added configuration options for aspect ratio
- Updated documentation
```

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all.

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discriminatory language
- Personal attacks
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

## Questions?

Feel free to open an issue for any questions about contributing!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
