import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Check,
  ArrowRight,
  Crown,
  Gem,
  ChevronRight,
  Lock,
  Code,
  Network,
  BarChart3,
  Users,
  ChevronDown
} from 'lucide-react'
import './App.css'

const PACKAGE_ICONS = {
  starter: <Sparkles className="w-6 h-6" />,
  professional: <Crown className="w-6 h-6" />,
  enterprise: <Gem className="w-6 h-6" />
}

const METRIC_ICONS = {
  uptime: <Shield className="w-5 h-5" />,
  response: <Zap className="w-5 h-5" />,
  requests: <TrendingUp className="w-5 h-5" />,
  clients: <Users className="w-5 h-5" />
}

const FEATURE_ICONS = {
  api: <Network className="w-12 h-12" />,
  analytics: <BarChart3 className="w-12 h-12" />,
  security: <Lock className="w-12 h-12" />,
  speed: <Zap className="w-12 h-12" />
}

const CONTENT = {
  en: {
    nextLangLabel: '中文',
    switchLabel: 'Switch to Chinese',
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      integrations: 'Integrations',
      docs: 'Docs',
      signIn: 'Sign In',
      getStarted: 'Get Started'
    },
    video: {
      src: '/tokenflow-promo-en.mp4',
      aria: 'TokenFlow promotional video in English',
      fallback: 'Your browser does not support the video tag.'
    },
    hero: {
      badge: 'New: GPT-4 Turbo now available',
      titleTop: 'One API',
      titleBottom: 'for all AI models',
      description: 'Access GPT-4, Claude, Gemini, and more through a single unified API. Pay only for what you use, with enterprise-grade reliability.',
      primaryCta: 'Start Free Trial',
      secondaryCta: 'View Documentation',
      benefits: ['No credit card required', '10K free tokens', 'Cancel anytime']
    },
    metrics: [
      { key: 'uptime', value: '99.99%', label: 'Uptime' },
      { key: 'response', value: '<50ms', label: 'Response Time' },
      { key: 'requests', value: '10M+', label: 'Daily Requests' },
      { key: 'clients', value: '500+', label: 'Enterprise Clients' }
    ],
    featuresHeader: {
      title: 'Why choose TokenFlow?',
      description: 'Built for developers, designed for scale. Everything you need to integrate AI into your applications.'
    },
    features: [
      {
        key: 'api',
        title: 'Universal API',
        description: 'One endpoint to rule them all. Access multiple AI models through a single, unified API that handles model selection automatically.',
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        key: 'analytics',
        title: 'Real-time Analytics',
        description: 'Monitor your token usage, costs, and performance in real time. Set up alerts and automated scaling based on your needs.',
        gradient: 'from-violet-500 to-purple-500'
      },
      {
        key: 'security',
        title: 'Enterprise Security',
        description: 'Bank-level encryption, SOC2 compliance, and GDPR ready. Your data never leaves your infrastructure.',
        gradient: 'from-emerald-500 to-teal-500'
      },
      {
        key: 'speed',
        title: 'Lightning Fast',
        description: 'Global edge network with intelligent routing. Average response time under 50ms, guaranteed.',
        gradient: 'from-amber-500 to-orange-500'
      }
    ],
    pricingHeader: {
      title: 'Simple, transparent pricing',
      description: 'Pay only for what you use. No hidden fees, no surprises.'
    },
    packages: [
      {
        key: 'starter',
        name: 'STARTER',
        subtitle: 'Perfect for individuals',
        price: '$29',
        period: '/month',
        tokens: '100K',
        tokenSuffix: 'tokens',
        originalPrice: '$49',
        discount: '40% OFF',
        features: [
          'GPT-4 & Claude Access',
          'Standard Response Speed',
          'Basic Analytics Dashboard',
          'Community Support',
          '5 Projects',
          'API Rate Limiting'
        ],
        gradient: 'from-emerald-400 to-cyan-500',
        badge: 'MOST POPULAR'
      },
      {
        key: 'professional',
        name: 'PROFESSIONAL',
        subtitle: 'For growing teams',
        price: '$99',
        period: '/month',
        tokens: '500K',
        tokenSuffix: 'tokens',
        originalPrice: '$149',
        discount: '33% OFF',
        features: [
          'All Models Access',
          'Priority Response Speed',
          'Advanced Analytics',
          'Priority Email Support',
          'Unlimited Projects',
          'Higher Rate Limits',
          'Webhook Integration',
          'Custom Model Fine-tuning'
        ],
        gradient: 'from-violet-500 to-purple-600',
        badge: 'RECOMMENDED',
        popular: true
      },
      {
        key: 'enterprise',
        name: 'ENTERPRISE',
        subtitle: 'For large organizations',
        price: 'Custom',
        period: '/month',
        tokens: 'Unlimited',
        tokenSuffix: 'tokens',
        originalPrice: null,
        discount: null,
        features: [
          'All Models + Beta Access',
          'Ultra-low Latency',
          'Enterprise Analytics',
          '24/7 Dedicated Support',
          'Unlimited Everything',
          'Custom Rate Limits',
          'SSO & Advanced Security',
          'Dedicated Account Manager',
          'SLA Guarantees',
          'On-premise Deployment'
        ],
        gradient: 'from-amber-500 to-orange-600',
        badge: 'ENTERPRISE'
      }
    ],
    integrationsHeader: {
      title: 'Works with your favorite tools',
      description: 'Seamlessly integrate with the AI models and platforms you already use.'
    },
    integrations: [
      { name: 'OpenAI', icon: 'AI', category: 'LLM' },
      { name: 'Anthropic', icon: 'A', category: 'LLM' },
      { name: 'Google', icon: 'G', category: 'LLM' },
      { name: 'Meta', icon: 'M', category: 'LLM' },
      { name: 'AWS', icon: 'AWS', category: 'Cloud' },
      { name: 'Azure', icon: 'AZ', category: 'Cloud' },
      { name: 'Vercel', icon: '▲', category: 'Platform' },
      { name: 'Supabase', icon: 'S', category: 'Database' }
    ],
    cta: {
      title: 'Ready to get started?',
      description: 'Join thousands of developers who are already using TokenFlow to power their AI applications.',
      primary: 'Start Free Trial',
      secondary: 'Contact Sales'
    },
    footer: {
      description: 'The unified API for all AI models. Build faster, scale better.',
      groups: [
        { title: 'Product', links: ['Features', 'Pricing', 'Documentation', 'API Reference'] },
        { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
        { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Status'] }
      ],
      copyright: '© 2024 TokenFlow. All rights reserved.'
    }
  },
  zh: {
    nextLangLabel: 'EN',
    switchLabel: '切换到英文',
    nav: {
      features: '功能',
      pricing: '价格',
      integrations: '集成',
      docs: '文档',
      signIn: '登录',
      getStarted: '立即开始'
    },
    video: {
      src: '/tokenflow-promo-zh.mp4',
      aria: 'TokenFlow 中文宣传视频',
      fallback: '当前浏览器不支持视频播放。'
    },
    hero: {
      badge: '新功能：GPT-4 Turbo 已可使用',
      titleTop: '一个 API',
      titleBottom: '接入所有 AI 模型',
      description: '通过统一 API 接入 GPT-4、Claude、Gemini 等模型。按实际用量付费，并获得企业级稳定性。',
      primaryCta: '免费试用',
      secondaryCta: '查看文档',
      benefits: ['无需信用卡', '赠送 1 万 tokens', '随时取消']
    },
    metrics: [
      { key: 'uptime', value: '99.99%', label: '可用性' },
      { key: 'response', value: '<50ms', label: '响应时间' },
      { key: 'requests', value: '10M+', label: '每日请求' },
      { key: 'clients', value: '500+', label: '企业客户' }
    ],
    featuresHeader: {
      title: '为什么选择 TokenFlow？',
      description: '面向开发者构建，为规模化设计。集成 AI 应用所需的能力都在这里。'
    },
    features: [
      {
        key: 'api',
        title: '统一 API',
        description: '一个端点连接多种 AI 模型，并自动处理模型选择与请求路由。',
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        key: 'analytics',
        title: '实时分析',
        description: '实时监控 token 用量、成本与性能，并可按业务需要设置告警和自动扩容。',
        gradient: 'from-violet-500 to-purple-500'
      },
      {
        key: 'security',
        title: '企业级安全',
        description: '银行级加密、SOC2 合规、GDPR 就绪。你的数据始终留在自己的基础设施内。',
        gradient: 'from-emerald-500 to-teal-500'
      },
      {
        key: 'speed',
        title: '极速响应',
        description: '全球边缘网络与智能路由，平均响应时间低于 50ms。',
        gradient: 'from-amber-500 to-orange-500'
      }
    ],
    pricingHeader: {
      title: '简单透明的价格',
      description: '只为实际用量付费。没有隐藏费用，也没有意外账单。'
    },
    packages: [
      {
        key: 'starter',
        name: '入门版',
        subtitle: '适合个人开发者',
        price: '$29',
        period: '/月',
        tokens: '100K',
        tokenSuffix: 'tokens',
        originalPrice: '$49',
        discount: '省 40%',
        features: [
          '接入 GPT-4 与 Claude',
          '标准响应速度',
          '基础分析看板',
          '社区支持',
          '5 个项目',
          'API 速率限制'
        ],
        gradient: 'from-emerald-400 to-cyan-500',
        badge: '最受欢迎'
      },
      {
        key: 'professional',
        name: '专业版',
        subtitle: '适合成长型团队',
        price: '$99',
        period: '/月',
        tokens: '500K',
        tokenSuffix: 'tokens',
        originalPrice: '$149',
        discount: '省 33%',
        features: [
          '接入全部模型',
          '优先响应速度',
          '高级分析能力',
          '优先邮件支持',
          '无限项目',
          '更高速率限制',
          'Webhook 集成',
          '自定义模型微调'
        ],
        gradient: 'from-violet-500 to-purple-600',
        badge: '推荐',
        popular: true
      },
      {
        key: 'enterprise',
        name: '企业版',
        subtitle: '适合大型组织',
        price: '定制',
        period: '/月',
        tokens: '无限',
        tokenSuffix: 'tokens',
        originalPrice: null,
        discount: null,
        features: [
          '全部模型与 Beta 权限',
          '超低延迟',
          '企业分析能力',
          '7x24 专属支持',
          '无限资源',
          '自定义速率限制',
          'SSO 与高级安全',
          '专属客户经理',
          'SLA 保障',
          '私有化部署'
        ],
        gradient: 'from-amber-500 to-orange-600',
        badge: '企业级'
      }
    ],
    integrationsHeader: {
      title: '与你常用的工具协同工作',
      description: '无缝集成你已经在使用的 AI 模型与平台。'
    },
    integrations: [
      { name: 'OpenAI', icon: 'AI', category: '大模型' },
      { name: 'Anthropic', icon: 'A', category: '大模型' },
      { name: 'Google', icon: 'G', category: '大模型' },
      { name: 'Meta', icon: 'M', category: '大模型' },
      { name: 'AWS', icon: 'AWS', category: '云平台' },
      { name: 'Azure', icon: 'AZ', category: '云平台' },
      { name: 'Vercel', icon: '▲', category: '平台' },
      { name: 'Supabase', icon: 'S', category: '数据库' }
    ],
    cta: {
      title: '准备开始了吗？',
      description: '加入已经使用 TokenFlow 驱动 AI 应用的开发者团队。',
      primary: '免费试用',
      secondary: '联系销售'
    },
    footer: {
      description: '面向所有 AI 模型的统一 API。更快构建，更好扩展。',
      groups: [
        { title: '产品', links: ['功能', '价格', '文档', 'API 参考'] },
        { title: '公司', links: ['关于我们', '博客', '招聘', '联系'] },
        { title: '法律', links: ['隐私', '条款', '安全', '状态'] }
      ],
      copyright: '© 2024 TokenFlow. 保留所有权利。'
    }
  }
}

function PromoVideo({ video }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      <div className="relative overflow-hidden bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-cyan-500/10">
        <video
          key={video.src}
          className="block w-full aspect-video bg-black object-cover"
          controls
          playsInline
          preload="metadata"
          aria-label={video.aria}
        >
          <source src={video.src} type="video/mp4" />
          {video.fallback}
        </video>
      </div>
    </div>
  )
}

function LanguageToggle({ lang, copy, onToggle }) {
  const currentLanguage = lang === 'en'
    ? { code: 'EN', label: 'English' }
    : { code: 'CN', label: '中文' }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={copy.switchLabel}
      title={copy.switchLabel}
      className="inline-flex h-11 min-w-[108px] items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 text-sm font-medium text-emerald-50 shadow-[0_0_24px_rgba(16,185,129,0.08)] backdrop-blur-xl transition-all hover:border-emerald-300/50 hover:bg-emerald-400/15 hover:shadow-[0_0_28px_rgba(16,185,129,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50"
    >
      <span className="text-xs uppercase tracking-wide text-emerald-300">{currentLanguage.code}</span>
      <span>{currentLanguage.label}</span>
      <ChevronDown className="h-4 w-4 text-emerald-200/70" />
    </button>
  )
}

function PricingCard({ pkg, index, ctaLabel }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group ${pkg.popular ? 'scale-105 z-10' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {pkg.badge && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
            pkg.popular
              ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white'
              : 'bg-white/10 text-gray-300'
          }`}
        >
          {pkg.badge}
        </motion.div>
      )}

      <div className={`relative h-full backdrop-blur-xl rounded-3xl border transition-all duration-500 ${
        pkg.popular
          ? 'bg-gradient-to-b from-violet-500/10 to-purple-500/10 border-violet-500/30 shadow-2xl shadow-violet-500/20'
          : 'bg-black/40 border-white/10 hover:border-white/20'
      } ${isHovered ? 'scale-105' : ''}`}>
        {pkg.popular && (
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10"></div>
        )}

        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white shadow-lg`}>
              {PACKAGE_ICONS[pkg.key]}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
              <p className="text-gray-400 text-sm">{pkg.subtitle}</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white">{pkg.price}</span>
              {pkg.period && <span className="text-gray-400">{pkg.period}</span>}
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-gray-500">{pkg.tokens} {pkg.tokenSuffix}</span>
              {pkg.discount && (
                <span className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                  {pkg.discount}
                </span>
              )}
            </div>
            {pkg.originalPrice && (
              <div className="text-gray-500 text-sm line-through mt-1">{pkg.originalPrice}</div>
            )}
          </div>

          <ul className="space-y-4 mb-8">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <button className={`w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 ${
            pkg.popular
              ? 'bg-gradient-to-r from-violet-500 to-purple-600 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-[1.02]'
              : 'bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20'
          }`}>
            {ctaLabel}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function IntegrationCard({ integration, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-cyan-500/0 to-blue-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-300 group-hover:scale-105">
        <div className="mb-3 flex h-12 items-center text-2xl font-black text-cyan-200">{integration.icon}</div>
        <div className="text-white font-semibold">{integration.name}</div>
        <div className="text-gray-500 text-xs mt-1">{integration.category}</div>
      </div>
    </motion.div>
  )
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 group-hover:border-white/20 transition-all duration-500">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          {FEATURE_ICONS[feature.key]}
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  )
}

function App() {
  const [lang, setLang] = useState('en')
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const copy = CONTENT[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN'
  }, [lang])

  const toggleLanguage = () => {
    setLang((currentLang) => currentLang === 'en' ? 'zh' : 'en')
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#030014]/80 border-b border-white/5">
        <div className="w-full px-4 py-5 md:px-8">
          <div className="flex items-center justify-between max-w-screen-2xl mx-auto gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur-lg opacity-50"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold">TokenFlow</span>
            </div>

            <div className="hidden md:flex items-center gap-12">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">{copy.nav.features}</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">{copy.nav.pricing}</a>
              <a href="#integrations" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">{copy.nav.integrations}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">{copy.nav.docs}</a>
            </div>

            <div className="flex items-center gap-3 md:gap-6">
              <LanguageToggle lang={lang} copy={copy} onToggle={toggleLanguage} />
              <button className="hidden lg:block text-gray-400 hover:text-white transition-colors text-sm font-medium">{copy.nav.signIn}</button>
              <button className="hidden sm:block bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 md:px-8 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-105">
                {copy.nav.getStarted}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-32 px-8 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 mb-12">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">{copy.hero.badge}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                  {copy.hero.titleTop}
                </span>
                <br />
                <span className="text-white">{copy.hero.titleBottom}</span>
              </h1>

              <p className="text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
                {copy.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <button className="group bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all hover:scale-105 flex items-center justify-center gap-3">
                  {copy.hero.primaryCta}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 backdrop-blur-lg border border-white/10 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                  <Code className="w-6 h-6" />
                  {copy.hero.secondaryCta}
                </button>
              </div>

              <div className="flex flex-wrap gap-12 text-base text-gray-400">
                {copy.hero.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-emerald-400" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <PromoVideo video={copy.video} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 relative">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-screen-2xl mx-auto">
            {copy.metrics.map((metric, index) => (
              <motion.div
                key={metric.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-6 text-gray-400">
                  {METRIC_ICONS[metric.key]}
                  <span className="text-sm font-medium uppercase tracking-wider">{metric.label}</span>
                </div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-32 px-8 relative">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                {copy.featuresHeader.title}
              </span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {copy.featuresHeader.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-screen-2xl mx-auto">
            {copy.features.map((feature, index) => (
              <FeatureCard key={feature.key} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-8 relative">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent">
                {copy.pricingHeader.title}
              </span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {copy.pricingHeader.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-screen-2xl mx-auto">
            {copy.packages.map((pkg, index) => (
              <PricingCard key={pkg.key} pkg={pkg} index={index} ctaLabel={copy.nav.getStarted} />
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="py-32 px-8 relative">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-amber-200 to-orange-200 bg-clip-text text-transparent">
                {copy.integrationsHeader.title}
              </span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {copy.integrationsHeader.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
            {copy.integrations.map((integration, index) => (
              <IntegrationCard key={integration.name} integration={integration} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 relative">
        <div className="w-full max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                {copy.cta.title}
              </h2>
              <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                {copy.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-12 py-5 rounded-2xl font-semibold text-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all hover:scale-105">
                  {copy.cta.primary}
                </button>
                <button className="bg-white/5 backdrop-blur-lg border border-white/10 text-white px-12 py-5 rounded-2xl font-semibold text-xl hover:bg-white/10 transition-all">
                  {copy.cta.secondary}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 px-8 border-t border-white/5">
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold">TokenFlow</span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                {copy.footer.description}
              </p>
            </div>

            {copy.footer.groups.map((group) => (
              <div key={group.title}>
                <h4 className="font-bold text-lg mb-6">{group.title}</h4>
                <ul className="space-y-4 text-gray-400 text-base">
                  {group.links.map((link) => (
                    <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-gray-400 text-base">
            <p>{copy.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
