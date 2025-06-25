import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bot, Code, Shield, Zap, CheckCircle, ArrowRight, Github, Star,  Play, ChevronDown, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    useEffect(() => {
        setIsVisible(true)
    }, [])

    const features = [
        {
            icon: <Bot className="w-8 h-8" />,
            title: "AI-Powered Analysis",
            description: "Advanced machine learning algorithms provide deep insights into code quality, security vulnerabilities, and optimization opportunities.",
            highlight: "Smart Detection"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Enterprise Security",
            description: "Military-grade security scanning with OWASP compliance. Protect against the latest threats and vulnerabilities.",
            highlight: "Zero-Day Protection"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Lightning Fast",
            description: "Sub-second analysis powered by distributed computing. Get comprehensive reviews without slowing down your workflow.",
            highlight: "Real-time Results"
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Universal Language Support",
            description: "Native support for 25+ programming languages with context-aware analysis tailored to each language's best practices.",
            highlight: "Multi-Framework"
        }
    ]

    const stats = [
        { number: "1M+", label: "Lines Analyzed", prefix: "Over" },
        { number: "10K+", label: "Active Developers", prefix: "Trusted by" },
        { number: "99.99%", label: "Uptime SLA", prefix: "Guaranteed" },
        { number: "0.8s", label: "Avg Response", prefix: "Lightning" }
    ]

    const testimonials = [
        {
            quote: "SecureCode transformed our development workflow. We caught critical vulnerabilities that could have cost us millions.",
            author: "Sarah Chen",
            role: "Lead Security Engineer",
            company: "TechCorp"
        },
        {
            quote: "The AI insights are incredible. It's like having a senior developer reviewing every line of code.",
            author: "Marcus Johnson",
            role: "CTO",
            company: "StartupXYZ"
        },
        {
            quote: "Integration was seamless. Our team's code quality improved by 40% in the first month.",
            author: "Elena Rodriguez",
            role: "Dev Team Lead",
            company: "InnovateLabs"
        }
    ]

    return (
        <div className="bg-gray-950 min-h-screen w-full text-white overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Enhanced Navbar */}
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-950/80 border-b border-slate-800/50"
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className='flex gap-3 justify-center items-center font-mono font-bold text-2xl sm:text-3xl text-sky-400'
                        >
                            <div className="relative">
                                <img width={40} height={40} src="https://cdn3d.iconscout.com/3d/premium/thumb/dark-web-3d-icon-download-in-png-blend-fbx-gltf-file-formats--website-tor-browser-network-deep-pack-crime-security-icons-7412312.png?f=webp" alt="SecureCode" className="drop-shadow-lg" />
                                <div className="absolute inset-0 bg-sky-400/20 rounded-lg blur-md"></div>
                            </div>
                            <span className="bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent">
                                SecureCode
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <nav className="flex gap-6 text-slate-300">
                                <a href="#features" className="hover:text-sky-400 transition-colors">Features</a>
                                <a href="#how-it-works" className="hover:text-sky-400 transition-colors">How It Works</a>
                                {/* <a href="#pricing" className="hover:text-sky-400 transition-colors">Pricing</a>
                                <a href="#docs" className="hover:text-sky-400 transition-colors">Docs</a> */}
                            </nav>
                            <div className='flex gap-4 items-center'>
                              <Link to={'/home'}>
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-lg bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2.5 rounded-lg hover:from-sky-400 hover:to-blue-400 transition-all duration-300 font-semibold shadow-lg"
                                    >
                                    Try Free
                                </motion.button>
                                </Link>
                                <motion.a 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    href="https://github.com/aryanx16/SecureCode" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="relative"
                                >
                                    <img width={36} height={36} src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--social-media-logo-technology-logos-pack-icons-10367941.png?f=webp" alt="GitHub" className="drop-shadow-lg" />
                                </motion.a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-sky-400 p-2"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 pb-4 border-t border-slate-800"
                        >
                            <nav className="flex flex-col gap-4 pt-4 text-slate-300">
                                <a href="#features" className="hover:text-sky-400 transition-colors">Features</a>
                                <a href="#how-it-works" className="hover:text-sky-400 transition-colors">How It Works</a>
                                {/* <a href="#pricing" className="hover:text-sky-400 transition-colors">Pricing</a>
                                <a href="#docs" className="hover:text-sky-400 transition-colors">Docs</a> */}
                                <button className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2.5 rounded-lg mt-4 font-semibold">
                                    Try Free
                                </button>
                            </nav>
                        </motion.div>
                    )}
                </div>
            </motion.nav>

            {/* Enhanced Hero Section */}
            <div className="relative min-h-screen flex justify-center items-center">
                <div className="relative px-6 py-20 sm:py-32 text-center max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-5xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-6"
                        >
                            <span className="inline-block bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 rounded-full px-6 py-2 text-sm font-semibold text-sky-300 mb-8">
                                🚀 Trusted by 10,000+ developers worldwide
                            </span>
                        </motion.div>

                        <h1 className="text-6xl sm:text-8xl font-bold font-mono mb-8 leading-none">
                            <motion.span
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="block bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 bg-clip-text text-transparent"
                            >
                                Secure
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="block bg-gradient-to-r from-blue-300 via-sky-400 to-blue-300 bg-clip-text text-transparent"
                            >
                                Code
                            </motion.span>
                        </h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto"
                        >
                            The world's most advanced AI-powered code review platform. 
                            <br />
                            <span className="text-sky-400 font-semibold">Secure your applications before they reach production.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                        >
                            <motion.button
                                whileHover={{ 
                                    scale: 1.05, 
                                    boxShadow: "0 25px 50px rgba(14, 165, 233, 0.4)",
                                    y: -5
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold px-10 py-5 rounded-xl text-lg hover:from-sky-400 hover:to-blue-400 transition-all duration-300 flex items-center gap-3 shadow-2xl"
                            >
                                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                              <Link to={'/home'}>
                                Start Free Analysis
                              </Link>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <Link to={'https://github.com/aryanx16/SecureCode'}>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group border-2 border-sky-500/50 bg-sky-500/10 backdrop-blur-sm text-sky-400 font-bold px-10 py-5 rounded-xl text-lg hover:bg-sky-500 hover:text-white transition-all duration-300 flex items-center gap-3"
                                >
                                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                                View Source Code
                            </motion.button>
                              </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="flex justify-center"
                        >
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="text-sky-400/60"
                            >
                                <ChevronDown className="w-8 h-8" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 border-y border-slate-800/50 bg-slate-900/20 backdrop-blur-sm"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="text-center group"
                            >
                                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 group-hover:border-sky-500/50 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative z-10">
                                        <div className="text-sm text-slate-400 mb-2 font-medium">{stat.prefix}</div>
                                        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-slate-300 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Enhanced Features Section */}
            <div id="features" className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        // viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 rounded-full px-6 py-2 text-sm font-semibold text-sky-300 mb-6">
                            FEATURES
                        </span>
                        <h2 className="text-5xl sm:text-6xl font-bold font-mono bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent mb-8">
                            Next-Gen Code Analysis
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Powered by cutting-edge AI and machine learning, SecureCode provides comprehensive analysis that goes beyond traditional static analysis tools.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -10 }}
                                className="group relative"
                            >
                                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 group-hover:border-sky-500/50 transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-xl text-sky-400 group-hover:scale-110 transition-transform duration-300">
                                                {feature.icon}
                                            </div>
                                            <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                                                {feature.highlight}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-300 leading-relaxed text-lg">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced How It Works Section */}
            <div id="how-it-works" className="py-24 bg-slate-900/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 rounded-full px-6 py-2 text-sm font-semibold text-sky-300 mb-6">
                            PROCESS
                        </span>
                        <h2 className="text-5xl sm:text-6xl font-bold font-mono bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent">
                            Simple. Fast. Secure.
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { 
                                step: "01", 
                                title: "Upload & Analyze", 
                                description: "Securely upload your code through our encrypted interface or integrate with your CI/CD pipeline for automated scanning.",
                                icon: <Code className="w-12 h-12" />
                            },
                            { 
                                step: "02", 
                                title: "AI Deep Scan", 
                                description: "Our neural networks perform multi-layered analysis including security, performance, maintainability, and compliance checks.",
                                icon: <Bot className="w-12 h-12" />
                            },
                            { 
                                step: "03", 
                                title: "Actionable Insights", 
                                description: "Receive prioritized recommendations with detailed explanations, code examples, and automated fix suggestions.",
                                icon: <CheckCircle className="w-12 h-12" />
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                // viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="relative mb-8">
                                    <div className="text-8xl font-bold text-sky-500/10 mb-4 group-hover:text-sky-500/20 transition-colors">
                                        {item.step}
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-400 group-hover:scale-110 group-hover:text-sky-300 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-sky-400 mb-6 group-hover:text-sky-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 rounded-full px-6 py-2 text-sm font-semibold text-sky-300 mb-6">
                            TESTIMONIALS
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold font-mono text-sky-400 mb-6">
                            Trusted by Industry Leaders
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300"
                            >
                                <div className="mb-6">
                                    <div className="flex text-sky-400 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-slate-300 italic text-lg leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                                <div className="border-t border-slate-700 pt-6">
                                    <div className="font-bold text-white">{testimonial.author}</div>
                                    <div className="text-sky-400 text-sm">{testimonial.role}</div>
                                    <div className="text-slate-400 text-sm">{testimonial.company}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-24 text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-500/10"></div>
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl sm:text-6xl font-bold font-mono bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
                            Ready to Transform Your Code Quality?
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of developers and security teams who rely on SecureCode to build safer, more maintainable applications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                          <Link to={'/home'}>
                            <motion.button
                                whileHover={{ 
                                  scale: 1.05, 
                                  boxShadow: "0 25px 50px rgba(14, 165, 233, 0.4)",
                                  y: -5
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold px-12 py-5 rounded-xl text-xl hover:from-sky-400 hover:to-blue-400 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl"
                                >
                                <Play className="w-6 h-6" />
                                Get Started
                            </motion.button>
                              </Link>
                           
                        </div>
                        <p className="text-slate-400 text-sm mt-6">
                            ✨ No login required • Free to use • Secured 
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Enhanced Footer */}
            <footer className="border-t border-slate-800/50 bg-slate-900/30 backdrop-blur-sm py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <img width={32} height={32} src="https://cdn3d.iconscout.com/3d/premium/thumb/dark-web-3d-icon-download-in-png-blend-fbx-gltf-file-formats--website-tor-browser-network-deep-pack-crime-security-icons-7412312.png?f=webp" alt="SecureCode" />
                                <span className="font-mono font-bold text-2xl bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent">SecureCode</span>
                            </div>
                            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                                The future of secure code development. Powered by AI, trusted by developers worldwide.
                            </p>
                            <div className="flex gap-4">
                                <motion.a 
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href="https://github.com/aryanx16/SecureCode" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-colors"
                                >
                                    <Github className="w-5 h-5 text-sky-400" />
                                </motion.a>
                                <Link to={'https://github.com/aryanx16/SecureCode'}>
                                <motion.button 
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-colors"
                                    >
                                    <Star className="w-5 h-5 text-sky-400" />
                                </motion.button>
                                  </Link>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-white mb-4">Product</h4>
                            <nav className="flex cursor-not-allowed flex-col gap-3 text-slate-400">
                                <a  href="#features" className="cursor-not-allowed hover:text-sky-400 transition-colors">Features</a>
                                <a href="#pricing" className="cursor-not-allowed hover:text-sky-400 transition-colors">Pricing</a>
                                <a href="#security" className="cursor-not-allowed hover:text-sky-400 transition-colors">Security</a>
                                <a href="#integrations" className="cursor-not-allowed hover:text-sky-400 transition-colors">Integrations</a>
                            </nav>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-white mb-4">Company</h4>
                            <nav className="flex flex-col gap-3 text-slate-400">
                                <a href="#about" className="cursor-not-allowed hover:text-sky-400 transition-colors">About</a>
                                <a href="#careers" className="cursor-not-allowed hover:text-sky-400 transition-colors">Careers</a>
                                <a href="#blog" className="cursor-not-allowed hover:text-sky-400 transition-colors">Blog</a>
                                <a href="#contact" className="cursor-not-allowed hover:text-sky-400 transition-colors">Contact</a>
                            </nav>
                        </div>
                    </div>
                    
                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-center md:text-left">
                            © 2025 SecureCode. All rights reserved. Built with ❤️ for secure development.
                        </p>
                        <div className="flex gap-6 text-slate-400 text-sm">
                            <a href="#privacy" className="cursor-not-allowed hover:text-sky-400 transition-colors">Privacy Policy</a>
                            <a href="#terms" className="cursor-not-allowed hover:text-sky-400 transition-colors">Terms of Service</a>
                            <a href="#cookies" className="cursor-not-allowed hover:text-sky-400 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage