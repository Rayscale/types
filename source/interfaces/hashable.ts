/** Defines an object that can generate a unique hash or signature of its contents. */
export interface Hashable {
  /** Returns a unique hash string representing the object's state. */
  hash(): string
}
