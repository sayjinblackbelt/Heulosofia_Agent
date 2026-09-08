const form = document.querySelector('#chat-form');
const input = document.querySelector('#question');
const messages = document.querySelector('#messages');
const button = form.querySelector('button');

function addMessage(role, text) {
  const article = document.createElement('article');
  article.className = `message ${role}`;
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = text;
  article.appendChild(bubble);
  messages.appendChild(article);
  messages.scrollTop = messages.scrollHeight;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = input.value.trim();
  if (!question) return;

  addMessage('user', question);
  input.value = '';
  button.disabled = true;

  addMessage(
    'assistant',
    'A interface visual está funcionando. O próximo passo é conectar este chat a um backend seguro com o modelo de IA e a base Heulosófica. Não coloque uma chave de API diretamente neste arquivo ou no GitHub Pages.'
  );

  button.disabled = false;
  input.focus();
});
