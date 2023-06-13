export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[]

export interface Database {
	public: {
		Tables: {
			projects: {
				Row: {
					body: string | null
					description: string
					id: number
					repo: string | null
					title: string
				}
				Insert: {
					body?: string | null
					description: string
					id?: number
					repo?: string | null
					title: string
				}
				Update: {
					body?: string | null
					description?: string
					id?: number
					repo?: string | null
					title?: string
				}
				Relationships: []
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}
