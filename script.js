// PERSONALIZE AQUI: troque pelo WhatsApp da responsável, com código do país e DDD.
const WHATSAPP_NUMBER = "5511999999999"; // Exemplo fictício: substitua antes de publicar.

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".choose-service").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("servico").value = button.dataset.service;
    document.getElementById("orcamento").scrollIntoView({behavior:"smooth"});
  });
});
document.querySelectorAll(".choose-plan").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("detalhes").value =
      `Plano de interesse: ${button.dataset.plan}. Gostaria de confirmar o que está incluído.`;
    document.getElementById("orcamento").scrollIntoView({behavior:"smooth"});
    document.getElementById("nome").focus({preventScroll:true});
  });
});

document.getElementById("quoteForm").addEventListener("submit", event => {
  event.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const servico = document.getElementById("servico").value;
  const prazo = document.getElementById("prazo").value;
  const faixa = document.getElementById("orcamento").value;
  const detalhes = document.getElementById("detalhes").value.trim() || "Ainda vou enviar os detalhes.";
  const message = `Olá! Meu nome é ${nome} e gostaria de pedir um orçamento.\\n\\n` +
    `*Serviço:* ${servico}\\n*Prazo desejado:* ${prazo}\\n*Faixa de valor:* ${faixa}\\n` +
    `*Detalhes:* ${detalhes}\\n\\nPode me explicar os valores e o que está incluído?`;
  if (!/^55\d{10,13}$/.test(WHATSAPP_NUMBER) || WHATSAPP_NUMBER === "5511999999999") {
    alert("Antes de publicar, configure o número real de WhatsApp no arquivo script.js (variável WHATSAPP_NUMBER).\\n\\nSua mensagem está pronta; por enquanto, copie os dados do formulário e configure o contato.");
    const copyText = message.replace(/\\n/g, "\n");
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(copyText).then(() => alert("Mensagem copiada! Configure o WhatsApp e tente novamente."));
    }
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.replace(/\\n/g, "\n"))}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
