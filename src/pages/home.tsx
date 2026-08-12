import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  BookOpen,
  Bot,
  Briefcase,
  CalendarCheck,
  Car,
  CheckCircle2,
  ChevronRight,
  Coffee,
  Dumbbell,
  Globe2,
  Home as HomeIcon,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  Scissors,
  Share2,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WhatsAppPrompt } from "@/components/WhatsAppPrompt";
import { WHATSAPP_LINK, trackWhatsAppClick } from "@/lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const channels = [
  {
    icon: Target,
    title: "付费流量获客",
    desc: "根据行业与地区组合 Facebook、Instagram、Google 等付费流量，快速获得第一批本地咨询。",
  },
  {
    icon: Search,
    title: "搜索与地图获客",
    desc: "覆盖用户主动搜索与地图找店场景，让有明确需求的人更容易发现你的门店与服务。",
  },
  {
    icon: Share2,
    title: "社交媒体内容获客",
    desc: "持续输出适合本地市场的内容，在 Facebook、Instagram、TikTok、小红书等平台累积触达与信任。",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp 私域承接",
    desc: "把各渠道咨询统一导向 WhatsApp，方便持续跟进、活动触达和老客户再次转化。",
  },
  {
    icon: Bot,
    title: "AI 接待与预约",
    desc: "AI协助完成常见问题回复、意向判断与预约引导，减少漏回消息和等待时间。",
  },
  {
    icon: BarChart3,
    title: "数据复盘与持续优化",
    desc: "把触达、咨询、预约和到店放在同一条增长链路里复盘，持续调整渠道组合与资源投入。",
  },
];

const painPoints = [
  {
    icon: Activity,
    title: "只靠一个渠道，流量不稳定",
    desc: "单个平台一旦成本上涨或流量波动，咨询量就会立刻受到影响。",
  },
  {
    icon: Users,
    title: "客户分散在不同平台",
    desc: "有人在Google搜索，有人在社媒刷内容，也有人直接看地图找附近商家。",
  },
  {
    icon: Zap,
    title: "内容做了，但没有持续获客",
    desc: "内容、广告、私域各做各的，缺少从看到你到联系你再到预约的完整路径。",
  },
  {
    icon: MessageCircle,
    title: "咨询来了，却没有及时跟进",
    desc: "回复慢、重复问答、没有持续跟进，都会让高意向客户在最后一步流失。",
  },
  {
    icon: Workflow,
    title: "数据分散，不知道哪里有效",
    desc: "只看点击或消息数量，很难判断哪个渠道真正带来预约和到店。",
  },
];

const industries = [
  { icon: Coffee, name: "餐饮美食" },
  { icon: Scissors, name: "美容美发" },
  { icon: Stethoscope, name: "诊所健康" },
  { icon: BookOpen, name: "教育培训" },
  { icon: HomeIcon, name: "房产服务" },
  { icon: ShoppingBag, name: "零售门店" },
  { icon: Dumbbell, name: "健身瑜伽" },
  { icon: Car, name: "汽车服务" },
  { icon: Briefcase, name: "专业服务" },
  { icon: Users, name: "其他同城生意" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 text-foreground overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">AI同城全渠道获客</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">全渠道方案</a>
            <a href="#process" className="hover:text-foreground transition-colors">执行流程</a>
            <a href="#cases" className="hover:text-foreground transition-colors">应用场景</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">合作方式</a>
          </div>
          <Button asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
              <MessageCircle className="w-4 h-4 mr-2" />
              免费咨询
            </a>
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-sm font-medium border border-primary/20">
              <Globe2 className="w-4 h-4" />
              <span>同城全渠道获客 · 从曝光到咨询再到预约</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
              不只投广告<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">让多个渠道一起帮你获客</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              把社交媒体、搜索与地图、付费流量、WhatsApp私域、AI接待和预约跟进连接成一套系统。你的客户在哪里，就从哪里找到他，再把流量真正变成咨询与到店。
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/25 rounded-full">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  免费获取同城全渠道获客方案
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2">
                <a href="#features">
                  看系统怎么获客
                  <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>多渠道触达</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>WhatsApp统一承接</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>咨询 → 预约 → 到店</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-blue-400/30 rounded-2xl blur-2xl" />
            <img
              src="/images/hero.png"
              alt="Local business owner managing customer enquiries"
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-background rounded-xl p-4 shadow-xl border border-border/50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Workflow className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground">全渠道获客链路</div>
                <div className="text-lg sm:text-xl font-bold">触达 → 咨询 → 预约 → 到店</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-y border-border/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么只靠单一广告渠道越来越难？</h2>
            <p className="text-lg text-muted-foreground">本地客户的决策路径已经分散到搜索、地图、社媒、私域和即时通讯里。</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, i) => (
              <Card key={i} className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary text-primary-foreground border-none shadow-md sm:col-span-2 lg:col-span-1 flex flex-col justify-center items-center text-center p-6">
              <Workflow className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">把获客变成一套系统</h3>
              <p className="text-primary-foreground/80 mb-6">不再只看某一条广告，而是把多个入口、咨询承接、预约跟进和复盘连起来。</p>
              <Button asChild variant="secondary" className="w-full text-primary font-bold">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                  获取免费诊断
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">一套同城全渠道获客系统，覆盖6个关键触点</h2>
            <p className="text-lg text-muted-foreground">不是把所有渠道都做一遍，而是根据你的行业、地区、客单价与成交方式，组合最适合的获客路径。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((item, i) => (
              <div key={i} className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">6大</div>
              <div className="text-primary-foreground/80 font-medium">关键获客触点</div>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">1套</div>
              <div className="text-primary-foreground/80 font-medium">完整转化链路</div>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">7×24</div>
              <div className="text-primary-foreground/80 font-medium">AI辅助接待</div>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">多地区</div>
              <div className="text-primary-foreground/80 font-medium">本地化组合执行</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">适合所有依赖本地客户的生意</h2>
            <p className="text-lg text-muted-foreground">只要客户需要在本地咨询、预约、到店或成交，就可以设计对应的全渠道获客路径。</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group">
                <ind.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
                <span className="font-semibold">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">从单点获客，升级成完整增长链路</h2>
            <p className="text-lg text-muted-foreground">先确定最容易成交的客户，再决定用哪些渠道、什么内容和什么承接方式。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "1", title: "业务诊断", desc: "确认地区、行业、项目、客单价与目标客户" },
              { step: "2", title: "渠道组合", desc: "确定搜索、社媒、地图、付费流量与私域优先级" },
              { step: "3", title: "内容与流量", desc: "同步启动内容触达和高意向流量入口" },
              { step: "4", title: "咨询与预约", desc: "统一导向WhatsApp并用AI辅助接待和预约" },
              { step: "5", title: "数据迭代", desc: "按咨询、预约、到店结果持续优化渠道组合" },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                先做一次免费获客诊断
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 px-4 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">不同生意，用不同的全渠道组合</h2>
            <p className="text-lg text-muted-foreground">以下是典型应用场景。真正执行时会根据你的市场和成交链路重新组合。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/case-restaurant.png" alt="Restaurant acquisition scenario" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Coffee className="w-4 h-4" /> 餐饮 / 新店开业
                </div>
                <h3 className="text-xl font-bold mb-4">地图搜索 + 社媒种草 + 本地流量</h3>
                <p className="text-muted-foreground leading-relaxed">先让附近用户在地图和搜索里找到门店，再用短内容和本地曝光强化记忆，最后把活动咨询导入WhatsApp。</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/case-beauty.png" alt="Beauty acquisition scenario" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Scissors className="w-4 h-4" /> 美业 / 预约到店
                </div>
                <h3 className="text-xl font-bold mb-4">社媒内容 + 精准流量 + AI预约</h3>
                <p className="text-muted-foreground leading-relaxed">用真实项目内容持续建立兴趣，高意向流量直接进入WhatsApp，由AI辅助完成项目说明、时间确认和预约引导。</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/case-clinic.png" alt="Professional service acquisition scenario" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Briefcase className="w-4 h-4" /> 专业服务 / 高意向咨询
                </div>
                <h3 className="text-xl font-bold mb-4">搜索获客 + 内容信任 + 私域跟进</h3>
                <p className="text-muted-foreground leading-relaxed">优先获取主动搜索的高意向客户，再用内容解释专业能力，并通过WhatsApp持续跟进未立即成交的线索。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">按你的业务阶段，选择合适的获客组合</h2>
            <p className="text-lg text-muted-foreground">不强行把所有渠道一次做满，先从最可能产生结果的组合开始，再逐步扩展。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "快速启动",
                desc: "适合首次系统化做同城获客",
                items: ["1-2个核心获客渠道", "WhatsApp咨询承接", "基础内容与转化链路", "定期数据复盘"],
                cta: "获取启动方案",
              },
              {
                title: "全渠道增长",
                desc: "适合已有业务，准备稳定扩大咨询量",
                items: ["搜索 + 社媒 + 付费流量组合", "持续内容获客", "AI辅助接待与预约", "多渠道数据优化"],
                cta: "获取增长方案",
              },
              {
                title: "多门店增长",
                desc: "适合连锁、多地区或多项目业务",
                items: ["多地区独立获客策略", "渠道与内容标准化", "私域与客户跟进流程", "统一数据复盘机制"],
                cta: "联系增长顾问",
              },
            ].map((plan, i) => (
              <Card key={i} className={i === 1 ? "border-primary shadow-xl" : ""}>
                <CardHeader className="text-center border-b pb-6">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.desc}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex flex-col gap-6">
                  <ul className="space-y-4 flex-1">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={i === 1 ? "w-full bg-[#25D366] hover:bg-[#20bd5a] text-white" : "w-full"}>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题</h2>
            <p className="text-lg text-muted-foreground">关于同城全渠道获客，你可能最关心这些。</p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-card rounded-2xl border px-6 py-2 shadow-sm">
            {[
              {
                q: "这是不是普通的广告代投？",
                a: "不是。付费广告只是其中一个获客入口。核心是把搜索、地图、社媒内容、付费流量、WhatsApp私域、AI接待与预约跟进组合成完整的同城获客链路。",
              },
              {
                q: "是不是所有平台都要一起做？",
                a: "不需要。我们会根据你的地区、行业、客单价和成交方式先排优先级，从最有机会产生咨询和预约的渠道开始。",
              },
              {
                q: "客户最后从哪里联系我？",
                a: "可以根据业务情况设置，通常会把高意向咨询统一承接到WhatsApp，便于及时回复、持续跟进和预约。",
              },
              {
                q: "我没有内容团队也能做吗？",
                a: "可以。系统思路会把内容生产、渠道发布、流量获取和咨询承接拆成可执行流程，再按你的现有团队能力选择适合的执行方式。",
              },
              {
                q: "多久可以开始？",
                a: "确认业务资料、地区、目标客户和现有账号后即可开始搭建。具体上线节奏取决于你选择的渠道组合和素材准备情况。",
              },
              {
                q: "支持哪些地区？",
                a: "目前重点面向新加坡、马来西亚、香港、澳门、中国大陆和台湾等中文及东南亚本地市场，也可以根据业务情况评估其他地区。",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-border/50 last:border-0">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            不要只买流量<br />把整条获客链路搭起来
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            让搜索、社媒、地图、付费流量和WhatsApp一起工作，把更多本地流量沉淀成真实咨询、预约和到店。
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button asChild size="lg" className="h-16 px-10 text-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:scale-105 transition-all duration-300 rounded-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                <MessageCircle className="w-6 h-6 mr-2" />
                免费获取同城全渠道获客方案
              </a>
            </Button>
            <p className="text-primary-foreground/80 flex items-center gap-2 font-medium">
              WhatsApp / 电话：<span className="text-white font-bold text-xl tracking-wider">+60 10-651 9843</span>
            </p>
            <a href="mailto:xiandaodashuaige@gmail.com" className="text-primary-foreground/80 hover:text-white flex items-center gap-2 font-medium transition-colors">
              <Mail className="w-4 h-4" />
              邮箱：<span className="text-white font-semibold">xiandaodashuaige@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">AI同城全渠道获客</span>
            </div>
            <p className="max-w-md leading-relaxed mb-6">
              面向本地实体店和中小企业，把搜索、社媒、地图、付费流量、WhatsApp与AI接待连接成可持续的获客链路。
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">服务地区</h4>
            <ul className="space-y-3">
              <li>新加坡 Singapore</li>
              <li>马来西亚 Malaysia</li>
              <li>香港 Hong Kong</li>
              <li>澳门 Macau</li>
              <li>中国大陆 Mainland China</li>
              <li>台湾 Taiwan</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="text-sm text-slate-500">WhatsApp / 电话</span>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="text-white hover:text-[#25D366] transition-colors font-medium">
                  +60 10-651 9843
                </a>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-sm text-slate-500">邮箱</span>
                <a href="mailto:xiandaodashuaige@gmail.com" className="text-white hover:text-[#25D366] transition-colors font-medium break-all">
                  xiandaodashuaige@gmail.com
                </a>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-sm text-slate-500">营业时间</span>
                <span className="text-white font-medium">周一至周五 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AI Local Omnichannel Acquisition. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
      <WhatsAppPrompt />
    </div>
  );
}
