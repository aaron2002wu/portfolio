import AboutHeader from './AboutHeader'
import Timeline from './timeline'

export default function Intro() {
  return (
    <div className="flex flex-col gap-8">
      <AboutHeader />
      <Timeline />
    </div>
  )
}
