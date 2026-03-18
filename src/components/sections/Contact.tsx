import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { CONTACT, WHATSAPP_LINK } from "@/lib/constants";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-primary-100/20 via-violet-100/15 to-secondary-100/20 rounded-full blur-3xl" />

      <div className="relative grid gap-12 md:grid-cols-2">
        {/* Contact info */}
        <div>
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-200/50 px-4 py-1.5 text-sm font-semibold text-primary-600 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              Contact
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Have questions or want to partner with us? We&apos;d love to hear
              from you. Reach out through any channel below.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="mt-8 space-y-3">
              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 hover:border-primary-200 hover:bg-gradient-to-r hover:from-primary-50 hover:to-white hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-blue-100 text-primary-600 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Email us
                  </p>
                  <p className="text-sm text-gray-500">{CONTACT.email}</p>
                </div>
                <svg
                  className="h-4 w-4 text-gray-300 ml-auto group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Phone */}
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 hover:border-primary-200 hover:bg-gradient-to-r hover:from-primary-50 hover:to-white hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-blue-100 text-primary-600 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Call us</p>
                  <p className="text-sm text-gray-500">{CONTACT.phone}</p>
                </div>
                <svg
                  className="h-4 w-4 text-gray-300 ml-auto group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-green-200/60 bg-gradient-to-r from-green-50 to-emerald-50/50 p-4 hover:border-green-300 hover:shadow-md hover:shadow-green-100 transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-whatsapp text-white group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-green-500/25">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    WhatsApp
                  </p>
                  <p className="text-sm text-gray-500">
                    Chat with us instantly
                  </p>
                </div>
                <svg
                  className="h-4 w-4 text-gray-300 ml-auto group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Location */}
        <div>
          <AnimateOnScroll delay={150}>
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-primary-50 via-blue-50 to-secondary-50 h-64 flex items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full border-2 border-primary-200/40 animate-ping"
                  style={{ animationDuration: "3s" }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full border border-primary-200/30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full border border-primary-100/30" />

                <div className="text-center relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg mx-auto mb-3 text-3xl">
                    📍
                  </div>
                  <p className="font-bold text-gray-800 text-lg">
                    Bangalore, India
                  </p>
                  <p className="text-sm text-gray-500">Karnataka</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Our Location</h3>
                <p className="text-sm text-gray-600 mb-4">{CONTACT.address}</p>
                <p className="text-sm text-gray-500">
                  We&apos;re a Bangalore-based startup on a mission to make
                  school commutes safer for every child in India.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}
