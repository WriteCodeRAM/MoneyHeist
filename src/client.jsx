import { createClient } from '@supabase/supabase-js'

const URL = 'https://ctiiaweuiprxxdvwrltx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0aWlhd2V1aXByeHhkdndybHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTQxOTksImV4cCI6MTk5NjIzMDE5OX0.AwavK4rpVRCfWznf4N3V5hI1vHok_0Xm6GhOu51WSwI';


export const supabase = createClient(URL, API_KEY);



