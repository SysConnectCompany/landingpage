import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { sendContact } from "@/lib/send-contact";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  try {
    await sendContact(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json(
      { error: "Falha ao enviar. Tente novamente ou use o WhatsApp." },
      { status: 500 },
    );
  }
}
