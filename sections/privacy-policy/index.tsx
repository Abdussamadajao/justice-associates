import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000')",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-secondary/65 via-secondary/50 to-secondary/65" />
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationFillMode: "forwards" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-white/95 text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Your privacy is important to us. Learn how we protect your
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p className="text-sm text-gray-500 mb-8">
                  Last updated: {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    1. Introduction
                  </h2>
                  <p>
                    Justice & Associates ("we," "our," or "us") is committed to
                    protecting your privacy. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your information when
                    you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    2. Information We Collect
                  </h2>
                  <p className="mb-4">
                    We may collect information about you in a variety of ways:
                  </p>
                  <h3 className="text-xl font-semibold text-secondary mb-3 mt-4">
                    Personal Information
                  </h3>
                  <p>
                    We may collect personal information that you voluntarily
                    provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>Register for an account or consultation</li>
                    <li>Fill out a contact form</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Engage our legal services</li>
                    <li>Communicate with us via email or phone</li>
                  </ul>
                  <p className="mt-4">
                    This information may include your name, email address, phone
                    number, postal address, and other contact details.
                  </p>

                  <h3 className="text-xl font-semibold text-secondary mb-3 mt-6">
                    Automatically Collected Information
                  </h3>
                  <p>
                    When you visit our website, we may automatically collect
                    certain information about your device, including information
                    about your web browser, IP address, time zone, and some of
                    the cookies that are installed on your device.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    3. How We Use Your Information
                  </h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process your requests and transactions</li>
                    <li>Send you administrative information and updates</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect our rights and prevent fraud</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    4. Information Sharing and Disclosure
                  </h2>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information only in the
                    following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                      With service providers who assist us in operating our
                      website and conducting our business
                    </li>
                    <li>
                      When required by law or to respond to legal process
                    </li>
                    <li>
                      To protect our rights, privacy, safety, or property
                    </li>
                    <li>
                      In connection with a business transfer or merger
                    </li>
                    <li>With your consent or at your direction</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    5. Data Security
                  </h2>
                  <p>
                    We implement appropriate technical and organizational
                    security measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                    However, no method of transmission over the Internet or
                    electronic storage is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    6. Your Rights
                  </h2>
                  <p>
                    Under applicable data protection laws, including the Nigeria
                    Data Protection Regulation (NDPR), you have certain rights
                    regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>Right to access your personal information</li>
                    <li>Right to rectify inaccurate information</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    7. Cookies and Tracking Technologies
                  </h2>
                  <p>
                    We use cookies and similar tracking technologies to track
                    activity on our website and hold certain information. You can
                    instruct your browser to refuse all cookies or to indicate
                    when a cookie is being sent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    8. Third-Party Links
                  </h2>
                  <p>
                    Our website may contain links to third-party websites. We are
                    not responsible for the privacy practices or content of these
                    third-party sites. We encourage you to read the privacy
                    policies of any third-party sites you visit.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    9. Children's Privacy
                  </h2>
                  <p>
                    Our services are not directed to individuals under the age of
                    18. We do not knowingly collect personal information from
                    children. If you become aware that a child has provided us
                    with personal information, please contact us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    10. Changes to This Privacy Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy on
                    this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    11. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this Privacy Policy or wish to
                    exercise your rights, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Justice & Associates</strong>
                    <br />
                    Suite C-007 Quad Plaza, Ameh Ebute Street
                    <br />
                    Wuye District, FCT-Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;

