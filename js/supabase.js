// Loads after the supabase-js CDN script. Publishable key only; never put a secret/service_role key here.
const SUPABASE_URL='https://jqlwdtpyzbxnfzkiauyb.supabase.co';
const SUPABASE_KEY='sb_publishable_yytXGjK5wDPZ-l3Ot3GkzA_GYDhQ0yx';
const sb=supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ngn=n=>'₦'+Number(n||0).toLocaleString('en-NG');
const $=s=>document.querySelector(s);
