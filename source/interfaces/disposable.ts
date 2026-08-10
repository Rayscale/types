/** Defines an object that can be destroyed or disposed of when it is no longer needed. */
export interface Destroyable {
  /** Destroy the object. */
  dispose(): void
  /** Indicates whether the object has been destroyed. */
  get disposed(): boolean
}
