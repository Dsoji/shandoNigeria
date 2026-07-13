import { LegalPage } from './LegalPage'
import { contact } from '../data/contact'

export function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="July 2026"
      intro="These terms govern your use of the Shando Nigeria Limited website. By accessing or using this site, you agree to them. If you do not agree, please do not use the site."
      sections={[
        {
          heading: 'Use of this website',
          body: (
            <p>
              You may use this website for lawful purposes only — to learn about
              our services and to contact us. You agree not to misuse the site,
              attempt to disrupt it, or use it in any way that could damage or
              impair its availability to others.
            </p>
          ),
        },
        {
          heading: 'Enquiries and quotes',
          body: (
            <p>
              Information on this site is provided for general guidance and does
              not constitute a binding offer. Submitting an enquiry or requesting
              a quote does not create a contract; any engagement is subject to a
              separate written agreement between you and Shando Nigeria Limited.
            </p>
          ),
        },
        {
          heading: 'Intellectual property',
          body: (
            <p>
              The content on this site — including text, logos, and imagery — is
              owned by or licensed to Shando Nigeria Limited and is protected by
              applicable laws. You may not reproduce or reuse it without our
              prior written permission.
            </p>
          ),
        },
        {
          heading: 'Limitation of liability',
          body: (
            <p>
              We aim to keep the information on this site accurate and current,
              but we make no warranties as to its completeness or accuracy. To
              the extent permitted by law, Shando Nigeria Limited is not liable
              for any loss arising from your use of, or reliance on, this
              website.
            </p>
          ),
        },
        {
          heading: 'Governing law',
          body: (
            <p>
              These terms are governed by the laws of the Federal Republic of
              Nigeria, and any disputes will be subject to the jurisdiction of
              its courts.
            </p>
          ),
        },
        {
          heading: 'Contact us',
          body: (
            <p>
              Questions about these terms? Email us at{' '}
              <a
                href={`mailto:${contact.email}`}
                className="text-accent hover:underline"
              >
                {contact.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  )
}
