import React, { useState } from 'react';
import { 
  FileText, 
  TrendingUp, 
  Calendar, 
  Mail, 
  Award, 
  Trophy, 
  BarChart3,
  ShieldCheck,
  Users,
  Search,
  Building2,
  ClipboardList,
  DollarSign,
  Eye,
  Lock,
  Download,
  Globe,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const modules = [
    {
      title: "Requirements Studio",
      icon: FileText,
      description: "Refine requirements and create comprehensive work statements with AI-powered assistance.",
      features: [
        "Technical Specifications",
        "Statement of Objectives", 
        "Performance Work Statement",
        "Quality Assurance Surveillance Plan"
      ]
    },
    {
      title: "Market Intelligence", 
      icon: TrendingUp,
      description: "Deep market research and competitive analysis to inform your acquisition strategy.",
      features: [
        "Market Research Reports",
        "Historical Pricing Analysis",
        "Competitive Analysis",
        "Commercial Item Determination"
      ]
    },
    {
      title: "Planning & Coordination",
      icon: Calendar,
      description: "Comprehensive acquisition planning with automated D&Fs and justifications.",
      features: [
        "Acquisition Plan Generation",
        "Determinations & Findings", 
        "Risk Matrix Development",
        "Milestone Scheduling"
      ]
    },
    {
      title: "Solicitation",
      icon: Mail,
      description: "Generate professional RFQs and RFPs with automated SAM.gov integration.",
      features: [
        "Request for Quote Generation",
        "CLIN Structure Creation",
        "SAM.gov Posting",
        "Vendor Outreach Management"
      ]
    },
    {
      title: "Evaluation",
      icon: Award,
      description: "Streamlined vendor evaluation with automated scoring and compliance checks.",
      features: [
        "Technical Review Automation",
        "Pricing Analysis Tools",
        "Past Performance Review",
        "Fair & Reasonable Determination"
      ]
    },
    {
      title: "Award",
      icon: Trophy,
      description: "Complete contract generation and award processing with COR appointment automation.",
      features: [
        "Contract Generation",
        "Payment Processing Setup",
        "COR Appointment",
        "Award Notice Posting"
      ]
    },
    {
      title: "Procurement Analytics",
      icon: BarChart3,
      description: "Advanced reporting and analytics to optimize your procurement operations.",
      features: [
        "Spend Analytics",
        "Performance Dashboards",
        "Compliance Reporting",
        "Trend Analysis"
      ]
    }
  ];

  const capabilities = [
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      description: "CAC/PIV and Google SSO integration with role-based access controls"
    },
    {
      icon: Globe,
      title: "SAM.gov Integration", 
      description: "Direct API integration for automated posting and vendor verification"
    },
    {
      icon: Download,
      title: "Document Management",
      description: "Template uploads, automated naming, and bulk document export capabilities"
    },
    {
      icon: Users,
      title: "Collaborative Workflow",
      description: "Human-in-the-loop and full AI automation options with team coordination"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-teal-400 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">FAR 13 Pro</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors">Capabilities</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-3 space-y-3">
              <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
              <a href="#capabilities" className="block text-gray-300 hover:text-white">Capabilities</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
              <button className="w-full bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                FAR 13 Pro
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                AI-powered procurement platform for simplified acquisitions. Streamline FAR 13 
                commercial supplies and services procurement with intelligent automation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 shadow-lg flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>FedRAMP Authorized</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>SAM.gov Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Procurement Suite</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seven integrated modules covering the entire acquisition lifecycle from requirements 
              definition through contract award and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{module.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for government contracting professionals with security, compliance, 
              and integration at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors">
                    <IconComponent className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">95%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Contracting Officers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.3B</div>
              <div className="text-gray-300">Contracts Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Procurement Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of contracting professionals who have streamlined their 
            FAR 13 acquisitions with AI-powered automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 shadow-lg">
              Start 30-Day Free Trial
            </button>
            <button className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-teal-400 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">FAR 13 Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered procurement platform for simplified acquisitions under FAR 13.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 FAR 13 Pro. All rights reserved. FedRAMP Authorized | SOC 2 Compliant</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;