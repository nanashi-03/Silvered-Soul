import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database } from './database.types'
// const api_key = process.env.SUPABASE_KEY as string
// console.log(api_key)

export const supabase = createClient<Database>('https://usvwnazroaizfkfeqhxv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzdnduYXpyb2FpemZrZmVxaHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1OTA1NTEsImV4cCI6MjAwMjE2NjU1MX0.crgnb5f_wnVIu-V9oLS4GTUl-BX0P1Drx0o7G0JEw_c')
