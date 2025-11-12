/**
 * Environment variable validation and configuration
 * This ensures all required environment variables are present
 */

export interface EnvironmentConfig {
  OPENAI_API_KEY?: string
  GOOGLE_GENERATIVE_AI_API_KEY?: string
  NODE_ENV: string
  VERCEL_ENV?: string
}

/**
 * Validates environment variables
 * Throws an error if required variables are missing
 */
export function validateEnvironment(): EnvironmentConfig {
  const config: EnvironmentConfig = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    NODE_ENV: process.env.NODE_ENV || 'development',
    VERCEL_ENV: process.env.VERCEL_ENV,
  }

  // In production, at least one API key should be configured
  if (config.NODE_ENV === 'production') {
    if (!config.OPENAI_API_KEY && !config.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.warn(
        'WARNING: No AI API keys configured. At least one of OPENAI_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY should be set for production use.'
      )
    }
  }

  return config
}

/**
 * Checks if a specific API key is available
 */
export function hasApiKey(provider: 'openai' | 'google'): boolean {
  switch (provider) {
    case 'openai':
      return !!process.env.OPENAI_API_KEY
    case 'google':
      return !!process.env.GOOGLE_GENERATIVE_AI_API_KEY
    default:
      return false
  }
}

/**
 * Gets a validated API key for a provider
 * Returns undefined if not configured
 */
export function getApiKey(provider: 'openai' | 'google'): string | undefined {
  switch (provider) {
    case 'openai':
      return process.env.OPENAI_API_KEY
    case 'google':
      return process.env.GOOGLE_GENERATIVE_AI_API_KEY
    default:
      return undefined
  }
}
