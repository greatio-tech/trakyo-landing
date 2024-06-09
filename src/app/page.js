import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <div className={styles.description}>
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
              <button className={styles.AndroidButton}>Android</button>
              <button className={styles.IOSButton}>IOS</button>
            </div>
          </div>
          <div>
            <Image
              src="/Landing_page.png"
              alt="mobileImage"
              // className={styles.vercelLogo}
              width={400}
              height={650}
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.secondPage}>
        <div className={styles.aboutArea}>
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
            <Image
              src="/Landing2.png"
              alt="Vercel Logo"
              width={480}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.ThirdPage}>
        <div className={styles.FeatureArea}>
          <div className={styles.FeatureContent}>
            <button className={styles.aboutButton}>Feature</button>
          </div>
          <div className={styles.FeatureCardsArea}>
            <div className={styles.FeatureCards}>
              <div>
                <Image
                  src="/scan_card_Icon.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={60}
                  height={60}
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
                  src="/scan_card_Icon.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={60}
                  height={60}
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
                  src="/scan_card_Icon.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={60}
                  height={60}
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
                  src="/scan_card_Icon.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={60}
                  height={60}
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
                  src="/scan_card_Icon.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={60}
                  height={60}
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
                  src="/scan_card_Icon.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={60}
                  height={60}
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
            <div className={styles.DashDot}></div>
            <div className={styles.Dashline}></div>
            <div className={styles.DashDot}></div>
            <div className={styles.QuickGuideIcon}>
              <Image
                src="/scan_card_Icon.svg"
                alt="Vercel Logo"
                width={120}
                height={120}
                priority
              />
            </div>
            <div className={styles.DashDot}></div>
            <div className={styles.Dashline}></div>
            <div className={styles.DashDot}></div>
            <div className={styles.QuickGuideIcon}>
              <Image
                src="/scan_card_Icon.svg"
                alt="Vercel Logo"
                width={120}
                height={120}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fifthPage}>
        <div className={styles.ContactusArea}>
          <div className={styles.ContactusContent}>
            <button className={styles.aboutButton}>Contact us</button>
          </div>
          <div className={styles.Contactus}>
            <div className={styles.ContactusShow}>
              <h2 className={styles.ContactusGetIn}>Get in Touch with Trakyo</h2>
              <div>
                We are here to help! Whether you have a question, need support,
                or want to give feedback, feel free to reach out to us.
              </div>
              <div className={styles.Contactuslist}>
                <div className={styles.ContactDetails}>
                  <Image
                    src="/Phone.svg"
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
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.ContactusForm}>
              <div>
                <span>Name</span>
                <input className={styles.input1} />
              </div>
              <div>
                <span>Mail</span>
                <input className={styles.input1} />
              </div>
              <div>
                <span>Message</span>
                <input className={styles.input3} />
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
              <div className={styles.footerSocialArea}>.</div>
              <div className={styles.footerSocialArea}>.</div>
              <div className={styles.footerSocialArea}>.</div>
              <div className={styles.footerSocialArea}>.</div>
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
            <span>Download our app on</span>
            <button className={styles.AndroidButton}>Android</button>
            <button className={styles.IOSButton}>IOS</button>
          </div>
        </div>
      </div>
    </main>
  );
}
