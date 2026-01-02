import React from "react";

const TermsOfServicePage = () => {
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
                Terms of Service
              </h1>
              <p className="text-white/95 text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Please read these terms carefully before using our services
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
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By accessing and using the services of Justice & Associates,
                    you accept and agree to be bound by the terms and provision
                    of this agreement. If you do not agree to abide by the above,
                    please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    2. Use License
                  </h2>
                  <p>
                    Permission is granted to temporarily access the materials on
                    Justice & Associates website for personal, non-commercial
                    transitory viewing only. This is the grant of a license, not
                    a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>
                      Use the materials for any commercial purpose or for any
                      public display
                    </li>
                    <li>
                      Attempt to decompile or reverse engineer any software
                      contained on the website
                    </li>
                    <li>
                      Remove any copyright or other proprietary notations from
                      the materials
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    3. Legal Services
                  </h2>
                  <p>
                    Justice & Associates provides legal services subject to the
                    rules and regulations of the Nigerian Bar Association and
                    applicable laws. The use of our services does not create an
                    attorney-client relationship until a formal engagement
                    agreement is executed.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    4. Disclaimer
                  </h2>
                  <p>
                    The materials on Justice & Associates website are provided
                    on an "as is" basis. Justice & Associates makes no
                    warranties, expressed or implied, and hereby disclaims and
                    negates all other warranties including, without limitation,
                    implied warranties or conditions of merchantability, fitness
                    for a particular purpose, or non-infringement of intellectual
                    property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    5. Limitations
                  </h2>
                  <p>
                    In no event shall Justice & Associates or its suppliers be
                    liable for any damages (including, without limitation, damages
                    for loss of data or profit, or due to business interruption)
                    arising out of the use or inability to use the materials on
                    Justice & Associates website, even if Justice & Associates or
                    a Justice & Associates authorized representative has been
                    notified orally or in writing of the possibility of such
                    damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    6. Revisions and Errata
                  </h2>
                  <p>
                    The materials appearing on Justice & Associates website could
                    include technical, typographical, or photographic errors.
                    Justice & Associates does not warrant that any of the
                    materials on its website are accurate, complete, or current.
                    Justice & Associates may make changes to the materials
                    contained on its website at any time without notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    7. Links
                  </h2>
                  <p>
                    Justice & Associates has not reviewed all of the sites linked
                    to its website and is not responsible for the contents of any
                    such linked site. The inclusion of any link does not imply
                    endorsement by Justice & Associates of the site. Use of any
                    such linked website is at the user's own risk.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    8. Modifications
                  </h2>
                  <p>
                    Justice & Associates may revise these terms of service for
                    its website at any time without notice. By using this website
                    you are agreeing to be bound by the then current version of
                    these terms of service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    9. Governing Law
                  </h2>
                  <p>
                    These terms and conditions are governed by and construed in
                    accordance with the laws of the Federal Republic of Nigeria
                    and you irrevocably submit to the exclusive jurisdiction of
                    the courts in that location.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-secondary mb-4 mt-8">
                    10. Contact Information
                  </h2>
                  <p>
                    If you have any questions about these Terms of Service, please
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

export default TermsOfServicePage;

