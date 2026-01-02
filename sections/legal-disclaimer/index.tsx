import React from "react";

const LegalDisclaimerPage = () => {
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
                Legal Disclaimer
              </h1>
              <p className="text-white/95 text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Important information about the limitations of our services and
                website content
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
                    1. No Attorney-Client Relationship
                  </h2>
                  <p>
                    The information on this website is provided for general
                    informational purposes only and does not constitute legal
                    advice. The use of this website, including the sending or
                    receiving of information through the website, does not create
                    an attorney-client relationship between you and Justice &
                    Associates.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    2. Not Legal Advice
                  </h2>
                  <p>
                    The content on this website is not intended to be a substitute
                    for professional legal advice. You should not act or refrain
                    from acting on the basis of any content included on this site
                    without seeking appropriate legal or other professional advice
                    on the particular facts and circumstances at issue from a
                    lawyer licensed in your jurisdiction.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    3. No Guarantee of Results
                  </h2>
                  <p>
                    Past results do not guarantee a similar outcome. Each case is
                    unique and must be evaluated on its own facts and
                    circumstances. Any testimonials or case results described on
                    this website are not a guarantee, warranty, or prediction
                    regarding the outcome of your legal matter.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    4. Jurisdictional Limitations
                  </h2>
                  <p>
                    Justice & Associates attorneys are licensed to practice law in
                    Nigeria. The information on this website may not apply to
                    your jurisdiction or may not reflect the most current legal
                    developments. Laws vary by jurisdiction and are subject to
                    change.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    5. Confidentiality
                  </h2>
                  <p>
                    Please do not send any confidential information to us through
                    this website or via email until an attorney-client
                    relationship has been established. Information sent to us
                    before an attorney-client relationship is established may not
                    be protected by attorney-client privilege.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    6. Third-Party Links
                  </h2>
                  <p>
                    This website may contain links to third-party websites. These
                    links are provided for convenience only. Justice & Associates
                    does not endorse or assume responsibility for the content,
                    accuracy, or opinions expressed on such websites.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    7. No Warranties
                  </h2>
                  <p>
                    This website and its contents are provided "as is" without
                    warranty of any kind, either express or implied, including,
                    without limitation, warranties of merchantability, fitness for
                    a particular purpose, or non-infringement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    8. Limitation of Liability
                  </h2>
                  <p>
                    To the fullest extent permitted by law, Justice & Associates
                    shall not be liable for any direct, indirect, incidental,
                    special, consequential, or punitive damages, or any loss of
                    profits or revenues, whether incurred directly or indirectly,
                    or any loss of data, use, goodwill, or other intangible
                    losses resulting from your use of this website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    9. Professional Responsibility
                  </h2>
                  <p>
                    The rules of professional conduct of the Nigerian Bar
                    Association may require that this website be designated as
                    "Attorney Advertising" or "Lawyer Advertising" in some
                    jurisdictions. If this website fails to comply with the laws
                    or ethical rules of your jurisdiction, Justice & Associates
                    does not wish to represent you.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    10. Changes to Disclaimer
                  </h2>
                  <p>
                    Justice & Associates reserves the right to modify this
                    disclaimer at any time. Your continued use of this website
                    after any such changes constitutes your acceptance of the new
                    disclaimer.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    11. Contact Information
                  </h2>
                  <p>
                    If you have any questions about this Legal Disclaimer, please
                    contact us at:
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

export default LegalDisclaimerPage;

