'use client'

import GridLayout from 'react-grid-layout'

import GitHubPRWidget from '@/widgets/github/GitHubPRWidget'
import JiraIssueWidget from '@/widgets/jira/JiraIssueWidget'
import ClusterHealthWidget from '@/widgets/kubernetes/ClusterHealthWidget'

import { dashboardData } from '@/services/mock/dashboardData'

export default function DashboardGrid() {
  const layout = [
    { i: 'github', x: 0, y: 0, w: 3, h: 2 },
    { i: 'jira', x: 3, y: 0, w: 3, h: 2 },
    { i: 'cluster', x: 6, y: 0, w: 3, h: 2 },
  ]

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={120}
      width={1200}
    >
      <div key="github">
        <GitHubPRWidget count={dashboardData.githubPRs} />
      </div>

      <div key="jira">
        <JiraIssueWidget count={dashboardData.jiraIssues} />
      </div>

      <div key="cluster">
        <ClusterHealthWidget status={dashboardData.clusterHealth} />
      </div>
    </GridLayout>
  )
}
