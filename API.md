# API Documentation

## Endpoints

### POST /api/execute-workflow

Executes an AI workflow based on the provided nodes and edges.

#### Request

**Headers:**
- `Content-Type: application/json`

**Body:**
```json
{
  "nodes": [
    {
      "id": "1",
      "type": "start",
      "position": { "x": 0, "y": 0 },
      "data": {}
    },
    {
      "id": "2",
      "type": "prompt",
      "position": { "x": 200, "y": 0 },
      "data": {
        "content": "Generate a haiku about coding"
      }
    }
  ],
  "edges": [
    {
      "id": "e1-2",
      "source": "1",
      "target": "2"
    }
  ]
}
```

#### Response

Returns a streaming response with JSON objects separated by newlines.

**Success Response:**
```json
{"type":"node_start","nodeId":"1","nodeType":"start"}
{"type":"node_complete","nodeId":"1","nodeType":"start","output":"Workflow started"}
{"type":"node_start","nodeId":"2","nodeType":"prompt"}
{"type":"node_complete","nodeId":"2","nodeType":"prompt","output":"Generate a haiku about coding"}
{"type":"complete","executionLog":[...]}
```

**Error Response:**
```json
{"type":"error","error":"Error message here"}
```

#### Validation Rules

- Maximum 50 nodes per workflow
- Maximum 100 edges per workflow
- Nodes and edges must be valid arrays
- URLs in HTTP request nodes must be valid http/https URLs
- JavaScript code is validated for dangerous patterns

#### Node Types

##### start
Entry point for workflow execution.

```json
{
  "type": "start",
  "data": {}
}
```

##### end
Terminal node for workflow.

```json
{
  "type": "end",
  "data": {}
}
```

##### prompt
Creates a text prompt with variable interpolation.

```json
{
  "type": "prompt",
  "data": {
    "content": "Write about $input1"
  }
}
```

##### textModel
Calls an LLM for text generation.

```json
{
  "type": "textModel",
  "data": {
    "model": "openai/gpt-4",
    "temperature": 0.7,
    "maxTokens": 2000
  }
}
```

##### imageGeneration
Generates images using AI.

```json
{
  "type": "imageGeneration",
  "data": {
    "model": "gemini-2.5-flash-image",
    "aspectRatio": "16:9",
    "outputFormat": "png"
  }
}
```

##### httpRequest
Makes HTTP requests.

```json
{
  "type": "httpRequest",
  "data": {
    "url": "https://api.example.com/data",
    "method": "GET",
    "headers": "{\"Authorization\":\"Bearer token\"}",
    "body": ""
  }
}
```

##### javascript
Executes custom JavaScript code.

```json
{
  "type": "javascript",
  "data": {
    "code": "return input1.toUpperCase()"
  }
}
```

**Security Note:** Code is validated to prevent dangerous patterns like `require`, `import`, `eval`, `process`, etc.

##### conditional
Branches based on a condition.

```json
{
  "type": "conditional",
  "data": {
    "condition": "input1 === 'expected'"
  }
}
```

Outputs: `true` or `false`

Edges from conditional nodes can specify `sourceHandle: "true"` or `sourceHandle: "false"` to control branching.

##### audio
Text-to-speech generation.

```json
{
  "type": "audio",
  "data": {
    "model": "tts-1",
    "voice": "alloy",
    "speed": 1.0
  }
}
```

##### embeddingModel
Generates text embeddings.

```json
{
  "type": "embeddingModel",
  "data": {
    "model": "text-embedding-3-small",
    "dimensions": 1536
  }
}
```

##### tool
Custom tool with executable code.

```json
{
  "type": "tool",
  "data": {
    "name": "myTool",
    "description": "A custom tool",
    "code": "return { result: input1 }"
  }
}
```

##### structuredOutput
Generates structured JSON output.

```json
{
  "type": "structuredOutput",
  "data": {
    "schemaName": "MySchema",
    "mode": "object"
  }
}
```

### GET /api/demo-country

Demo endpoint that returns country information based on request headers.

#### Response

```json
{
  "country": "US",
  "message": "Hello from US!"
}
```

## Rate Limiting

**Recommended for production:**
- 10 requests per minute per IP address
- 100 requests per hour per API key (if implementing authentication)

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request (invalid workflow structure) |
| 500 | Internal Server Error |

## Common Error Messages

- `"Invalid workflow: nodes must be an array"` - The nodes field is missing or not an array
- `"Workflow exceeds maximum allowed nodes (50)"` - Too many nodes in workflow
- `"HTTP Request validation failed"` - Invalid URL or HTTP method
- `"JavaScript code validation failed"` - Code contains dangerous patterns
- `"Tool code validation failed"` - Tool code contains dangerous patterns

## Security

- All JavaScript code is validated before execution
- HTTP requests are limited to http/https protocols
- Maximum code length: 10,000 characters
- Maximum condition length: 1,000 characters
- URLs must be valid and use http/https protocols only

## Variable Interpolation

Use `$input1`, `$input2`, etc. in prompts and text fields to reference outputs from previous nodes.

Example:
```
"Generate an image of: $input1"
```

Inputs are numbered based on the order of incoming connections (sorted by x-position of source nodes).
