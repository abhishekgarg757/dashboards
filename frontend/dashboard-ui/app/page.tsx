import DashboardGrid from '@/components/dashboard/DashboardGrid'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Engineering Intelligence Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Multi-source engineering metrics platform
        </p>
      </div>

      <DashboardGrid />
    </main>
  )
}
