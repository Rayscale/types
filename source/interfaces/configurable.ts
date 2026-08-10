/** Defines an object that can be configured with specific settings. */
export interface Configurable<ConfigurationType> {
  /** Configures the object with the provided settings. */
  configure(settings: ConfigurationType): void
}
