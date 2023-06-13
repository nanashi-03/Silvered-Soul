import { createClient } from '@supabase/supabase-js'

const api_key = process.env.SUPABASE_KEY as string

export const supabase = createClient('https://usvwnazroaizfkfeqhxv.supabase.co', api_key)
