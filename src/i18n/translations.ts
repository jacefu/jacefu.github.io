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
      quickStart: "Quick Start",
      viewOnGithub: "View on GitHub",
      terminal: "terminal",
    },

    // Features Section
    features: {
      title: "Why HiClaw?",
      subtitle:
        "Designed for multi-agent collaboration, enabling AI Agent teams to work as efficiently as human teams",
      items: [
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
        {
          title: "Quick Start",
          description:
            "Complete setup in minutes with built-in example task templates, experience the power of multi-agent collaboration immediately.",
        },
      ],
    },

    // Architecture Section
    arch: {
      title: "System Architecture",
      subtitle:
        "Distributed Agent team architecture based on Matrix protocol, humans can join any room at any time to observe and intervene.",
      points: [
        {
          title: "Matrix Homeserver",
          description:
            "All communications happen in Matrix rooms, messages are persistently stored, supports end-to-end encryption",
        },
        {
          title: "Manager Agent",
          description:
            "Receives tasks, decomposes subtasks, assigns to Workers, monitors execution progress",
        },
        {
          title: "Worker Agents",
          description:
            "Focuses on executing specific tasks, customizable capabilities, supports parallel processing",
        },
      ],
      diagram: {
        homeserver: "Matrix Homeserver",
        human: "Human",
        main: "#main",
        managerAgent: "Manager Agent",
        legend: ["Human can", "observe &", "intervene"],
      },
    },

    // Quick Start Section
    quickstart: {
      title: "Quick Start",
      subtitle:
        "Get started with HiClaw in three steps and experience the power of multi-agent collaboration",
      steps: [
        {
          id: "install",
          title: "Install",
          description: "Install HiClaw using pip",
        },
        {
          id: "init",
          title: "Initialize",
          description: "Initialize configuration files and Matrix connection",
        },
        {
          id: "run",
          title: "Run",
          description: "Start Agent team to execute tasks",
        },
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
        observe: "# You can now open your Matrix client to observe the conversation!",
      },
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
      quickStart: "快速开始",
      viewOnGithub: "在 GitHub 查看",
      terminal: "终端",
    },

    // Features Section
    features: {
      title: "为什么选择 HiClaw？",
      subtitle:
        "专为多 Agent 协作场景设计，让 AI Agent 团队像人类团队一样高效协作",
      items: [
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
        {
          title: "快速上手",
          description:
            "数分钟完成安装配置，内置示例任务模板，立即体验多 Agent 协作的强大能力。",
        },
      ],
    },

    // Architecture Section
    arch: {
      title: "系统架构",
      subtitle:
        "基于 Matrix 协议的分布式 Agent 团队架构，人类可以随时加入任意房间观察和干预。",
      points: [
        {
          title: "Matrix 服务器",
          description:
            "所有通信发生在 Matrix 房间，消息持久化存储，支持端到端加密",
        },
        {
          title: "Manager Agent",
          description: "接收任务、分解子任务、分配给 Worker，监控执行进度",
        },
        {
          title: "Worker Agents",
          description: "专注执行具体任务，可自定义能力，支持并行处理",
        },
      ],
      diagram: {
        homeserver: "Matrix 服务器",
        human: "人类",
        main: "#main",
        managerAgent: "Manager Agent",
        legend: ["人类可以", "随时观察", "并介入"],
      },
    },

    // Quick Start Section
    quickstart: {
      title: "快速开始",
      subtitle: "三步开始使用 HiClaw，体验多 Agent 协作的强大能力",
      steps: [
        {
          id: "install",
          title: "安装",
          description: "使用 pip 安装 HiClaw",
        },
        {
          id: "init",
          title: "初始化",
          description: "初始化配置文件和 Matrix 连接",
        },
        {
          id: "run",
          title: "运行",
          description: "启动 Agent 团队执行任务",
        },
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
        observe: "# 现在可以打开 Matrix 客户端观察对话了！",
      },
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
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
