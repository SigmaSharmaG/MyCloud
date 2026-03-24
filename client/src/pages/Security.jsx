import React from 'react'
import Navbar2 from '../components/Navbar2'

const Security = () => {
  return (
    <>
    <Navbar2 className="fix top-0!"/>
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Data. Locked. Protected. Yours.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-blue-100">
          MyCloud protects your files with end-to-end encryption, zero-trust architecture, and real-time threat detection.
        </p>
      </section>

      {/* CORE FEATURES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Core Security Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "End-to-End Encryption",
              desc: "Files are encrypted before upload. Not even we can see your data.",
            },
            {
              title: "Zero-Knowledge Architecture",
              desc: "Your data is never stored in plaintext. Only you hold the keys.",
            },
            {
              title: "Multi-Factor Authentication",
              desc: "Extra login layer with OTP and authenticator apps.",
            },
            {
              title: "Activity Monitoring",
              desc: "Track logins, devices, and suspicious activity in real-time.",
            },
            {
              title: "Secure File Sharing",
              desc: "Password-protected links with expiry and access control.",
            },
            {
              title: "Threat Detection",
              desc: "Real-time alerts for malware and unusual behavior.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Transparency You Can Trust
          </h2>
          <p className="text-gray-600 mb-8">
            We believe security should be transparent. Here’s how we protect your data:
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <ul className="space-y-2">
              <li>• AES-256 encryption for stored data</li>
              <li>• TLS 1.3 secure data transfer</li>
              <li>• Encrypted backups</li>
            </ul>
            <ul className="space-y-2">
              <li>• Secure global data centers</li>
              <li>• No data selling policy</li>
              <li>• Privacy-first design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TECH DETAILS */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Built with Strong Technology
        </h2>
        <p className="text-gray-600 mb-6">
          MyCloud uses industry-standard encryption and distributed infrastructure to keep your data safe.
        </p>

        <div className="bg-gray-100 p-6 rounded-xl text-left text-sm">
          <p>• AES-256 encryption (storage)</p>
          <p>• TLS 1.3 (data in transit)</p>
          <p>• Secure key management</p>
          <p>• Distributed cloud infrastructure</p>
        </div>
      </section>

      {/* USER CONTROL */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            You Are in Control
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="p-4 bg-white rounded-xl shadow">
              Delete your data anytime
            </div>
            <div className="p-4 bg-white rounded-xl shadow">
              Download all your files
            </div>
            <div className="p-4 bg-white rounded-xl shadow">
              Revoke device access
            </div>
            <div className="p-4 bg-white rounded-xl shadow">
              Manage active sessions
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATEMENT */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Security Isn’t a Feature. It’s Our Foundation.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We built MyCloud because your data deserves better security — not just promises.
        </p>
      </section>

    </div>
    </>
    
  )
}

export default Security