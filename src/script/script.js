// As animações (GSAP) ficam no bloco inline do index.html.
// O scroll suave é feito pelo CSS (scroll-behavior: smooth em style.css).

// ===== Menu mobile =====
const menuBtn = document.getElementById('menuBtn'), mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', open);
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobileMenu.classList.add('hidden'); menuBtn.setAttribute('aria-expanded', 'false'); }));

// ===== Idioma: o HTML está em português (padrão); o inglês entra pelo botão =====
const EN = {
  "Projetos":"Projects","Competências":"Skills","Trajetória":"Background","Sobre":"About","Contato":"Contact",
  "Vamos conversar":"Let's talk",
  "Aberto a oportunidades – 2026":"Open to opportunities – 2026",
  "Desenvolvedor front-end júnior, focado em":"Junior front-end developer, focused on",
  "interfaces rápidas":"fast interfaces",
  "que funcionam em qualquer tela.":"that work on any screen.",
  "Tenho 3 anos de formação técnica em informática e construo sites e interfaces com HTML, CSS, JavaScript e React. Estudo TypeScript e busco uma oportunidade em uma equipe de desenvolvimento para contribuir e continuar evoluindo.":"I have 3 years of technical training in IT and I build websites and interfaces with HTML, CSS, JavaScript and React. I'm studying TypeScript and looking for an opportunity on a development team where I can contribute and keep growing.",
  "Ver projetos":"View projects","Entrar em contato":"Get in touch",
  "Projetos no portfólio":"Portfolio projects","3 anos":"3 yrs","Formação técnica em TI":"Technical IT training","Lorena, Brasil":"Lorena, Brazil",
  "Desenvolvedor Front-End Júnior":"Junior Front-End Developer",
  "Projetos que fiz para praticar e demonstrar minhas habilidades. Cada card mostra as tecnologias usadas, com o site publicado e o código no GitHub quando disponíveis.":"Projects I built to practice and showcase my skills. Each card lists the technologies used, with the live site and the code on GitHub when available.",
  "Dashboard de Operações Empresariais":"Enterprise Operations Dashboard",
  "Dashboard de Analytics de Engenharia":"Engineering Analytics Dashboard",
  "Aplicação de Vagas":"Job Board Application",
  "Projeto de Performance em React":"React Performance Project",
  "Ferramenta de Análise Estática de Código":"Static Code Analysis Tool",
  "Dashboard empresarial para gerenciar usuários, equipes, projetos, tarefas, relatórios, logs de auditoria e configurações do sistema.":"Enterprise dashboard for managing users, teams, projects, tasks, reports, audit logs, and system settings.",
  "Dashboard de analytics de engenharia para monitorar repositórios, pull requests, code reviews, atividade da equipe, riscos e recomendações no estilo de IA.":"Engineering analytics dashboard for monitoring repositories, pull requests, code reviews, team activity, risks, and AI-style recommendations.",
  "Job board responsivo com busca, filtros, paginação, estados de carregamento, erro e resultados vazios, integrado a uma API REST externa.":"Responsive job board with search, filters, pagination, loading, error, and empty states, integrated with an external REST API.",
  "Projeto em React e TypeScript voltado ao estudo de performance, comportamento de componentes e otimização do front-end.":"React and TypeScript project focused on performance, component behavior, and frontend optimization.",
  "Ferramenta de análise estática para JavaScript e TypeScript usando AST, métricas de código, detecção de problemas, sugestões e análise assistida por IA.":"Static analysis tool for JavaScript and TypeScript using AST parsing, code metrics, issue detection, suggestions, and AI-assisted analysis.",
  "Ver site":"Live site","Código":"Code",
  "Tecnologias que uso nos projetos e as que estou aprendendo agora.":"Technologies I use in my projects and the ones I'm learning right now.",
  "Ferramentas e práticas":"Tools and practices","Design responsivo":"Responsive design","APIs REST":"REST APIs",
  "CMS e back-end básico":"CMS and basic back-end","Estudando agora":"Currently studying",
  "Formação e experiência":"Education and experience",
  "Curso técnico em informática":"Technical course in IT",
  "3 anos de formação técnica na área de TI.":"3 years of technical training in IT.",
  "Desenvolvedor front-end freelancer":"Freelance front-end developer",
  "Criação de landing pages e sites responsivos em projetos pessoais e de estudo, do layout no Figma à publicação.":"Building landing pages and responsive websites in personal and study projects, from the Figma layout to deployment.",
  "Estudo contínuo":"Continuous learning",
  "React, TypeScript, React Native, Redux e Node.js.":"React, TypeScript, React Native, Redux and Node.js.",
  "Mente de desenvolvedor.":"Developer's mind.","Olhar de designer.":"Designer's eye.",
  "Sou o Jean, desenvolvedor front-end júnior de Lorena (SP). Gosto de transformar layouts em interfaces limpas, rápidas e fáceis de usar, e de entender o design por trás delas: uso Figma e tenho noções de UI/UX.":"I'm Jean, a junior front-end developer from Lorena, Brazil. I like turning layouts into clean, fast and easy-to-use interfaces, and understanding the design behind them: I use Figma and have a working knowledge of UI/UX.",
  "Estou no início da carreira e busco um ambiente onde possa aprender com pessoas mais experientes, receber feedback e contribuir com código de qualidade.":"I'm early in my career and I'm looking for an environment where I can learn from more experienced people, receive feedback and contribute quality code.",
  "Vamos conversar?":"Let's talk?",
  "Está recrutando ou quer saber mais sobre algum projeto? Envie uma mensagem. Respondo em até 24 horas.":"Are you hiring or want to know more about a project? Send me a message. I reply within 24 hours.",
  "Lorena, SP, Brasil":"Lorena, SP, Brazil","Enviar mensagem":"Send message",
  /* atributos (placeholder, aria-label, alt) */
  "Nome":"Name","E-mail":"Email","Empresa (opcional)":"Company (optional)","Escreva sua mensagem...":"Write your message...",
  "Empresa":"Company","Mensagem":"Message","Abrir menu":"Open menu","Principal":"Main","Tecnologias":"Technologies",
  "Logo JR Desenvolvedor Front-End":"JR Front-End Developer logo",
  "Jean Ribeiro, desenvolvedor front-end júnior":"Jean Ribeiro, junior front-end developer"
};
const META = {
  pt: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
  en: { title: "Jean Ribeiro | Junior Front-End Developer", desc: "Junior Front-End Developer based in Lorena, Brazil. Responsive interfaces with HTML, CSS, JavaScript and React. See my projects and skills and get in touch." }
};
const STATUS = {
  sending: { pt: 'Enviando...', en: 'Sending...' },
  ok: { pt: 'Obrigado! Sua mensagem foi enviada. Respondo em até 24 horas.', en: 'Thanks! Your message was sent. I will reply within 24 hours.' },
  err: { pt: 'Algo deu errado. Envie um e-mail direto para jeanrsantos10@gmail.com.', en: 'Something went wrong. Please email me directly at jeanrsantos10@gmail.com.' }
};
const ATTRS = ['alt', 'placeholder', 'aria-label'];
const textOrig = new WeakMap();
let lang = 'pt', statusKey = null, statusCls = '';
try { if (localStorage.getItem('lang') === 'en') lang = 'en'; } catch (e) {}
const tr = s => EN[s] !== undefined ? EN[s] : s;

function setStatus(key, cls) {
  statusKey = key; statusCls = cls || '';
  const el = document.getElementById('formStatus');
  el.textContent = STATUS[key][lang];
  el.className = 'text-center text-sm ' + statusCls;
}

function applyLang() {
  const en = lang === 'en';
  document.documentElement.lang = en ? 'en' : 'pt-BR';
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]').content = META[lang].desc;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n => {
    if (!n.nodeValue.trim() || n.parentElement.closest('script,style,#formStatus')) return;
    if (!textOrig.has(n)) textOrig.set(n, n.nodeValue);
    const o = textOrig.get(n), m = o.match(/^(\s*)([\s\S]*?)(\s*)$/);
    n.nodeValue = en ? m[1] + tr(m[2]) + m[3] : o;
  });
  ATTRS.forEach(a => document.querySelectorAll('[' + a + ']').forEach(el => {
    if (el.id === 'langBtn') return;
    const k = 'data-o-' + a;
    if (!el.hasAttribute(k)) el.setAttribute(k, el.getAttribute(a));
    el.setAttribute(a, en ? tr(el.getAttribute(k)) : el.getAttribute(k));
  }));

  const b = document.getElementById('langBtn'), label = en ? 'Switch language to Portuguese' : 'Mudar idioma para inglês';
  b.setAttribute('aria-label', label); b.title = label;
  document.getElementById('flagBR').classList.toggle('hidden', en);
  document.getElementById('flagUS').classList.toggle('hidden', !en);
  if (statusKey) setStatus(statusKey, statusCls);
  document.documentElement.classList.remove('i18n-wait');
}

document.getElementById('langBtn').addEventListener('click', () => {
  lang = lang === 'pt' ? 'en' : 'pt';
  try { localStorage.setItem('lang', lang); } catch (e) {}
  applyLang();
});
applyLang();

// ===== Formulário: envia sem sair da página =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async e => {
  e.preventDefault();
  setStatus('sending');
  try {
    const r = await fetch(contactForm.action, { method: 'POST', body: new FormData(contactForm), headers: { Accept: 'application/json' } });
    if (r.ok) { contactForm.reset(); setStatus('ok', 'text-green-400'); } else throw new Error();
  } catch (err) { setStatus('err', 'text-red-400'); }
});