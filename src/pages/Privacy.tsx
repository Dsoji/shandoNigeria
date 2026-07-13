import { LegalPage } from './LegalPage'
import { contact } from '../data/contact'

export function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      intro="Shando Nigeria Limited respects your privacy. This policy explains what information we collect through this website, how we use it, and the choices you have. It applies only to this website and not to any third-party sites we link to."
      sections={[
        {
          heading: 'Information we collect',
          body: (
            <p>
              When you submit an enquiry through our contact form, we collect the
              details you provide — typically your name, email address, company,
              the service you are interested in, and your message. We do not
              require you to create an account to use this site.
            </p>
          ),
        },
        {
          heading: 'How we use your information',
          body: (
            <p>
              We use the information you provide solely to respond to your
              enquiry, discuss potential services, and maintain a record of our
              correspondence. We do not use it for automated decision-making or
              profiling.
            </p>
          ),
        },
        {
          heading: 'Sharing your information',
          body: (
            <p>
              We do not sell or rent your personal information. We may share it
              with trusted service providers who help us operate this site (for
              example, our form-delivery provider), and only to the extent
              needed to respond to you or where required by law.
            </p>
          ),
        },
        {
          heading: 'Data retention',
          body: (
            <p>
              We keep enquiry information only for as long as necessary to
              respond to and follow up on your request, or as required for our
              legitimate business and legal obligations.
            </p>
          ),
        },
        {
          heading: 'Your rights',
          body: (
            <p>
              You may request access to, correction of, or deletion of the
              personal information you have shared with us. To make a request,
              contact us using the details below.
            </p>
          ),
        },
        {
          heading: 'Contact us',
          body: (
            <p>
              Questions about this policy? Email us at{' '}
              <a
                href={`mailto:${contact.email}`}
                className="text-accent hover:underline"
              >
                {contact.email}
              </a>{' '}
              or write to us at {contact.address}.
            </p>
          ),
        },
      ]}
    />
  )
}
