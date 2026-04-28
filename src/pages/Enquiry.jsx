// https://script.google.com/macros/s/AKfycbwN83gPWHil5mAI8uXMUZpy3l0JfaqZKvLBoKPbMX1HGkFty0FnVq943WPxOflW99K3/exec
import { useState } from 'react'

const PALETTES = ['Calacatta Gold', 'Statuario', 'Nero Marquina', 'Carrara']

export default function Enquiry() {
  const [selected, setSelected] = useState('Calacatta Gold')
  
  // Manage the different states of our form submission
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle', 'submitting', 'success', 'error'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residential Interior',
    timeline: 'Immediate (1-3 months)',
    details: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
        projectType: 'Residential Interior',
        timeline: 'Immediate (1-3 months)',
        details: ''
      })
      setSelected('Calacatta Gold')
      
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
            <span className="text-tertiary font-semibold tracking-widest text-xs uppercase mb-4 block">Consultation</span>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#1C1C1E] leading-tight mb-8 font-noto-serif">
              Shape Your Vision <br />in Stone.
            </h1>
            <p className="text-secondary text-lg leading-relaxed mb-12 max-w-md">
              Our curators and master stonemasons are ready to assist in selecting the perfect slab for your architectural masterpiece. Professional guidance for global logistics and bespoke finishing.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary">palette</span>
                </div>
                <div>
                  <h3 className="text-[#1C1C1E] font-bold text-xl mb-1">Material Curation</h3>
                  <p className="text-secondary text-sm">Access to exclusive quarries in Carrara, Tuscany, and beyond.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary">architecture</span>
                </div>
                <div>
                  <h3 className="text-[#1C1C1E] font-bold text-xl mb-1">Technical Advisory</h3>
                  <p className="text-secondary text-sm">Detailed load-bearing and chemical resistance consultations.</p>
                </div>
              </div>
            </div>
            <div className="mt-16 rounded-xl overflow-hidden grayscale contrast-125 opacity-90">
              <img
                className="w-full h-64 object-cover"
                alt="Close-up of a massive white marble block in a brightly lit Italian quarry atelier"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTLSdieRLrDuhpwPK70Ilj0m8eFBv3a7UWk3LbczDm5h5aRB7o6mC-6XeYAOMjGtngkduDdyVfHIWRfDBCDKELd6nWZJ4USaepCn8bT95aeROHQ_EOw67hi1GUhzdVMQ5lFTkM5iPE2b0Yd-ve1AACl0inQ7a7DigEkI_C5hhAa-jsFUdXnzewrqnMNx5sxvVwSsXgBRgrj14hhkyyc0bU-oRwRI3LFQN7Tsvl-ObTifkQeBwclJnIUi_UXZDWLvPUihIgkQtlBqCH"
              />
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
              <form onSubmit={handleSubmit} className="space-y-8 transition-all duration-700 ease-in-out w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-low border-0 border-b border-transparent focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface placeholder:text-secondary/40"
                      placeholder="Julianne Moore"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Email Address</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-low border-0 border-b border-transparent focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface placeholder:text-secondary/40"
                      placeholder="j.moore@studio.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Project Type</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border-0 border-b border-transparent focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface"
                    >
                      <option>Residential Interior</option>
                      <option>Commercial Lobby</option>
                      <option>Bespoke Furniture</option>
                      <option>Exterior Facade</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Estimated Timeline</label>
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border-0 border-b border-transparent focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface"
                    >
                      <option>Immediate (1-3 months)</option>
                      <option>Planning (3-6 months)</option>
                      <option>Future (6+ months)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Preferred Material Palette</label>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {PALETTES.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setSelected(p)}
                        className={`px-5 py-2 text-xs font-medium rounded-full transition-colors ${
                          selected === p
                            ? 'bg-primary text-white'
                            : 'bg-surface-container-high text-secondary hover:bg-surface-container-highest'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Project Details</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface-container-low border-0 border-b border-transparent focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface placeholder:text-secondary/40 resize-none"
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