export const translations = {
  en: {
    // Navbar
    nav: {
      features: "Features",
      architecture: "Architecture",
      quickStart: "Quick Start",
      docs: "Docs",
      github: "GitHub",
      getStarted: "Get Started",
    },

    // Hero Section
    hero: {
      badge: {
        openSource: "Open Source",
        poweredBy: "Powered by Matrix",
      },
      title: {
        line1: "Open Source",
        highlight: "Agent Team",
        line2: "System",
      },
      subtitle:
        "Let multiple AI Agents collaborate in Matrix rooms, fully visible to humans, with real-time intervention capability.",
      subtitleLine2:
        "Manager Agent coordinates multiple Worker Agents to complete complex tasks.",
      subtitleLine3:
        "Fast-track your OPOC (One Person One Company) and enterprise digital workforce.",
      quickStart: "Quick Start",
      viewOnGithub: "View on GitHub",
      terminal: "terminal",
    },

    // Features Section
    features: {
      title: "Why HiClaw?",
      subtitle:
        "Featuring enterprise-grade security and designed specifically for multi-agent collaboration, enabling AI agent teams to work together as efficiently as human teams",
      items: [
        {
          title: "Enterprise Security",
          description:
            "Workers never hold real API keys or GitHub PATs. They only carry a consumer token (like a badge). Even a compromised Worker can't leak your credentials.",
        },
        {
          title: "Multi-Agent Collaboration",
          description:
            "Manager Agent intelligently decomposes tasks and coordinates multiple Worker Agents for parallel execution, significantly improving complex task handling.",
        },
        {
          title: "Matrix Protocol",
          description:
            "Built on the open Matrix IM protocol, all Agent communications are transparent and auditable, with native support for distributed deployment and federation.",
        },
        {
          title: "Human Supervision",
          description:
            "Humans can enter any Matrix room at any time to observe Agent conversations, intervene or correct Agent behavior in real-time, ensuring safety and control.",
        },
        {
          title: "Manager-Worker Architecture",
          description:
            "Clear two-tier Manager-Worker architecture with distinct responsibilities, easy to extend with custom Worker Agents for different scenarios.",
        },
        {
          title: "Fully Open Source",
          description:
            "Completely open source, community-driven development, no vendor lock-in, supports local private deployment with full data sovereignty.",
        },
      ],
    },

    // Architecture Section
    arch: {
      title: "System Architecture",
      subtitle:
        "Matrix-based collaboration hub with Higress AI Gateway providing a security and governance layer — agents never hold real credentials.",
      points: [
        {
          title: "Collaboration Hub (Matrix Based)",
          description:
            "Manager Agent orchestrates Control Flow, Worker Agents handle Task Flow, all communicating through a central Matrix Server with end-to-end encryption. Humans observe via Matrix Client.",
        },
        {
          title: "Security & Governance Layer",
          description:
            "Credentials pass-through and secure API proxy ensure no keys are held by agents. Even a compromised Worker cannot leak your credentials.",
        },
        {
          title: "Higress AI Gateway",
          description:
            "Central gateway providing secure external API access to LLM providers (Qwen, Claude, OpenAI, local models) and external APIs / MCP Servers / Skills.",
        },
      ],
    },

    // Quick Start Section
    quickstart: {
      title: "Quick Start",
      subtitle:
        "One command to install. The script asks for your LLM API key, then sets everything up.",
      prerequisite: "Prerequisites",
      prerequisiteDesc:
        "Docker Desktop (Windows/macOS) or Docker Engine (Linux). That's all.",
      dockerItems: [
        "Docker Desktop (Windows / macOS)",
        "Docker Engine (Linux) or Podman Desktop (alternative)",
      ],
      resourceNote:
        "The Docker VM needs at least 2 CPU cores and 4 GB RAM. In Docker Desktop, go to Settings → Resources to adjust.",
      outputTitle: "When it's done:",
      outputLines: [
        "=== HiClaw Manager Started! ===",
        "  Open: http://127.0.0.1:18088",
        '  Login: admin / [generated password]',
        '  Tell the Manager: "Create a Worker named alice for frontend dev"',
      ],
      tabMacLinux: "macOS / Linux",
      tabWindows: "Windows (PowerShell 7+)",
    },

    // Footer
    footer: {
      description:
        "Open Source Agent Team System. Let multiple AI Agents collaborate in Matrix rooms, fully visible to humans, with real-time intervention capability.",
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
      copyright: "HiClaw. Open Source under Apache 2.0 License.",
    },
  },

  zh: {
    // Navbar
    nav: {
      features: "特性",
      architecture: "架构",
      quickStart: "快速开始",
      docs: "文档",
      github: "GitHub",
      getStarted: "开始使用",
    },

    // Hero Section
    hero: {
      badge: {
        openSource: "开源项目",
        poweredBy: "基于 Matrix 协议",
      },
      title: {
        line1: "开源",
        highlight: "Agent 团队",
        line2: "协作系统",
      },
      subtitle:
        "让多个 AI Agent 在 Matrix 房间中协作，人类全程可见、随时可介入。",
      subtitleLine2: "Manager Agent 协调多个 Worker Agent，完成复杂任务。",
      subtitleLine3: "加速实现 OPOC（一人一公司）和企业数字员工。",
      quickStart: "快速开始",
      viewOnGithub: "在 GitHub 查看",
      terminal: "终端",
    },

    // Features Section
    features: {
      title: "为什么选择 HiClaw？",
      subtitle:
        "具备企业级安全性，专为多 Agent 协作场景设计，让 AI Agent 团队像人类团队一样高效协作",
      items: [
        {
          title: "企业级安全",
          description:
            "Worker 永远不会持有真实的 API 密钥或 GitHub PAT，它们仅携带消费者令牌（类似工牌）。即使 Worker 被攻破，也无法泄露您的凭证。",
        },
        {
          title: "多 Agent 协作",
          description:
            "Manager Agent 智能分解任务，协调多个 Worker Agent 并行执行，大幅提升复杂任务处理能力。",
        },
        {
          title: "Matrix 协议驱动",
          description:
            "基于开放的 Matrix IM 协议，所有 Agent 通信透明可审计，天然支持分布式部署和联邦通信。",
        },
        {
          title: "人工全程监督",
          description:
            "人类可随时进入任意 Matrix 房间观察 Agent 对话，实时干预或修正 Agent 行为，确保安全可控。",
        },
        {
          title: "Manager-Worker 架构",
          description:
            "清晰的 Manager-Worker 两层架构，职责分明，易于扩展自定义 Worker Agent 以适应不同场景。",
        },
        {
          title: "完全开源",
          description:
            "代码完全开放，社区驱动开发，无供应商锁定，支持本地私有化部署，数据完全自主可控。",
        },
      ],
    },

    // Architecture Section
    arch: {
      title: "系统架构",
      subtitle:
        "基于 Matrix 协议的协作中枢，Higress AI 网关提供安全治理层——Agent 永不持有真实凭证。",
      points: [
        {
          title: "协作中枢（基于 Matrix）",
          description:
            "Manager Agent 编排控制流，Worker Agent 处理任务流，所有通信经由中央 Matrix 服务器并支持端到端加密。人类通过 Matrix 客户端观察。",
        },
        {
          title: "安全治理层",
          description:
            "凭证透传与安全 API 代理确保 Agent 不持有任何密钥。即使 Worker 被攻破，也无法泄露您的凭证。",
        },
        {
          title: "Higress AI 网关",
          description:
            "中央网关提供安全的外部 API 访问，连接 LLM 提供商（通义千问、Claude、OpenAI、本地模型）和外部 API / MCP 服务器 / Skills。",
        },
      ],
    },

    // Quick Start Section
    quickstart: {
      title: "快速开始",
      subtitle:
        "一行命令完成安装。脚本会要求输入 LLM API Key，然后自动完成所有配置。",
      prerequisite: "前置条件",
      prerequisiteDesc:
        "Docker Desktop（Windows/macOS）或 Docker Engine（Linux），仅此而已。",
      dockerItems: [
        "Docker Desktop（Windows / macOS）",
        "Docker Engine（Linux）或 Podman Desktop（替代方案）",
      ],
      resourceNote:
        "Docker 虚拟机至少需要 2 核 CPU 和 4 GB 内存。在 Docker Desktop 中，前往 Settings → Resources 调整。",
      outputTitle: "安装完成后：",
      outputLines: [
        "=== HiClaw Manager Started! ===",
        "  Open: http://127.0.0.1:18088",
        '  Login: admin / [生成的密码]',
        '  Tell the Manager: "创建一个名为 alice 的前端开发 Worker"',
      ],
      tabMacLinux: "macOS / Linux",
      tabWindows: "Windows (PowerShell 7+)",
    },

    // Footer
    footer: {
      description:
        "开源 Agent 团队系统。让多个 AI Agent 在 Matrix 房间中协作，人类全程可见、随时可介入。",
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
      copyright: "HiClaw. 基于 Apache 2.0 许可证开源。",
    },
  },
};

export type Locale = "en" | "zh";

export type TranslationKeys = typeof translations.en;
