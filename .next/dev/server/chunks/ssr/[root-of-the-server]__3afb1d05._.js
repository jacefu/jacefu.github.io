module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/hiclaw/src/i18n/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        // Navbar
        nav: {
            features: "Features",
            architecture: "Architecture",
            quickStart: "Quick Start",
            docs: "Docs",
            github: "GitHub",
            getStarted: "Get Started"
        },
        // Hero Section
        hero: {
            badge: {
                openSource: "Open Source",
                poweredBy: "Powered by Matrix"
            },
            title: {
                line1: "Open Source",
                highlight: "Agent Team",
                line2: "System"
            },
            subtitle: "Let multiple AI Agents collaborate in Matrix rooms, fully visible to humans, with real-time intervention capability.",
            subtitleLine2: "Manager Agent coordinates multiple Worker Agents to complete complex tasks.",
            subtitleLine3: "Fast-track your OPOC (One Person One Company) and enterprise digital workforce.",
            quickStart: "Quick Start",
            viewOnGithub: "View on GitHub",
            terminal: "terminal"
        },
        // Features Section
        features: {
            title: "Why HiClaw?",
            subtitle: "Featuring enterprise-grade security and designed specifically for multi-agent collaboration, enabling AI agent teams to work together as efficiently as human teams",
            items: [
                {
                    title: "Enterprise Security",
                    description: "Workers never hold real API keys or GitHub PATs. They only carry a consumer token (like a badge). Even a compromised Worker can't leak your credentials."
                },
                {
                    title: "Multi-Agent Collaboration",
                    description: "Manager Agent intelligently decomposes tasks and coordinates multiple Worker Agents for parallel execution, significantly improving complex task handling."
                },
                {
                    title: "Matrix Protocol",
                    description: "Built on the open Matrix IM protocol, all Agent communications are transparent and auditable, with native support for distributed deployment and federation."
                },
                {
                    title: "Human Supervision",
                    description: "Humans can enter any Matrix room at any time to observe Agent conversations, intervene or correct Agent behavior in real-time, ensuring safety and control."
                },
                {
                    title: "Manager-Worker Architecture",
                    description: "Clear two-tier Manager-Worker architecture with distinct responsibilities, easy to extend with custom Worker Agents for different scenarios."
                },
                {
                    title: "Fully Open Source",
                    description: "Completely open source, community-driven development, no vendor lock-in, supports local private deployment with full data sovereignty."
                }
            ]
        },
        // Architecture Section
        arch: {
            title: "System Architecture",
            subtitle: "Matrix-based collaboration hub with Higress AI Gateway providing a security and governance layer — agents never hold real credentials.",
            points: [
                {
                    title: "Collaboration Hub (Matrix Based)",
                    description: "Manager Agent orchestrates Control Flow, Worker Agents handle Task Flow, all communicating through a central Matrix Server with end-to-end encryption. Humans observe via Matrix Client."
                },
                {
                    title: "Security & Governance Layer",
                    description: "Credentials pass-through and secure API proxy ensure no keys are held by agents. Even a compromised Worker cannot leak your credentials."
                },
                {
                    title: "Higress AI Gateway",
                    description: "Central gateway providing secure external API access to LLM providers (Qwen, Claude, OpenAI, local models) and external APIs / MCP Servers / Skills."
                }
            ]
        },
        // Quick Start Section
        quickstart: {
            title: "Quick Start",
            subtitle: "One command to install. The script asks for your LLM API key, then sets everything up.",
            prerequisite: "Prerequisites",
            prerequisiteDesc: "Docker Desktop (Windows/macOS) or Docker Engine (Linux). That's all.",
            dockerItems: [
                "Docker Desktop (Windows / macOS)",
                "Docker Engine (Linux) or Podman Desktop (alternative)"
            ],
            resourceNote: "The Docker VM needs at least 2 CPU cores and 4 GB RAM. In Docker Desktop, go to Settings → Resources to adjust.",
            outputTitle: "When it's done:",
            outputLines: [
                "=== HiClaw Manager Started! ===",
                "  Open: http://127.0.0.1:18088",
                '  Login: admin / [generated password]',
                '  Tell the Manager: "Create a Worker named alice for frontend dev"'
            ],
            tabMacLinux: "macOS / Linux",
            tabWindows: "Windows (PowerShell 7+)"
        },
        // Footer
        footer: {
            description: "Open Source Agent Team System. Let multiple AI Agents collaborate in Matrix rooms, fully visible to humans, with real-time intervention capability.",
            product: "Product",
            community: "Community",
            resources: "Resources",
            features: "Features",
            architecture: "Architecture",
            quickStart: "Quick Start",
            roadmap: "Roadmap",
            discord: "Discord",
            twitter: "Twitter",
            documentation: "Documentation",
            blog: "Blog",
            changelog: "Changelog",
            copyright: "HiClaw. Open Source under Apache 2.0 License."
        }
    },
    zh: {
        // Navbar
        nav: {
            features: "特性",
            architecture: "架构",
            quickStart: "快速开始",
            docs: "文档",
            github: "GitHub",
            getStarted: "开始使用"
        },
        // Hero Section
        hero: {
            badge: {
                openSource: "开源项目",
                poweredBy: "基于 Matrix 协议"
            },
            title: {
                line1: "开源",
                highlight: "Agent 团队",
                line2: "协作系统"
            },
            subtitle: "让多个 AI Agent 在 Matrix 房间中协作，人类全程可见、随时可介入。",
            subtitleLine2: "Manager Agent 协调多个 Worker Agent，完成复杂任务。",
            subtitleLine3: "加速实现 OPOC（一人一公司）和企业数字员工。",
            quickStart: "快速开始",
            viewOnGithub: "在 GitHub 查看",
            terminal: "终端"
        },
        // Features Section
        features: {
            title: "为什么选择 HiClaw？",
            subtitle: "具备企业级安全性，专为多 Agent 协作场景设计，让 AI Agent 团队像人类团队一样高效协作",
            items: [
                {
                    title: "企业级安全",
                    description: "Worker 永远不会持有真实的 API 密钥或 GitHub PAT，它们仅携带消费者令牌（类似工牌）。即使 Worker 被攻破，也无法泄露您的凭证。"
                },
                {
                    title: "多 Agent 协作",
                    description: "Manager Agent 智能分解任务，协调多个 Worker Agent 并行执行，大幅提升复杂任务处理能力。"
                },
                {
                    title: "Matrix 协议驱动",
                    description: "基于开放的 Matrix IM 协议，所有 Agent 通信透明可审计，天然支持分布式部署和联邦通信。"
                },
                {
                    title: "人工全程监督",
                    description: "人类可随时进入任意 Matrix 房间观察 Agent 对话，实时干预或修正 Agent 行为，确保安全可控。"
                },
                {
                    title: "Manager-Worker 架构",
                    description: "清晰的 Manager-Worker 两层架构，职责分明，易于扩展自定义 Worker Agent 以适应不同场景。"
                },
                {
                    title: "完全开源",
                    description: "代码完全开放，社区驱动开发，无供应商锁定，支持本地私有化部署，数据完全自主可控。"
                }
            ]
        },
        // Architecture Section
        arch: {
            title: "系统架构",
            subtitle: "基于 Matrix 协议的协作中枢，Higress AI 网关提供安全治理层——Agent 永不持有真实凭证。",
            points: [
                {
                    title: "协作中枢（基于 Matrix）",
                    description: "Manager Agent 编排控制流，Worker Agent 处理任务流，所有通信经由中央 Matrix 服务器并支持端到端加密。人类通过 Matrix 客户端观察。"
                },
                {
                    title: "安全治理层",
                    description: "凭证透传与安全 API 代理确保 Agent 不持有任何密钥。即使 Worker 被攻破，也无法泄露您的凭证。"
                },
                {
                    title: "Higress AI 网关",
                    description: "中央网关提供安全的外部 API 访问，连接 LLM 提供商（通义千问、Claude、OpenAI、本地模型）和外部 API / MCP 服务器 / Skills。"
                }
            ]
        },
        // Quick Start Section
        quickstart: {
            title: "快速开始",
            subtitle: "一行命令完成安装。脚本会要求输入 LLM API Key，然后自动完成所有配置。",
            prerequisite: "前置条件",
            prerequisiteDesc: "Docker Desktop（Windows/macOS）或 Docker Engine（Linux），仅此而已。",
            dockerItems: [
                "Docker Desktop（Windows / macOS）",
                "Docker Engine（Linux）或 Podman Desktop（替代方案）"
            ],
            resourceNote: "Docker 虚拟机至少需要 2 核 CPU 和 4 GB 内存。在 Docker Desktop 中，前往 Settings → Resources 调整。",
            outputTitle: "安装完成后：",
            outputLines: [
                "=== HiClaw Manager Started! ===",
                "  Open: http://127.0.0.1:18088",
                '  Login: admin / [生成的密码]',
                '  Tell the Manager: "创建一个名为 alice 的前端开发 Worker"'
            ],
            tabMacLinux: "macOS / Linux",
            tabWindows: "Windows (PowerShell 7+)"
        },
        // Footer
        footer: {
            description: "开源 Agent 团队系统。让多个 AI Agent 在 Matrix 房间中协作，人类全程可见、随时可介入。",
            product: "产品",
            community: "社区",
            resources: "资源",
            features: "特性",
            architecture: "架构",
            quickStart: "快速开始",
            roadmap: "路线图",
            discord: "Discord",
            twitter: "Twitter",
            documentation: "文档",
            blog: "博客",
            changelog: "更新日志",
            copyright: "HiClaw. 基于 Apache 2.0 许可证开源。"
        }
    }
};
}),
"[project]/hiclaw/src/i18n/context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/src/i18n/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function I18nProvider({ children }) {
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check localStorage for saved preference
        const saved = localStorage.getItem("locale");
        if (saved && (saved === "en" || saved === "zh")) {
            setLocaleState(saved);
        } else {
            // Check browser language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith("zh")) {
                setLocaleState("zh");
            }
        }
        setMounted(true);
    }, []);
    const setLocale = (newLocale)=>{
        setLocaleState(newLocale);
        localStorage.setItem("locale", newLocale);
    };
    // Prevent hydration mismatch by returning default locale during SSR
    const currentLocale = mounted ? locale : "en";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: {
            locale: currentLocale,
            setLocale,
            t: __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][currentLocale]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/hiclaw/src/i18n/context.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function useI18n() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
}
}),
"[project]/hiclaw/src/i18n/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$src$2f$i18n$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/src/i18n/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/src/i18n/translations.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/hiclaw/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hiclaw/src/i18n/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$src$2f$i18n$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/src/i18n/context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Navbar() {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { locale, setLocale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$src$2f$i18n$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const navLinks = [
        {
            href: "#features",
            label: t.nav.features
        },
        {
            href: "#architecture",
            label: t.nav.architecture
        },
        {
            href: "#quickstart",
            label: t.nav.quickStart
        },
        {
            href: "https://github.com/higress-group/hiclaw/tree/main/docs",
            label: t.nav.docs,
            external: true
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const toggleLocale = ()=>{
        setLocale(locale === "en" ? "zh" : "en");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect border-b border-slate-200 shadow-sm" : "bg-transparent"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "section-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-16 items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo-full.png",
                                alt: "HiClaw",
                                width: 120,
                                height: 40,
                                className: "h-6 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex md:items-center md:gap-8",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    target: link.external ? "_blank" : undefined,
                                    rel: link.external ? "noopener noreferrer" : undefined,
                                    className: "text-sm font-medium text-text-secondary transition-colors hover:text-primary-600",
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex md:items-center md:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleLocale,
                                    className: "flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-text-secondary transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600",
                                    title: locale === "en" ? "切换到中文" : "Switch to English",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: locale === "en" ? "中文" : "EN"
                                        }, void 0, false, {
                                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://github.com/higress-group/hiclaw",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-text-primary transition-all hover:border-primary-300 hover:bg-primary-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t.nav.github
                                        }, void 0, false, {
                                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#quickstart",
                                    className: "rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-700",
                                    children: t.nav.getStarted
                                }, void 0, false, {
                                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            "aria-label": "Toggle menu",
                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-6 w-6 text-text-primary"
                            }, void 0, false, {
                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-6 w-6 text-text-primary"
                            }, void 0, false, {
                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 pb-4 pt-2",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    target: link.external ? "_blank" : undefined,
                                    rel: link.external ? "noopener noreferrer" : undefined,
                                    className: "block rounded-lg px-3 py-2 text-base font-medium text-text-secondary transition-colors hover:bg-primary-50 hover:text-primary-600",
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-col gap-2 px-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleLocale,
                                        className: "flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-text-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: locale === "en" ? "切换到中文" : "Switch to English"
                                            }, void 0, false, {
                                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://github.com/higress-group/hiclaw",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-text-primary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t.nav.github
                                            }, void 0, false, {
                                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#quickstart",
                                        className: "rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white",
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: t.nav.getStarted
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/hiclaw/src/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hiclaw/src/i18n/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$src$2f$i18n$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/src/i18n/context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function DiscordIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
        }, void 0, false, {
            fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
function DingTalkIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 10.8l-3.12 2.88c-.08.08-.12.16-.16.28l-.52 1.84c-.04.12-.2.16-.28.04l-1.2-1.4c-.08-.08-.16-.12-.28-.12l-1.56.04c-.12 0-.2-.12-.12-.24l1.44-2.04c.04-.08.04-.16 0-.24L8.6 10.72c-.08-.12 0-.28.16-.24l2.32.52c.08.04.2 0 .24-.08l1.6-2.68c.08-.12.24-.08.28.04l.28 2.72c0 .08.08.16.16.2l2.76.88c.16.04.16.24.04.32l-.36.24c-.08.04-.12.12-.08.2l.68 1.6c.04.12-.04.24-.16.2l-1.96-.44c-.08 0-.16 0-.2.08l-.72.84"
        }, void 0, false, {
            fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function Footer() {
    const { t, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$src$2f$i18n$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const [showQR, setShowQR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dingHover, setDingHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const footerLinks = {
        product: [
            {
                label: t.footer.features,
                href: "#features"
            },
            {
                label: t.footer.architecture,
                href: "#architecture"
            },
            {
                label: t.footer.quickStart,
                href: "#quickstart"
            },
            {
                label: t.footer.roadmap,
                href: "#"
            }
        ],
        community: [
            {
                label: t.footer.discord,
                href: "https://discord.gg/n6mV8xEYUF",
                external: true
            },
            {
                label: "X",
                href: "#",
                external: true
            },
            {
                label: "GitHub",
                href: "https://github.com/higress-group/hiclaw",
                external: true
            },
            {
                label: "DingTalk",
                href: "#dingtalk-qr",
                external: false
            }
        ],
        resources: [
            {
                label: t.footer.documentation,
                href: "https://github.com/higress-group/hiclaw/tree/main/docs",
                external: true
            },
            {
                label: t.footer.blog,
                href: "https://github.com/higress-group/hiclaw/tree/main/blog",
                external: true
            },
            {
                label: t.footer.changelog,
                href: "#"
            }
        ]
    };
    const socialLinks = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
            href: "https://github.com/higress-group/hiclaw",
            label: "GitHub"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
            href: "#",
            label: "Twitter"
        },
        {
            icon: DiscordIcon,
            href: "https://discord.gg/n6mV8xEYUF",
            label: "Discord"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-slate-200 bg-surface-muted",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-container py-12 md:py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-8 md:grid-cols-2 lg:grid-cols-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo-full.png",
                                            alt: "HiClaw",
                                            width: 120,
                                            height: 40,
                                            className: "h-6 w-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-xs text-sm text-text-secondary",
                                        children: t.footer.description
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex gap-4",
                                        children: [
                                            socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: social.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-text-secondary transition-all hover:border-primary-300 hover:text-primary-600",
                                                    "aria-label": social.label,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this)
                                                }, social.label, false, {
                                                    fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowQR(true),
                                                onMouseEnter: ()=>setDingHover(true),
                                                onMouseLeave: ()=>setDingHover(false),
                                                className: "flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 transition-all hover:border-primary-300",
                                                "aria-label": "DingTalk",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-5 w-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/dingtalk-icon.jpg",
                                                            alt: "DingTalk",
                                                            width: 20,
                                                            height: 20,
                                                            className: "h-5 w-5 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 rounded-full transition-opacity",
                                                            style: {
                                                                backgroundColor: "#4F47DC",
                                                                mixBlendMode: "color",
                                                                opacity: dingHover ? 1 : 0
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-text-primary",
                                        children: t.footer.product
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-3",
                                        children: footerLinks.product.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "text-sm text-text-secondary transition-colors hover:text-primary-600",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this)
                                            }, link.label, false, {
                                                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-text-primary",
                                        children: t.footer.community
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-3",
                                        children: footerLinks.community.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: link.label === "DingTalk" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowQR(true),
                                                    className: "text-sm text-text-secondary transition-colors hover:text-primary-600",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    target: link.external ? "_blank" : undefined,
                                                    rel: link.external ? "noopener noreferrer" : undefined,
                                                    className: "text-sm text-text-secondary transition-colors hover:text-primary-600",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 21
                                                }, this)
                                            }, link.label, false, {
                                                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-text-primary",
                                        children: t.footer.resources
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-3",
                                        children: footerLinks.resources.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    target: link.external ? "_blank" : undefined,
                                                    rel: link.external ? "noopener noreferrer" : undefined,
                                                    className: "text-sm text-text-secondary transition-colors hover:text-primary-600",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this)
                                            }, link.label, false, {
                                                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 border-t border-slate-200 pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-text-secondary",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " ",
                                t.footer.copyright
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            showQR && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                onClick: ()=>setShowQR(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-2xl bg-white p-6 shadow-xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowQR(false),
                            className: "absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 text-center font-semibold text-text-primary",
                            children: locale === "zh" ? "钉钉扫码加入群聊" : "Scan to join DingTalk group"
                        }, void 0, false, {
                            fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/dingtalk-qr.png",
                            alt: "DingTalk QR Code",
                            width: 240,
                            height: 240,
                            className: "h-60 w-60"
                        }, void 0, false, {
                            fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                    lineNumber: 210,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hiclaw/src/components/layout/Footer.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3afb1d05._.js.map