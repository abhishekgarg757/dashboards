import Card from '@/components/common/Card'

interface Props {
  status: string
}

export default function ClusterHealthWidget({ status }: Props) {
  return <Card title="Cluster Health" value={status} />
}
