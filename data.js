// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'signaldb',
	Name: 'SignalDB',
	Description:
		'Local-first JavaScript database with signal-based reactivity, offline persistence, and backend-agnostic real-time sync.',
	MaturityLevel: 'Production-Ready',
	Website: 'https://signaldb.js.org',
	GetStarted: 'https://signaldb.js.org/getting-started/',
	GitHub: 'https://github.com/maxnowack/signaldb',
	UniquenessNote: 'SignalDB combines signal-based reactivity with local-first data storage and synchronization in a lightweight, framework-agnostic library.',
	InitialReleaseDate: new Date('2023-07-03'),
	Deployment: ['Self-hosted'],
	License: 'MIT',

	AppTarget: {
		LanguageSDK: { data: ['typescript', 'javascript'] },
		ClientBundleSize: { data: '~40 KB (gzipped)' },
		FrameworkIntegrations: {
			data: [
				'React',
				'Vue',
				'Solid',
				'Svelte',
				'Angular',
			]
		},
		Platform: { data: ['Browser', 'Node'] },
	},

	Networking: {
		Topology: { data: 'Client-Server' },
		Protocol: { data: ['WebSocket', 'HTTP'] },
	},

	// SignalDB is a client-side database/library; the server side is whatever backend you already have.
	ServerSideData: {
		PersistenceMechanism: { data: ['Optional / Backend-defined'] },
		DataModelParadigm: { data: 'Backend-defined' },
	},

	ClientSideData: {
		QueryAPI: { data: ['MongoDB-like', 'Signals-based Reactivity'] },
		PersistenceMechanism: {
			data: ['IndexedDB', 'LocalStorage', 'OPFS', 'In-memory'],
			comment: 'via pluggable storage adapters',
		},
		OptimisticUpdates: { data: 'Yes' },
		PersistenceFeatures: { data: 'Depends on the storage adapter' },
		DataModel: { data: 'Document' },
		OfflineReads: { data: 'Full Support' },
		OfflineWrites: { data: 'Local conflict resolution' },
		DataSize: { data: 'Depends on the storage adapter' },
	},

	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Full Replication', 'Partial Replication'] },
		ConflictHandling: { data: 'Last write wins at attribute level' },
		WhereResolutionOccurs: { data: 'Client' },
		WhatGetsSynced: {
			data: {
				ClientToServer: 'Changes or Documents',
				ServerToClient: 'Changes or Documents',
			},
		},
		Authority: { data: 'Centralized' },
	},

	DevelopmentWorkflowsDX: {
		DebuggingTools: { data: ['DevTools', 'Data Inspector'] },
		TypeSupport: { data: 'First-class TypeScript support' },
	},
})
