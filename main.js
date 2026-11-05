// ====== Configuração ======
const WHATSAPP = "5549999271760";

// Para adicionar um projeto: copie um bloco, troque os textos,
// coloque um print em assets/ (image) e os links (demo / repo).
const PROJECTS = [
  {
    name: "Navalha Barbearia",
    image: "assets/navalha.jpg",
    bg: "linear-gradient(135deg,#1f1a14,#8a5a2b)",
    tag: { pt: "Site + agendamento online", en: "Website + online booking" },
    desc: {
      pt: "Site para barbearia com agendamento online em 4 passos: o cliente escolhe serviço, barbeiro e horário livre, e a confirmação vai pronta para o WhatsApp da loja.",
      en: "Barbershop website with 4-step online booking: customers pick a service, a barber and a free time slot, and the confirmation goes straight to the shop's WhatsApp.",
    },
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    demo: null, // cole aqui o link da Vercel depois do deploy
    repo: "https://github.com/LucasZanotto/navalha-barbearia",
  },
  {
    name: "Sabor da Casa",
    image: "assets/sabor.jpg",
    bg: "linear-gradient(135deg,#3b0d0d,#e2552d)",
    tag: { pt: "Cardápio digital com pedidos", en: "Digital menu with ordering" },
    desc: {
      pt: "Cardápio digital para hamburgueria e pizzaria: busca, tamanhos e adicionais, sacola com entrega grátis por valor e pedido completo enviado para o WhatsApp da loja.",
      en: "Digital menu for a burger & pizza place: search, sizes and add-ons, a cart with free-delivery threshold and the full order sent to the store's WhatsApp.",
    },
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    demo: null, // cole aqui o link da Vercel depois do deploy
    repo: "https://github.com/LucasZanotto/sabor-da-casa",
  },
  {
    name: "AgendaFácil",
    image: "assets/agendafacil.jpg",
    bg: "linear-gradient(135deg,#1b1640,#7c5cff 60%,#22d3ee)",
    tag: { pt: "SaaS full stack · multi-tenant", en: "Full stack SaaS · multi-tenant" },
    desc: {
      pt: "SaaS de agendamentos para pequenos negócios: login, contas separadas por negócio, agenda com status, clientes com histórico e dashboard de faturamento.",
      en: "Booking SaaS for small businesses: authentication, per-business accounts, calendar with status flow, customer history and a revenue dashboard.",
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Tailwind"],
    demo: null, // cole aqui o link da Vercel depois do deploy
    repo: "https://github.com/LucasZanotto/agendafacil",
  },
];

// ====== Traduções (o português fica no próprio HTML) ======
const EN = {
  "nav.services": "Services", "nav.projects": "Projects", "nav.process": "How it works", "nav.faq": "FAQ", "nav.cta": "Free quote",
  "hero.eyebrow": "Available for new projects",
  "hero.title": 'Websites and apps that <span class="grad">bring customers</span> to your business.',
  "hero.lead": "I'm Lucas Zanotto, a full stack developer. I build custom websites, landing pages and web apps — fast, great on mobile and made to sell.",
  "hero.cta1": "Get a quote on WhatsApp", "hero.cta2": "See projects",
  "hero.toastT": "New order received", "hero.toastD": "from the website · now",
  "proof.1a": "Fast replies", "proof.1b": "same day",
  "proof.2a": "100% custom", "proof.2b": "no ready-made templates",
  "proof.3a": "Support included", "proof.3b": "30 days after delivery",
  "stack.label": "Tech I use",
  "services.kicker": "Services", "services.title": "What I can do for your business",
  "services.sub": "From a website that shows up on Google to a system that runs your daily operations — you describe the problem, I deliver a working solution.",
  "s1.t": "Websites & landing pages", "s1.d": "A professional, fast, Google-friendly page with a direct button to your WhatsApp.",
  "s1.l1": "Responsive design", "s1.l2": "Basic SEO included", "s1.l3": "Domain & hosting",
  "s2.t": "Web apps & dashboards", "s2.d": "Booking, orders, inventory or customer management — a system built around your routine.",
  "s2.l1": "Login & permissions", "s2.l2": "Reports & charts", "s2.l3": "Works on mobile",
  "s3.t": "APIs & integrations", "s3.d": "I connect your system to payments, WhatsApp, spreadsheets and other tools to automate work.",
  "s3.l1": "Node.js & REST", "s3.l2": "Payments", "s3.l3": "Automations",
  "s4.t": "Maintenance & upgrades", "s4.d": "Is your site slow, broken or outdated? I fix it, modernize it and keep it running.",
  "s4.l1": "Bug fixes", "s4.l2": "Better speed", "s4.l3": "New features",
  "projects.kicker": "Projects", "projects.title": "Recent work",
  "projects.sub": "Complete projects, from design to code, with a live demo you can try.",
  "process.kicker": "How it works", "process.title": "From first message to launch",
  "p1.t": "Talk", "p1.d": "Tell me about your business and what you need. No strings attached.",
  "p2.t": "Proposal", "p2.d": "I send a fixed scope, deadline and price. No surprises at the end.",
  "p3.t": "Build", "p3.d": "You follow the progress and request changes along the way.",
  "p4.t": "Launch & support", "p4.d": "I put it live, show you how to use it and give 30 days of support.",
  "faq.kicker": "FAQ", "faq.title": "Frequently asked questions",
  "f1.q": "How much does a website cost?", "f1.a": "It depends on size and features. A simple landing page costs much less than a full system. Message me and I'll send a fixed quote, free.",
  "f2.q": "How long does it take?", "f2.a": "A landing page is ready in about 1 week. Larger systems take 3 to 6 weeks, depending on scope.",
  "f3.q": "Do I need a domain and hosting already?", "f3.a": "No. I'll help you register a domain and take care of publishing the site.",
  "f4.q": "Can I edit the content later?", "f4.a": "Yes. I can add an admin panel for you to edit text and photos, or make the changes for you.",
  "f5.q": "Do you work with clients abroad?", "f5.a": "Yes. Everything is done online, with clients in Brazil and abroad.",
  "contact.kicker": "Contact", "contact.title": "Let's get your project started?",
  "contact.sub": "Tell me briefly what you need. The message opens straight in my WhatsApp.",
  "form.name": "Your name", "form.type": "Project type", "form.msg": "Tell me a bit about the project",
  "form.o1": "Website / landing page", "form.o2": "Web app / dashboard", "form.o3": "Integration / API", "form.o4": "Maintenance", "form.o5": "Other",
  "form.send": "Send via WhatsApp",
  "footer.role": "Full Stack Developer", "footer.top": "Back to top ↑",
};

const UI = {
  pt: { demo: "Ver demo", code: "Código", soon: "Demo em breve", wa: "Olá, Lucas! Vi seu portfólio e quero um orçamento." },
  en: { demo: "Live demo", code: "Code", soon: "Demo coming soon", wa: "Hi Lucas! I saw your portfolio and I'd like a quote." },
};

// ====== Idioma ======
const ptCache = new Map();
document.querySelectorAll("[data-i18n]").forEach((el) => ptCache.set(el, el.innerHTML));

let lang = "pt";
try { lang = localStorage.getItem("lang") || (navigator.language.startsWith("pt") ? "pt" : "en"); } catch { /* sem storage */ }

function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === "en" && EN[key] ? EN[key] : ptCache.get(el);
  });
  document.getElementById("langToggle").textContent = lang === "pt" ? "EN" : "PT";
  document.title = lang === "pt" ? "Lucas Zanotto — Desenvolvedor Full Stack" : "Lucas Zanotto — Full Stack Developer";
  renderProjects();
  try { localStorage.setItem("lang", lang); } catch { /* sem storage */ }
}

document.getElementById("langToggle").addEventListener("click", () => applyLang(lang === "pt" ? "en" : "pt"));

// ====== Projetos ======
function renderProjects() {
  const t = UI[lang];
  document.getElementById("projectList").innerHTML = PROJECTS.map((p) => `
    <article class="card project reveal in">
      <div class="project-media" style="--p-bg:${p.bg}">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : `<div class="ph">${p.name}<small>${p.tag[lang]}</small></div>`}
      </div>
      <div class="project-body">
        <span class="project-tag">${p.tag[lang]}</span>
        <h3>${p.name}</h3>
        <p>${p.desc[lang]}</p>
        <div class="chips project-feats">${p.stack.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
        <div class="project-links">
          ${p.demo ? `<a class="btn btn-sm btn-primary" href="${p.demo}" target="_blank" rel="noopener">${t.demo} ↗</a>` : `<span class="soon">${t.soon}</span>`}
          ${p.repo ? `<a class="btn btn-sm btn-ghost" href="${p.repo}" target="_blank" rel="noopener">${t.code}</a>` : ""}
        </div>
      </div>
    </article>`).join("");
}

// ====== WhatsApp ======
const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

document.querySelectorAll(".js-wa").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(waLink(UI[lang].wa), "_blank", "noopener");
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = lang === "pt"
    ? `Olá, Lucas! Meu nome é ${f.get("nome")}.\nTipo de projeto: ${f.get("tipo")}\n\n${f.get("msg")}`
    : `Hi Lucas! My name is ${f.get("nome")}.\nProject type: ${f.get("tipo")}\n\n${f.get("msg")}`;
  window.open(waLink(msg), "_blank", "noopener");
});

// ====== Nav e animações ======
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

document.querySelectorAll(".service, .steps li, .faq details, .section-head").forEach((el) => el.classList.add("reveal"));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}

document.getElementById("year").textContent = new Date().getFullYear();
applyLang(lang);
