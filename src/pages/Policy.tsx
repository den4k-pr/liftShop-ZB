import { Layout } from "../components/layout";
import React from 'react'

export const Policy = () => {
  return (
    <Layout>
    <div className="policy container">
      <h2 className="second-title">Privacy Policy</h2>
      <span className="main-text">
        At LiftOff ZB, we value your privacy and are committed to ensuring
        transparency about how we handle any information related to the use of
        our website.
      </span>

      <h2 className="second-title">Data Collection</h2>
      <span className="main-text">
        We do not collect or store any personal information or data about your
        activity on our website.
        <br />
        <br />
        The only information processed pertains to payments made through Stripe,
        our secure payment processor. Stripe handles your payment details in
        accordance with its own Privacy Policy.
      </span>

      <h2 className="second-title">Stripe Integration</h2>
      <span className="main-text">
        We use Stripe to process payments. Stripe may collect certain payment
        information, such as your credit or debit card details. All
        payment-related data is handled exclusively by Stripe under their
        Privacy Policy, which you can review here: https://stripe.com/privacy.
        <br />
        <br />
        We do not have access to your payment details or card information.
      </span>

      <h2 className="second-title">Your Rights</h2>
      <span className="main-text">
        Since we do not store any personal data, you do not need to contact us
        for data deletion or correction. For questions regarding your payments,
        please reach out directly to Stripe.
      </span>

      <h2 className="second-title">Changes to This Privacy Policy</h2>
      <span className="main-text">
        This Privacy Policy may be updated if our data handling practices or
        integrations change. We encourage you to check this page periodically
        for updates.
      </span>

      <h2 className="second-title">Contact Us</h2>
      <span className="main-text">
        If you have any questions about this Privacy Policy, feel free to contact us:
        <br/>
        Email: email
        <br/>
        telegram: tg
      </span>
    </div>
    </Layout>
  );
};
