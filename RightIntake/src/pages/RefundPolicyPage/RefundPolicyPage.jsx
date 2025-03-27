import React from "react";
import "./RefundPolicyPage.css";

const RefundPolicyPage = () => {
  return (
    <>
      <div className="refund-policy-page-wrapper">
        <div className="privacy-div">
          <div
            className="privacy-ui-wrapper"
            onClick={() => setIsRefundToggle(!isRefundToggle)}
          >
            <h1>Refund policy</h1>
          </div>

          <div className="privacy-content-ui-wrapper">
            <div className="overview">
              <h1>Overview</h1>
              <p>
                At <b>Kineticscape Studios </b>, we aim to provide our users
                with quality services and a seamless experience. This Refund
                Policy outlines the circumstances under which refunds may be
                granted for purchases made on the{" "}
                <b>Kineticscape Studios website</b>, the <b>Right Intake App</b>
                , and the <b>Right Intake Diet and Workout Plan</b>.
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
                  <b>Subscription Fees</b>: Any subscription or membership fees
                  for the Right Intake App are non-refundable once payment has
                  been processed
                </li>
                <li>
                  All client interactions, inquiries, and purchases are governed
                  by the policies outlined in this Terms of Service document.
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
                  If a technical issue prevents you from accessing the purchased
                  service, and our support team is unable to resolve it within 7
                  business days, you may be eligible for a refund.
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
                <li>our full name and email address used for the purchase.</li>
                <li>Order ID or transaction receipt.</li>
                <li>
                  A detailed explanation of the issue or reason for the refund
                  request.
                </li>
              </ol>
              <p>
                Refund requests must be submitted within 7 days of the purchase
                date. Requests submitted after this period may not be eligible
                for review.
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
                  <b>Technical Issues:</b> All refund requests will be reviewed
                  by our support team. Additional information or documentation
                  may be requested to verify the claim.
                </li>
                <li>
                  <b>Approval or Denial:</b>Upon completing the review, you will
                  receive an email notification regarding the status of your
                  refund request.
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
                  For issues unrelated to the functionality of the service, such
                  as personal dissatisfaction with the content.
                </li>
              </ol>
            </div>

            <div className="content">
              <h1>06 THIRD-PARTY PAYMENT PROCESSORS</h1>
              <p>
                Payments made through third-party processors, such as Razorpay,
                are subject to their refund and processing policies. While we
                will assist in resolving disputes, final decisions regarding
                refunds for such transactions may rest with the payment
                processor.
                <br />
                For more information, please review Razorpay’s terms at
                https://razorpay.com.
              </p>
            </div>

            <div className="content">
              <h1>07 CONTACT INFORMATION</h1>
              <p>
                For further questions or assistance regarding our Refund Policy,
                please contact us:
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
        </div>
      </div>
    </>
  );
};

export default RefundPolicyPage;
