import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <div>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="w-40 h-40 rounded-full object-cover object-center bg-gray-100 block lg:mt-5 mt-0 lg:mb- mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale"
          unoptimized
          width={200}
          height={200}
          priority
          style={{ objectPosition: '50% 30%' }}
        />
      </div>
      <h1 className="mb-8 text-2xl font-medium">Howdy!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Welcome to my portfolio.
        </p>
        <p>
          A bit about myself. I'm currently a DevOps engineer that works at one Australias Big Four Banks. 

          Nextfolio has everything you need for a portfolio: MDX blog, SEO, RSS,
          Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX and {""}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p>
        <p>
          Nextfolio is{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          and fully customizable, making it easy to add more features.
        </p>
        <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up
          instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a>
          .
        </p>
      </div>
    </section>
  );
}
