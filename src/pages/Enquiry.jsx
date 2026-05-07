// https://script.google.com/macros/s/AKfycbwN83gPWHil5mAI8uXMUZpy3l0JfaqZKvLBoKPbMX1HGkFty0FnVq943WPxOflW99K3/exec
import { useState } from 'react'
import curatedMarbles from '../curated-marbles'

const MATERIAL_OPTIONS = curatedMarbles.map((marble) => `${marble.name} - ${marble.category}`)

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Enquiry() {
  const [selected, setSelected] = useState(MATERIAL_OPTIONS[0] ?? '')
  const [emailTouched, setEmailTouched] = useState(false)
  
  // Manage the different states of our form submission
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle', 'submitting', 'success', 'error'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Interior',
    timeline: 'Immediate (1-3 months)',
    details: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const emailError = formData.email && !EMAIL_PATTERN.test(formData.email)
    ? 'Enter a valid email address, for example name@company.com.'
    : ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEmailTouched(true)

    if (!EMAIL_PATTERN.test(formData.email)) {
      return
    }

    setSubmitStatus('submitting')

    // Replace this with your actual Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwN83gPWHil5mAI8uXMUZpy3l0JfaqZKvLBoKPbMX1HGkFty0FnVq943WPxOflW99K3/exec'

    const payload = {
      ...formData,
      material: selected
    }

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      // Show the beautiful success UI
      setSubmitStatus('success')
      
      // Reset form data in the background
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential Interior',
        timeline: 'Immediate (1-3 months)',
        details: ''
      })
      setSelected(MATERIAL_OPTIONS[0] ?? '')
      setEmailTouched(false)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    }
  }

  return (
    <div className="bg-[#F7F7F5] text-on-surface antialiased">
      <main className="pt-32 pb-24">
        <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#EF2029]" />
              <span className="text-[#EF2029] font-bold tracking-[0.25em] text-[11px] uppercase">Consultation</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#1C1C1E] leading-[1.05] tracking-tight mb-10 font-noto-serif">
              Shape Your Vision <br /><em className="not-italic text-[#EF2029]">in Stone.</em>
            </h1>
            <p className="font-noto-serif text-[#3A3A3C] text-xl leading-[1.7] mb-12 max-w-md">
              Tell us what you are building, the look you have in mind, and any
              marble you already like. We will help shortlist suitable options
              from the Raj Lakshmi catalogue.
            </p>
            <div className="max-w-md border-y border-[#1C1C1E]/10 py-6">
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#bb0016]">
                We can help with
              </p>
              <div className="space-y-3">
                {[
                  ["Material shortlist", "Find matching marble options from the catalogue."],
                  ["Finish direction", "Choose polished, honed, leathered, or custom surfaces."],
                  ["Project fit", "Align slab size, quantity, and timing with your site."],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="group grid grid-cols-[1.75rem_1fr] gap-4 border-t border-[#1C1C1E]/10 pt-3 first:border-t-0 first:pt-0"
                  >
                    <span className="material-symbols-outlined mt-1 text-base text-[#bb0016] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#1C1C1E]">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#5A5A5F]">
                        {copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Area */}
          <div className="lg:col-span-7 bg-white p-12 lg:p-16 rounded-xl shadow-[0_20px_40px_rgba(28,28,30,0.04)] min-h-[700px] flex flex-col justify-center relative overflow-hidden">
            
            {/* Success State UI */}
            {submitStatus === 'success' ? (
              <div className="text-center transition-all duration-700 ease-in-out">
                <div className="w-24 h-24 bg-[#f4f4f2] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <span className="material-symbols-outlined text-5xl text-[#bb0016]">check_circle</span>
                </div>
                <h2 className="text-4xl font-bold text-[#1C1C1E] mb-4 font-noto-serif">Enquiry Received</h2>
                <p className="text-lg text-[#8A8A8F] leading-relaxed max-w-md mx-auto mb-12">
                  Thank you for reaching out. One of our senior consultants will review your project requirements and contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="border-b-2 border-tertiary text-[#1C1C1E] px-4 py-2 text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              
              /* Default Form UI */
              <form onSubmit={handleSubmit} className="space-y-7 transition-all duration-700 ease-in-out w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-[#1C1C1E] uppercase tracking-[0.18em]">Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#F7F7F5] border border-[#1C1C1E]/8 focus:border-[#1C1C1E] focus:bg-white focus:ring-0 transition-all px-4 py-3.5 text-[#1C1C1E] placeholder:text-[#8A8A8F]/60 rounded-md"
                      placeholder="Julianne Moore"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-[#1C1C1E] uppercase tracking-[0.18em]">Email Address</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => setEmailTouched(true)}
                      required
                      aria-invalid={Boolean(emailTouched && emailError)}
                      className={`w-full bg-[#F7F7F5] border focus:bg-white focus:ring-0 transition-all px-4 py-3.5 text-[#1C1C1E] placeholder:text-[#8A8A8F]/60 rounded-md ${
                        emailTouched && emailError
                          ? 'border-[#ba1a1a] focus:border-[#ba1a1a]'
                          : 'border-[#1C1C1E]/8 focus:border-[#1C1C1E]'
                      }`}
                      placeholder="name@company.com"
                      type="email"
                    />
                    {emailTouched && emailError && (
                      <p className="text-xs text-[#ba1a1a] font-medium">{emailError}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-[#1C1C1E] uppercase tracking-[0.18em]">Phone Number</label>
                  <div className="flex items-stretch rounded-md overflow-hidden border border-[#1C1C1E]/8 focus-within:border-[#1C1C1E] bg-[#F7F7F5] focus-within:bg-white transition-all">
                    <span className="flex items-center px-4 bg-[#1C1C1E] text-white text-sm font-bold tracking-wider select-none">
                      +91
                    </span>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '').slice(0, 10) })}
                      required
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      className="flex-1 bg-transparent border-0 focus:ring-0 px-4 py-3.5 text-[#1C1C1E] placeholder:text-[#8A8A8F]/60"
                      placeholder="98765 43210"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-[#1C1C1E] uppercase tracking-[0.18em]">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-[#F7F7F5] border border-[#1C1C1E]/8 focus:border-[#1C1C1E] focus:bg-white focus:ring-0 transition-all px-4 py-3.5 text-[#1C1C1E] rounded-md appearance-none"
                    >
                      <option>Residential Interior</option>
                      <option>Commercial Lobby</option>
                      <option>Bespoke Furniture</option>
                      <option>Exterior Facade</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-[#1C1C1E] uppercase tracking-[0.18em]">Estimated Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-[#F7F7F5] border border-[#1C1C1E]/8 focus:border-[#1C1C1E] focus:bg-white focus:ring-0 transition-all px-4 py-3.5 text-[#1C1C1E] rounded-md appearance-none"
                    >
                      <option>Immediate (1-3 months)</option>
                      <option>Planning (3-6 months)</option>
                      <option>Future (6+ months)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-[#1C1C1E] uppercase tracking-[0.18em]">Preferred Material Palette</label>
                  <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    required
                    className="w-full bg-[#F7F7F5] border border-[#1C1C1E]/8 focus:border-[#1C1C1E] focus:bg-white focus:ring-0 transition-all px-4 py-3.5 text-[#1C1C1E] rounded-md appearance-none"
                  >
                    {MATERIAL_OPTIONS.map((material, index) => (
                      <option key={`${material}-${index}`} value={material}>
                        {material}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-[#1C1C1E] uppercase tracking-[0.18em]">Project Details</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#F7F7F5] border border-[#1C1C1E]/8 focus:border-[#1C1C1E] focus:bg-white focus:ring-0 transition-all px-4 py-3.5 text-[#1C1C1E] placeholder:text-[#8A8A8F]/60 rounded-md resize-none"
                    placeholder="Describe the architectural intent and specific requirements..."
                    rows={4}
                  />
                </div>
                
                {/* Error State Message */}
                {submitStatus === 'error' && (
                  <div className="bg-[#ffdad6] text-[#ba1a1a] p-4 rounded-md text-sm font-medium">
                    There was a problem submitting your request. Please try again.
                  </div>
                )}

                <div className="pt-4 flex flex-col md:flex-row items-center gap-6">
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className={`w-full md:w-auto bg-[#EF2029] text-white px-12 py-5 rounded-md text-sm font-bold tracking-widest uppercase transition-all duration-300 ${submitStatus === 'submitting' ? 'opacity-70 cursor-wait' : 'hover:scale-102 hover:shadow-lg hover:shadow-[#EF2029]/20'}`}
                  >
                    {submitStatus === 'submitting' ? 'Processing...' : 'Submit Enquiry'}
                  </button>
                  <p className="text-xs text-secondary leading-relaxed max-w-xs">
                    By submitting, you agree to our heritage standards and data privacy protocols.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
