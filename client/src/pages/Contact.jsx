import {React,useState} from 'react'
import Section from '../components/Section';
import Navbar2 from '../components/Navbar2';

const Contact = () => {
    const faqs = [
      "Help signing in to the console",
      "Trouble shoot your sign-in issue",
      "Help with multi-factor authentication (MFA) issues",
      "Still unable to sign in to your AWS account?",
    ];
    const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
    <Navbar2 className="sticky top-0"/>
    <div className="bg-gray-50 min-h-screen px-6 py-12">

      {/* ===== AWS SIGN-IN RESOURCES ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Cloud sign-in resources
          </h2>
          <p className="text-gray-500">
            See additional resources for issues related to logging into the console
          </p>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b pb-4 cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{item}</p>
                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="text-gray-500 mt-2 text-sm">
                  This is a placeholder explanation for {item}.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== ADDITIONAL RESOURCES ===== */}
      <Section
        title="Additional resources"
        cards={[
          {
            title: "Self-service",
            desc: "Access curated knowledge and community resources.",
          },
          {
            title: "Service limit increases",
            desc: "Request increases for AWS service limits.",
          },
          {
            title: "Report abuse",
            desc: "Report abusive activity from AWS resources.",
          },
        ]}
      />

      {/* ===== COMPLIANCE SUPPORT ===== */}
      <div className="max-w-6xl mx-auto my-16">
        <h2 className="text-2xl font-semibold mb-4">
          Compliance support
        </h2>

        <p className="text-blue-600 cursor-pointer hover:underline">
          Connect with cloud compliance support →
        </p>
      </div>

      {/* ===== SUBSCRIBER SUPPORT ===== */}
      <Section
        title="Subscriber support services"
        cards={[
          {
            title: "Technical support",
            desc: "Support for technical issues.",
          },
          {
            title: "Account or billing support",
            desc: "Help with account & billing queries.",
          },
          {
            title: "Wrongful charges support",
            desc: "Resolve unexpected billing issues.",
          },
          {
            title: "Support plans",
            desc: "Learn about available plans.",
          },
        ]}
      />

      {/* ===== CONTACT CTA ===== */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold mb-8">
          Want to speak with a sales specialist?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Image Card */}
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
              alt="support"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-sm">
              Get in touch
            </span>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-semibold mb-4">Request form</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-3 py-2"
              />
              <textarea
                placeholder="Message"
                className="w-full border rounded-lg px-3 py-2"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
    </>

  )
}

export default Contact