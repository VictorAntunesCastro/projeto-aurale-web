function criarHeader(containerId = 'header') {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`criarHeader: elemento #${containerId} não encontrado.`);
    return;
  }

  const links = [
    { href: 'index.html', label: 'Home' },
    {
      label: 'Serviços',
      children: [
        { href: 'salao.html', label: 'Salão de Festas' },
        { href: 'catalogo.html', label: 'Catálogo de Itens' },
      ],
    },
    { href: 'orcamento.html', label: 'Orçamento' },
    { href: 'contato.html', label: 'Contato' },
  ];

  const paginaAtual = location.pathname.split('/').pop() || 'index.html';

  if (!document.getElementById('aurale-header-style')) {
    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap';
    document.head.appendChild(font);

    const style = document.createElement('style');
    style.id = 'aurale-header-style';
    style.textContent = `
      .aurale-nav { background:#FFFCF6; border-bottom:1px solid rgba(234,178,187,.4); box-shadow:0 1px 2px rgba(0,0,0,.05); }
      .aurale-brand { display:flex; flex-direction:column; align-items:center; gap:4px; text-decoration:none; }
      .aurale-brand svg { width:40px; height:40px; }
      .aurale-brand span { font-family:'Playfair Display',serif; font-weight:900; letter-spacing:.15em; color:#01326F; font-size:1.1rem; text-transform:uppercase; line-height:1; }
      .aurale-nav .nav-link { color:#01326F; font-weight:600; font-size:.875rem; text-transform:uppercase; letter-spacing:.05em; transition:color .2s; }
      .aurale-nav .nav-link:hover { color:#1B548D; }
      .aurale-nav .nav-link.active { color:#EA9DA9; }
      .aurale-nav .dropdown-menu { background:#fff; border:1px solid rgba(234,178,187,.4); border-radius:12px; box-shadow:0 8px 20px rgba(0,0,0,.1); padding:8px 0; min-width:180px; }
      .aurale-nav .dropdown-item { color:#01326F; font-size:.875rem; font-weight:500; padding:8px 16px; }
      .aurale-nav .dropdown-item:hover, .aurale-nav .dropdown-item.active { background:rgba(234,178,187,.2); color:#01326F; }
      .aurale-cta { background:#01326F; color:#fff !important; font-size:.875rem; font-weight:700; padding:8px 20px; border-radius:999px; text-transform:uppercase; letter-spacing:.05em; text-decoration:none; transition:background .2s; display:inline-block; text-align:center; }
      .aurale-cta:hover { background:#1B548D; }
      .aurale-toggler { border:0; color:#01326F; padding:4px; }
      .aurale-toggler:focus { box-shadow:none; }
      @media (min-width:768px) {
        .aurale-dd:hover > .dropdown-menu { display:block; margin-top:0; }
      }
    `;
    document.head.appendChild(style);
  }

  const logo = `
    <a href="index.html" class="aurale-brand">
      <svg viewBox="0 0 80 90">
        <line x1="40" y1="0" x2="40" y2="18" stroke="#EAB2BB" stroke-width="1.5"/>
        <rect x="33" y="18" width="14" height="8" rx="2" fill="#EAE164"/>
        <circle cx="40" cy="50" r="22" fill="#EAB2BB"/>
        <ellipse cx="40" cy="50" rx="22" ry="10" fill="none" stroke="#FFFCF6" stroke-width="1" opacity="0.6"/>
        <ellipse cx="40" cy="50" rx="15" ry="20" fill="none" stroke="#FFFCF6" stroke-width="1" opacity="0.6"/>
        <line x1="18" y1="50" x2="62" y2="50" stroke="#FFFCF6" stroke-width="1" opacity="0.6"/>
        <line x1="40" y1="28" x2="40" y2="72" stroke="#FFFCF6" stroke-width="1" opacity="0.6"/>
        <path d="M15 35 L16.5 40 L22 41.5 L16.5 43 L15 48 L13.5 43 L8 41.5 L13.5 40 Z" fill="#01326F"/>
        <path d="M62 32 L63 36 L67 37 L63 38 L62 42 L61 38 L57 37 L61 36 Z" fill="#01326F"/>
        <path d="M55 58 L56 62 L60 63 L56 64 L55 68 L54 64 L50 63 L54 62 Z" fill="#01326F"/>
        <path d="M22 60 L23 63 L26 64 L23 65 L22 68 L21 65 L18 64 L21 63 Z" fill="#01326F"/>
      </svg>
      <span>Aurale</span>
    </a>`;

  const itens = links.map((link) => {
    if (link.children) {
      const filhoAtivo = link.children.some((c) => c.href === paginaAtual);
      const filhos = link.children
        .map((c) => `<li><a class="dropdown-item ${c.href === paginaAtual ? 'active' : ''}" href="${c.href}">${c.label}</a></li>`)
        .join('');
      return `
        <li class="nav-item dropdown aurale-dd">
          <a class="nav-link dropdown-toggle ${filhoAtivo ? 'active' : ''}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${link.label}</a>
          <ul class="dropdown-menu">${filhos}</ul>
        </li>`;
    }
    return `
      <li class="nav-item">
        <a class="nav-link ${link.href === paginaAtual ? 'active' : ''}" href="${link.href}">${link.label}</a>
      </li>`;
  }).join('');

  container.innerHTML = `
    <nav class="navbar navbar-expand-md sticky-top aurale-nav" style="z-index:1030">
      <div class="container" style="max-width:1152px">
        ${logo}
        <button class="navbar-toggler aurale-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#auraleMenu" aria-controls="auraleMenu" aria-expanded="false" aria-label="Abrir menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="auraleMenu">
          <ul class="navbar-nav align-items-md-center gap-md-4 mt-3 mt-md-0">
            ${itens}
            <li class="nav-item mt-2 mt-md-0">
              <a href="orcamento.html" class="aurale-cta">Solicitar Orçamento</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
}