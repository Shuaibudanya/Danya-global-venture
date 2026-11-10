let B={};
const tt=(m,e)=>{const t=$('#toast');t.textContent=m;t.className=e?'e':'';t.hidden=false;setTimeout(()=>t.hidden=true,3500)};
async function brand(){const{data}=await sb.from('business_settings').select('*').eq('id',1).single();B=data||{};const r=document.documentElement.style;r.setProperty('--p',B.primary_color||'#7c3aed');r.setProperty('--s',B.secondary_color||'#1e1b4b');
 const n=B.business_name||'Admin';document.title=($('#ln')?'Login':'Admin')+' | '+n;for(const id of['sn','tn'])if($('#'+id))$('#'+id).textContent=n;if($('#ln'))$('#ln').textContent=n+' admin';
 for(const id of['ll','sl'])if(B.logo_url&&$('#'+id)){$('#'+id).src=B.logo_url;$('#'+id).hidden=false}}
$('#sh').onclick=()=>{const p=$('#pw');p.type=p.type=='password'?'text':'password';$('#sh').textContent=p.type=='password'?'Show':'Hide'};
$('#fp').onclick=async e=>{e.preventDefault();const em=$('#em').value;if(!em)return $('#le').textContent='Enter your email first.';const{error}=await sb.auth.resetPasswordForEmail(em,{redirectTo:location.href.split('#')[0]});error?$('#le').textContent=error.message:tt('Reset link sent. Check your email.')};
$('#lf').onsubmit=async e=>{e.preventDefault();$('#lb').disabled=true;$('#le').textContent='';const{error}=await sb.auth.signInWithPassword({email:$('#em').value,password:$('#pw').value});if(error){$('#lb').disabled=false;return $('#le').textContent=error.message}await check()};
async function check(){const{data:{session}}=await sb.auth.getSession();if(!session)return;const{data:ad}=await sb.from('admin_profiles').select('user_id').eq('user_id',session.user.id).maybeSingle();$('#lb').disabled=false;if(!ad){await sb.auth.signOut();$('#le').textContent='This account is not an authorized administrator.';return}location.href='admin.html'}
sb.auth.onAuthStateChange(async(ev)=>{if(ev=='PASSWORD_RECOVERY'){const p=prompt('Enter your new password (min 8 characters)');if(p&&p.length>=8){const{error}=await sb.auth.updateUser({password:p});tt(error?error.message:'Password updated',!!error)}}});
brand();if(!location.hash.includes('type=recovery'))check();
