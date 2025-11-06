// تاريخ السنة في الفوتر
document.getElementById('year').textContent = new Date().getFullYear();

// سلاسة التمرير للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// نموذج تواصل (محاكاة ارسال)
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  // تحقق بسيط
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !phone || !message){
    alert('يرجى تعبئة جميع الحقول');
    return;
  }

  // هنا يمكنك إرسال البيانات عبر AJAX إلى سيرفر أو خدمة بريدية
  alert('تم استلام رسالتك، سنتواصل معك قريبًا. شكرًا لاستخدام غزلان هجر!');
  form.reset();
});
