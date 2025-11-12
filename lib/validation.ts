/**
 * Validation utilities for production safety
 */

/**
 * Validates and sanitizes a URL string
 */
export function validateUrl(url: string): string {
  try {
    const parsed = new URL(url)
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      throw new Error('Only HTTP and HTTPS protocols are allowed')
    }
    return parsed.toString()
  } catch (error) {
    throw new Error('Invalid URL format')
  }
}

/**
 * Validates HTTP method
 */
export function validateHttpMethod(method: string): string {
  const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS']
  const upperMethod = method.toUpperCase()
  if (!allowedMethods.includes(upperMethod)) {
    throw new Error(`Invalid HTTP method: ${method}`)
  }
  return upperMethod
}

/**
 * Sanitizes user input for code execution
 * This is a basic sanitization - for production, consider more robust solutions
 */
export function sanitizeCodeInput(code: string, maxLength = 10000): string {
  if (code.length > maxLength) {
    throw new Error(`Code length exceeds maximum allowed length of ${maxLength} characters`)
  }
  
  // Check for potentially dangerous patterns
  const dangerousPatterns = [
    /require\s*\(/gi,
    /import\s+/gi,
    /eval\s*\(/gi,
    /Function\s*\(/gi,
    /process\./gi,
    /__dirname/gi,
    /__filename/gi,
    /child_process/gi,
    /fs\./gi,
  ]
  
  for (const pattern of dangerousPatterns) {
    if (pattern.test(code)) {
      throw new Error('Code contains potentially unsafe patterns')
    }
  }
  
  return code
}

/**
 * Validates model name format
 */
export function validateModelName(model: string): string {
  // Basic validation - model names should not contain special characters
  if (!/^[a-zA-Z0-9\-\/\._]+$/.test(model)) {
    throw new Error('Invalid model name format')
  }
  return model
}

/**
 * Validates numeric range
 */
export function validateNumberInRange(
  value: number,
  min: number,
  max: number,
  fieldName: string
): number {
  if (isNaN(value) || value < min || value > max) {
    throw new Error(`${fieldName} must be between ${min} and ${max}`)
  }
  return value
}

/**
 * Validates JSON string
 */
export function validateJson(jsonString: string): any {
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    throw new Error('Invalid JSON format')
  }
}
