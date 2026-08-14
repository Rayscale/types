# Types

> Clean, agnostic, and reusable lifecycle and capability interfaces.

## Description

This library provides a foundational set of standard TypeScript interfaces (such
as `Disposable`, `Configurable`, `Serializable`, and more) designed to unify
architectural patterns across different libraries and packages without locking
you into concrete implementations.

## Features

- **Clonable**: Defines objects capable of creating copies of themselves.
- **Configurable**: Standardized configuration management with settings typing.
- **Disposable**: Universal resource disposal and cleanup contract.
- **Exposable**: Selective exposure of internal states or properties.
- **Flushable**: Flushing and clearing of buffers, logs, or caches.
- **Hashable**: Unique signature generation and integrity checking.
- **Inspectable**: Safe introspection of internal states for debugging.
- **Mergeable**: Combining states or configurations seamlessly.
- **ReadonlyViewable**: Providing safe, read-only projections of objects.
- **Refreshable**: Recaching and synchronizing dynamic states.
- **Restorable**: Snapshot-based recovery and undo mechanisms.
- **Serializable**: Flattening objects into storable or transmittable formats.

## Getting Started

### Prerequisites

- [Deno 1.40 or higher](https://deno.land/)

### Installation

```bash
deno add jsr:@rayscale/types
```

## Authors

- **Rayscale** ([@rayscale](https://github.com/rayscale))

## License

This project is licensed under the MIT License - see the `LICENSE` file for
details.
