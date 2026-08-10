/** Defines an object or state that can be restored from a backup or previous point. */
export interface Restorable<SnapshotType = unknown> {
  /** Restores the object's state using a snapshot or backup. */
  restore(snapshot: SnapshotType): void | Promise<void>
}
