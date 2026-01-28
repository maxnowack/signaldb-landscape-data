# SignalDB

SignalDB is a local-first JavaScript database for building reactive apps that keep working offline and stay consistent across devices. It provides a simple API and so a straightforward way to get started with local-first and client-side databases in general. To learn the basics, start with the official [SignalDB documentation](https://signaldb.js.org/) and the [SignalDB getting started guide](https://signaldb.js.org/getting-started/).

## Reactivity with signals

SignalDB uses [signals](https://signaldb.js.org/signals/) to provide reactive access to your data. Signals they represent values that can be read and automatically tracked, so dependent computations re-run when those values change. In SignalDB, signals are used to make database reads reactive—when you access data in a reactive context, SignalDB can track what your code actually used and update only when that data changes. Practically, this means queries and derived data can update your UI automatically without you wiring up manual subscriptions.

SignalDB is library agnostic and provides reactivity adapters for all major frameworks. See the [SignalDB reactivity documentation](https://signaldb.js.org/reactivity/) for details on how to use SignalDB with your favorite framework.

## Real-time Synchronization

SignalDB supports synchronizing local data in real-time so multiple clients can converge over time. The local-first model means changes are applied locally first (so the app remains usable offline), and synchronization then exchanges changes when connectivity is available. When updates arrive from other devices, SignalDB applies them locally so reactive queries update and the UI stays current.
