import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Activity, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  MessageCircle,
  Users,
  BarChart3,
  Coffee,
  Scissors,
  Stethoscope,
  BookOpen,
  Home as HomeIcon,
  ShoppingBag,
  Dumbbell,
  Car,
  Briefcase,
  Camera,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WHATSAPP_LINK, trackWhatsAppClick } from "@/lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              鹿
            </div>
            <span className="font-bold text-xl tracking-tight">鹿联AI广告</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">解决方案</a>
            <a href="#process" className="hover:text-foreground transition-colors">服务流程</a>
            <a href="#cases" className="hover:text-foreground transition-colors">客户案例</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">套餐价格</a>
          </div>
          <Button asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
              <MessageCircle className="w-4 h-4 mr-2" />
              免费咨询
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-sm font-medium border border-primary/20">
              <Zap className="w-4 h-4" />
              <span>服务大中华区与东南亚中小企业</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
              AI帮你在本地<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">同城精准获客</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              告别传统广告"烧钱没效果"的困境。鹿联AI广告系统自动寻找你门店周围最有可能消费的真实客户。
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/25 rounded-full">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  立即免费获取你的本地广告方案
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2">
                <a href="#cases">
                  查看成功案例
                  <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>服务超过500+本地商家</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Google 广告认证</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Meta 官方合作伙伴</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-blue-400/30 rounded-2xl blur-2xl"></div>
            <img 
              src="/images/hero.png" 
              alt="Malaysian business owner using phone" 
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
            />
            
            {/* Floating UI element */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-xl border border-border/50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground">今日新增本地咨询</div>
                <div className="text-2xl font-bold">+28位精准客户</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-muted/30 border-y border-border/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么你的广告总是"烧钱没效果"？</h2>
            <p className="text-lg text-muted-foreground">本地实体店和中小企业在投放广告时，往往面临这5大痛点：</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "广告费烧光没效果", desc: "钱花出去了，但没有人发消息或者上门咨询。" },
              { icon: Target, title: "客户定位不精准", desc: "把餐厅广告投给了距离50公里外的人，完全无效。" },
              { icon: Zap, title: "不懂复杂投放技术", desc: "后台设置太复杂，看不懂数据报表，不知道怎么优化。" },
              { icon: Users, title: "同行竞争极其激烈", desc: "附近同类店铺太多，客户注意力被抢走，很难脱颖而出。" },
              { icon: BarChart3, title: "无法追踪投资回报率", desc: "不知道哪一条广告真正带来了客户，无法计算ROI。" }
            ].map((item, i) => (
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
              <h3 className="text-2xl font-bold mb-3">鹿联AI帮你解决！</h3>
              <p className="text-primary-foreground/80 mb-6">让AI接管复杂的投放工作，你只需要负责接待客户。</p>
              <Button asChild variant="secondary" className="w-full text-primary font-bold">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                  获取免费诊断
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">企业级AI引擎，降维打击同城对手</h2>
            <p className="text-lg text-muted-foreground">鹿联AI广告系统融合先进算法，实时计算每个潜在客户的转化概率，将预算花在刀刃上。</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">智能受众定位</h3>
              <p className="text-muted-foreground leading-relaxed">AI分析海量用户行为标签，精准锁定有明确意向的潜在客户，摒弃无效曝光。</p>
            </div>
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">实时优化出价</h3>
              <p className="text-muted-foreground leading-relaxed">系统每分每秒都在监控竞价环境，以最低成本获取最高质量的点击和转化。</p>
            </div>
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                <HomeIcon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">同城LBS精准覆盖</h3>
              <p className="text-muted-foreground leading-relaxed">基于地理位置(LBS)，精准触达你店铺周边3-10公里内的活跃人群，转化率极高。</p>
            </div>
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
                <Activity className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">自动A/B测试素材</h3>
              <p className="text-muted-foreground leading-relaxed">同时测试数十组文案和图片，AI自动筛选出点击率最高的黄金组合，淘汰低效素材。</p>
            </div>
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-blue-600 text-white">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold">24小时全自动托管</h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                不需要你自己盯着后台！AI系统7x24小时不间断运行、监控、调整。你唯一需要做的，就是回复WhatsApp上不断涌入的客户咨询。
              </p>
              <Button asChild variant="secondary" className="w-fit mt-4 bg-white text-primary hover:bg-gray-100">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                  了解AI托管详情
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-primary-foreground/20">
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">500+</div>
              <div className="text-primary-foreground/80 font-medium">服务大马商家</div>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">-60%</div>
              <div className="text-primary-foreground/80 font-medium">平均获客成本降低</div>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">+300%</div>
              <div className="text-primary-foreground/80 font-medium">客户咨询量提升</div>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">5倍</div>
              <div className="text-primary-foreground/80 font-medium">平均广告ROI提升</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">全面覆盖本地服务业</h2>
            <p className="text-lg text-muted-foreground">无论你经营什么生意，只要你的客户在本地，鹿联AI就能帮你把他们找出来。</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Coffee, name: "餐饮美食" },
              { icon: Scissors, name: "美容美发" },
              { icon: Stethoscope, name: "医疗诊所" },
              { icon: BookOpen, name: "教育培训" },
              { icon: HomeIcon, name: "房产中介" },
              { icon: ShoppingBag, name: "零售门店" },
              { icon: Dumbbell, name: "健身瑜伽" },
              { icon: Car, name: "汽车服务" },
              { icon: Briefcase, name: "律所财税" },
              { icon: Camera, name: "婚纱摄影" },
            ].map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group">
                <ind.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
                <span className="font-semibold">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">从开始到获客，仅需5步</h2>
            <p className="text-lg text-muted-foreground">最快3天内上线广告，首周即可看到客户咨询。</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-5 gap-8">
              {[
                { step: "1", title: "免费咨询", desc: "了解业务模式与目标" },
                { step: "2", title: "定制方案", desc: "量身打造同城AI获客策略" },
                { step: "3", title: "AI投放", desc: "多渠道覆盖，AI精准定位" },
                { step: "4", title: "数据优化", desc: "实时监测，动态调整出价" },
                { step: "5", title: "持续获客", desc: "源源不断的本地客户咨询" },
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-background">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                第一步：立即开启免费咨询
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-24 px-4 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">真实商家的获客故事</h2>
            <p className="text-lg text-muted-foreground">看看他们如何通过鹿联AI广告系统，在本地市场脱颖而出。</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/case-restaurant.png" alt="Restaurant Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Coffee className="w-4 h-4" /> 新式精品咖啡馆 | 新加坡
                </div>
                <h3 className="text-xl font-bold mb-4">开业首月，日均满座排队</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-sm border-b pb-2">
                    <span className="text-muted-foreground">投放前日均客流:</span>
                    <span className="font-semibold">30人</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b pb-2">
                    <span className="text-muted-foreground">投放后日均客流:</span>
                    <span className="font-bold text-green-600">150+人</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">单客获取成本:</span>
                    <span className="font-bold text-primary">RM 2.50</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">"之前在FB随便打广告花了RM2000没人来。用了鹿联AI定位方圆5km的吃货人群，现在周末都要排队。"</p>
              </CardContent>
            </Card>

            {/* Case 2 */}
            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/case-beauty.png" alt="Beauty Salon Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Scissors className="w-4 h-4" /> 高端美容护理院 | 香港
                </div>
                <h3 className="text-xl font-bold mb-4">摆脱低价竞争，吸引高净值客户</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-sm border-b pb-2">
                    <span className="text-muted-foreground">每月高客单转化:</span>
                    <span className="font-semibold">3-5人</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b pb-2">
                    <span className="text-muted-foreground">使用AI后转化:</span>
                    <span className="font-bold text-green-600">28人/月</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">投资回报率 (ROI):</span>
                    <span className="font-bold text-primary">650%</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">"AI系统不仅帮我们找到了客户，更是找对了'买得起配套'的精准客户。销售压力小了很多。"</p>
              </CardContent>
            </Card>

            {/* Case 3 */}
            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/case-clinic.png" alt="Dental Clinic Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Stethoscope className="w-4 h-4" /> 现代牙科诊所 | 台北
                </div>
                <h3 className="text-xl font-bold mb-4">稳定获客，医生日程排满</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-sm border-b pb-2">
                    <span className="text-muted-foreground">WhatsApp咨询量:</span>
                    <span className="font-semibold">约10条/周</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b pb-2">
                    <span className="text-muted-foreground">投放后咨询量:</span>
                    <span className="font-bold text-green-600">50+条/周</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">隐适美签单增加:</span>
                    <span className="font-bold text-primary">+120%</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">"鹿联的系统很省心。我们专注看诊，AI帮我们把附近有看牙需求的人引流到WhatsApp上预约。"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">选择适合你的增长引擎</h2>
            <p className="text-lg text-muted-foreground">无隐形费用，透明的代运营模式。专业的事交给专业的AI。</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="flex flex-col relative overflow-hidden">
              <CardHeader className="text-center pb-8 border-b">
                <CardTitle className="text-2xl mb-2">基础获客版</CardTitle>
                <CardDescription>适合初创单店，快速试水本地市场</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pt-8 flex flex-col gap-6">
                <ul className="space-y-4 flex-1">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>单平台投放 (Meta 或 Google)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>基础AI人群定位</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>每月2组创意素材制作</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>月度数据报表</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                    联系咨询价格
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="flex flex-col relative overflow-hidden border-primary shadow-xl scale-105 z-10">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-blue-400"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">最受欢迎</span>
              </div>
              <CardHeader className="text-center pb-8 border-b pt-10">
                <CardTitle className="text-2xl mb-2">专业全能版</CardTitle>
                <CardDescription>适合成熟门店，追求稳定大量的客户咨询</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pt-8 flex flex-col gap-6">
                <ul className="space-y-4 flex-1">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">双平台联动投放 (Meta + Google)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">高级AI受众追踪与重定向</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">每月5组A/B测试创意素材</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">每周数据优化与策略调整</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">专属客服群对接</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                    获取专业版报价
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col relative overflow-hidden">
              <CardHeader className="text-center pb-8 border-b">
                <CardTitle className="text-2xl mb-2">企业旗舰版</CardTitle>
                <CardDescription>适合连锁品牌/多门店，占领同城市场</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pt-8 flex flex-col gap-6">
                <ul className="space-y-4 flex-1">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>全渠道覆盖 (含TikTok/小红书)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>多门店独立LBS定向定位</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>无限量素材策划与测试</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>定制化CRM线索对接</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>高级运营总监一对一服务</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                    联系企业顾问
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题</h2>
            <p className="text-lg text-muted-foreground">关于鹿联AI广告服务，你想知道的都在这里。</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full bg-card rounded-2xl border px-6 py-2 shadow-sm">
            {[
              { q: "最低广告预算是多少？", a: "我们建议本地实体店的初期广告预算为每日 RM30 - RM50 起。这样AI系统有足够的数据来学习和优化。总预算完全由您控制，随时可以增加或暂停。" },
              { q: "需要签长期合同吗？", a: "不需要。我们对服务效果充满信心，支持按月合作。您可以随时根据效果决定是否续约，零绑定风险。" },
              { q: "广告多久能看到效果？", a: "通常在广告上线后的 48-72 小时内，您就会开始收到第一批 WhatsApp 咨询。AI系统在运行的第一周内会持续学习，第二周开始获客成本会显著降低并趋于稳定。" },
              { q: "你们支持哪些广告平台？", a: "鹿联AI整合了多个主流平台。基础覆盖 Meta (Facebook & Instagram) 和 Google (搜索及地图)。企业版可扩展至 TikTok、小红书等平台。我们会根据您的行业推荐最有效的渠道。" },
              { q: "我完全不懂技术，可以合作吗？", a: "当然可以！我们的核心优势就是'全托管'。从开户、设置、作图、写文案到数据优化，全由我们的AI系统和专家团队完成。您只需要负责在 WhatsApp 上回复客人的咨询。" },
              { q: "我的客户数据安全吗？", a: "绝对安全。所有数据资产（包括广告账户和获取的客户名单）完全归您所有。我们严格遵守大马PDPA个人数据保护法，绝不向任何第三方泄露您的商业数据。" }
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
          
          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">还有其他问题？</p>
            <Button asChild variant="outline" className="rounded-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                WhatsApp直接问我们
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            别让同城对手<br />抢走你的潜在客户
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            立即启用鹿联AI广告系统。每天不到一杯咖啡的钱，让附近有需求的人主动找上门。
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button asChild size="lg" className="h-16 px-10 text-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:scale-105 transition-all duration-300 rounded-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                <MessageCircle className="w-6 h-6 mr-2" />
                立即免费获取你的本地广告方案
              </a>
            </Button>
            <p className="text-primary-foreground/80 flex items-center gap-2 font-medium">
              或直接联系: <span className="text-white font-bold text-xl tracking-wider">+60 10-651 9843</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                鹿
              </div>
              <span className="font-bold text-xl text-white tracking-tight">鹿联AI广告</span>
            </div>
            <p className="max-w-md leading-relaxed mb-6">
          服务覆盖新加坡、马来西亚、香港、澳门、中国大陆、台湾的同城AI获客专家。结合顶级算法与本地化运营，让每一分广告预算都带来真实的生意增长。
            </p>
            <div className="flex gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
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
                <span className="text-sm text-slate-500">营业时间</span>
                <span className="text-white font-medium">周一至周五 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="mt-6 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white w-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                联系客服
              </a>
            </Button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Lulian AI Ads. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}
