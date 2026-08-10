/** Defines an object that can create a copy of itself. */
export interface Clonable<Object> {
  /** Returns a deep or shallow copy of the object. */
  clone(): Object
}
