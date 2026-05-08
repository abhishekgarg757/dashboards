import Card from '@/components/common/Card'

interface Props {
  count: number
}

export default function JiraIssueWidget({ count }: Props) {
  return <Card title="Open Jira Issues" value={count} />
}
