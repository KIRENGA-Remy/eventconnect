import React from 'react'

function TermsConditions() {
  return (
    <div className="bg-white p-8 md:px-16 lg:px-32">
      <h1 className="text-black text-4xl font-bold mb-6 flex items-center justify-center">Terms and Conditions</h1>
      <div>
        <h2 className="text-black text-3xl font-bold mb-4">1. Introduction</h2>
        <p className="text-black mb-6">
          These terms and conditions ("Terms") govern your use of Tixian, a platform designed for event ticket sales and related services. By accessing or using Tixian, you agree to comply with these Terms. These Terms constitute a legally binding agreement between you and Tixian. Please read these Terms carefully before using the platform.
        </p>
      </div>

      <div>
        <h2 className="text-black text-3xl font-bold mb-4">2. User Accounts</h2>
        
        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">2.1 Account Creation:</h3>
          <p className="text-black mb-6">
            To access certain features of Tixian, you may need to create a user account. By creating an account, you agree to provide accurate and complete information, including your name and email address. Hosts may be required to provide additional information as necessary.
          </p>
        </div>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">2.2 Account Security:</h3>
          <p className="text-black mb-6">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Tixian shall not be liable for any loss or damage arising from unauthorized access to your account.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-black text-3xl font-bold mb-4">3. Ticket Sales</h2>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">3.1 Event Listing:</h3>
          <p className="text-black mb-6">
            As a host, you may create and list events on Tixian. You are responsible for providing accurate and up-to-date information about the event, including event tiers and ticket prices.
          </p>
        </div>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">3.2 Fees:</h3>
          <p className="text-black mb-6">
            Tixian charges fees for its services, which are calculated based on the ticket price. The fees may be absorbed by the host or added on top of the original ticket price. Hosts are solely responsible for any taxes or additional fees applicable to their events.
          </p>
        </div>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">3.3 Payment Processing:</h3>
          <p className="text-black mb-6">
            Tixian utilizes Stripe, a third-party payment processor, for handling all payment transactions. Tixian does not collect or store any payment details. By using Tixian, you agree to comply with Stripe's terms of service and privacy policy.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-black text-3xl font-bold mb-4">4. Refunds and Cancellations</h2>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">4.1 Host Responsibility:</h3>
          <p className="text-black mb-6">
            The host of an event is solely responsible for any cancellations, refunds, or disputes related to their event. Tixian is not liable for any refunds or losses incurred due to event cancellations.
          </p>
        </div>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">4.2 Tixian Fees:</h3>
          <p className="text-black mb-6">
            Tixian's fees are non-refundable, even in the event of a cancellation. However, Tixian will make reasonable efforts to facilitate reimbursements and cancellations as agreed upon by the host.
          </p>
        </div>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">4.3 Host Discretion:</h3>
          <p className="text-black mb-6">
            Hosts have the option to allow or disallow resale and refunds during event creation. Tixian shall not be held liable for any issues arising from the host's chosen refund and resale policy.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-black text-3xl font-bold mb-4">5. Liability and Disclaimers</h2>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">5.1 Event Cancellations:</h3>
          <p className="text-black mb-6">
            Tixian is not responsible for event cancellations or any resulting losses or damages. Any disputes or claims arising from event cancellations should be resolved directly between the host and the ticket purchaser.
          </p>
        </div>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">5.2 Intellectual Property:</h3>
          <p className="text-black mb-6">
            By uploading event media to Tixian, users may receive credits for future events. However, users must ensure they have the necessary rights and permissions for any content they upload. Tixian does not claim ownership over any user-uploaded content.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-black text-3xl font-bold mb-4">6. Privacy and Data Protection</h2>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">6.1 Data Collection:</h3>
          <p className="text-black mb-6">
            Tixian collects and stores user data in a secure manner. Please refer to our Privacy Policy for more information on how we handle and protect user information.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-black text-3xl font-bold mb-4">7. Governing Law and Jurisdiction</h2>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">7.1 Applicable Law:</h3>
          <p className="text-black mb-6">
            These Terms shall be governed by and construed in accordance with the laws of Canada.
          </p>
        </div>

        <div>
          <h3 className="text-black text-2xl font-semibold mb-2">7.2 Jurisdiction:</h3>
          <p className="text-black mb-6">
            Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Canada.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions
