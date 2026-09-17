"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section";
import { contactSchema, projectTypes, type ContactInput } from "@/lib/validators";
import { site } from "@/content/site";
import { sections } from "@/content/sections";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-[var(--brand-border)] bg-white px-3.5 py-2.5 text-[15px] text-[var(--brand-text)] transition focus:border-[var(--brand-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/20";

const labelClass = "block text-sm font-medium text-[var(--brand-ink)]";

export function Contact() {
  const copy = sections.contact;
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
    <section id="contato" className="bg-[var(--brand-surface-alt)] py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 rounded-lg border border-[var(--brand-border)] bg-white p-4 transition-colors hover:border-[var(--brand-primary)]"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                    <Mail size={20} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-[var(--brand-muted)]">E-mail</span>
                    <span className="block break-all font-medium text-[var(--brand-ink)]">{site.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-lg border border-[var(--brand-border)] bg-white p-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                  <Phone size={20} aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-[var(--brand-muted)]">Telefone</span>
                  <span className="block font-medium text-[var(--brand-ink)]">{site.phone}</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-lg border border-[var(--brand-border)] bg-white p-6 shadow-sm md:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-start gap-4">
                  <CheckCircle2 size={40} className="text-[var(--brand-primary)]" aria-hidden />
                  <h3 className="display text-2xl text-[var(--brand-ink)]">{copy.successTitle}</h3>
                  <p className="text-[var(--brand-muted)]">{copy.successDescription}</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                  >
                    {copy.successAgain}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Nome*" error={errors.name?.message}>
                      <input className={inputClass} placeholder="Seu nome" {...register("name")} />
                    </Field>
                    <Field label="E-mail*" error={errors.email?.message}>
                      <input className={inputClass} placeholder="voce@empresa.com" type="email" {...register("email")} />
                    </Field>
                    <Field label="Empresa">
                      <input className={inputClass} placeholder="Nome da empresa" {...register("company")} />
                    </Field>
                    <Field label="Telefone">
                      <input className={inputClass} placeholder="(00) 00000-0000" {...register("phone")} />
                    </Field>
                  </div>

                  <Field label="Tipo de projeto*" error={errors.projectType?.message}>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((t) => {
                        const selected = watch("projectType") === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => setValue("projectType", t, { shouldValidate: true })}
                            className={cn(
                              "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                              selected
                                ? "border-[var(--brand-primary)] bg-[var(--brand-primary)] text-white"
                                : "border-[var(--brand-border)] text-[var(--brand-ink)] hover:border-[var(--brand-primary)]",
                            )}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <Field label="Mensagem*" error={errors.message?.message}>
                    <textarea
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder="Descreva brevemente o seu projeto..."
                      {...register("message")}
                    />
                  </Field>

                  <div>
                    <label className="flex items-start gap-3 text-sm text-[var(--brand-muted)]">
                      <input
                        type="checkbox"
                        checked={!!consent}
                        onChange={(e) =>
                          setValue("consent", (e.target.checked ? true : (false as never)) as true, {
                            shouldValidate: true,
                          })
                        }
                        className="mt-0.5 h-4 w-4 accent-[var(--brand-primary)]"
                      />
                      <span>{copy.consent}</span>
                    </label>
                    {errors.consent && (
                      <p className="mt-2 text-sm text-[var(--destructive)]">{errors.consent.message}</p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                      <AlertCircle size={16} aria-hidden />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full items-center justify-center rounded-md bg-[var(--brand-primary)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-hover)] disabled:opacity-60 sm:w-auto"
                  >
                    {status === "submitting" ? copy.submitting : copy.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className={labelClass}>{label}</span>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-sm text-[var(--destructive)]">{error}</p>}
    </div>
  );
}
