/** Defines an object that can be serialized into a simpler representation. */
export interface Serializable<SerializedType = unknown> {
  /** Serializes the object into its storable format. */
  serialize(): SerializedType
}
