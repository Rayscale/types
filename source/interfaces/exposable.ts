/** Defines an object that can expose a specific subset of its properties or interface. */
export interface Exposable<ExposedType> {
  /** Returns a restricted or exposed view of the object. */
  expose(): ExposedType
}
