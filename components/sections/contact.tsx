"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { contactSchema, projectTypes, type ContactInput } from "@/lib/validators";
import { site } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-[var(--brand-paper)] placeholder:text-white/35 focus:border-[var(--brand-spark)] focus:outline-none";

const labelClass =
  "mono block text-[10px] uppercase tracking-[0.22em] text-[var(--brand-muted-on-dark)]";

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
    <section id="contato" className="relative overflow-hidden bg-[var(--brand-ink)] py-28 text-[var(--brand-paper)] md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-dots opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 20%, rgba(43,108,255,0.2), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-muted-on-dark)]">
              §06 · Contato
            </div>
            <h2 className="display mt-5 text-5xl md:text-6xl">
              Fale com<br />
              <span className="display-italic">a gente.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[var(--brand-muted-on-dark)]">
              Preencha o formulário ou mande uma mensagem direta. Respondemos em até 1 dia útil.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <a href={`mailto:${site.email}`} className="group flex items-center gap-3 text-[var(--brand-paper)]">
                <Mail size={16} className="text-[var(--brand-accent-hot)]" />
                <span className="link-reveal">{site.email}</span>
                <ArrowUpRight size={14} className="opacity-0 transition group-hover:opacity-100" />
              </a>
              <div className="flex items-center gap-3 text-[var(--brand-paper)]">
                <Phone size={16} className="text-[var(--brand-accent-hot)]" />
                <span>{site.phone}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="flex flex-col items-start gap-4 rounded-3xl border border-white/15 bg-white/[0.04] p-10 backdrop-blur-sm">
                <CheckCircle2 size={36} className="text-[var(--brand-spark)]" />
                <h3 className="display text-4xl">Mensagem recebida.</h3>
                <p className="text-[var(--brand-muted-on-dark)]">
                  Obrigado por escrever. Nossa equipe retorna em até 1 dia útil.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mono mt-2 text-[11px] uppercase tracking-[0.22em] text-[var(--brand-spark)] underline-offset-4 hover:underline"
                >
                  ↳ Enviar outra
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Nome*" error={errors.name?.message}>
                    <input className={inputClass} placeholder="Seu nome" {...register("name")} />
                  </Field>
                  <Field label="Email*" error={errors.email?.message}>
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
                  <div className="flex flex-wrap gap-2 pt-3">
                    {projectTypes.map((t) => {
                      const selected = watch("projectType") === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setValue("projectType", t, { shouldValidate: true })}
                          className={`rounded-full border px-4 py-2 text-[13px] transition ${
                            selected
                              ? "border-[var(--brand-accent-hot)] bg-[var(--brand-accent-hot)] text-white"
                              : "border-white/20 text-[var(--brand-paper)] hover:border-white/50"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </Field>

                <Field label="Mensagem*" error={errors.message?.message}>
                  <textarea
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Me conte brevemente o que você quer construir..."
                    {...register("message")}
                  />
                </Field>

                <label className="flex items-start gap-3 text-sm text-[var(--brand-muted-on-dark)]">
                  <input
                    type="checkbox"
                    checked={!!consent}
                    onChange={(e) =>
                      setValue("consent", (e.target.checked ? true : (false as never)) as true, {
                        shouldValidate: true,
                      })
                    }
                    className="mt-1 h-4 w-4 accent-[var(--brand-accent-hot)]"
                  />
                  <span>
                    Concordo com o tratamento dos meus dados para fins de contato, conforme a LGPD.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-[var(--brand-spark)]">{errors.consent.message}</p>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-paper)] px-7 py-4 text-sm font-medium text-[var(--brand-ink)] transition hover:bg-[var(--brand-spark)] disabled:opacity-60"
                >
                  {status === "submitting" ? "Enviando..." : "Enviar mensagem"}
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
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
      <div className="mt-1">{children}</div>
      {error && <p className="mono mt-2 text-[11px] text-[var(--brand-spark)]">↳ {error}</p>}
    </div>
  );
}
