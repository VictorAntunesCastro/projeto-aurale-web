function criarFooter(containerId = "footer") {
  const container = document.getElementById(containerId);

  if (!container) {
    console.warn(`criarFooter: elemento #${containerId} não encontrado.`);
    return;
  }

  if (!document.getElementById("aurale-footer-style")) {
    const style = document.createElement("style");

    style.id = "aurale-footer-style";

    style.textContent = `
            .aurale-footer {
                background-color: #01326F;
                color: white;
                padding: 50px 0 20px;
            }

            .aurale-footer-logo {
                
                font-family: 'Playfair Display', serif;
                font-size: 1.8rem;
                font-weight: 900;
                letter-spacing: 3px;
                margin-bottom: 15px;
            }

            .aurale-footer-descricao {
                color: rgba(255, 255, 255, 0.75);
                font-size: 0.85rem;
                line-height: 1.6;
                max-width: 300px;
            }

            .aurale-footer h3 {
                color: #EAE164;
                font-size: 0.7rem;
                font-weight: 700;
                letter-spacing: 2px;
                margin-bottom: 15px;
            }

            .aurale-footer-links {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .aurale-footer-links li {
                margin-bottom: 8px;
            }

            .aurale-footer-links a {
                color: rgba(255, 255, 255, 0.75);
                text-decoration: none;
                font-size: 0.8rem;
            }

            .aurale-footer-links a:hover {
                color: #EAB2BB;
            }

            .aurale-footer p {
                font-size: 0.8rem;
            }

            .aurale-footer-final {
                border-top: 1px solid rgba(255, 255, 255, 0.15);
                margin-top: 35px;
                padding-top: 20px;
                text-align: center;
            }

            .aurale-footer-final p {
                color: rgba(255, 255, 255, 0.55);
                margin: 0;
                font-size: 0.7rem;
            }
            .aurale-footer-instagram {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
}

.aurale-footer-instagram:hover {
    color: #EAB2BB;
}
        `;

    document.head.appendChild(style);
  }

  container.innerHTML = `
        <footer class="aurale-footer">
            <div class="container">

                <div class="row g-4">

                    <div class="col-12 col-md-5">
                        <h2 class="aurale-footer-logo">AURALE</h2>

                        <p class="aurale-footer-descricao">
                            Transformando celebrações em momentos inesquecíveis.
                        </p>
                    </div>

                    <div class="col-6 col-md-3">
                        <h3>PÁGINAS</h3>

                        <ul class="aurale-footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="salao.html">Salão de Festas</a></li>
                            <li><a href="catalogo.html">Catálogo</a></li>
                            <li><a href="orcamento.html">Orçamento</a></li>
                            <li><a href="contato.html">Contato</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-4">
                        <h3>CONTATO</h3>
                        <p><a href="https://www.instagram.com/auralefestas/" 
       target="_blank" 
       rel="noopener noreferrer"
       class="aurale-footer-instagram">
        Instagram
    </a></p>
                        
              
                        <p>São Gonçalo - RJ</p>
                    </div>

                </div>

                <div class="aurale-footer-final">
                    <p>© 2026 Aurale. Todos os direitos reservados.</p>
                </div>

            </div>
        </footer>
    `;
}
