import { z } from "zod";

export const projectTypes = [
  "Software sob medida",
  "Aplicativo mobile",
  "Integração / API",
  "Squad as a Service",
  "Outro",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("Email inválido"),
  company: z.string().optional().default(""),
  phone: z.string().optional().default(""),
  projectType: z.enum(projectTypes, { required_error: "Selecione um tipo" }),
  message: z.string().min(10, "Conte um pouco mais sobre seu projeto (mín. 10 caracteres)"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar a política de privacidade" }),
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;
