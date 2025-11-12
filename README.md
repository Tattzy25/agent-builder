# AI Agent Builder

A production-ready visual workflow builder for AI SDK. Build powerful AI workflows with drag-and-drop nodes, chain prompts, models, conditionals, and more. Export to production-ready AI SDK code.

![AI Agent Builder](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

## Features

- 🎨 **Visual Workflow Builder**: Drag-and-drop interface powered by React Flow
- 🤖 **AI Model Integration**: Support for OpenAI, Google Gemini, and more
- 🔄 **Conditional Logic**: Build complex workflows with branching logic
- 📊 **Multiple Node Types**:
  - Text Model (GPT, Gemini, etc.)
  - Image Generation
  - Audio Generation
  - Embedding Models
  - HTTP Requests
  - JavaScript Execution
  - Structured Output
  - Prompts & Tools
- 💻 **Code Export**: Generate production-ready AI SDK code
- ▶️ **Live Execution**: Test workflows directly in the browser
- 💾 **Import/Export**: Save and load workflows as JSON
- 🎯 **Production Ready**: Built with Next.js 15 and TypeScript

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm
- OpenAI API key (for text models)
- Google AI API key (for Gemini models and image generation)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Tattzy25/agent-builder.git
cd agent-builder
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Copy the example environment file and add your API keys:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:

```env
OPENAI_API_KEY=sk-your-openai-api-key-here
GOOGLE_GENERATIVE_AI_API_KEY=your-google-api-key-here
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Keys

### OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Create a new API key
4. Add it to your `.env.local` file

### Google AI API Key
1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Create an API key
4. Add it to your `.env.local` file

## Usage

### Building a Workflow

1. **Add Nodes**: Click on node types in the left palette or drag them onto the canvas
2. **Connect Nodes**: Drag from one node's output to another node's input
3. **Configure Nodes**: Click on a node to edit its properties in the right panel
4. **Run Workflow**: Click the "Run" button to execute your workflow
5. **Export Code**: Click "Export Code" to generate production-ready code

### Node Types

- **Start**: Entry point for your workflow
- **End**: Terminal node for your workflow
- **Prompt**: Create prompts with variable interpolation ($input1, $input2, etc.)
- **Text Model**: Call LLMs like GPT-4, GPT-3.5, or Gemini
- **Image Generation**: Generate images using Gemini Flash Image
- **Audio**: Text-to-speech conversion
- **Embedding Model**: Generate text embeddings
- **HTTP Request**: Make HTTP API calls
- **JavaScript**: Execute custom JavaScript code
- **Conditional**: Branch based on conditions
- **Tool**: Create custom tools
- **Structured Output**: Generate structured JSON responses

### Variable Interpolation

Use `$input1`, `$input2`, etc. in prompt nodes to reference outputs from connected nodes.

Example:
```
Generate an image of: $input1
```

### Saving and Loading Workflows

- **Export**: Click "Export" to download your workflow as JSON
- **Import**: Click "Import" to load a saved workflow

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project to Vercel
3. Add environment variables in the Vercel dashboard:
   - `OPENAI_API_KEY`
   - `GOOGLE_GENERATIVE_AI_API_KEY`
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Tattzy25/agent-builder)

### Other Platforms

You can deploy to any platform that supports Next.js:

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

Make sure to set the required environment variables on your hosting platform.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes* | OpenAI API key for text models |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Yes* | Google AI API key for Gemini and image generation |

*At least one API key is required depending on which models you plan to use.

## Security Considerations

- **API Keys**: Never commit API keys to version control. Always use environment variables.
- **Rate Limiting**: Consider implementing rate limiting for production deployments
- **Input Validation**: The application validates inputs, but ensure your API keys have appropriate usage limits
- **CORS**: Configure CORS appropriately for your production domain

## Development

### Project Structure

```
agent-builder/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── execute-workflow/  # Workflow execution endpoint
│   │   └── demo-country/      # Demo endpoint
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── nodes/            # Node type components
│   ├── ui/               # UI components
│   ├── code-export-dialog.tsx
│   ├── execution-panel.tsx
│   ├── node-config-panel.tsx
│   └── node-palette.tsx
├── lib/                   # Utility functions
│   ├── code-generator.ts  # Code generation logic
│   ├── node-utils.ts      # Node utilities
│   └── utils.ts           # General utilities
├── styles/                # Global styles
└── public/                # Static assets
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (requires configuration)

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and lock files:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Clear Next.js cache:
   ```bash
   rm -rf .next
   npm run build
   ```

### API Key Issues

If workflows fail to execute:

1. Verify your API keys are correctly set in `.env.local`
2. Ensure you're not hitting rate limits
3. Check the browser console for detailed error messages

### Node Connection Issues

If nodes won't connect:

1. Ensure you're dragging from output to input
2. Check that node types are compatible
3. Refresh the page if the canvas becomes unresponsive

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Workflow visualization powered by [React Flow](https://reactflow.dev/)
- AI capabilities powered by [Vercel AI SDK](https://sdk.vercel.ai/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues for solutions

## Roadmap

- [ ] Add more AI model providers (Anthropic, Cohere, etc.)
- [ ] Add workflow templates
- [ ] Implement user authentication
- [ ] Add workflow sharing capabilities
- [ ] Add more node types (database, file operations, etc.)
- [ ] Implement workflow versioning
- [ ] Add collaborative editing

---

Made with ❤️ using Next.js and AI SDK
