"use client";

import { useState, useRef, useEffect } from "react";
import { personalInfo, skills, projects, experience } from "@/lib/cv-data";
import { useLocaleContext } from "@/components/LocaleProvider";
import { dictionary } from "@/lib/translations";

type Message = {
  role: "user" | "assistant";
  content: string;
  query?: string;
};

const knowledgeBase = {
  name: personalInfo.name,
  title: personalInfo.title,
  bio: personalInfo.bio,
  yearsOfExperience: personalInfo.yearsOfExperience,
  domains: personalInfo.domains,
  skills: skills.flatMap((s) => s.items),
  skillsByCategory: skills,
  projects: projects.map((p) => ({
    title: p.title,
    type: p.type,
    stack: p.stack,
    problem: p.problem,
    result: p.result,
    url: p.url,
  })),
  experience: experience.map((e) => ({
    company: e.company,
    role: e.role,
    period: e.period,
    highlights: e.highlights,
    tech: e.tech,
  })),
};

function findAnswer(query: string, locale: "en" | "es"): string {
  const q = query.toLowerCase();
  const dict = dictionary[locale].ai.answers;

  if (q.includes("proyecto") || q.includes("project") || q.includes("construido") || q.includes("built") || q.includes("ha hecho") || q.includes("made")) {
    const list = knowledgeBase.projects
      .map((p) => `• ${p.title} (${p.type}): ${p.problem.slice(0, 100)}... [${p.url}]`)
      .join("\n");
    return dict.projects.replace("{list}", list).replace("{count}", String(knowledgeBase.projects.length));
  }

  if (q.includes("backend") || q.includes("back-end") || q.includes("api")) {
    return dict.backend;
  }

  if (q.includes("stack") || q.includes("tecnolog") || q.includes("tech") || q.includes("skills") || q.includes("habilidad") || q.includes("sabe")) {
    const cats = knowledgeBase.skillsByCategory
      .map((c) => `**${c.category}:** ${c.items.join(", ")}`)
      .join("\n");
    return dict.stack.replace("{categories}", cats);
  }

  if (q.includes("arquitectura") || q.includes("architecture") || q.includes("system design") || q.includes("diseño")) {
    return dict.architecture;
  }

  if (q.includes("experiencia") || q.includes("experience") || q.includes("trabajado") || q.includes("worked") || q.includes("dónde") || q.includes("where")) {
    const list = knowledgeBase.experience
      .map((e) => `• ${e.company} — ${e.role} (${e.period})\n  ${e.highlights[0]}`)
      .join("\n");
    return dict.experience.replace("{list}", list);
  }

  if (q.includes("contact") || q.includes("contacto") || q.includes("email") || q.includes("correo") || q.includes("linkedin")) {
    return dict.contact.replace("{linkedin}", personalInfo.linkedin);
  }

  if (q.includes("senior") || q.includes("nivel") || q.includes("level") || q.includes("años") || q.includes("years") || q.includes("experiencia")) {
    return dict.level
      .replace("{years}", String(knowledgeBase.yearsOfExperience))
      .replace("{domains}", knowledgeBase.domains.join(", "));
  }

  return dict.fallback;
}

export default function AIChat() {
  const { locale } = useLocaleContext();
  const lang = locale as "en" | "es";
  const dict = dictionary[lang].ai;

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: dict.greeting.replace("{name}", knowledgeBase.name),
    },
  ]);

  useEffect(() => {
    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.role === "assistant" && msg.query) {
          return { ...msg, content: findAnswer(msg.query, lang) };
        }
        if (msg.role === "assistant" && !msg.query) {
          return { ...msg, content: dict.greeting.replace("{name}", knowledgeBase.name) };
        }
        return msg;
      })
    );
  }, [locale, dict.greeting, lang]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"terminal" | "bubbles">("terminal");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const query = input;
    const userMsg: Message = { role: "user", content: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const answer = findAnswer(query, lang);
      setMessages((prev) => [...prev, { role: "assistant", content: answer, query }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const examples = dict.examples;

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setMode("terminal")}
          className={`px-3 py-1 text-xs rounded-md transition-colors ${
            mode === "terminal"
              ? "bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30"
              : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
          }`}
        >
          {dict.terminal}
        </button>
        <button
          onClick={() => setMode("bubbles")}
          className={`px-3 py-1 text-xs rounded-md transition-colors ${
            mode === "bubbles"
              ? "bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30"
              : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
          }`}
        >
          {dict.chat}
        </button>
      </div>

      {mode === "terminal" ? (
        <div className="glass-panel overflow-hidden">
          <div className="bg-[var(--bg-primary)]/80 px-4 py-2 border-b border-[var(--border)] flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--success)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--warning)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--error)]" />
            <span className="text-xs text-[var(--text-muted)] font-mono ml-2">ai-assistant@bonilla:~$</span>
          </div>
          <div className="p-4 font-mono text-sm max-h-[500px] overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === "user" ? "text-[var(--text-secondary)]" : "text-[var(--text-primary)]"}>
                {msg.role === "user" ? (
                  <p>
                    <span className="text-[var(--success)]">$</span> {msg.content}
                  </p>
                ) : (
                  <div className="pl-4 border-l-2 border-[var(--accent)] whitespace-pre-wrap">
                    {msg.content}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="pl-4 border-l-2 border-[var(--accent)] text-[var(--accent)]">
                <span className="animate-boot-pulse">_</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t border-[var(--border)] p-4">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={dict.placeholder}
                className="flex-1 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/50 font-mono"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 text-sm hover:bg-[var(--accent)]/20 transition-colors"
              >
                {dict.send}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-panel p-4">
          <div className="max-h-[500px] overflow-y-auto space-y-4 mb-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-xl text-sm ${
                    msg.role === "user"
                      ? "bg-[var(--accent)]/20 text-[var(--text-primary)] border border-[var(--accent)]/30"
                      : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[var(--bg-elevated)] px-4 py-2 rounded-xl text-sm text-[var(--accent)]">
                  <span className="animate-boot-pulse">_</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={dict.placeholder}
              className="flex-1 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/50"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 text-sm hover:bg-[var(--accent)]/20 transition-colors"
            >
              {dict.send}
            </button>
          </div>
        </div>
      )}

      <div className="mt-6">
        <p className="text-xs text-[var(--text-muted)] font-mono mb-2">{dict.exampleQuestions}</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((ex, i) => (
            <button
              key={i}
              onClick={() => { setInput(ex); }}
              className="px-3 py-1.5 text-xs rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/30 hover:text-[var(--text-primary)] transition-colors"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
