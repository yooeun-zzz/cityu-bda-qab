import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"CityU BDA QAB 选课板",description:"2026/27 CityU MSc Business and Data Analytics QAB Stream 非官方课表规划工具",icons:{icon:"./favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hans"><body>{children}</body></html>}
