#!/usr/bin/env python3
# Read the current file
with open(r"c:\Users\Al-Khaliily\portfolio\app\page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Find the section to replace - start from {/* ABOUT */}
about_start = content.find('{/* ABOUT */}')
if about_start != -1:
    # Find the next closing section tag
    section_end = content.find('</section>', about_start)
    if section_end != -1:
        section_end += len('</section>')
        
        new_about_section = '''    {/* ABOUT */}
    <section className="bg-gradient-to-b from-blue-900 to-blue-950 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-16 text-center">ABOUT ME</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72">
              <img 
                src="about.png"
                alt="Profile"
                className="w-full h-full rounded-3xl shadow-2xl object-cover border-4 border-blue-400 transition duration-300 hover:scale-105"
              />
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-500 rounded-full opacity-50 blur-lg"></div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              I'm a frontend developer focused on building fast, responsive, and scalable web applications using <span className="text-blue-300 font-semibold">React, Next.js, Tailwind CSS</span>, and modern APIs.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              I create more than just interfaces—I build clean, data-driven user experiences optimized for performance, usability, and real-world results.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              My approach is centered on <span className="text-blue-300 font-semibold">clean architecture</span>, reusable components, and maintainable code, from planning through to production-ready delivery.
            </p>
          </div>
        </div>

        <div className="bg-blue-800 bg-opacity-50 backdrop-blur rounded-2xl p-10 border border-blue-600 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">MY GOAL</h2>
          <p className="text-lg text-gray-100 mb-8 leading-relaxed">
            My goal is to grow into a highly skilled frontend engineer, building scalable, high-performance applications that solve real problems. I'm continuously improving my expertise in React, Next.js, Tailwind CSS, and API-driven development to deliver stronger, more impactful digital products.
          </p>
          <p className="text-xl text-blue-300 font-semibold text-center">
            Available for frontend roles and freelance projects—let's build something that performs.
          </p>
        </div>
      </div>
    </section>'''
        
        # Replace the old section with the new one
        new_content = content[:about_start] + new_about_section + content[section_end:]
        
        # Write back
        with open(r"c:\Users\Al-Khaliily\portfolio\app\page.tsx", "w", encoding="utf-8") as f:
            f.write(new_content)
        
        print("File updated successfully!")
