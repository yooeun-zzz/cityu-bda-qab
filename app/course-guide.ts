export type CourseGuide = {
  chineseTitle: string;
  focus: string;
  assessment: string;
  tools: string[];
  preparation: string;
};

// 根据同学提供的网传《QAB选课指导》整理。材料并非 CityU 官方文件，
// 且部分信息来自往届课程；考核比例与教学内容必须以当年课程大纲为准。
export const COURSE_GUIDE: Record<string, CourseGuide> = {
  IS5413: {
    chineseTitle: "数据库管理系统",
    focus: "关系数据库设计、ER 模型、规范化、SQL，以及事务与数据库管理的基础概念。",
    assessment: "网传参考：约 30% 小组／项目 + 70% 考试。",
    tools: ["SQL", "Database Design"],
    preparation: "无需把数据库学到很深再入门；提前熟悉表、主键、外键和基础 SQL 会更顺手。",
  },
  IS6335: {
    chineseTitle: "数据可视化",
    focus: "可视化设计原则、图表选择、交互式仪表板和数据叙事，并涉及 Tableau 与编程可视化。",
    assessment: "网传参考：10% 课堂参与 + 30% 作业 + 20% 小组项目 + 40% 个人项目。",
    tools: ["Tableau", "R / Python", "Dashboard"],
    preparation: "建议先理解常见图表的适用场景，并准备好做展示与项目作品。",
  },
  MS5217: {
    chineseTitle: "统计数据分析",
    focus: "描述统计、概率与抽样、假设检验、回归和方差分析，是后续建模课程的统计基础。",
    assessment: "网传参考：约 60% 作业 + 40% 考试。",
    tools: ["Statistics", "R"],
    preparation: "建议复习概率、描述统计和基础微积分；没有正式先修课也值得提前温习。",
  },
  MS6711: {
    chineseTitle: "数据挖掘",
    focus: "数据预处理、分类、聚类、关联规则与模型评估，强调把算法用于实际数据问题。",
    assessment: "网传材料显示作业、小组项目与考试结合；具体比例请以当年大纲为准。",
    tools: ["Python", "Machine Learning"],
    preparation: "先掌握 Python 基础、Pandas 数据处理和基本统计概念会更轻松。",
  },
  MS5218: {
    chineseTitle: "应用线性统计模型",
    focus: "线性回归、变量选择、模型诊断与解释，重视用真实数据建立和检验统计模型。",
    assessment: "网传材料显示小组项目、个人作业／测验与期末考试结合。",
    tools: ["R", "Regression"],
    preparation: "建议复习微积分、线性代数和基础统计；它也是多门进阶预测课程的重要基础。",
  },
  MS5215: {
    chineseTitle: "人工智能增强商业分析（Excel 与 Python）",
    focus: "用 Excel 与 Python 完成数据整理、商业分析和基础 AI／机器学习应用。",
    assessment: "网传参考：约 40% 作业 + 30% 小组项目 + 30% 考试。",
    tools: ["Excel", "Python", "AI"],
    preparation: "熟悉 Excel 常用函数，并补齐 Python 变量、循环、函数和 Pandas 基础。",
  },
  MS5216: {
    chineseTitle: "决策分析",
    focus: "把业务问题转成决策模型，涉及优化、情景分析与不确定性下的选择。",
    assessment: "网传参考：约 40% 作业 + 60% 考试。",
    tools: ["Excel", "Optimization"],
    preparation: "线性代数和电子表格建模基础有帮助；选课前请再核对正式先修要求。",
  },
  MS5223: {
    chineseTitle: "项目管理",
    focus: "项目范围、进度、成本、资源、风险与执行控制，偏向管理框架和实际项目应用。",
    assessment: "网传参考：约 25% 课堂参与 + 25% 小组报告 + 50% 考试。",
    tools: ["Planning", "Risk", "Teamwork"],
    preparation: "通常更依赖案例讨论、团队协作和结构化表达，而不是编程基础。",
  },
  MS5318: {
    chineseTitle: "Excel 与 R 预测分析",
    focus: "用 Excel 和 R 做回归、分类与预测分析，强调从数据到商业结论的完整流程。",
    assessment: "网传材料显示课堂参与、个人作业、小组项目与期末考试组合。",
    tools: ["Excel", "R", "Prediction"],
    preparation: "建议具备基础统计与表格操作能力；提前了解 R 的数据框和绘图语法。",
  },
  MS6211: {
    chineseTitle: "风险管理统计建模",
    focus: "用统计模型量化风险，覆盖风险度量、损失分布及信用／市场风险的建模思路。",
    assessment: "网传材料显示课堂参与、小组项目、个人作业与考试组合。",
    tools: ["Statistics", "Risk Modeling"],
    preparation: "概率统计基础较重要，适合希望把建模用于金融或风险场景的同学。",
  },
  MS6219: {
    chineseTitle: "商业预测建模与预测",
    focus: "时间序列、预测模型、模型比较与业务预测，把历史数据转化为可执行的预判。",
    assessment: "网传参考：约 20% 作业 + 30% 项目／测验 + 50% 考试。",
    tools: ["Forecasting", "Time Series"],
    preparation: "应用线性统计模型是重要基础；选择前请核对课程先修规则。",
  },
  MS6221: {
    chineseTitle: "营销预测建模",
    focus: "客户响应、细分、流失与营销效果预测，用模型支持获客、留存和资源配置。",
    assessment: "网传参考：约 30% 作业 + 40% 期中考试 + 30% 项目。",
    tools: ["Marketing Analytics", "Prediction"],
    preparation: "适合对营销分析感兴趣且愿意处理真实业务数据的同学。",
  },
  MS6601: {
    chineseTitle: "经济与金融统计建模",
    focus: "面向经济和金融数据的回归、计量与时间序列方法，重视模型解释和应用。",
    assessment: "网传材料显示作业、测验／项目与期末考试组合。",
    tools: ["Econometrics", "Time Series"],
    preparation: "微积分、线性代数与统计基础会直接影响学习体验。",
  },
  MS6712: {
    chineseTitle: "商业定量分析当代主题",
    focus: "围绕当期 QAB 热点展开专题学习；主题和工具会随开课安排变化。",
    assessment: "网传参考：约 30% 作业 + 30% 项目 + 40% 考试；当前学年未查到班次。",
    tools: ["Contemporary Topics"],
    preparation: "通常更适合已完成主要核心课的同学；当前不能加入课表。",
  },
  EF5560: {
    chineseTitle: "金融科技与金融人工智能",
    focus: "金融科技、AI 在金融中的应用、金融大数据与风险场景，兼顾概念和案例。",
    assessment: "网传参考：约 60% 课程作业／项目 + 40% 期末考试。",
    tools: ["FinTech", "AI", "Finance"],
    preparation: "没有金融背景也可先从常见金融业务、信用风险和机器学习概念入手。",
  },
};
