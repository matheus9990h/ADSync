// Fecha o menu responsivo do Bootstrap depois que o usuário escolhe uma seção.
document.querySelectorAll('#menu .nav-link, #menu .btn').forEach(function (link) {
  link.addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// O formulário é apenas uma demonstração: não existe servidor de envio nesta versão.
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  document.getElementById('formFeedback').textContent = 'Formulário demonstrativo: os dados não foram enviados nem armazenados.';
});
