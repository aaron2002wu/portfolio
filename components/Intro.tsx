import Image from 'next/image'
import Link from 'next/link'
import Timeline from './timeline'

export default function Intro() {
  return (
    <div className="about-hero flex flex-col gap-8">
      <div className="nx-not-prose flex w-full flex-nowrap items-center justify-between gap-6 border-b border-slate-200 pb-3 dark:border-slate-800">
        <h1
          style={{ margin: 0 }}
          className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100"
        >
          Aaron E. Wu
        </h1>
        <div className="ml-auto flex shrink-0 items-center gap-5 whitespace-nowrap text-sm">
          <span className="relative font-semibold text-slate-800 dark:text-slate-100">
            About
            <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-blue-500" />
          </span>
          <Link
            href="/projects"
            className="font-medium text-slate-600 transition-colors hover:text-slate-400 dark:text-slate-300 dark:hover:text-slate-400"
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex items-start gap-5">
        <Image
          src="/images/profile/profile.jpeg"
          alt="Aaron Wu"
          width={108}
          height={108}
          priority
          className="mt-1 flex-shrink-0 rounded-full border border-slate-200 object-cover shadow-sm dark:border-slate-700"
        />
        <div className="flex flex-col gap-3">
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          PhD student in Robotics at the <strong>Georgia Institute of Technology</strong>, focused on
          deep reinforcement learning, Sim2Real transfer, and state estimation for autonomous
          systems.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href="/resume/Aaron_Wu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Resume (PDF)
          </a>
          <a
            href="/resume/Aaron_Wu_Resume.pdf"
            download
            className="text-slate-600 underline underline-offset-2 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-200"
          >
            Download
          </a>
        </div>
        </div>
      </div>
      <Timeline />

      <style jsx global>{`
        article > div.nx-mb-8.nx-flex.nx-items-center.nx-gap-3 {
          display: none;
        }
      `}</style>
    </div>
  )
}
