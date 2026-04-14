"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { contactSchema, projectTypes, type ContactInput } from "@/lib/validators";
import { site } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { company: "", phone: "" },
  });

  const consent = watch("consent");

  const onSubmit = async (data: ContactInput) => {
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Erro ao enviar");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro desconhecido");
    }
  };

  return (
    <Section id="contato">
      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Contato
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">Vamos conversar sobre seu projeto</h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Preencha o formulário e nossa equipe retorna em até 1 dia útil. Ou fale direto pelo WhatsApp.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--color-accent)]" />
              <a href={`mailto:${site.email}`} className="text-[var(--color-text)]">
                {site.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[var(--color-accent)]" />
              <span>{site.phone}</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {status === "success" ? (
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-8">
              <CheckCircle2 size={32} className="text-green-600" />
              <h3 className="text-xl">Mensagem enviada!</h3>
              <p className="text-[var(--color-muted)]">
                Recebemos seu contato. Nossa equipe retorna em até 1 dia útil.
              </p>
              <Button variant="outline" onClick={() => setStatus("idle")}>
                Enviar outra mensagem
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8"
              noValidate
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">Nome*</Label>
                  <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" {...register("company")} />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" {...register("phone")} />
                </div>
              </div>

              <div>
                <Label htmlFor="projectType">Tipo de projeto*</Label>
                <Select onValueChange={(v) => setValue("projectType", v as ContactInput["projectType"], { shouldValidate: true })}>
                  <SelectTrigger id="projectType" aria-invalid={!!errors.projectType}>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.projectType && (
                  <p className="mt-1 text-xs text-red-600">{errors.projectType.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Mensagem*</Label>
                <Textarea id="message" rows={5} {...register("message")} aria-invalid={!!errors.message} />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={!!consent}
                  onCheckedChange={(v) => setValue("consent", v === true ? true : (false as never), { shouldValidate: true })}
                />
                <Label htmlFor="consent" className="text-sm font-normal text-[var(--color-muted)]">
                  Concordo com o tratamento dos meus dados para fins de contato, conforme a LGPD.
                </Label>
              </div>
              {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700">
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]"
              >
                {status === "submitting" ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </Section>
  );
}
