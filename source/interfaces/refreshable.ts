/** Defines an object whose data or state can be refreshed. */
export interface Refreshable {
  /** Refreshes the object's data or state. */
  refresh(): void | Promise<void>
}
