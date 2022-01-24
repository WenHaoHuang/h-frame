class HyUiError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'HyUiError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new HyUiError(`[${scope}] ${m}`)
}

export function debugWarn(scope: string, m: string): void {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(new HyUiError(`[${scope}] ${m}`))
  }
}
