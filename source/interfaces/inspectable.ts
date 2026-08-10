/** Defines an object whose internal state can be inspected for debugging. */
export interface Inspectable<InspectionType = unknown> {
  /** Returns a snapshot or representation of the object's internal state. */
  inspect(): InspectionType
}
