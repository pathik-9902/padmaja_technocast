// src/pages/Certificates.tsx
"use client";

import { useEffect, useRef, useState, type JSX } from "react";
import { motion } from "framer-motion";
import { X, FileText, Maximize2, Download } from "lucide-react";

type CertItem = {
  id: number;
  title: string;
  year?: string;
  fileId?: string;
  fileUrl?: string;
  note?: string;
};

const CERTS: CertItem[] = [
  { id: 1, title: "Certificate ISO 9001:2015", fileId: "14K7sM1_2kKGg5w-I-lm5nOffyLmWvo8T" },
  { id: 2, title: "AD2000 Certificate (multi-lingual)", fileId: "1twFJadKT0Gw9KiirnywQjyrn9gutxWtM" },
  { id: 3, title: "Certificate of Incorporation", fileId: "1EbJo1ZWfFn5_C1jDdN00ouJXvAyVRvKp" },
  { id: 4, title: "IEC Certificate", fileId: "1gzYgt1ju8Cp7JzSWw1nJwZqO4I1vJvSH" },
  { id: 5, title: "PED Certificate (multi-lingual)", fileId: "1zpv2CVxK1jo5XBNubVQ8_7nhag21Kgfa" },
  { id: 6, title: "UDHYAM Certificate", fileId: "14mXB8Yj81c3yNFLPOD6ZmQbmTla_YKft" },
];

function drivePreviewUrlFromId(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

async function checkDrivePublic(fileId?: string): Promise<{ ok: boolean; reason?: string }> {
  if (!fileId) return { ok: false, reason: "No file id provided" };
  const testUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  try {
    const resp = await fetch(testUrl, { method: "HEAD", mode: "cors" });
    if (resp.ok) return { ok: true };
    return { ok: false, reason: `HTTP ${resp.status}` };
  } catch {
    return { ok: true };
  }
}

export default function CertificatesPage(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [activeEmbedUrl, setActiveEmbedUrl] = useState<string | null>(null);
  const [activeOriginalUrl, setActiveOriginalUrl] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);
  const [checkMessage, setCheckMessage] = useState<string | null>(null);

  const [viewerHeightPx, setViewerHeightPx] = useState<number | null>(null);
  const viewerContainerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      setActiveEmbedUrl(null);
      setActiveOriginalUrl(null);
      setActiveTitle(null);
      setChecking(false);
      setCheckMessage(null);
      setViewerHeightPx(null);
    }
  }, [open]);

  // FIXED — Correct A4 viewer height that fits inside visible screen
  useEffect(() => {
    if (!open || !modalRef.current) return;

    const el = modalRef.current;

    const compute = () => {
      const useWidth = el.clientWidth || Math.min(window.innerWidth - 40, 900);

      // Natural A4 height from width
      const naturalHeight = Math.round(useWidth * (297 / 210));

      // Available viewport height (subtract 20px top + bottom margin)
      const viewportAvailable = window.innerHeight - 40;

      // Measure modal header and footer
      const header = el.querySelector("[data-modal-header]") as HTMLElement | null;
      const footer = el.querySelector("[data-modal-footer]") as HTMLElement | null;

      const headerH = header ? header.getBoundingClientRect().height : 0;
      const footerH = footer ? footer.getBoundingClientRect().height : 0;

      // Extra padding for breathing space
      const contentMax = viewportAvailable - headerH - footerH - 32;

      // The final viewer height must not overflow
      const finalHeight = Math.max(300, Math.min(naturalHeight, contentMax));

      setViewerHeightPx(finalHeight);
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(el);

    window.addEventListener("resize", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [open]);

  async function openCert(cert: CertItem) {
    setChecking(true);
    setCheckMessage(null);

    const embedUrl = cert.fileUrl ?? (cert.fileId ? drivePreviewUrlFromId(cert.fileId) : null);
    const originalUrl = cert.fileId
      ? `https://drive.google.com/uc?export=download&id=${cert.fileId}`
      : cert.fileUrl ?? null;

    if (!embedUrl) {
      setActiveEmbedUrl(null);
      setActiveOriginalUrl(null);
      setActiveTitle(cert.title);
      setCheckMessage("No document configured for this certificate.");
      setChecking(false);
      setOpen(true);
      return;
    }

    if (cert.fileId) {
      const chk = await checkDrivePublic(cert.fileId);
      if (!chk.ok) {
        setCheckMessage(
          `The file may not be publicly accessible (${chk.reason}). Please set sharing to: "Anyone with the link — Viewer".`
        );
      }
    }

    setActiveEmbedUrl(embedUrl);
    setActiveOriginalUrl(originalUrl);
    setActiveTitle(cert.title);
    setChecking(false);
    setOpen(true);
  }

  async function toggleFullscreen() {
    const el = viewerContainerRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      try {
        await el.requestFullscreen?.();
      } catch { /* empty */ }
    } else {
      try {
        await document.exitFullscreen();
      } catch { /* empty */ }
    }
  }

  return (
    <div className="relative py-12 px-4 md:px-8 lg:px-16 bg-[#0f1112] text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400">
          Certificates
        </h1>

        <p className="text-center text-sm md:text-base text-gray-300 max-w-3xl mx-auto mb-10">
          Inline A4 previews are shown below. Click any card to open a larger A4 viewer.
        </p>

        {/* Grid of certificate preview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((c) => {
            const embedUrl = c.fileUrl ?? (c.fileId ? drivePreviewUrlFromId(c.fileId) : null);

            return (
              <motion.article
                key={c.id}
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className="group relative rounded-2xl overflow-hidden border border-white/8 bg-white/3 shadow-[0_10px_40px_rgba(0,0,0,0.6)] cursor-pointer"
                onClick={() => openCert(c)}
              >
                <div className="relative">
                  <div
                    className="w-full"
                    style={{
                      position: "relative",
                      paddingBottom: `${(297 / 210) * 100}%`,
                      background: "linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.1))",
                    }}
                  >
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title={c.title}
                        className="absolute left-0 top-0 w-full h-full pointer-events-none"
                        loading="lazy"
                        style={{ border: "none", borderRadius: 8 }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <div className="p-3 rounded-full bg-white/6 border border-white/10 text-sky-300">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div className="text-center px-4">
                          <h3 className="font-semibold text-lg text-white leading-snug">{c.title}</h3>
                          {c.year && <div className="text-xs text-gray-300 mt-1">{c.year}</div>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 text-center">
                  <div className="font-medium text-white">{c.title}</div>
                  {c.year && <div className="text-xs text-gray-300 mt-1">{c.year}</div>}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <motion.div
            ref={modalRef}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl"
            style={{
              margin: "20px",
              width: "min(calc(100vw - 40px), 900px)",
              maxWidth: "1000px",
            }}
            role="dialog"
            aria-modal="true"
          >
            {/* HEADER */}
            <div
              data-modal-header
              className="flex items-center justify-between gap-4 p-3 border-b border-white/6 bg-[#070707]"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-sm font-semibold">{activeTitle}</h3>
                  <span className="text-xs text-gray-400">• A4 portrait</span>
                </div>
                <p className="text-xs text-gray-400 max-w-xl">
                  Official document preview — use fullscreen to inspect detail or open the original for printing.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {activeOriginalUrl && (
                  <a
                    href={activeOriginalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/6 hover:bg-white/8 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Open original</span>
                  </a>
                )}

                <button
                  onClick={toggleFullscreen}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/4 text-sm"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </button>

                <button
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/6 hover:bg-white/8 border border-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* VIEWER */}
            <div
              ref={viewerContainerRef}
              className="w-full bg-black flex items-center justify-center"
              style={{
                height: viewerHeightPx ? `${viewerHeightPx}px` : "60vh",
                minHeight: "300px",
                maxHeight: "calc(95vh - 140px)",
              }}
            >
              {checking && <div className="text-gray-300">Checking access…</div>}

              {!checking && activeEmbedUrl && viewerHeightPx && (
                <iframe
                  src={activeEmbedUrl}
                  title={activeTitle ?? "Certificate"}
                  style={{ width: "100%", height: "100%", border: "none", background: "#fff" }}
                />
              )}
            </div>

            {/* FOOTER */}
            <div
              data-modal-footer
              className="p-4 bg-[#080808] text-sm text-gray-300 border-t border-white/6"
            >
              <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
                <div className="space-y-2">
                  {checkMessage && <div className="text-yellow-300">{checkMessage}</div>}
                  <div className="text-xs text-gray-400">
                    If a Drive permission notice appears, set sharing to <strong>Anyone with the link — Viewer</strong>.
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-transparent text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
