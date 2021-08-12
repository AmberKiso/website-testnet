import TestnetGridElement from './TestnetGridElement'
import SectionHeader from './SectionHeader'

function Testnet() {
  const elementClassName = `py-4 px-6`
  const textClassName = `ml-4`
  return (
    <div className="absolute bg-white left-0 right-0 shadow-navbar z-20">
      <div className="flex justify-center border-b border-t">
        <div className="flex justify-end border-r p-8 pb-10">
          <div style={{ maxWidth: '14rem' }}>
            <SectionHeader>IRON FISH CLI</SectionHeader>
            <div>
              <h4 className="text-xl mb-1">Installation Guide</h4>
              <p className="font-favorit text-ifgray text-sm mb-2">
                An in-depth walkthrough of how to set up Iron Fish on your
                machine.
              </p>
              <a className="flex font-favorit text-ifgray text-sm">
                <span>Read the walkthrough</span>
                <span className="ml-2">&#x203A;</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex p-8 pb-10 pl-14">
          <div>
            <SectionHeader>INCENTIVIZED TESTNET</SectionHeader>
            <div className="grid grid-rows-2 grid-cols-2 gap-4 -ml-6">
              <TestnetGridElement
                href="/about"
                header="About the Testnet"
                body="How to earn points"
                className={elementClassName}
                textClassName={textClassName}
                cubeClassName="text-iforange"
              />
              <TestnetGridElement
                href="/community"
                header="Testnet Community"
                body="From our supporters"
                className={elementClassName}
                textClassName={textClassName}
                cubeClassName="text-ifbeige"
              />
              <TestnetGridElement
                href="/leaderboard"
                header="Testnet Leaderboard"
                body="Earn your way to the top"
                className={elementClassName}
                textClassName={textClassName}
                cubeClassName="text-ifcubepink"
              />
              <TestnetGridElement
                href="/faq"
                header="Testnet FAQ"
                body="Frequently asked questions"
                className={elementClassName}
                textClassName={textClassName}
                cubeClassName="text-iflightblue"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testnet