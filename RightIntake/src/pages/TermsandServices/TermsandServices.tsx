import React, { useState } from "react";
import "./TermsandServices.css";

import Layout from "../layoutPage";

const TermsandServices = () => {
  const [isPrivacyToggle, setIsPrivacyToggle] = useState(false);
  const [isTermsToggle, setIsTermsToggle] = useState(false);
  const [isRefundToggle, setIsRefundToggle] = useState(false);

  return (
    <div className="terms-ui-wrapper">
      {/* Terms and Services code ... */}
      <div className="terms-container-wrapper">
        {/* Privacy  */}
        <div className="privacy-div">
          <div
            className="privacy-ui-wrapper"
            onClick={() => setIsPrivacyToggle(!isPrivacyToggle)}
          >
            <h1>Terms of Service</h1>
            {isPrivacyToggle ? (
              <img src="/svgs/minus.svg" alt="plus" width={20} />
            ) : (
              <img src="/svgs/plus.svg" alt="minus" width={20} />
            )}
          </div>
          {isPrivacyToggle && (
            <div className="privacy-content-ui-wrapper">
              <div className="overview">
                <h1>Over view</h1>
                <p>
                  This website is operated by Kineticscape Studios. Throughout
                  the site and app, the terms “we,” “us,” and “our” refer to
                  Kineticscape Studios. Kineticscape Studios offers this
                  website, including all information, tools, and services
                  available from this site, to you, the user, conditioned upon
                  your acceptance of all terms, conditions, policies, and
                  notices stated here. This Terms of Service document also
                  governs the Right Intake App and the Right Intake Diet and
                  Workout Plan, which are services offered by Kineticscape
                  Studios under separate but related scopes. The Right Intake
                  App includes diverse features for health and wellness, while
                  the Right Intake Diet and Workout Plan offers a 30-day diet
                  and workout guide for ₹99. By visiting our site, using our
                  app, and/or purchasing something from us, you engage in our
                  “Service” and agree to be bound by the following terms and
                  conditions (“Terms of Service,” “Terms”), including those
                  additional terms and conditions and policies referenced herein
                  and/or available by hyperlink. These Terms of Service apply to
                  all users of the site and app, including without limitation
                  users who are browsers, vendors, customers, merchants, and/or
                  contributors of content. Please read these Terms of Service
                  carefully before accessing or using our website or
                  application. By accessing or using any part of the site, app,
                  or services, you agree to be bound by these Terms of Service.
                  If you do not agree to all the terms and conditions of this
                  agreement, then you may not access the website, app, or use
                  any services. If these Terms of Service are considered an
                  offer, acceptance is expressly limited to these Terms of
                  Service. Any new features or tools which are added to the
                  current website or app shall also be subject to the Terms of
                  Service. You can review the most current version of the Terms
                  of Service at any time on this page. We reserve the right to
                  update, change, or replace any part of these Terms of Service
                  by posting updates and/or changes to our website or app. It is
                  your responsibility to check this page periodically for
                  changes. Your continued use of or access to the website, app,
                  or Service following the posting of any changes constitutes
                  acceptance of those changes.
                </p>
              </div>

              {/* content 1 */}
              <div className="content">
                <h1>01 ONLINE STORE AND APP TERMS</h1>
                <p>
                  By agreeing to these Terms of Service, you represent that you
                  are at least the age of majority in your state or province of
                  residence or that you are the age of majority in your state or
                  province of residence and you have given us your consent to
                  allow any of your minor dependents to use this site or app.
                  You may not use our products or services for any illegal or
                  unauthorized purpose nor may you, in the use of the Service,
                  violate any laws in your jurisdiction (including but not
                  limited to copyright laws). You must not transmit any worms,
                  viruses, or any code of a destructive nature. A breach or
                  violation of any of the Terms will result in an immediate
                  termination of your Services.
                </p>
              </div>

              {/* content 2 */}
              <div className="content">
                <h1>02 GENERAL CONDITIONS</h1>
                <p>
                  We reserve the right to refuse service to anyone for any
                  reason at any time. You understand that your content (not
                  including credit card information) may be transferred
                  unencrypted and involve transmissions over various networks.
                  Credit card information is always encrypted during transfer
                  over networks. You agree not to reproduce, duplicate, copy,
                  sell, resell, or exploit any portion of the Service, use of
                  the Service, or access to the Service or any contact on the
                  website or app through which the Service is provided, without
                  express written permission by us. The headings used in this
                  agreement are included for convenience only and will not limit
                  or otherwise affect these Terms.
                </p>
              </div>
              {/* content 3 */}
              <div className="content">
                <h1>03 SPECIFIC TERMS FOR KINETICSCAPE STUDIOS WEBSITE</h1>
                <p>
                  The Kineticscape Studios website is a digital platform
                  offering interactive and immersive marketing services. By
                  using this site, you agree that:
                </p>
                <ol className="ordered-list">
                  <li>
                    All content on this site is owned or licensed by
                    Kineticscape Studios and is protected under applicable
                    copyright laws.
                  </li>
                  <li>
                    Unauthorized reproduction, distribution, or modification of
                    the content is strictly prohibited.
                  </li>
                  <li>
                    All client interactions, inquiries, and purchases are
                    governed by the policies outlined in this Terms of Service
                    document.
                  </li>
                </ol>
              </div>
              {/* content 4 */}
              <div className="content">
                <h1>04 SPECIFIC TERMS FOR THE RIGHT INTAKE APP</h1>
                <p>
                  The Right Intake App is a comprehensive health and wellness
                  application offering a range of features, including:
                </p>
                <ol className="ordered-list">
                  <li>
                    Daily calorie and food recommendations personalized to user
                    preferences and locations.
                  </li>
                  <li>Subscription-based access to advanced features.</li>
                  <li>AI-driven suggestions for diet and exercise.</li>
                </ol>
                <p>User Responsibilities:</p>
                <ol className="ordered-list">
                  <li>
                    You are responsible for ensuring that all information
                    provided within the app (e.g., health details, preferences)
                    is accurate and up-to-date.
                  </li>
                  <li>
                    Consult a healthcare professional before implementing any
                    dietary or workout recommendations provided by the app.
                  </li>
                </ol>
                <p>Disclaimer:</p>
                <ol className="ordered-list">
                  <li>
                    The app does not replace professional medical advice or
                    diagnosis. Use the recommendations at your own discretion.
                  </li>
                </ol>
              </div>
              {/* content 5 */}
              <div className="content">
                <h1>
                  05 SPECIFIC TERMS FOR THE RIGHT INTAKE DIET AND WORKOUT PLAN
                </h1>
                <p>
                  The Right Intake Diet and Workout Plan is a paid service
                  offered as an add-on for ₹99. By purchasing this plan, you
                  agree to the following:
                </p>
                <ol className="ordered-list">
                  <li>
                    The diet and workout plans are tailored based on limited
                    user inputs and may not account for specific medical
                    conditions.
                  </li>
                  <li>
                    Refunds are not applicable once the plan has been delivered
                    to the user.
                  </li>
                  <li>
                    Kineticscape Studios is not liable for any adverse effects
                    or injuries arising from the use of the diet or workout
                    plans.
                  </li>
                </ol>
              </div>
              {/* content 6 */}
              <div className="content">
                <h1>06 ACCURACY OF BILLING AND ACCOUNT INFORMATION</h1>
                <p>
                  To ensure the smooth operation of our services, users are
                  required to provide complete, accurate, and current billing
                  and account information for all purchases and transactions
                  made on the Kineticscape Studios website, the Right Intake
                  App, and for the Right Intake Diet and Workout Plan. This
                  includes but is not limited to providing valid names, billing
                  addresses, payment methods, and contact details.
                </p>
                <p>We reserve the right to:</p>
                <ol className="ordered-list">
                  <li>
                    Validate the information you provide before processing any
                    orders or granting access to services.
                  </li>
                  <li>
                    Cancel or modify orders that contain incorrect or fraudulent
                    information.
                  </li>
                  <li>
                    Suspend or terminate accounts that provide false or outdated
                    information.
                  </li>
                </ol>
                <p>
                  Failure to comply with these requirements may result in a
                  denial of access to our services. Any fraudulent use of
                  payment information or impersonation will be reported to the
                  relevant authorities for further action.
                </p>
              </div>
              {/* content 7 */}
              <div className="content">
                <h1>07 THIRD-PARTY LINKS</h1>
                <p>
                  The Kineticscape Studios website and the Right Intake App may
                  include links to third-party websites, platforms, or resources
                  that are not controlled or managed by us. These links are
                  provided solely for convenience or reference and do not
                  constitute endorsement or approval of the content, products,
                  or services offered by these third parties.
                </p>
                <p>We are not responsible for:</p>
                <ol className="ordered-list">
                  <li>
                    The accuracy, legality, or reliability of any content or
                    services provided by third-party sites.
                  </li>
                  <li>
                    Any damages, losses, or issues arising from interactions,
                    transactions, or agreements you engage in with third-party
                    providers.
                  </li>
                  <li>
                    Updating or monitoring third-party links for relevance or
                    functionality.
                  </li>
                </ol>
                <p>
                  It is your responsibility to review the terms and conditions
                  and privacy policies of any third-party platforms before
                  engaging with them. Any disputes or concerns regarding these
                  third parties must be directed to the respective entities.
                </p>
              </div>
              {/* content 8 */}
              <div className="content">
                <h1>08 USER COMMENTS, FEEDBACK, AND SUBMISSIONS</h1>
                <p>
                  We welcome user-generated comments, feedback, suggestions, and
                  other submissions related to our services. By submitting such
                  content, you grant Kineticscape Studios a non-exclusive,
                  perpetual, royalty-free, and transferable license to use,
                  reproduce, modify, publish, distribute, and display your
                  submissions across various media:
                </p>
                <ol className="ordered-list">
                  <li>
                    <b>Ownership:</b> You agree that any comments or feedback
                    provided are voluntary and not confidential. Kineticscape
                    Studios retains the right to use them for marketing,
                    research, or improvement purposes without compensation.
                  </li>
                  <li>
                    <b>Prohibited Submissions:</b> Content that is illegal,
                    harmful, offensive, defamatory, infringing, or in violation
                    of any third-party rights will not be tolerated. Submissions
                    containing viruses or other malicious code are strictly
                    prohibited.
                  </li>
                  <li>
                    <b>Liability:</b> You are solely responsible for the
                    accuracy and legality of the submissions you provide.
                    Kineticscape Studios assumes no liability for content
                    submitted by users.
                  </li>
                </ol>
              </div>
              {/* content 9 */}
              <div className="content">
                <h1>09 PERSONAL INFORMATION</h1>
                <p>
                  Your submission of personal information through the
                  Kineticscape Studios website, the Right Intake App, and
                  related services is governed by our Privacy Policy. By using
                  our services, you agree that:
                </p>
                <ol className="ordered-list">
                  <li>
                    Your data will be collected, stored, and processed in
                    accordance with applicable laws.
                  </li>
                  <li>
                    Personal information may be shared with third-party service
                    providers to facilitate transactions, improve user
                    experience, or provide customer support.
                  </li>
                  <li>
                    You are responsible for maintaining the security of your
                    account credentials. Kineticscape Studios is not liable for
                    unauthorized access resulting from negligence in securing
                    login details.
                  </li>
                </ol>
              </div>
              {/* content 10 */}
              <div className="content">
                <h1>10 PROHIBITED USES</h1>
                <p>
                  Users are strictly prohibited from engaging in activities that
                  compromise the integrity, security, or lawful use of the
                  Kineticscape Studios website, the Right Intake App, and
                  associated services. Prohibited actions include, but are not
                  limited to:
                </p>
                <ol className="ordered-list">
                  <li>
                    Using the platform for illegal purposes, including
                    soliciting or facilitating unlawful acts.
                  </li>
                  <li>
                    Uploading malicious software, viruses, or harmful code.
                  </li>
                  <li>
                    Harassing, defaming, or discriminating against individuals
                    or groups.
                  </li>
                  <li>
                    Collecting or sharing the personal information of others
                    without consent.
                  </li>
                  <li>
                    Engaging in fraudulent activities or misrepresenting your
                    identity.
                  </li>
                  <li>
                    Circumventing security features or attempting unauthorized
                    access to restricted areas.
                  </li>
                </ol>
                <p>
                  Violations may result in immediate termination of access and
                  legal action as necessary.
                </p>
              </div>
              {/* content 11 */}
              <div className="content">
                <h1>11 DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</h1>
                <p>
                  All services, tools, and information provided by Kineticscape
                  Studios, the Right Intake App, and the Right Intake Diet and
                  Workout Plan are offered on an "as is" and "as available"
                  basis. We make no guarantees regarding:
                </p>
                <ol className="ordered-list">
                  <li>
                    The uninterrupted, timely, or error-free functionality of
                    the services.
                  </li>
                  <li>
                    The accuracy or reliability of the recommendations, results,
                    or content provided.
                  </li>
                </ol>
                <p>You acknowledge and agree that:</p>
                <ol className="ordered-list">
                  <li>
                    The uninterrupted, timely, or error-free functionality of
                    the services.
                  </li>
                  <li>Your use of the services is at your own risk.</li>
                  <li>
                    Kineticscape Studios is not liable for direct, indirect,
                    incidental, or consequential damages arising from your use
                    of the services, even if advised of potential risks.
                  </li>
                  <li>
                    Certain jurisdictions do not allow the exclusion of
                    warranties or limitations on liability, and in such cases,
                    our liability shall be limited to the extent permitted by
                    law.
                  </li>
                </ol>
              </div>

              {/* content 12 */}
              <div className="content">
                <h1>12 INDEMNIFICATION</h1>
                <p>
                  By using our services, you agree to indemnify and hold
                  harmless Kineticscape Studios, its affiliates, employees,
                  agents, and contractors from any claims, demands, or legal
                  actions arising from:
                </p>
                <ol className="ordered-list">
                  <li>
                    Your breach of these Terms of Service or related policies.
                  </li>
                  <li>Your misuse of the website, app, or services.</li>
                  <li>
                    Any violation of the rights of third parties, including
                    intellectual property or privacy rights.
                  </li>
                </ol>
                <p>
                  This indemnity extends to all liabilities, damages, costs, and
                  expenses, including reasonable attorney fees.
                </p>
              </div>

              {/* content 13 */}
              <div className="content">
                <h1>13 GOVERNING LAW</h1>
                <p>
                  These Terms of Service, and any disputes arising under them,
                  shall be governed by and construed in accordance with the laws
                  of India. Any legal proceedings related to these Terms will be
                  conducted under the jurisdiction of the courts located in
                  Mumbai, Maharashtra.
                </p>
              </div>

              {/* content 14 */}
              <div className="content">
                <h1>14 CHANGES TO TERMS OF SERVICE</h1>
                <p>
                  We reserve the right to update or modify these Terms of
                  Service at any time without prior notice. Changes will be
                  posted on the Kineticscape Studios website and the Right
                  Intake App. It is the user’s responsibility to periodically
                  review the Terms of Service for updates. Continued use of our
                  services constitutes acceptance of the updated terms.
                </p>
              </div>

              {/* content 15 */}
              <div className="content">
                <h1>15 CONTACT INFORMATION</h1>
                <p>
                  For questions, concerns, or requests related to these Terms of
                  Service, please contact us at:
                </p>
                <p>Email: contact@kineticscapestudios.com</p>
              </div>
            </div>
          )}
        </div>

        {/* Terms and Services */}
        <div className="privacy-div">
          <div
            className="privacy-ui-wrapper"
            onClick={() => setIsTermsToggle(!isTermsToggle)}
          >
            <h1>Privacy policy</h1>
            {isTermsToggle ? (
              <img src="/svgs/minus.svg" alt="minus" width={20} />
            ) : (
              <img src="/svgs/plus.svg" alt="plus" width={20} />
            )}
          </div>
          {isTermsToggle && (
            <div className="privacy-content-ui-wrapper">
              {/* content 1 */}
              <div className="content">
                <h1>01 WHAT DO WE DO WITH YOUR INFORMATION?</h1>
                <p>
                  When you purchase something from our store or use our
                  services, including the Right Intake App and Right Intake Diet
                  and Workout Plan, as part of the buying and selling process,
                  we collect personal information such as your name, address,
                  email address, and payment details. When you browse our
                  website or app, we automatically collect certain information
                  about your device, including your computer’s internet protocol
                  (IP) address, browser type, and operating system, to help us
                  provide a better user experience. Email marketing (if
                  applicable): With your permission, we may send you emails
                  about our services, products, promotions, and updates. This
                  includes notifications about new features or changes to the
                  Right Intake App and Right Intake Diet and Workout Plan.
                </p>
              </div>

              {/* content 2 */}
              <div className="content">
                <h1>02 CONSENT</h1>
                <p>How do you get my consent?</p>
                <p>
                  When you provide us with personal information to complete a
                  transaction, verify your credit card, place an order, or use
                  the Right Intake App, we imply that you consent to our
                  collecting it and using it for that specific reason only.
                  <br />
                  <br />
                  If we ask for your personal information for a secondary
                  purpose, such as marketing, we will ask for your explicit
                  consent or provide an option to decline
                </p>
                <p>How do I withdraw my consent?</p>
                <p>
                  If after opting in, you change your mind, you may withdraw
                  your consent for us to contact you or for the continued
                  collection, use, or disclosure of your information at any time
                  by contacting us at
                  <b>contact@kineticscapestudios.com</b> or mailing us at:
                  <b>
                    Kineticscape Studios, [Kineticscape Studios, plot no.64,
                    Shivaji housing society, near shivaji stadium, Karad,
                    415110]
                  </b>
                </p>
              </div>
              {/* content 3 */}
              <div className="content">
                <h1>03 DISCLOSURE</h1>
                <p>We may disclose your personal information::</p>
                <ol className="ordered-list">
                  <li>
                    If required by law or in response to valid legal processes.
                  </li>
                  <li>
                    To enforce our Terms of Service or protect the rights,
                    safety, or property of Kineticscape Studios, our users, or
                    others.
                  </li>
                  <li>If you violate our Terms of Service.</li>
                </ol>
              </div>
              {/* content 4 */}
              <div className="content">
                <h1>04 PAYMENT</h1>
                <p>
                  We use <b>Razorpay</b> for processing payments. Neither we nor
                  Razorpay store your card data on their servers. The data is
                  encrypted through the Payment Card Industry Data Security
                  Standard (PCI-DSS) during payment processing. Your transaction
                  data is only used as necessary to complete your purchase and
                  is deleted afterward.
                  <br />
                  <br />
                  Our payment gateway complies with PCI-DSS standards to ensure
                  the secure handling of credit card information. For more
                  details, please review Razorpay’s terms at
                  https://razorpay.com.
                </p>
              </div>
              {/* content 5 */}
              <div className="content">
                <h1>05 THIRD-PARTY SERVICES</h1>
                <p>
                  Third-party service providers may collect, use, and disclose
                  your information to the extent necessary to perform the
                  services they provide to us, such as payment processing and
                  analytics.
                </p>
                <p>Third-party Privacy Policies:</p>
                <p>
                  Certain third-party service providers, including payment
                  gateways, have their own privacy policies governing the
                  information we are required to provide for your transactions.
                  We encourage you to review their policies
                </p>
                <p>Jurisdictional Impact:</p>
                <p>
                  If you engage in a transaction involving a third-party service
                  provider, your data may be subject to the laws of the
                  jurisdiction in which that provider or its facilities are
                  located.
                  <br />
                  <br />
                  Once you leave our website or app or are redirected to a
                  third-party platform, this Privacy Policy no longer applies.
                  We are not responsible for the privacy practices of
                  third-party websites.
                </p>
                <p>Links:</p>
                <p>
                  Clicking on links on our website or app may redirect you to
                  external sites. We are not liable for the privacy practices of
                  these sites and encourage you to review their privacy
                  policies.
                </p>
              </div>
              {/* content 6 */}
              <div className="content">
                <h1>06 SECURITY</h1>
                <p>
                  To protect your personal information, we use industry-standard
                  precautions to prevent unauthorized access, misuse, or
                  disclosure. Measures include encryption, secure storage, and
                  access controls.
                  <br />
                  <br />
                  While we strive to safeguard your data, no method of
                  transmission or electronic storage is completely secure. By
                  using our services, you acknowledge this inherent risk
                </p>
              </div>
              {/* content 7 */}
              <div className="content">
                <h1>07 COOKIES</h1>
                <p>
                  We use cookies to maintain user sessions and enhance your
                  experience on our website and app. These cookies do not
                  personally identify you on other websites.
                </p>
                <p>Cookies may track:</p>
                <ol className="ordered-list">
                  <li>Session preferences.</li>
                  <li>Usage patterns to improve services.</li>
                </ol>
                <p>
                  You may disable cookies in your browser settings; however,
                  this may affect your experience with our services.
                </p>
              </div>
              {/* content 8 */}
              <div className="content">
                <h1>08 AGE OF CONSENT</h1>
                <p>By using this website or app, you confirm that:</p>
                <ol className="ordered-list">
                  <li>
                    You are at least the age of majority in your state or
                    province of residence.
                  </li>
                  <li>
                    If applicable, you have given consent for your minor
                    dependents to use our website or app.
                  </li>
                </ol>
              </div>
              {/* content 9 */}
              <div className="content">
                <h1>09 CHANGES TO THIS PRIVACY POLICY</h1>
                <p>
                  We reserve the right to modify this Privacy Policy at any
                  time. Changes will take effect immediately upon posting on our
                  website or app. Material changes will be highlighted, ensuring
                  you are informed about updates in how your information is
                  collected, used, or disclosed.
                  <br />
                  <br />
                  If Kineticscape Studios is acquired or merged with another
                  company, your personal information may be transferred to the
                  new entity.
                </p>
              </div>
              {/* content 10 */}
              <div className="content">
                <h1>QUESTIONS AND CONTACT INFORMATION</h1>
                <p>If you would like to:</p>
                <ol className="ordered-list">
                  <li>
                    Access, correct, amend, or delete any personal information
                    we have about you.
                  </li>
                  <li>Register a complaint.</li>
                  <li>Request more information about our data practices.</li>
                </ol>
                <p>Please contact our Privacy Compliance Officer at:</p>
                <p>Email: contact@kineticscapestudios.com</p>
                <p>Mailing Address: </p>
                <p>
                  Kineticscape Studios, plot no.64,
                  <br />
                  Shivaji housing society,
                  <br />
                  near shivaji stadium,
                  <br />
                  Karad, 415110
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Refund Policy */}
        <div className="privacy-div">
          <div
            className="privacy-ui-wrapper"
            onClick={() => setIsRefundToggle(!isRefundToggle)}
          >
            <h1>Refund policy</h1>
            {isRefundToggle ? (
              <img src="/svgs/minus.svg" alt="minus" width={20} />
            ) : (
              <img src="/svgs/plus.svg" alt="plus" width={20} />
            )}
          </div>
          {isRefundToggle && (
            <div className="privacy-content-ui-wrapper">
              <div className="overview">
                <h1>Overview</h1>
                <p>
                  At <b>Kineticscape Studios </b>, we aim to provide our users
                  with quality services and a seamless experience. This Refund
                  Policy outlines the circumstances under which refunds may be
                  granted for purchases made on the{" "}
                  <b>Kineticscape Studios website</b>, the{" "}
                  <b>Right Intake App</b>, and the{" "}
                  <b>Right Intake Diet and Workout Plan</b>.
                  <br /> <br />
                  By making a purchase or using our services, you agree to the
                  terms outlined in this Refund Policy.
                </p>
              </div>

              <div className="content">
                <h1>01 GENERAL REFUND POLICY</h1>
                <p>
                  Refunds are generally not applicable for digital products and
                  services once they have been delivered or accessed. However,
                  exceptions may apply in specific cases, as described below:
                </p>
                <p>Non-Refundable Services:</p>
                <ol className="ordered-list">
                  <li>
                    <b>Right Intake Diet and Workout Plan</b>: This plan is a
                    non-refundable service due to its digital and personalized
                    nature. Once the plan has been delivered, no refunds will be
                    issued.
                  </li>
                  <li>
                    <b>Subscription Fees</b>: Any subscription or membership
                    fees for the Right Intake App are non-refundable once
                    payment has been processed
                  </li>
                  <li>
                    All client interactions, inquiries, and purchases are
                    governed by the policies outlined in this Terms of Service
                    document.
                  </li>
                </ol>
              </div>

              <div className="content">
                <h1>02 ELIGIBILITY FOR REFUNDS</h1>
                <p>
                  Refunds may only be considered under the following
                  circumstances:
                </p>
                <p>
                  <b>Technical Issues:</b>
                </p>
                <ol className="ordered-list">
                  <li>
                    If a technical issue prevents you from accessing the
                    purchased service, and our support team is unable to resolve
                    it within 7 business days, you may be eligible for a refund.
                  </li>
                </ol>
                <p>
                  <b>Duplicate Payments:</b>
                </p>
                <ol className="ordered-list">
                  <li>
                    If you are charged more than once for the same service, the
                    duplicate charge will be refunded upon verification.
                  </li>
                </ol>
                <p>
                  <b>Unauthorized Transactions:</b>
                </p>
                <ol className="ordered-list">
                  <li>
                    If a purchase was made fraudulently or without your
                    authorization, and this can be verified, a refund may be
                    issued.
                  </li>
                </ol>
              </div>

              <div className="content">
                <h1>03 REQUESTING A REFUND</h1>
                <p>
                  To request a refund, please contact us at
                  contact@kineticscapestudios.com with the following details:
                </p>
                <p>
                  <b>Technical Issues:</b>
                </p>
                <ol className="ordered-list">
                  <li>
                    our full name and email address used for the purchase.
                  </li>
                  <li>Order ID or transaction receipt.</li>
                  <li>
                    A detailed explanation of the issue or reason for the refund
                    request.
                  </li>
                </ol>
                <p>
                  Refund requests must be submitted within 7 days of the
                  purchase date. Requests submitted after this period may not be
                  eligible for review.
                </p>
              </div>

              <div className="content">
                <h1>04 PROCESSING REFUNDS</h1>
                <p>
                  To request a refund, please contact us at
                  contact@kineticscapestudios.com with the following details:
                </p>
                <ol className="ordered-list">
                  <li>
                    <b>Technical Issues:</b> All refund requests will be
                    reviewed by our support team. Additional information or
                    documentation may be requested to verify the claim.
                  </li>
                  <li>
                    <b>Approval or Denial:</b>Upon completing the review, you
                    will receive an email notification regarding the status of
                    your refund request.
                  </li>
                  <li>
                    <b>TRefund Timeframe:</b>Approved refunds will be processed
                    within 10 business days and will be credited to the original
                    payment method.
                  </li>
                </ol>
              </div>

              <div className="content">
                <h1>05 EXCEPTIONS</h1>
                <p>Refunds will not be granted in the following situations:</p>
                <ol className="ordered-list">
                  <li>If you change your mind after purchasing a service.</li>
                  <li>
                    If the service was used or accessed successfully without any
                    technical issues.
                  </li>
                  <li>
                    For issues unrelated to the functionality of the service,
                    such as personal dissatisfaction with the content.
                  </li>
                </ol>
              </div>

              <div className="content">
                <h1>06 THIRD-PARTY PAYMENT PROCESSORS</h1>
                <p>
                  Payments made through third-party processors, such as
                  Razorpay, are subject to their refund and processing policies.
                  While we will assist in resolving disputes, final decisions
                  regarding refunds for such transactions may rest with the
                  payment processor.
                  <br />
                  For more information, please review Razorpay’s terms at
                  https://razorpay.com.
                </p>
              </div>

              <div className="content">
                <h1>07 CONTACT INFORMATION</h1>
                <p>
                  For further questions or assistance regarding our Refund
                  Policy, please contact us:
                </p>
                <p>
                  Email: <b>contact@kineticscapestudios.com</b>
                  <br />
                  Mailing Address: <br />
                  Kineticscape Studios, plot no.64,
                  <br />
                  Shivaji housing society,
                  <br />
                  near shivaji stadium,
                  <br />
                  Karad, 415110.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsandServices;
