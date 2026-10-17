(function(){

  // Route category supports page-specific photo treatment without extra libraries.
  const pathName=(window.location.pathname||'').toLowerCase();
  if(pathName.includes('/guides/')) document.body.dataset.routeType='guide';
  else if(pathName.includes('/services/')) document.body.dataset.routeType='service';
  else if(pathName.includes('/service-areas/')) document.body.dataset.routeType='areas';
  else if(pathName.includes('/privacy-policy/')||pathName.includes('/terms-of-use/')||pathName.includes('/disclaimer/')) document.body.dataset.routeType='policy';
  else if(!document.body.dataset.routeType) document.body.dataset.routeType='general';

  // Gentle reveal-on-scroll animations. Content remains visible if the observer is unavailable.
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const revealTargets=document.querySelectorAll('.section-head,.service-grid .card,.steps-grid > *, .guide-grid .card,.faq-item,.cta-band,.zip-panel,.content-row,.contact-card,.sidebar-card,.article-cover');
    revealTargets.forEach((el,i)=>{el.setAttribute('data-reveal',''); if(el.matches('.service-grid .card,.guide-grid .card,.steps-grid > *')) el.style.transitionDelay=(Math.min(i%6,5)*65)+'ms';});
    document.body.classList.add('motion-ready');
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}
      });
    },{threshold:.12,rootMargin:'0px 0px -35px 0px'});
    revealTargets.forEach(el=>revealObserver.observe(el));
  }
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.primary-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const open=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!open));
      toggle.setAttribute('aria-label',open?'Open menu':'Close menu');
      nav.classList.toggle('nav-open',!open);
      toggle.innerHTML=!open ? '<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>' : '<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
    });
    nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('nav-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');}});
  }
  const year=document.getElementById('current-year'); if(year) year.textContent=String(new Date().getFullYear());
  const forms=document.querySelectorAll('[data-zip-form]');
  forms.forEach(form=>{
    const input=form.querySelector('input[name="zip"]');
    const output=form.querySelector('[data-zip-result]');
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const zip=(input.value||'').trim();
      if(!/^\d{5}$/.test(zip)){
        output.className='zip-result is-error'; output.textContent='Please enter a valid 5-digit US ZIP code.'; input.focus(); return;
      }
      const list=Array.isArray(window.HWC_APPROVED_ZIPS)?window.HWC_APPROVED_ZIPS.map(String):[];
      if(list.length===0){
        output.className='zip-result is-info';
        output.innerHTML='Our approved ZIP-code list is being configured. Please <a href="tel:+18553213117">call +1 (855) 321-3117</a> to ask whether your area is covered.';
      }else if(list.includes(zip)){
        output.className='zip-result is-success';
        output.innerHTML='This ZIP appears on our current coverage list. <a href="tel:+18553213117">Call to confirm service availability</a>; a listing is not a guarantee of provider availability.';
      }else{
        output.className='zip-result is-info';
        output.innerHTML='We could not find this ZIP in the current list. Coverage may change; <a href="tel:+18553213117">call to confirm your area</a>.';
      }
    });
  });
})();