
// Simple language toggle (ar/en) and small form handler
const langBtn = document.getElementById('langBtn');
let lang = 'ar';
langBtn && langBtn.addEventListener('click', ()=>{
  lang = (lang === 'ar') ? 'en' : 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  langBtn.textContent = (lang === 'ar') ? 'EN' : 'ع';
  // Could swap texts here if you want full translations.
});

// simple contact form demo (no backend)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('تم إرسال رسالتك (نسخة تجريبية، لا يوجد خادم إرسال في هذا الإصدار).');
    form.reset();
  });
}
