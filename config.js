// ============================================================
//  config.js  -  ค่าจากโปรเจกต์ Supabase ของ OSO-TDAC Operational Report
//  หา: Supabase Dashboard -> Project Settings -> Data API / API Keys
//   - SUPABASE_URL      = Project URL
//   - SUPABASE_ANON_KEY = anon / public key (เปิดเผยใน client ได้ปลอดภัย เพราะมี RLS คุม)
//  *** สร้าง Supabase project ใหม่สำหรับระบบ TDAC แล้ววางค่าด้านล่าง ***
// ============================================================
window.APP_CONFIG = {
  SUPABASE_URL: "CHANGE_ME_https://xxxxxxxx.supabase.co",
  SUPABASE_ANON_KEY: "CHANGE_ME_paste_anon_public_key_here"
};
