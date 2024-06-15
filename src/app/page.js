import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <div className={styles.description}>
          <div>
            <img
              src="/Trakyo_logo_white.svg"
              alt="Vercel Logo"
              className={styles.TrakyoLogo}
              // width={128}
              // height={36}
              // priority
            />
          </div>
          <div className={styles.navManu}>
            <span>About</span>
            <span>Features</span>
            <span>Quick Guide</span>
            <span>Contact Us</span>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.centerContent}>
            <h2 className={styles.centerHeading}>
              Connecting Vehicle Owners with Ease
            </h2>
            <div className={styles.ContentsubHead}>
              Simplify communication with a simple scan
            </div>
            <div className={styles.ButtonArea}>
              <button className={styles.androidButton}>
                <Image
                  src="/playstore.svg"
                  alt="Vercel Logo"
                  // className={styles.vercelLogo}
                  width={24}
                  height={24}
                />

                <span>Android</span>
              </button>
              <button className={styles.iosButton}>
                <Image
                  src="/ios.svg"
                  alt="Vercel Logo"
                  // className={styles.vercelLogo}
                  width={24}
                  height={24}
                />
                <span style={{ marginTop: "5px" }}>IOS</span>
              </button>
            </div>
          </div>
          <div>
            <img
              src="/Landing_page.png"
              alt="mobileImage"
              className={styles.landingLogo}
              // width={"646"}
              // height={764}
              // priority
            />
          </div>
        </div>
      </div>
      <div className={styles.secondPage}>
        <div className={styles.aboutArea}>
          <div className={styles.description}>
            <div>
              <img
                src="/logo_black.svg"
                alt="Vercel Logo"
                className={styles.TrakyoLogo}
                // width={128}
                // height={36}
                // priority
              />
            </div>
            <div className={styles.navManu}>
              <span>About</span>
              <span>Features</span>
              <span>Quick Guide</span>
              <span>Contact Us</span>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div>
              <button className={styles.aboutButton}>About</button>
            </div>
            <h2 className={styles.aboutHeading}>
              Connecting Vehicle Owners with Ease
            </h2>
            <div className={styles.aboutText}>
              At Trakyo, our mission is to revolutionize the way people connect
              with vehicle owners. Founded on the principles of convenience,
              security, and efficiency, our app aims to bridge the gap between
              the need for immediate communication and the privacy of
              individuals. We believe in leveraging technology to create
              smarter, safer communities.
            </div>
          </div>
          <div>
            <img
              src="/Landing2.png"
              alt="Vercel Logo"
              className={styles.aboutLanding}
            />
          </div>
        </div>
      </div>
      <div className={styles.ThirdPage}>
        <div className={styles.description}>
          <div>
            <img
              src="/logo_black.svg"
              alt="Vercel Logo"
              className={styles.TrakyoLogo}
              // width={128}
              // height={36}
              // priority
            />
          </div>
          <div className={styles.navManu}>
            <span>About</span>
            <span>Features</span>
            <span>Quick Guide</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className={styles.FeatureArea}>
          <div className={styles.FeatureContent}>
            <button className={styles.aboutButton}>Feature</button>
          </div>
          <div className={styles.FeatureCardsArea}>
            <div className={styles.FeatureCards}>
              <div>
                <Image
                  src="/scanner.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className={styles.cardHeading}>Effortless QR Scanning</div>
              <div className={styles.cardText}>
                Scan QR codes to report issues instantly.Capture and upload
                photos for comprehensive reporting.
              </div>
            </div>
            <div className={styles.FeatureCards}>
              <div>
                <Image
                  src="/phone.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className={styles.cardHeading}>Anonymous Calling</div>
              <div className={styles.cardText}>
                Contact vehicle owners without revealing your number. Ensure
                your privacy while getting urgent issues addressed.
              </div>
            </div>
            <div className={styles.FeatureCards}>
              <div>
                <Image
                  src="/emergency.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className={styles.cardHeading}>
                Emergency Contact Routing
              </div>
              <div className={styles.cardText}>
                Automatically call emergency contacts if the owner is
                unreachable. Multiple emergency contact options for reliable
                communication.
              </div>
            </div>
            <div className={styles.FeatureCards}>
              <div>
                <Image
                  src="/essay regi.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className={styles.cardHeading}>
                Easy Registration & QR Ordering
              </div>
              <div className={styles.cardText}>
                Register, order, and track QR codes seamlessly. Quick and simple
                setup to get started right away.
              </div>
            </div>
            <div className={styles.FeatureCards}>
              <div>
                <Image
                  src="/dynamic conta.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className={styles.cardHeading}>
                Dynamic Contact Management
              </div>
              <div className={styles.cardText}>
                Update your contact details anytime. Easily switch contacts when
                you're away.
              </div>
            </div>
            <div className={styles.FeatureCards}>
              <div>
                <Image
                  src="/vehicle doc.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className={styles.cardHeading}>Vehicle Document Storage</div>
              <div className={styles.cardText}>
                Securely store and access vehicle documents. Keep all your
                essential documents in one place for convenience.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.forthPage}>
        <div className={styles.description}>
          <div>
            <img
              src="/logo_black.svg"
              alt="Vercel Logo"
              className={styles.TrakyoLogo}
              // width={128}
              // height={36}
              // priority
            />
          </div>
          <div className={styles.navManu}>
            <span>About</span>
            <span>Features</span>
            <span>Quick Guide</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className={styles.QuickGuideArea}>
          <div className={styles.QuickGuideContent}>
            <button className={styles.aboutButton}>Quick Guide</button>
            <div className={styles.aboutHowIt}>How it works?</div>
          </div>
          <div className={styles.QuickGuide}>
            <div className={styles.QuickGuideIcon}>
              <Image
                src="/scan_card_Icon.svg"
                alt="Vercel Logo"
                width={120}
                height={120}
                priority
              />
            </div>
            <Image
              src="/dot_line.svg"
              alt="Vercel Logo"
              width={314}
              height={14}
              priority
            />
            <div className={styles.QuickGuideIcon}>
              <Image
                src="/car_icon.svg"
                alt="Vercel Logo"
                width={120}
                height={120}
                priority
              />
            </div>
            <Image
              src="/dot_line.svg"
              alt="Vercel Logo"
              width={314}
              height={14}
              priority
            />
            <div className={styles.QuickGuideIcon}>
              <Image
                src="/touch_icon.svg"
                alt="Vercel Logo"
                width={120}
                height={120}
                priority
              />
            </div>
          </div>
          <div className={styles.QuickContentText}>
            <div className={styles.ContentTextArea}>
              <div className={styles.QuickContentTextHeading}>Scan QR Code</div>
              <div className={styles.ContentTextshow}>
                Point and scan the QR code displayed on the vehicle. This
                initiates the process and brings up the options available for
                that specific vehicle.
              </div>
            </div>
            <div className={styles.ContentTextArea}>
              <div className={styles.QuickContentTextHeading}>
                Select Scenario
              </div>
              <div className={styles.ContentTextshow}>
                After scanning, you'll be presented with a list of scenarios to
                choose from. These can include situations such as: No Parking,
                Accident, Blocked Driveway, Suspicious Activity etc..
              </div>
            </div>
            <div className={styles.ContentTextArea}>
              <div className={styles.QuickContentTextHeading}>Take Action</div>
              <div className={styles.ContentTextshow}>
                <span>
                  <span style={{ fontWeight: "bold" }}>Call Anonymously: </span>
                  Contact the vehicle owner anonymously.Send Alert via
                </span>
                <br />
                <br />

                <span>
                  <span style={{ fontWeight: "bold" }}>Message: </span>
                  Opt to send an alert message directly to the vehicle owner.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fifthPage}>
        <div className={styles.description}>
          <div>
            <img
              src="/logo_black.svg"
              alt="Vercel Logo"
              className={styles.TrakyoLogo}
            />
          </div>
          <div className={styles.navManu}>
            <span>About</span>
            <span>Features</span>
            <span>Quick Guide</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className={styles.ContactusArea}>
          <div className={styles.ContactusContent}>
            <button className={styles.aboutButton}>Contact us</button>
          </div>
          <div className={styles.Contactus}>
            <div className={styles.ContactusShow}>
              <h2 className={styles.ContactusGetIn}>
                Get in Touch with Trakyo
              </h2>
              <div className={styles.ContactusText}>
                We are here to help! Whether you have a question, need support,
                or want to give feedback, feel free to reach out to us.
              </div>
              <div className={styles.Contactuslist}>
                <div className={styles.ContactDetails}>
                  <Image
                    src="/Phone2.svg"
                    alt="Phone"
                    className={styles.vercelLogo}
                    width={24}
                    height={24}
                    priority
                  />
                  <span>+91 98990 98990</span>
                </div>
                <div className={styles.ContactDetails}>
                  <Image
                    src="/email.svg"
                    alt="email"
                    className={styles.vercelLogo}
                    width={24}
                    height={24}
                    priority
                  />
                  <span>trakyo@gmail.com</span>
                </div>
                <div className={styles.ContactDetails}>
                  <Image
                    src="/location.svg"
                    alt="location"
                    className={styles.vercelLogo}
                    width={24}
                    height={24}
                    priority
                  />
                  <span style={{ width: "395px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.ContactusForm}>
              <div className={styles.ContactusTypeName}>
                <span>Name</span>
                <input type="text" className={styles.input1} />
              </div>
              <div className={styles.ContactusTypeName}>
                <span>Mail</span>
                <input type="email" className={styles.input1} />
              </div>
              <div className={styles.ContactusTypeName}>
                <span>Message</span>
                <input type="text" className={styles.input3} />
              </div>
              <div className={styles.sendButtonArea}>
                <button className={styles.sendButton}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div>
          <div>
            <Image
              src="/Trakyo_logo_white.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={128}
              height={70}
              priority
            />
          </div>
          <div className={styles.footerJoinAs}>
            <span>join us</span>
            <div className={styles.footerSocialsShow}>
              <div className={styles.footerSocialArea}>
                {" "}
                <Image
                  src="/facebook.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className={styles.footerSocialArea}>
                {" "}
                <Image
                  src="/instagram.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className={styles.footerSocialArea}>
                {" "}
                <Image
                  src="/x.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className={styles.footerSocialArea}>
                {" "}
                <Image
                  src="/linkdin.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={40}
                  height={40}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerMenu}>
          <div>
            <ul className={styles.footerMenuList}>
              <li>About</li>
              <li>Features</li>
              <li>Quick Guide</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className={styles.footerDownloadArea}>
            <span style={{ fontSize: "16px", fontWeight: 600 }}>
              Download our app on
            </span>
            <button className={styles.androidButton}>
              <Image
                src="/playstore.svg"
                alt="Vercel Logo"
                // className={styles.vercelLogo}
                width={24}
                height={24}
              />
              Android
            </button>
            <button className={styles.iosButton}>
              <Image
                src="/ios.svg"
                alt="Vercel Logo"
                // className={styles.vercelLogo}
                width={24}
                height={24}
              />
              <span style={{ marginTop: "5px" }}>IOS</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
