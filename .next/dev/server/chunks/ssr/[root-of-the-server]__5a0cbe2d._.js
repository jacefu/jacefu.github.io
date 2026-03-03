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
            quickStart: "Quick Start",
            viewOnGithub: "View on GitHub",
            terminal: "terminal"
        },
        // Features Section
        features: {
            title: "Why HiClaw?",
            subtitle: "Designed for multi-agent collaboration, enabling AI Agent teams to work as efficiently as human teams",
            items: [
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
                },
                {
                    title: "Quick Start",
                    description: "Complete setup in minutes with built-in example task templates, experience the power of multi-agent collaboration immediately."
                }
            ]
        },
        // Architecture Section
        arch: {
            title: "System Architecture",
            subtitle: "Distributed Agent team architecture based on Matrix protocol, humans can join any room at any time to observe and intervene.",
            points: [
                {
                    title: "Matrix Homeserver",
                    description: "All communications happen in Matrix rooms, messages are persistently stored, supports end-to-end encryption"
                },
                {
                    title: "Manager Agent",
                    description: "Receives tasks, decomposes subtasks, assigns to Workers, monitors execution progress"
                },
                {
                    title: "Worker Agents",
                    description: "Focuses on executing specific tasks, customizable capabilities, supports parallel processing"
                }
            ],
            diagram: {
                homeserver: "Matrix Homeserver",
                human: "Human",
                main: "#main",
                managerAgent: "Manager Agent",
                legend: [
                    "Human can",
                    "observe &",
                    "intervene"
                ]
            }
        },
        // Quick Start Section
        quickstart: {
            title: "Quick Start",
            subtitle: "Get started with HiClaw in three steps and experience the power of multi-agent collaboration",
            steps: [
                {
                    id: "install",
                    title: "Install",
                    description: "Install HiClaw using pip"
                },
                {
                    id: "init",
                    title: "Initialize",
                    description: "Initialize configuration files and Matrix connection"
                },
                {
                    id: "run",
                    title: "Run",
                    description: "Start Agent team to execute tasks"
                }
            ],
            completeExample: "Complete Example",
            comments: {
                install: "# 1. Install HiClaw",
                init: "# 2. Initialize configuration",
                run: "# 3. Run your first task",
                output: "# Output:",
                manager1: "# [Manager] Task received, analyzing...",
                manager2: "# [Manager] Created subtasks: research, analysis, writing",
                worker1: "# [Worker-1] Starting research task...",
                worker2: "# [Worker-2] Preparing analysis framework...",
                worker3: "# [Worker-3] Ready for summary writing...",
                observe: "# You can now open your Matrix client to observe the conversation!"
            }
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
            quickStart: "快速开始",
            viewOnGithub: "在 GitHub 查看",
            terminal: "终端"
        },
        // Features Section
        features: {
            title: "为什么选择 HiClaw？",
            subtitle: "专为多 Agent 协作场景设计，让 AI Agent 团队像人类团队一样高效协作",
            items: [
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
                },
                {
                    title: "快速上手",
                    description: "数分钟完成安装配置，内置示例任务模板，立即体验多 Agent 协作的强大能力。"
                }
            ]
        },
        // Architecture Section
        arch: {
            title: "系统架构",
            subtitle: "基于 Matrix 协议的分布式 Agent 团队架构，人类可以随时加入任意房间观察和干预。",
            points: [
                {
                    title: "Matrix 服务器",
                    description: "所有通信发生在 Matrix 房间，消息持久化存储，支持端到端加密"
                },
                {
                    title: "Manager Agent",
                    description: "接收任务、分解子任务、分配给 Worker，监控执行进度"
                },
                {
                    title: "Worker Agents",
                    description: "专注执行具体任务，可自定义能力，支持并行处理"
                }
            ],
            diagram: {
                homeserver: "Matrix 服务器",
                human: "人类",
                main: "#main",
                managerAgent: "Manager Agent",
                legend: [
                    "人类可以",
                    "随时观察",
                    "并介入"
                ]
            }
        },
        // Quick Start Section
        quickstart: {
            title: "快速开始",
            subtitle: "三步开始使用 HiClaw，体验多 Agent 协作的强大能力",
            steps: [
                {
                    id: "install",
                    title: "安装",
                    description: "使用 pip 安装 HiClaw"
                },
                {
                    id: "init",
                    title: "初始化",
                    description: "初始化配置文件和 Matrix 连接"
                },
                {
                    id: "run",
                    title: "运行",
                    description: "启动 Agent 团队执行任务"
                }
            ],
            completeExample: "完整示例",
            comments: {
                install: "# 1. 安装 HiClaw",
                init: "# 2. 初始化配置",
                run: "# 3. 运行你的第一个任务",
                output: "# 输出：",
                manager1: "# [Manager] 收到任务，正在分析...",
                manager2: "# [Manager] 创建子任务：研究、分析、撰写",
                worker1: "# [Worker-1] 开始研究任务...",
                worker2: "# [Worker-2] 准备分析框架...",
                worker3: "# [Worker-3] 准备撰写摘要...",
                observe: "# 现在可以打开 Matrix 客户端观察对话了！"
            }
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
"[project]/hiclaw/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/hiclaw/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
"use client";
;
;
;
;
const navLinks = [
    {
        href: "#features",
        label: "Features"
    },
    {
        href: "#architecture",
        label: "Architecture"
    },
    {
        href: "#quickstart",
        label: "Quick Start"
    },
    {
        href: "https://github.com/hiclaw/hiclaw",
        label: "Docs",
        external: true
    }
];
function Navbar() {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
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
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-white",
                                        children: "H"
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold text-text-primary",
                                    children: "HiClaw"
                                }, void 0, false, {
                                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                            lineNumber: 37,
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
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex md:items-center md:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://github.com/hiclaw/hiclaw",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-text-primary transition-all hover:border-primary-300 hover:bg-primary-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "GitHub"
                                        }, void 0, false, {
                                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#quickstart",
                                    className: "rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-700",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                            lineNumber: 60,
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
                                lineNumber: 85,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-6 w-6 text-text-primary"
                            }, void 0, false, {
                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                    lineNumber: 35,
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
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-col gap-2 px-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://github.com/hiclaw/hiclaw",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-text-primary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "GitHub"
                                            }, void 0, false, {
                                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hiclaw$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#quickstart",
                                        className: "rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white",
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: "Get Started"
                                    }, void 0, false, {
                                        fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hiclaw/src/components/layout/Navbar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5a0cbe2d._.js.map