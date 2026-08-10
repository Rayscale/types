/** Defines an object that can flush its pending data, buffer, or cache. */
export interface Flushable {
  /** Flushes any pending data or operations. */
  flush(): void | Promise<void>
}
