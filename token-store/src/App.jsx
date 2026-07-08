import { useState, useEffect } from 'react'
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
  Users
} from 'lucide-react'
import './App.css'

const packages = [
  {
    name: 'STARTER',
    subtitle: 'Perfect for individuals',
    price: '$29',
    period: '/month',
    tokens: '100K',
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
    icon: <Sparkles className="w-6 h-6" />,
    badge: 'MOST POPULAR'
  },
  {
    name: 'PROFESSIONAL',
    subtitle: 'For growing teams',
    price: '$99',
    period: '/month',
    tokens: '500K',
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
    icon: <Crown className="w-6 h-6" />,
    badge: 'RECOMMENDED',
    popular: true
  },
  {
    name: 'ENTERPRISE',
    subtitle: 'For large organizations',
    price: 'Custom',
    period: '/month',
    tokens: 'Unlimited',
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
    icon: <Gem className="w-6 h-6" />,
    badge: 'ENTERPRISE'
  }
]

const metrics = [
  { value: '99.99%', label: 'Uptime', icon: <Shield className="w-5 h-5" /> },
  { value: '<50ms', label: 'Response Time', icon: <Zap className="w-5 h-5" /> },
  { value: '10M+', label: 'Daily Requests', icon: <TrendingUp className="w-5 h-5" /> },
  { value: '500+', label: 'Enterprise Clients', icon: <Users className="w-5 h-5" /> }
]

const integrations = [
  { name: 'OpenAI', icon: '🤖', category: 'LLM' },
  { name: 'Anthropic', icon: '🧠', category: 'LLM' },
  { name: 'Google', icon: '🔍', category: 'LLM' },
  { name: 'Meta', icon: '🦙', category: 'LLM' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'Azure', icon: '💠', category: 'Cloud' },
  { name: 'Vercel', icon: '▲', category: 'Platform' },
  { name: 'Supabase', icon: '⚡', category: 'Database' }
]

const features = [
  {
    icon: <Network className="w-12 h-12" />,
    title: 'Universal API',
    description: 'One endpoint to rule them all. Access multiple AI models through a single, unified API that handles model selection automatically.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: 'Real-time Analytics',
    description: 'Monitor your token usage, costs, and performance in real-time. Set up alerts and automated scaling based on your needs.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: <Lock className="w-12 h-12" />,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC2 compliance, and GDPR ready. Your data never leaves your infrastructure.',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Lightning Fast',
    description: 'Global edge network with intelligent routing. Average response time under 50ms, guaranteed.',
    gradient: 'from-amber-500 to-orange-500'
  }
]

function TokenCounter() {
  const [tokens, setTokens] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTokens(prev => {
        if (prev >= 1000000) return 0
        return prev + Math.floor(Math.random() * 10000) + 5000
      })
    }, 100)
    
    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
    return num.toString()
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-12">
        <div className="text-center">
          <div className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 font-mono">
            {formatNumber(tokens)}
          </div>
          <div className="text-gray-400 text-xl font-medium">Tokens processed today</div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <span className="text-gray-500 text-base ml-3 font-medium">Live</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingCard({ pkg, index }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group ${
        pkg.popular ? 'scale-105 z-10' : ''
      }`}
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
        {/* Glow effect */}
        {pkg.popular && (
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10"></div>
        )}
        
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white shadow-lg`}>
              {pkg.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
              <p className="text-gray-400 text-sm">{pkg.subtitle}</p>
            </div>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white">{pkg.price}</span>
              {pkg.period && <span className="text-gray-400">{pkg.period}</span>}
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-gray-500">{pkg.tokens} tokens</span>
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
          
          {/* Features */}
          <ul className="space-y-4 mb-8">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* CTA */}
          <button className={`w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 ${
            pkg.popular
              ? 'bg-gradient-to-r from-violet-500 to-purple-600 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-[1.02]'
              : 'bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20'
          }`}>
            Get Started
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
        <div className="text-4xl mb-3">{integration.icon}</div>
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
          {feature.icon}
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  )
}

function App() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#030014]/80 border-b border-white/5">
        <div className="w-full px-8 py-5">
          <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
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
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Pricing</a>
              <a href="#integrations" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Integrations</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Docs</a>
            </div>
            
            <div className="flex items-center gap-6">
              <button className="hidden md:block text-gray-400 hover:text-white transition-colors text-sm font-medium">Sign In</button>
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                <span className="text-gray-300 text-sm font-medium">New: GPT-4 Turbo now available</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                  One API
                </span>
                <br />
                <span className="text-white">for all AI models</span>
              </h1>
              
              <p className="text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
                Access GPT-4, Claude, Gemini, and more through a single unified API. 
                Pay only for what you use, with enterprise-grade reliability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <button className="group bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all hover:scale-105 flex items-center justify-center gap-3">
                  Start Free Trial
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 backdrop-blur-lg border border-white/10 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                  <Code className="w-6 h-6" />
                  View Documentation
                </button>
              </div>
              
              <div className="flex flex-wrap gap-12 text-base text-gray-400">
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-emerald-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-emerald-400" />
                  <span>10K free tokens</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-emerald-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <TokenCounter />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 px-8 relative">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-screen-2xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-6 text-gray-400">
                  {metric.icon}
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

      {/* Features Section */}
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
                Why choose TokenFlow?
              </span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Built for developers, designed for scale. Everything you need to integrate AI into your applications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-screen-2xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
                Simple, transparent pricing
              </span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Pay only for what you use. No hidden fees, no surprises.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-screen-2xl mx-auto">
            {packages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
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
                Works with your favorite tools
              </span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Seamlessly integrate with the AI models and platforms you already use.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
            {integrations.map((integration, index) => (
              <IntegrationCard key={index} integration={integration} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Ready to get started?
              </h2>
              <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of developers who are already using TokenFlow to power their AI applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-12 py-5 rounded-2xl font-semibold text-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all hover:scale-105">
                  Start Free Trial
                </button>
                <button className="bg-white/5 backdrop-blur-lg border border-white/10 text-white px-12 py-5 rounded-2xl font-semibold text-xl hover:bg-white/10 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
                The unified API for all AI models. Build faster, scale better.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Product</h4>
              <ul className="space-y-4 text-gray-400 text-base">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400 text-base">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-400 text-base">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-gray-400 text-base">
            <p>&copy; 2024 TokenFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App