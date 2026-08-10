/** Defines an object that can merge its state with another of the same type. */
export interface Mergeable<Object> {
  /** Merges another object into this one and returns the result. */
  merge(other: Object): Object
}
