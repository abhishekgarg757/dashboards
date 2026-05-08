import Card from '@/components/common/Card'

interface Props {
  count: number
}

export default function GitHubPRWidget({ count }: Props) {
  return <Card title="Open Pull Requests" value={count} />
}
