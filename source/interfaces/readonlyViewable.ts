/** Defines an object that can provide a readonly view or version of itself. */
export interface ReadonlyViewable<ReadonlyViewType> {
  /** Returns an readonly view of the object. */
  asReadonly(): ReadonlyViewType
}
