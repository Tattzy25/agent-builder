# Quick Start Guide

Get started with AI Agent Builder in 5 minutes!

## Step 1: Clone and Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/Tattzy25/agent-builder.git
cd agent-builder

# Install dependencies
npm install
```

## Step 2: Configure API Keys (1 minute)

```bash
# Copy the example environment file
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:

```env
# Get from: https://platform.openai.com/api-keys
OPENAI_API_KEY=sk-your-key-here

# Get from: https://aistudio.google.com/apikey  
GOOGLE_GENERATIVE_AI_API_KEY=your-key-here
```

## Step 3: Run the Application (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Build Your First Workflow (2 minutes)

### Example: Simple Text Generation

1. **The workflow is already loaded!** The default workflow demonstrates a complete example
2. **Try it:** Click the "Run" button in the top right
3. **Watch it execute:** The execution panel shows real-time progress
4. **View results:** See the generated poem and image

### Create Your Own Workflow

1. **Add a Start Node:** Already present in the default workflow
2. **Add a Prompt Node:** 
   - Click "Prompt" in the left palette
   - Configure it: Click the node, enter "Write a joke about programming"
3. **Add a Text Model Node:**
   - Click "Text Model" in the left palette  
   - Configure: Select model "openai/gpt-4" or "openai/gpt-3.5-turbo"
4. **Connect Nodes:** Drag from Start → Prompt → Text Model
5. **Run:** Click the "Run" button
6. **See Results:** View the generated joke in the execution panel

## Next Steps

### Export Your Workflow

- **Save as JSON:** Click "Export" to download your workflow
- **Generate Code:** Click "Export Code" to get production-ready AI SDK code

### Try Different Node Types

- **HTTP Request:** Fetch data from APIs
- **Conditional:** Add branching logic
- **JavaScript:** Transform data with custom code
- **Image Generation:** Create AI images with Gemini

### Deploy to Production

See [DEPLOYMENT.md](DEPLOYMENT.md) for the complete production deployment checklist.

Quick deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Then add your environment variables in the Vercel dashboard.

## Troubleshooting

### "Failed to fetch" errors
- Check that your API keys are correct in `.env.local`
- Verify your API keys have available credits
- Ensure you're not hitting rate limits

### Nodes won't connect
- Make sure you're dragging from the right side of a node to the left side of another
- Some nodes have specific connection points (like conditional nodes)

### Build errors
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run dev
```

## Learn More

- [README.md](README.md) - Complete documentation
- [API.md](API.md) - API reference
- [DEPLOYMENT.md](DEPLOYMENT.md) - Production deployment guide
- [SECURITY.md](SECURITY.md) - Security best practices

## Get Help

- [Open an issue](https://github.com/Tattzy25/agent-builder/issues) on GitHub
- Check [existing issues](https://github.com/Tattzy25/agent-builder/issues) for solutions

## Example Workflows to Try

### 1. Blog Post Generator
Start → Prompt ("Write a blog outline about AI") → Text Model → End

### 2. Data Fetcher with Conditional
Start → HTTP Request (fetch data) → Conditional (check status) → Two Prompts (different responses) → End

### 3. Image + Description
Start → Prompt ("A sunset over mountains") → Text Model → Image Generation → End

---

**Ready to build something amazing? Happy coding! 🚀**
