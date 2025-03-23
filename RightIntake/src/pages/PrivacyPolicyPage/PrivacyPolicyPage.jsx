import React from "react";
import "./PrivacyPolicyPage.css";
const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="privacy-policy-container">
        <div className="privacy-div">
          <div
            className="privacy-ui-wrapper"
            onClick={() => setIsTermsToggle(!isTermsToggle)}
          >
            <h1>Privacy policy</h1>
          </div>

          <div className="privacy-content-ui-wrapper">
            {/* content 1 */}
            <div className="content">
              <h1>01 WHAT DO WE DO WITH YOUR INFORMATION?</h1>
              <p>
                When you purchase something from our store or use our services,
                including the Right Intake App and Right Intake Diet and Workout
                Plan, as part of the buying and selling process, we collect
                personal information such as your name, address, email address,
                and payment details. When you browse our website or app, we
                automatically collect certain information about your device,
                including your computer’s internet protocol (IP) address,
                browser type, and operating system, to help us provide a better
                user experience. Email marketing (if applicable): With your
                permission, we may send you emails about our services, products,
                promotions, and updates. This includes notifications about new
                features or changes to the Right Intake App and Right Intake
                Diet and Workout Plan.
              </p>
            </div>

            {/* content 2 */}
            <div className="content">
              <h1>02 CONSENT</h1>
              <p>How do you get my consent?</p>
              <p>
                When you provide us with personal information to complete a
                transaction, verify your credit card, place an order, or use the
                Right Intake App, we imply that you consent to our collecting it
                and using it for that specific reason only.
                <br />
                <br />
                If we ask for your personal information for a secondary purpose,
                such as marketing, we will ask for your explicit consent or
                provide an option to decline
              </p>
              <p>How do I withdraw my consent?</p>
              <p>
                If after opting in, you change your mind, you may withdraw your
                consent for us to contact you or for the continued collection,
                use, or disclosure of your information at any time by contacting
                us at
                <b>contact@kineticscapestudios.com</b> or mailing us at:
                <b>
                  Kineticscape Studios, [Kineticscape Studios, plot no.64,
                  Shivaji housing society, near shivaji stadium, Karad, 415110]
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
                  To enforce our Terms of Service or protect the rights, safety,
                  or property of Kineticscape Studios, our users, or others.
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
                data is only used as necessary to complete your purchase and is
                deleted afterward.
                <br />
                <br />
                Our payment gateway complies with PCI-DSS standards to ensure
                the secure handling of credit card information. For more
                details, please review Razorpay’s terms at https://razorpay.com.
              </p>
            </div>
            {/* content 5 */}
            <div className="content">
              <h1>05 THIRD-PARTY SERVICES</h1>
              <p>
                Third-party service providers may collect, use, and disclose
                your information to the extent necessary to perform the services
                they provide to us, such as payment processing and analytics.
              </p>
              <p>Third-party Privacy Policies:</p>
              <p>
                Certain third-party service providers, including payment
                gateways, have their own privacy policies governing the
                information we are required to provide for your transactions. We
                encourage you to review their policies
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
                third-party platform, this Privacy Policy no longer applies. We
                are not responsible for the privacy practices of third-party
                websites.
              </p>
              <p>Links:</p>
              <p>
                Clicking on links on our website or app may redirect you to
                external sites. We are not liable for the privacy practices of
                these sites and encourage you to review their privacy policies.
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
                You may disable cookies in your browser settings; however, this
                may affect your experience with our services.
              </p>
            </div>
            {/* content 8 */}
            <div className="content">
              <h1>08 AGE OF CONSENT</h1>
              <p>By using this website or app, you confirm that:</p>
              <ol className="ordered-list">
                <li>
                  You are at least the age of majority in your state or province
                  of residence.
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
                We reserve the right to modify this Privacy Policy at any time.
                Changes will take effect immediately upon posting on our website
                or app. Material changes will be highlighted, ensuring you are
                informed about updates in how your information is collected,
                used, or disclosed.
                <br />
                <br />
                If Kineticscape Studios is acquired or merged with another
                company, your personal information may be transferred to the new
                entity.
              </p>
            </div>
            {/* content 10 */}
            <div className="content">
              <h1>QUESTIONS AND CONTACT INFORMATION</h1>
              <p>If you would like to:</p>
              <ol className="ordered-list">
                <li>
                  Access, correct, amend, or delete any personal information we
                  have about you.
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
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
