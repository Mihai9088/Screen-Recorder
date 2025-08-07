import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32} />
          <span>SRecorder</span>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/assets/icons/star.svg"
                  alt="testimonial"
                  width={20}
                  height={20}
                />
              ))}
            </figure>
            <p>
              SRecorder is a screen sharing app that allows you to share your screen with others in
              real-time.
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="testimonial"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>
                  Jason Statham
                  <p>
                    Professional screen recorder <span>@jasonstatham</span>
                  </p>
                </h2>
              </div>
            </article>
          </section>
        </div>
        <p>&#169; SRecorder {new Date().getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image src="/assets/icons/logo.svg" alt="logo" width={40} height={40} />
            <h1>SRecorder</h1>
          </Link>
          <p>
            Create and share your very first <span>SRecorder</span> video!
          </p>
          <button>
            <Image src="/assets/icons/google.svg" alt="google" width={22} height={22} />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default Page;
