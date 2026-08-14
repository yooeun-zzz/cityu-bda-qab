export type CourseGuide = {
  chineseTitle: string;
  assessment: string;
  coreContent: string;
  courseFoundation: string;
  tools: string[];
};

// 按同学提供的网传《QAB选课指导》表格逐项整理。材料并非 CityU 官方文件，
// 且部分信息来自往届课程；考核方式、教学内容与课程基础须以当年课程大纲为准。
export const COURSE_GUIDE: Record<string, CourseGuide> = {
  IS5413: {
    chineseTitle: "数据库管理系统",
    assessment: "30%小组项目（含报告与展示）+70%笔试",
    coreContent: "介绍数据库系统基础概念，涵盖数据库设计、关系模型、SQL及进阶主题，培养数据库应用设计与实现能力",
    courseFoundation: "基础编程",
    tools: ["SQL", "Database Design"],
  },
  IS6335: {
    chineseTitle: "数据可视化",
    assessment: "10%课堂参与+30%作业+20%小组项目+40%个人项目",
    coreContent: "教授商业场景下的数据可视化概念、方法与工具，涵盖Tableau、R/Python可视化工具，培养可视化分析能力",
    courseFoundation: "统计学基础",
    tools: ["Tableau", "R / Python", "Dashboard"],
  },
  MS5217: {
    chineseTitle: "统计数据分析",
    assessment: "60%作业+40%笔试",
    coreContent: "介绍统计分析基础概念、原理与计算工具，覆盖R编程、概率统计、线性回归等内容，为后续进阶课程打下定量基础",
    courseFoundation: "无前置课程要求",
    tools: ["Statistics", "R"],
  },
  MS6711: {
    chineseTitle: "数据挖掘",
    assessment: "10%作业+50%小组项目+40%笔试",
    coreContent: "介绍适用于商业场景的实用数据挖掘与机器学习算法，涵盖偏差方差权衡、交叉验证及伦理问题，要求使用Python完成实操分析",
    courseFoundation: "Python编程、统计学",
    tools: ["Python", "Machine Learning"],
  },
  MS5218: {
    chineseTitle: "应用线性统计模型",
    assessment: "30%小组项目+30%课程测试+40%期末考试",
    coreContent: "介绍线性统计模型的统计概念与方法，涵盖多元回归、方差分析、逻辑回归、时间序列分析、贝叶斯线性回归等，培养商业问题解决能力",
    courseFoundation: "高等数学、概率论",
    tools: ["R", "Regression"],
  },
  MS5215: {
    chineseTitle: "人工智能增强的Excel与Python商业分析",
    assessment: "40%作业+30%小组项目+30%笔试",
    coreContent: "教授使用Excel与Python结合AI工具解决复杂商业问题的分析建模能力，涵盖数据处理、数据挖掘、商业案例全流程应用",
    courseFoundation: "Excel基础",
    tools: ["Excel", "Python", "AI"],
  },
  MS5216: {
    chineseTitle: "决策分析",
    assessment: "40%持续评估+60%笔试",
    coreContent: "介绍基于证据的商业决策所需的优化模型与方法，涵盖线性整数规划、凸优化、非线性优化，及其在统计估计、机器学习、金融组合优化中的应用",
    courseFoundation: "线性代数",
    tools: ["Excel", "Optimization"],
  },
  MS5223: {
    chineseTitle: "项目管理",
    assessment: "25%实践练习+25%案例报告+50%笔试",
    coreContent: "介绍项目管理基础概念与核心方法，涵盖项目规划、成本控制、风险管理、敏捷框架、现代工具应用等内容，培养项目管理能力",
    courseFoundation: "无前置课程要求",
    tools: ["Planning", "Risk", "Teamwork"],
  },
  MS5318: {
    chineseTitle: "Excel与R预测分析",
    assessment: "10%课堂参与+25%个人作业+15%小组项目+20%随堂测试+30%期末考试",
    coreContent: "面向零基础学习者介绍预测分析的统计概念与方法，涵盖基础统计分析、各类回归模型、模型选择，使用Excel与R解决真实商业预测问题",
    courseFoundation: "无前置课程要求",
    tools: ["Excel", "R", "Prediction"],
  },
  MS6211: {
    chineseTitle: "风险管理统计建模",
    assessment: "10%课堂参与+30%小组项目+30%书面作业+30%测试",
    coreContent: "介绍商业风险管理的统计建模与计算技能，涵盖不同风险类型的管理、信用评分卡构建与评估、操作风险对冲策略等内容",
    courseFoundation: "概率统计基础",
    tools: ["Statistics", "Risk Modeling"],
  },
  MS6219: {
    chineseTitle: "商业预测建模与预测",
    assessment: "20%作业+30%预测项目+50%期末考试",
    coreContent: "教授商业场景下的预测建模技术，涵盖各类预测方法、模型评估，培养学生构建可靠预测模型支持商业决策的能力",
    courseFoundation: "应用线性统计基础",
    tools: ["Forecasting", "Time Series"],
  },
  MS6221: {
    chineseTitle: "营销预测建模",
    assessment: "30%作业+40%期中闭卷测试+30%项目",
    coreContent: "介绍数据驱动营销的现代预测建模方法，涵盖核心建模方法、不同数据类型分析、营销核心领域应用，培养使用Python分析营销数据的能力",
    courseFoundation: "Python编程",
    tools: ["Marketing Analytics", "Python"],
  },
  MS6601: {
    chineseTitle: "经济与金融统计建模",
    assessment: "15%作业+15%期中测试+20%项目+50%期末考试",
    coreContent: "介绍金融计量学的高级统计技术，涵盖线性时间序列、波动率建模、协整分析、因子模型等内容，聚焦经济金融领域应用",
    courseFoundation: "微观经济学、概率论",
    tools: ["Econometrics", "Time Series"],
  },
  MS6712: {
    chineseTitle: "商业定量分析当代主题",
    assessment: "30%作业/案例报告+30%项目+40%期末考试",
    coreContent: "拓展商业定量分析知识，讲解课程大纲中未覆盖的进阶定量技术，主题每年根据学生兴趣与师资调整",
    courseFoundation: "完成核心定量课程学习",
    tools: ["Contemporary Topics"],
  },
  EF5560: {
    chineseTitle: "金融科技与金融人工智能",
    assessment: "60%持续评估+40%期末考试",
    coreContent: "全面介绍区块链、加密货币，以及AI驱动的量化投资策略，适合无基础学习者，涵盖区块链基础、机器学习在量化投资中的应用",
    courseFoundation: "无前置课程要求",
    tools: ["FinTech", "AI", "Finance"],
  },
};
