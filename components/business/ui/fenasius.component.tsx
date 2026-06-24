"use client";

import { useEffect, useRef, useState } from "react";
import { useIntlayer } from "next-intlayer";

type Message = {
  role: string;
  text: string;
  pills?: string[];
};

const MAX_MESSAGES = 4;

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export default function FenasiusChatDemo() {
  const content = useIntlayer('firstcomponent');

  const chatUser1 = content.chatUser1.value;
  const chatAi1 = content.chatAi1.value;
  const chatPill1 = content.chatPill1.value;
  const chatPill2 = content.chatPill2.value;
  const chatPill3 = content.chatPill3.value;
  const chatUser2 = content.chatUser2.value;
  const chatAi2 = content.chatAi2.value;
  const chatPill4 = content.chatPill4.value;
  const chatPill5 = content.chatPill5.value;
  const chatUser3 = content.chatUser3.value;
  const chatAi3 = content.chatAi3.value;
  const chatPill6 = content.chatPill6.value;
  const chatPill7 = content.chatPill7.value;
  const chatUser4 = content.chatUser4.value;
  const chatAi4 = content.chatAi4.value;
  const chatPill8 = content.chatPill8.value;
  const chatPill9 = content.chatPill9.value;
  const chatUser5 = content.chatUser5.value;
  const chatAi5 = content.chatAi5.value;
  const chatPill10 = content.chatPill10.value;
  const chatPill11 = content.chatPill11.value;
  const chatPill12 = content.chatPill12.value;
  const chatUser6 = content.chatUser6.value;
  const chatAi6 = content.chatAi6.value;
  const chatPill13 = content.chatPill13.value;
  const chatPill14 = content.chatPill14.value;
  const chatModeFast = content.chatModeFast.value;

  const conversations = [
    [
      { role: "user", text: chatUser1 },
      { role: "ai", text: chatAi1, pills: [chatPill1, chatPill2, chatPill3] },
      { role: "user", text: chatUser2 },
      { role: "ai", text: chatAi2, pills: [chatPill4, chatPill5] },
    ],
    [
      { role: "user", text: chatUser3 },
      { role: "ai", text: chatAi3, pills: [chatPill6, chatPill7] },
      { role: "user", text: chatUser4 },
      { role: "ai", text: chatAi4, pills: [chatPill8, chatPill9] },
    ],
    [
      { role: "user", text: chatUser5 },
      { role: "ai", text: chatAi5, pills: [chatPill10, chatPill11, chatPill12] },
      { role: "user", text: chatUser6 },
      { role: "ai", text: chatAi6, pills: [chatPill13, chatPill14] },
    ],
  ];

  const bodyRef = useRef<HTMLDivElement>(null);
  const inputTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const convIdxRef = useRef(0);
  const isRunningRef = useRef(false);
  const cancelRef = useRef(false);
  const [sending, setSending] = useState(false);

  function trimMessages() {
    const body = bodyRef.current;
    if (!body) return;
    while (body.children.length > MAX_MESSAGES) {
      body.removeChild(body.firstChild!);
    }
  }

  async function typeInInput(text: string) {
    if (!inputTextRef.current || !cursorRef.current) return;
    cursorRef.current.style.display = "inline-block";
    inputTextRef.current.textContent = "";

    for (let i = 0; i < text.length; i++) {
      if (cancelRef.current) return;
      inputTextRef.current.textContent += text[i];
      await sleep(38 + Math.random() * 20);
    }
    await sleep(300);
    setSending(true);
    await sleep(400);
    if (cursorRef.current) cursorRef.current.style.display = "none";
    if (inputTextRef.current) inputTextRef.current.textContent = "";
    setSending(false);
  }

  async function typeInBubble(el: HTMLElement, text: string) {
    let out = "";
    for (let i = 0; i < text.length; i++) {
      if (cancelRef.current) return;
      out += text[i];
      el.textContent = out;
      await sleep(18 + Math.random() * 14);
    }
  }

  async function addMsg(msg: Message) {
    const body = bodyRef.current;
    if (!body) return;

    const w = document.createElement("div");
    w.className = `fc-msg ${msg.role}`;

    if (msg.role === "user") {
      w.innerHTML = `<div class="fc-bubble"></div>`;
    } else {
      w.innerHTML = `<div class="fc-bubble"><div class="fc-btext"></div></div>`;
    }

    body.appendChild(w);
    trimMessages();

    await sleep(30);
    w.classList.add("visible");

    const btext =
      (w.querySelector(".fc-btext") as HTMLElement) ||
      (w.querySelector(".fc-bubble") as HTMLElement);

    await typeInBubble(btext, msg.text);

    if (msg.pills) {
      const prow = document.createElement("div");
      prow.style.marginTop = "8px";
      msg.pills.forEach((p) => {
        const pill = document.createElement("span");
        pill.className = "fc-pill";
        pill.textContent = p;
        prow.appendChild(pill);
      });
      const bubble = w.querySelector(".fc-bubble");
      if (bubble) bubble.appendChild(prow);
    }

    body.scrollTop = body.scrollHeight;
  }

  async function runConversation(conv: Message[]) {
    const body = bodyRef.current;
    if (!body || cancelRef.current) return;

    body.innerHTML = "";

    for (const msg of conv) {
      if (cancelRef.current) return;

      if (msg.role === "user") {
        await typeInInput(msg.text);
        if (cancelRef.current) return;

        await addMsg(msg);
        await sleep(600);

        const typing = document.createElement("div");
        typing.className = "fc-msg ai";
        typing.innerHTML = `<div class="fc-bubble fc-typing"><span></span><span></span><span></span></div>`;
        body.appendChild(typing);
        trimMessages();
        typing.classList.add("visible");

        await sleep(1600);
        if (cancelRef.current) return;
        if (typing.parentNode) typing.parentNode.removeChild(typing);
      } else {
        await addMsg(msg);
        await sleep(700);
      }
    }
  }

  useEffect(() => {
    let cancelled = false;

    const startDemo = async () => {
      if (isRunningRef.current) return;
      isRunningRef.current = true;
      cancelRef.current = false;

      while (!cancelled && !cancelRef.current) {
        const currentConv = conversations[convIdxRef.current];
        await runConversation(currentConv);

        if (cancelled || cancelRef.current) break;

        convIdxRef.current = (convIdxRef.current + 1) % conversations.length;
        await sleep(3200);
      }

      isRunningRef.current = false;
    };

    startDemo();

    return () => {
      cancelled = true;
      cancelRef.current = true;
    };
  }, []);

  return (
    <div className="fc-shell opacity-90">
      <div className="fc-body" ref={bodyRef} />

      <div className="fc-footer">
        <button className="fc-plus" aria-label="Plus">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </button>

        <div className="fc-input-fake">
          <span ref={inputTextRef} />
          <span ref={cursorRef} className="fc-cursor" style={{ display: "none" }} />
        </div>

        <button className="fc-mode-selector" aria-label="Mode">
          <span>{chatModeFast}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        <button className="fc-mic" aria-label="Microphone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2" width="6" height="11" rx="3"/>
            <path d="M5 10a7 7 0 0 0 14 0"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
            <line x1="9" y1="22" x2="15" y2="22"/>
          </svg>
        </button>

        <button className={`fc-send ${sending ? "fc-send--loading" : ""}`} aria-label="Envoyer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"/>
            <polyline points="5 12 12 5 19 12"/>
          </svg>
        </button>
      </div>

      <style>{`
        .fc-shell {
          font-family: var(--font-sans, system-ui, sans-serif);
          border-radius: 20px;
          background: #1c1917;
          padding: 16px;
          display: flex;
          flex-direction: column;
          height: 420px;
        }
        .fc-body {
          flex: 1;
          background: #1c1917;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 16px;
          overflow: hidden;
        }
        .fc-msg {
          display: flex;
          gap: 10px;
          align-items: flex-end;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          flex-shrink: 0;
        }
        .fc-msg.visible { opacity: 1; transform: translateY(0); }
        .fc-msg.user { flex-direction: row-reverse; }
        .fc-bubble {
          max-width: 75%;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 13.5px;
          line-height: 1.5;
        }
        .fc-msg.ai .fc-bubble {
          background: #1c1917;
          color: #ffffff;
          border: 0.5px solid rgba(255,255,255,0.06);
          border-radius: 4px 16px 16px 16px;
        }
        .fc-msg.user .fc-bubble {
          background: #1c1917;
          color: #ffffff;
          border-radius: 16px 4px 16px 16px;
        }
        .fc-typing {
          display: flex; gap: 5px; align-items: center;
          padding: 10px 14px;
        }
        .fc-typing span {
          width: 7px; height: 7px; border-radius: 50%;
          background: #9ca3af;
          animation: fc-bounce 1.2s infinite;
        }
        .fc-typing span:nth-child(2) { animation-delay: 0.2s; }
        .fc-typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes fc-bounce {
          0%,80%,100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        .fc-pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: #1c1917;
          padding: 4px 10px;
          font-size: 11.5px;
          color: #ffffff;
          border-radius: 20px;
          border: 0.5px solid #9ca3af;
          margin-top: 6px; margin-right: 4px;
        }
        .fc-footer {
          background: #1c1917;
          padding: 8px 0 0 0;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .fc-plus {
          width: 34px; height: 34px; border-radius: 50%;
          background: #1c1917;
          border: 0.5px solid rgba(255,255,255,0.08);
          cursor: pointer; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          color: #9ca3af;
          transition: background 0.2s, color 0.2s;
        }
        .fc-plus:hover { background: #1e2a3a; color: #ffffff; }
        .fc-input-fake {
          flex: 1; height: 36px; border-radius: 20px;
          background: #1c1917;
          border: 0.5px solid rgba(255,255,255,0.06);
          display: flex; align-items: center;
          padding: 0 14px;
          font-size: 13px; color: #9ca3af;
          overflow: hidden; white-space: nowrap;
        }
        .fc-mode-selector {
          display: flex; align-items: center; gap: 4px;
          font-size: 12px; color: #9ca3af;
          background: transparent; border: none;
          cursor: pointer; flex-shrink: 0;
          padding: 4px 6px; border-radius: 12px;
          transition: background 0.2s, color 0.2s;
        }
        .fc-mic {
          width: 34px; height: 34px; border-radius: 50%;
          background: #1c1917;
          border: 0.5px solid rgba(255,255,255,0.08);
          cursor: pointer; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          color: #9ca3af;
          transition: background 0.2s, color 0.2s;
        }
        .fc-mic:hover { background: #1e2a3a; color: #ffffff; }
        .fc-send {
          width: 34px; height: 34px; border-radius: 50%;
          background: #4d0218;
          border: none; cursor: pointer; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          color: #ffffff;
          background-size: 200% 200%;
          transition: background 0.3s ease;
        }
        .fc-send--loading {
          animation: fc-gradient-spin 0.8s linear infinite;
          background: linear-gradient(135deg, #4d0218, #9d1744, #e85d9a, #4d0218);
          background-size: 300% 300%;
        }
        @keyframes fc-gradient-spin {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .fc-cursor {
          display: inline-block; width: 2px; height: 13px;
          background: #9ca3af; margin-left: 1px;
          vertical-align: middle;
          animation: fc-blink 0.8s steps(1) infinite;
        }
        @keyframes fc-blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fc-msg { transition: none; opacity: 1; transform: none; }
          .fc-typing span { animation: none; opacity: 0.6; }
          .fc-cursor { animation: none; }
          .fc-send--loading { animation: none; }
        }
      `}</style>
    </div>
  );
}