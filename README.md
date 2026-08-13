# CityU BDA QAB 选课板

面向 City University of Hong Kong MSc Business and Data Analytics（Quantitative Analysis for Business Stream）2026/27 Full-time 同学的非官方静态课表规划工具。可浏览实际开课班次、选择 Section、检测日期与时间冲突，并跨 Semester A、B、Summer 汇总 QAB 培养方案学分。

## 数据范围

数据快照为 2026-08-13，覆盖 14 门实际开课课程、17 个课程—学期组合，并保留培养方案内未查到开课记录的 MS6712。余位只反映快照，不是实时数据；教师、时间、地点与注册状态均应以 CityU AIMS 为准。

原始保存页默认位于：

- `/Users/zzz/Desktop/QAB-sem A/`
- `/Users/zzz/Desktop/QAB-sem B/`
- `/Users/zzz/Desktop/QAB-sem S/`

## 更新与验证

重新导入：

```bash
python3 scripts/import_aims.py
```

如文件位置变化，可使用 `--sem-a`、`--sem-b`、`--summer` 指定目录。导入器只读取课程详情 HTML，输出清理后的 `public/data/courses.json`。字段定义见 `docs/data-schema.md`。

运行数据校验与网站测试：

```bash
python3 scripts/validate_data.py
npm test
```

更新新快照时，用新的本地保存页替换三个私有目录中的对应详情页，调整脚本中的学年、快照日期与文件清单，重新导入、校验并人工抽查。

## 本地预览

```bash
npm install
npm run dev
```

按终端显示的本地地址访问。用户选择仅存于浏览器 `localStorage`。

## GitHub Pages

项目的公开静态文件使用相对路径，适合部署到 `https://<username>.github.io/cityu-bda-qab/` 子路径。推送仓库后，在 GitHub **Settings → Pages** 选择 GitHub Actions，并使用 `.github/workflows/pages.yml` 发布。

## 公开发布安全

**绝对不要把原始 AIMS HTML、网页资源文件夹或任何可能含登录/会话信息的文件上传到公开仓库。** 只发布清理后的课程 JSON、网站源码、脚本、测试与文档。`.gitignore` 已排除原始 HTML、AIMS 资源目录、日志和环境文件。

本网站不会连接 AIMS，不会提交正式选课，也不收集姓名、学号、账号或个人课表。
