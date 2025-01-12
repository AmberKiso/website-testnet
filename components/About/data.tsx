import Link from './Link'
import { Status } from './types'

export const cards = [
  {
    title: 'Big Winner',
    content:
      'Earn this NFT by becoming the person with the most total points over the span of the testnet!',
    pic: '/reward-champion.png',
  },
  {
    title: 'Miner',
    content:
      'Earn this NFT by mining the most blocks over the entire span of our testnet.',
    pic: '/reward-miner.png',
  },
  {
    title: 'Bug Catcher',
    content:
      'Earn this NFT by reporting the most bugs over the lifetime of our testnet.',
    pic: '/reward-bug-catcher.png',
  },
  {
    title: 'Net Promoter',
    content:
      'Earn this NFT by promoting our testnet on social media - Twitter, especially!',
    pic: '/reward-promoter.png',
  },
  {
    title: 'Explorer',
    content:
      'Earn this NFT by being active on all fronts in the testnet. Your participation would be noted!',
    pic: '/reward-explorer.png',
  },
  {
    title: 'Community Contributor',
    content:
      'Earn this NFT by making our testnet more accessible to our entire community.',
    pic: '/reward-contributor.png',
  },
  {
    title: 'Builder',
    content:
      'Earn this NFT by merging the most valuable PR’s. We are looking for quality over quantity.',
    pic: '/reward-pull-requester.png',
  },
  /*
  {
    title: 'Trader',
    content:
      'Earn this NFT by being active with transactions. Sending 3 a day is an easy way to win!',
    pic: '/reward-transactor.png',
    },
   */
]

export const guidelines = {
  columnOne: [
    {
      title: 'Rewards',
      content:
        'The Incentivized Testnet program will distribute up to 420,000 (1% of the initial supply) Iron Fish tokens to eligible participants, proportional to your Leaderboard points. Token distribution may be canceled at any time due to regulatory concerns. We may at any time amend or eliminate Leaderboard points.',
      behind: 'bg-white',
    },
    {
      title: 'Lost Work',
      content:
        "Points will only be awarded once an account has been created. Points for mining blocks are awarded automatically. Blocks that are mined before an account was created will not be counted. Work will be logged hourly. In the event of a technical problem or a chain reorganization, some of your work may be lost and will not reflect in your reward. If you sign up after you've mined blocks, points will not be assigned retroactively for those blocks.",
      behind: 'bg-ifpink',
    },
    {
      title: 'Unforeseeable',
      content:
        'In the event that legal or regulatory issues arise, rewards may be restructured, postponed, or even canceled.',
      behind: 'bg-white',
    },
  ],
  columnTwo: [
    {
      title: 'Leaderboard Points',
      content:
        'Leaderboard points are used solely to track contribution to the Iron Fish Testnet and have no cash or monetary value. Leaderboard points are not transferable and are not redeemable or exchangeable for any cryptocurrency or digital assets. For eligible users under relevant securities laws, Iron Fish Inc will use commercially reasonable efforts to distribute tokens to eligible testnet participants. Token distribution may be canceled at any time due to regulatory concerns. We may at any time amend or eliminate Leaderboard points.',
      behind: 'bg-ifpink',
    },
    {
      title: 'Weekly Cycles',
      content:
        'Weekly cycles run from Monday to Sunday, during which a participant can earn points in the defined categories above. Once a participant has earned his or her maximum amount of points in a given category, a participant can no longer earn points in that category until the next cycle.',
      behind: 'bg-white',
    },
    {
      title: 'Maintenance',
      content:
        'Iron Fish might restart the chain regularly for development purposes. Your score will be saved before a restart happens.',
      behind: 'bg-ifpink',
    },
  ],
}

export const callsToAction = {
  columnOne: [
    {
      title: 'Hosting a node',
      content:
        'You can earn points by hosting an Iron Fish full node. To do so, make sure your telemetry is turned on, and your graffiti is set. You will only be rewarded points for hosting one node per graffiti.',
      points: ['12 hours of continuous uptime = 10 points'],
      status: Status.New,
      ctaText: 'Set up instructions',
      href: '/faq#node-points',
    },
    {
      title: 'Submit a Pull Request',
      content: (
        <>
          <Link href="https://github.com/iron-fish/ironfish">
            Submit a Pull Request (PR) to the Iron Fish repo!
          </Link>{' '}
          Points are earned if the PR gets accepted and merged.
        </>
      ),

      points: [
        'Small = 250 points',
        'Medium = 500 points',
        'Large = 1000 points',
      ],
      ctaText: 'Request points for a PR',
      href: 'https://forms.gle/agquNGnS5NDgcfZN6',
      status: Status.Active,
    },
  ],
  columnTwo: [
    {
      title: `Sending a transaction`,
      content: (
        <>
          For every transaction you send to the Iron Bank of over 0.1 coins, you
          get 1 point. To make this easier, we made a command that automatically
          sends this transaction for you:
          <pre className="bg-iflightgray inline p-1 font-favorit">
            ironfish deposit
          </pre>
        </>
      ),
      points: ['1 point for a transaction of 0.1 coins or more'],
      ctaText: 'Learn more',
      href: '/faq#transaction-points',
      status: Status.New,
    },
    {
      title: 'Finding Bugs',
      content: (
        <>
          If you found a bug in the Iron Fish full node implementation,{' '}
          <Link href="https://github.com/iron-fish/ironfish/issues">
            please submit it as an issue
          </Link>
          . Issues are reviewed by the core development team on a rolling basis
          and awarded by the end of the week. The issue will be accepted if it’s
          a legitimate bug and not a duplicate of an existing issue. Fill out
          the form to claim your points after submitting an issue.
        </>
      ),

      points: ['1 bug = 100 points'],
      ctaText: 'Request points for a bug',
      href: 'https://forms.gle/agquNGnS5NDgcfZN6',
      submissionForm: false,
      status: Status.Active,
    },
  ],
}

export type Pool = {
  size: number
  categories: string[]
}

export const phases = [
  {
    status: Status.Ended,
    summary: `Dec 1, 2021 - March 11, 2022.`,
    pools: [
      {
        size: 42e4,
        categories: [
          'Mining Blocks',
          'Finding Bugs',
          'Community Contributions',
        ],
      },
      {
        size: 105e3,
        categories: ['Submitting Pull Requests'],
        poolNum: 3,
        additionalText: '(spans all phases)',
      },
    ],
  },
  {
    status: Status.ComingSoon,
    summary: 'Started May 10, 2022',
    pools: [
      {
        size: 21e4,
        categories: ['Hosting a Node', 'Finding Bugs', 'Sending Transactions'],
        poolNum: 2,
      },
      {
        size: 105e3,
        categories: ['Submitting Pull Requests'],
        poolNum: 3,
        additionalText: '(spans all phases)',
      },
    ],
  },
]
