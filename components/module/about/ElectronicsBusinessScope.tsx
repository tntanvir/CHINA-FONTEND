"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cpu,
  Layers,
  Wrench,
  Boxes,
  Microchip,
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Table as TableIcon,
  LayoutGrid,
  Maximize2,
  X,
  FileSpreadsheet,
  Download,
  ShieldCheck,
  Search,
} from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface BusinessScopeItem {
  id: string;
  titleEn: string;
  titleZh: string;
  descEn: string;
  descZh: string;
  fullDescEn: string;
  fullDescZh: string;
  capabilitiesEn: string[];
  capabilitiesZh: string[];
  placeholderText: string;
  placeholderUrl: string;
  imageUrl: string;
  icon: any;
  tagEn: string;
  tagZh: string;
}

export const BUSINESS_SCOPE_ITEMS: BusinessScopeItem[] = [
  {
    id: "pcb-design",
    titleEn: "PCB Design & Prototyping",
    titleZh: "PCB 设计与快速打样",
    descEn: "custom circuit boards, schematics, and layout prototypes",
    descZh: "定制电路板设计、电路原理图绘制与高精多层布线打样",
    fullDescEn:
      "End-to-end bare PCB engineering and rapid turnaround prototyping from schematic capture to precision fabrication. Specializing in high-density multi-layer bare boards, controlled impedance routing, laser microvias, and quick-turn precision manufacturing.",
    fullDescZh:
      "从电路原理图绘制到高精多层裸板布线与极速工程打样。精研差分阻抗控制、高频射频微波板与 HDI 盲埋孔叠层裸板制造。",
    capabilitiesEn: [
      "Bare PCB Schematic Capture & DRC Rules",
      "High-Speed Differential Impedance Routing (±5%)",
      "2 to 32 Layer Bare PCB Stackup Modeling",
      "24H - 48H Quick-Turn Bare Board Prototype Turnaround",
    ],
    capabilitiesZh: [
      "裸板原理图设计与高频布线规则检查",
      "高速差分阻抗精确布线与仿真 (±5%)",
      "2 至 32 层高密度多层裸板叠层建模",
      "24-48 小时加急工程裸板极速交付",
    ],
    placeholderText: "PCB+Design+Photo",
    placeholderUrl: "https://placehold.co/320x220?text=Bare+PCB+Design+Photo",
    imageUrl: "/images/generated/rigid_pcb.png",
    icon: Layers,
    tagEn: "Bare PCB Prototyping",
    tagZh: "裸板设计与工程打样",
  },
  {
    id: "device-repair",
    titleEn: "PCB Quality Diagnostics & E-Testing",
    titleZh: "裸板电气测试与高精飞针诊断",
    descEn: "bare board flying-probe testing, netlist continuity, and isolation",
    descZh: "裸板飞针电测、网表通断率检测与高阻抗开短路隔离诊断",
    fullDescEn:
      "Comprehensive bare PCB electrical testing bench capabilities covering IPC Class 2/3 netlist verification, dual-sided flying probe isolation testing, 4-wire Kelvin micro-resistance measurement, and thermal stress impedance validation.",
    fullDescZh:
      "配备工业级裸板电气测试中心，覆盖 IPC Class 2/3 网表电气连续性检测、双面高速飞针开短路测试、四线开尔文微欧姆测量及热应力阻抗一致性验证。",
    capabilitiesEn: [
      "100% Netlist Flying-Probe Continuity Testing",
      "4-Wire Kelvin Micro-Ohm Via Resistance Measurement",
      "High-Voltage Spark & Hi-Pot Isolation Testing",
      "TDR Impedance Coupon Polar Analysis (±5%)",
    ],
    capabilitiesZh: [
      "100% 网表高速飞针连续性与通断测试",
      "四线开尔文微电阻孔铜导通测量",
      "高压火花与耐压击穿绝缘测试",
      "Polar CITS TDR 阻抗测试条精准分析 (±5%)",
    ],
    placeholderText: "PCB+Testing+Photo",
    placeholderUrl: "https://placehold.co/320x220?text=Bare+PCB+Testing+Photo",
    imageUrl: "/images/categories/pcb-manufacture/testing-1.jpg",
    icon: Wrench,
    tagEn: "Bare Board Inspection & E-Test",
    tagZh: "裸板电测与出厂品控",
  },
  {
    id: "component-sourcing",
    titleEn: "Specialty Laminates & High-Tg Raw Materials",
    titleZh: "高频特殊覆铜基板与高精铜箔配套",
    descEn: "Shengyi, Rogers, Panasonic Megtron, aluminum core, and high-Tg substrates",
    descZh: "生益高Tg基材、罗杰斯高频板材、松下极低损耗板材与导热金属基板配套",
    fullDescEn:
      "Direct certified sourcing of premium Copper Clad Laminates (CCL), prepregs, and specialized dielectric materials. Authorized partnerships with Shengyi (S1000-2M), Rogers (RO4350B, RO4003C), Panasonic (Megtron 6), and Bergquist thermal metal substrates.",
    fullDescZh:
      "直联全球顶级覆铜板（CCL）与半固化片（PP）原厂。长期现货备库生益科技（S1000-2M、IT-180A）、罗杰斯（RO4350B、RO4003C）、松下（Megtron 6）及贝格斯高导热金属基材。",
    capabilitiesEn: [
      "Authentic Shengyi High-Tg S1000-2M & Rogers RF Materials",
      "Polyimide (PI) Film for Dynamic Flexible Circuits",
      "Heavy Copper Substrates up to 12oz (420µm)",
      "Strict Traceability with Factory Material Certificates (COC)",
    ],
    capabilitiesZh: [
      "生益科技高Tg、罗杰斯高频高导热正品基板直供",
      "高弯折无胶聚酰亚胺 (PI) 柔性电路基膜",
      "特种厚铜基板 (最高支持 12oz/420µm)",
      "全流程出厂原厂材质质量保证书 (COC)",
    ],
    placeholderText: "PCB+Materials+Photo",
    placeholderUrl: "https://placehold.co/320x220?text=Bare+PCB+Materials+Photo",
    imageUrl: "/images/generated/pcb2.png",
    icon: Boxes,
    tagEn: "Bare PCB Substrates & CCL",
    tagZh: "高精裸板基材与覆铜板",
  },
  {
    id: "embedded-systems",
    titleEn: "HDI & Flexible PCB Engineering",
    titleZh: "HDI 高密度互联与柔性/刚柔结合板研发",
    descEn: "any-layer HDI, laser microvias, and dynamic flex substrates",
    descZh: "任意阶HDI盲埋孔板、激光微孔工艺与高耐折柔性电路板研发",
    fullDescEn:
      "Cutting-edge bare circuit board manufacturing specializing in Any-Layer HDI (1+N+1 to 4+N+4), stacked laser microvias, ultra-thin flexible circuits (FPC), and rigid-flex board integration engineered for automotive electronics and aerospace telemetry.",
    fullDescZh:
      "专业制造任意层高密度互联（Any-Layer HDI）、激光叠孔微孔工艺、超薄高频柔性印制板（FPC）及刚柔结合板，专为汽车电子及高精传感器研发设计。",
    capabilitiesEn: [
      "Any-Layer HDI (up to 4-Stage Laser Microvias)",
      "Dynamic Bending FPC & Rigid-Flex Boards",
      "Controlled Impedance on Ultra-Thin Dielectrics",
      "Halogen-Free & Lead-Free RoHS / REACH Compliance",
    ],
    capabilitiesZh: [
      "任意阶 HDI 激光盲埋孔与叠孔工艺",
      "动态耐弯折纯柔性板与刚柔结合一体板",
      "超薄介质层高精度特性阻抗公差控制",
      "全系列无卤素环保工艺，符合 RoHS / REACH",
    ],
    placeholderText: "HDI+Flex+PCB+Photo",
    placeholderUrl: "https://placehold.co/320x220?text=Bare+Flex+PCB+Photo",
    imageUrl: "/images/generated/flexible_pcb.png",
    icon: Microchip,
    tagEn: "HDI & Flex Bare Circuit Boards",
    tagZh: "HDI与柔性裸板研发",
  },
];

export default function ElectronicsBusinessScope() {
  const { locale } = useLanguage();
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const [activeImage, setActiveImage] = useState<BusinessScopeItem | null>(null);

  const isZh = locale === "zh";

  return (
    <section id="business-scope" className="scroll-mt-28 py-16">
      {/* ---------------- Section Header ---------------- */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-black text-amber-700 dark:text-amber-400">
            <Boxes className="size-3.5 text-amber-500" />
            <span>
              {isZh ? "飞天电子 • 官方业务经营范围" : "FT Company • Official Business Scope"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            {isZh ? "电子业务经营范围" : "Electronics Business Scope"}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {isZh
              ? "武平飞天电子科技依托28年实体制造与研发积累，为全球客户提供覆盖电路设计打样、板级检修诊断、元器件正品代采及嵌入式智能传感器的全生命周期硬件服务。"
              : "Leveraging 28 years of precision manufacturing and R&D engineering, FT Company provides comprehensive electronics solutions from initial PCB design and diagnostics to genuine component supply and embedded systems."}
          </p>
        </div>

        {/* View Switcher: Table View (Exact Image format) vs Interactive Split Cards */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start md:self-auto shrink-0 shadow-xs">
          <button
            type="button"
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition ${
              viewMode === "table"
                ? "bg-amber-400 text-slate-950 font-black shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <TableIcon className="size-3.5" />
            <span>{isZh ? "原版对照表格" : "Official Table View"}</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode("cards")}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition ${
              viewMode === "cards"
                ? "bg-amber-400 text-slate-950 font-black shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <LayoutGrid className="size-3.5" />
            <span>{isZh ? "对侧交互卡片" : "Opposite Split View"}</span>
          </button>
        </div>
      </div>

      {/* ---------------- 1. TABLE VIEW (Exact reproduction of uploaded image) ---------------- */}
      {viewMode === "table" && (
        <Card className="rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              {/* Header Row */}
              <thead>
                <tr className="border-b-2 border-slate-300 dark:border-slate-700 bg-slate-50/90 dark:bg-slate-950/80">
                  <th className="py-5 px-6 sm:px-8 text-base sm:text-lg font-black text-slate-900 dark:text-white w-7/12 border-r border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-4 text-amber-500" />
                      <span>{isZh ? "电子业务经营范围 (Electronics Business Scope)" : "Electronics Business Scope"}</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 sm:px-8 text-base sm:text-lg font-black text-slate-900 dark:text-white w-5/12">
                    <div className="flex items-center gap-2">
                      <ExternalLink className="size-4 text-amber-500" />
                      <span>{isZh ? "对侧对应实景配图 (Picture on the Opposite Side)" : "Picture on the Opposite Side"}</span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {BUSINESS_SCOPE_ITEMS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-amber-50/40 dark:hover:bg-slate-800/40 transition-colors group"
                    >
                      {/* Left Column: Scope Name & Description */}
                      <td className="py-6 px-6 sm:px-8 align-top border-r border-slate-200 dark:border-slate-800">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2.5">
                            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                              <Icon className="size-5" />
                            </span>
                            <div>
                              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                                {isZh ? `${item.titleEn} (${item.titleZh})` : item.titleEn}
                              </h3>
                              <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400">
                                {isZh ? item.tagZh : item.tagEn}
                              </span>
                            </div>
                          </div>

                          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed pl-1">
                            <span className="font-bold text-slate-900 dark:text-white">
                              {item.titleEn} –{" "}
                            </span>
                            {item.descEn}
                          </p>

                          {isZh && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 pl-1">
                              {item.descZh}
                            </p>
                          )}

                          {/* Quick capability tags */}
                          <div className="pt-2 flex flex-wrap gap-1.5 pl-1">
                            {(isZh ? item.capabilitiesZh : item.capabilitiesEn).map((cap, ci) => (
                              <span
                                key={ci}
                                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                              >
                                <CheckCircle2 className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                <span>{cap}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </td>

                      {/* Right Column: Picture on the Opposite Side */}
                      <td className="py-6 px-6 sm:px-8 align-middle">
                        <div className="space-y-2 max-w-sm">
                          {/* Interactive Image Container */}
                          <div
                            onClick={() => setActiveImage(item)}
                            className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-md group/img cursor-pointer aspect-[16/11]"
                          >
                            {/* Realistic Image */}
                            <img
                              src={item.imageUrl}
                              alt={item.titleEn}
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                              loading="lazy"
                              onError={(e) => {
                                // Fallback to placeholder if local image fails
                                (e.target as HTMLImageElement).src = item.placeholderUrl;
                              }}
                            />

                            {/* Badge with exact placeholder URL text from screenshot */}
                            <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-mono text-cyan-300 font-bold border border-cyan-500/30">
                              320 × 220
                            </div>

                            {/* Hover overlay hint */}
                            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                              <Maximize2 className="size-4 text-amber-400" />
                              <span>{isZh ? "点击全屏查看" : "Click to Enlarge"}</span>
                            </div>
                          </div>

                          {/* Matching exact placeholder link text as shown in screenshot */}
                          <div className="flex items-center justify-between gap-2 px-1">
                            <a
                              href={item.placeholderUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs font-mono text-blue-600 dark:text-cyan-400 hover:underline truncate"
                              title={item.placeholderUrl}
                            >
                              {item.placeholderUrl}
                            </a>

                            <Button
                              asChild
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs text-amber-600 dark:text-amber-400 font-bold hover:bg-amber-50 dark:hover:bg-slate-800"
                            >
                              <Link href="/pcb-quote">
                                <span>{isZh ? "立即咨询" : "Inquire"}</span>
                                <ArrowRight className="size-3 ml-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* ---------------- 2. SPLIT OPPOSITE CARDS VIEW ---------------- */}
      {viewMode === "cards" && (
        <div className="space-y-8">
          {BUSINESS_SCOPE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <Card
                key={item.id}
                className="p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden transition-all hover:shadow-2xl"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text Column (Takes 7 Cols) */}
                  <div className={`space-y-4 ${isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}`}>
                    <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                      <Icon className="size-3.5" />
                      <span>{isZh ? item.tagZh : item.tagEn}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                      {isZh ? `${item.titleEn} (${item.titleZh})` : item.titleEn}
                    </h3>

                    <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
                      <span className="text-amber-600 dark:text-amber-400 font-bold">
                        {item.titleEn} –{" "}
                      </span>
                      {item.descEn}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isZh ? item.fullDescZh : item.fullDescEn}
                    </p>

                    {/* Feature bullets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {(isZh ? item.capabilitiesZh : item.capabilitiesEn).map((cap, ci) => (
                        <div
                          key={ci}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Button asChild className="rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-md">
                        <Link href="/pcb-quote">
                          <span>{isZh ? "获取工程报价" : "Request Engineering Quote"}</span>
                          <ArrowRight className="size-4 ml-1.5" />
                        </Link>
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => setActiveImage(item)}
                        className="rounded-full text-xs font-bold"
                      >
                        <Maximize2 className="size-3.5 mr-1.5" />
                        <span>{isZh ? "查看实景高清图" : "View Photo (Opposite Side)"}</span>
                      </Button>
                    </div>
                  </div>

                  {/* Picture on the Opposite Side (Takes 5 Cols) */}
                  <div className={`space-y-2 ${isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"}`}>
                    <div className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                      <Sparkles className="size-3 text-amber-500" />
                      <span>{isZh ? "对侧对应实景配图" : "Picture on the Opposite Side"}</span>
                    </div>

                    <div
                      onClick={() => setActiveImage(item)}
                      className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-xl group cursor-pointer aspect-[16/11]"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = item.placeholderUrl;
                        }}
                      />

                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-mono text-cyan-300 font-bold border border-cyan-500/40">
                        {item.placeholderText}
                      </div>

                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                        <Maximize2 className="size-4 text-amber-400" />
                        <span>{isZh ? "点击放大查看" : "Click to Expand"}</span>
                      </div>
                    </div>

                    <div className="px-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                      {item.placeholderUrl}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* ---------------- 3. High-Resolution Image Lightbox Modal ---------------- */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white">
                  {isZh ? `${activeImage.titleEn} (${activeImage.titleZh})` : activeImage.titleEn}
                </h4>
                <p className="text-xs font-mono text-amber-600 dark:text-amber-400 mt-0.5">
                  {activeImage.placeholderUrl}
                </p>
              </div>

              <button
                onClick={() => setActiveImage(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-[16/10] max-h-[60vh] flex items-center justify-center">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.titleEn}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = activeImage.placeholderUrl;
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {isZh ? activeImage.fullDescZh : activeImage.fullDescEn}
              </p>

              <Button asChild className="rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shrink-0">
                <Link href="/pcb-quote">
                  <span>{isZh ? "询价此项业务" : "Inquire This Service"}</span>
                  <ArrowRight className="size-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

