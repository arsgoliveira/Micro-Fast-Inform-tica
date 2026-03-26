/**
 * Micro Fast Informática — main.js
 * Autor: Antonio Rodrigo · arsgoliveira
 * Versão: 2.0.0
 *
 * MÓDULOS:
 * - NavScroll      : esconde/exibe nav ao rolar
 * - NavDrawer      : abre/fecha menu mobile
 * - ActiveNavLink  : marca o link ativo conforme a seção visível
 * - ScrollAnimate  : revela elementos ao entrar na viewport
 * - ContactForm    : validação e envio (com proteção anti-spam honeypot)
 */

'use strict';

/* ==========================================================================
   UTILITÁRIOS
   ========================================================================== */

/**
 * Seleciona um único elemento. Atalho para querySelector.
 * @param {string} selector
 * @param {Element} [scope=document]
 * @returns {Element|null}
 */
const qs  = (selector, scope = document) => scope.querySelector(selector);

/**
 * Seleciona múltiplos elementos. Atalho para querySelectorAll.
 * @param {string} selector
 * @param {Element} [scope=document]
 * @returns {NodeList}
 */
const qsa = (selector, scope = document) => scope.querySelectorAll(selector);


/* ==========================================================================
   MÓDULO: NavScroll
   Adiciona classe .is-scrolled na nav quando a página é rolada > 20px.
   Isso permite aplicar estilos diferenciados via CSS (ex: sombra extra).
   ========================================================================== */

function initNavScroll() {
  const nav = qs('.nav');
  if (!nav) return;

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Verificar estado inicial
}


/* ==========================================================================
   MÓDULO: NavDrawer
   Controla o menu hamburguer no mobile.
   ========================================================================== */

function initNavDrawer() {
  const toggle = qs('.nav__toggle');
  const drawer = qs('.nav__drawer');
  if (!toggle || !drawer) return;

  function close() {
    toggle.classList.remove('is-open');
    drawer.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function open() {
    toggle.classList.add('is-open');
    drawer.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Bloqueia scroll do body
  }

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    isOpen ? close() : open();
  });

  // Fechar ao clicar em um link do drawer
  qsa('.nav__drawer-link', drawer).forEach(link => {
    link.addEventListener('click', close);
  });

  // Fechar ao pressionar ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
}


/* ==========================================================================
   MÓDULO: ActiveNavLink
   Observa qual seção está visível e marca o link correspondente como ativo.
   ========================================================================== */

function initActiveNavLink() {
  const sections = qsa('section[id]');
  const navLinks = qsa('.nav__link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, {
    rootMargin: '-30% 0px -60% 0px'
  });

  sections.forEach(section => observer.observe(section));
}


/* ==========================================================================
   MÓDULO: ScrollAnimate
   Usa IntersectionObserver para revelar elementos com classe .animate-on-scroll
   quando eles entram na viewport.
   ========================================================================== */

function initScrollAnimate() {
  const elements = qsa('.animate-on-scroll');
  if (!elements.length) return;

  // Fallback: se o browser não suportar IntersectionObserver, mostrar tudo
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animar só uma vez
      }
    });
  }, {
    threshold: 0.12
  });

  elements.forEach(el => observer.observe(el));
}


/* ==========================================================================
   MÓDULO: ContactForm
   Validação básica e submissão do formulário de contato.
   
   NOTA: Para funcionar de verdade, configure um dos seguintes serviços de
   formulário no campo action do <form>:
     - Formspree.io   → action="https://formspree.io/f/SEU_ID"
     - Web3Forms.com  → action="https://api.web3forms.com/submit"
     - EmailJS        → via SDK no script
   ========================================================================== */

function initContactForm() {
  const form     = qs('#contact-form');
  const feedback = qs('#form-feedback');
  if (!form) return;

  /**
   * Valida os campos obrigatórios.
   * @returns {{ valid: boolean, message: string }}
   */
  function validate() {
    const name    = qs('[name="name"]', form).value.trim();
    const email   = qs('[name="email"]', form).value.trim();
    const message = qs('[name="message"]', form).value.trim();
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name)              return { valid: false, message: 'Por favor, informe seu nome.' };
    if (!emailRx.test(email)) return { valid: false, message: 'Por favor, informe um e-mail válido.' };
    if (message.length < 10) return { valid: false, message: 'A mensagem deve ter pelo menos 10 caracteres.' };

    return { valid: true, message: '' };
  }

  /**
   * Exibe o feedback de resultado para o usuário.
   * @param {string} msg
   * @param {'success'|'error'} type
   */
  function showFeedback(msg, type) {
    if (!feedback) return;
    feedback.textContent = msg;
    feedback.className = `form__feedback is-${type}`;
    setTimeout(() => { feedback.className = 'form__feedback'; }, 6000);
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Honeypot anti-spam: se o campo oculto estiver preenchido, é bot
    const honeypot = qs('[name="_honeypot"]', form);
    if (honeypot && honeypot.value) return;

    const { valid, message } = validate();
    if (!valid) {
      showFeedback(message, 'error');
      return;
    }

    const submitBtn = qs('[type="submit"]', form);
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showFeedback('Mensagem enviada! Retornarei em até 2 horas.', 'success');
        form.reset();
      } else {
        throw new Error('Resposta não-ok do servidor');
      }
    } catch {
      showFeedback('Erro ao enviar. Tente pelo WhatsApp.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}


/* ==========================================================================
   MÓDULO: SmoothScroll
   Rolagem suave para links âncora internos (#section).
   Desconta a altura da nav fixa no offset.
   ========================================================================== */

function initSmoothScroll() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute('href');
    if (targetId === '#') return;

    const target = qs(targetId);
    if (!target) return;

    e.preventDefault();

    const nav    = qs('.nav');
    const offset = nav ? nav.offsetHeight : 0;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  });
}


/* ==========================================================================
   INIT — Inicializa todos os módulos após o DOM estar pronto
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initNavDrawer();
  initActiveNavLink();
  initScrollAnimate();
  initContactForm();
  initSmoothScroll();
});
