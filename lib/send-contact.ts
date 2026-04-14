import { Resend } from "resend";
import type { ContactInput } from "./validators";

export async function sendContact(data: ContactInput): Promise<void> {
  const to = process.env.CONTACT_EMAIL_TO;
  const apiKey = process.env.RESEND_API_KEY;
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  const body = `
Nome: ${data.name}
Email: ${data.email}
Empresa: ${data.company || "-"}
Telefone: ${data.phone || "-"}
Tipo: ${data.projectType}

Mensagem:
${data.message}
`.trim();

  if (apiKey && to) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Sys Connect <contato@sysconnect.com.br>",
      to,
      replyTo: data.email,
      subject: `Novo contato: ${data.projectType} — ${data.name}`,
      text: body,
    });
    return;
  }

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Webhook failed: ${res.status}`);
    return;
  }

  throw new Error("Nenhum destino de envio configurado (RESEND_API_KEY/CONTACT_EMAIL_TO ou CONTACT_WEBHOOK_URL).");
}
