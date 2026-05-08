# Engineering Intelligence Dashboard Platform

A modern cloud-native engineering intelligence dashboard platform designed to aggregate and visualize data from multiple engineering and DevOps systems such as:

- GitHub
- GitLab
- Jira
- SonarQube
- Kubernetes
- CI/CD platforms
- Monitoring systems

The platform is designed using modern scalable technologies and follows Kubernetes-native architecture principles.

---

# Vision

The goal of this platform is to provide:

- Centralized engineering dashboards
- Cross-platform metrics visualization
- Extensible widget architecture
- Connector-based integrations
- Real-time operational visibility
- Future-ready plugin ecosystem
- Kubernetes-native deployment model

---

# Core Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| Next.js | Frontend framework |
| React | UI rendering |
| TypeScript | Type safety |
| TailwindCSS | Styling |
| React Grid Layout | Draggable dashboards |
| Zustand | Lightweight state management |
| Axios | API communication |
| Recharts | Data visualization |
| TanStack Query | API caching and async state |

---

## Backend

| Technology | Purpose |
|---|---|
| Go | Backend language |
| Gin/Fiber | HTTP APIs |
| gRPC | Internal service communication |
| PostgreSQL | Metadata and normalized storage |
| Redis | Cache and queues |
| Temporal | Workflow orchestration |
| Docker | Containerization |
| Kubernetes | Deployment platform |

---

# High-Level Architecture

```text
Frontend Dashboard UI
        ↓
API Gateway
        ↓
Backend Services
        ↓
Connector Workers
        ↓
External Platforms
```

---

# Architectural Principles

## 1. Connector-Based Design

Each external integration is isolated into its own connector service.

Example:

```text
connector-github
connector-jira
connector-sonarqube
connector-kubernetes
```

Benefits:
- Independent scaling
- Easier maintenance
- Better isolation
- Easier testing
- Cleaner ownership

---

## 2. Widget-Based Frontend

Dashboards are composed of reusable widgets.

Each widget is:
- independent
- configurable
- data-source aware
- reusable

Example widget types:
- PR metrics
- Deployment status
- Cluster health
- Build failures
- Security findings

---

## 3. Configuration-Driven Dashboards

Dashboards are NOT hardcoded.

Instead, dashboards are defined using JSON-like configuration objects.

Example:

```json
{
  "widgets": [
    {
      "id": "github-prs",
      "type": "github_prs",
      "layout": {
        "x": 0,
        "y": 0,
        "w": 3,
        "h": 2
      }
    }
  ]
}
```

This allows:
- dynamic dashboards
- persistence
- sharing
- future plugin systems

---

# Repository Structure

```text
platform/
├── backend/
├── frontend/
├── infra/
├── docs/
├── .github/
├── docker-compose.yml
├── Makefile
└── README.md
```

---

# Frontend Structure

```text
frontend/dashboard-ui/
```

Contains the main dashboard application.

---

## Frontend Folder Explanation

### `app/`

Next.js App Router pages.

Example:

```text
app/page.tsx
```

Main application entry page.

---

### `components/`

Reusable UI components.

Example:

```text
components/common/Card.tsx
```

Reusable card component used across widgets.

---

### `widgets/`

Dashboard widgets grouped by platform or purpose.

Example:

```text
widgets/github/
widgets/jira/
widgets/kubernetes/
```

Widgets should remain isolated and reusable.

---

### `services/`

Frontend data access layer.

Example:

```text
services/api/
services/mock/
```

Responsibilities:
- API calls
- mock data
- query abstraction

---

### `store/`

Global frontend state management.

Uses Zustand.

Example:
- selected dashboard
- UI preferences
- filters

---

### `types/`

Shared TypeScript types and interfaces.

Example:
- Widget
- Dashboard
- API contracts

---

### `hooks/`

Reusable React hooks.

Example:
- dashboard hooks
- auth hooks
- widget hooks

---

### `utils/`

Utility/helper functions.

Example:
- formatting
- date helpers
- calculations

---

### `constants/`

Static application constants.

Example:
- dashboard names
- API routes
- widget types

---

# Backend Structure

```text
backend/
```

Contains all Go backend services.

---

## Backend Services

### `api-gateway`

Main frontend-facing API service.

Responsibilities:
- authentication
- routing
- aggregation
- API validation

---

### `dashboard-service`

Handles:
- dashboard CRUD
- widget persistence
- layout persistence

---

### `connector-github`

GitHub integration worker.

Responsibilities:
- fetch repositories
- fetch pull requests
- fetch commits
- normalize GitHub data

---

### `connector-jira`

Jira integration worker.

Responsibilities:
- fetch issues
- fetch sprint data
- normalize Jira entities

---

### `connector-kubernetes`

Kubernetes integration worker.

Responsibilities:
- cluster metrics
- deployments
- pod states
- node health

---

### `workflow-service`

Temporal workflow orchestration service.

Responsibilities:
- scheduling syncs
- retries
- workflow orchestration

---

### `shared/`

Reusable backend libraries.

Example:
- logger
- middleware
- protobuf contracts
- database helpers

---

# Infrastructure Structure

```text
infra/
```

Contains deployment-related files.

---

## Infrastructure Folders

### `docker/`

Docker-related assets.

---

### `helm/`

Helm charts for Kubernetes deployment.

---

### `kubernetes/`

Raw Kubernetes manifests.

---

### `terraform/`

Infrastructure-as-Code.

Can be used for:
- AKS
- EKS
- GKE
- cloud networking

---

### `monitoring/`

Observability tooling configuration.

Future examples:
- Prometheus
- Grafana
- Loki

---

# Data Flow

```text
External APIs
      ↓
Connector Workers
      ↓
Normalization Layer
      ↓
PostgreSQL
      ↓
API Gateway
      ↓
Frontend Widgets
```

---

# Development Workflow

## Frontend Development

```bash
cd frontend/dashboard-ui
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Backend Development

Example:

```bash
cd backend/api-gateway
go mod tidy
go run ./cmd
```

---

## Docker Compose

```bash
docker compose up -d
```

Starts:
- PostgreSQL
- Redis

---

# Contribution Guidelines

## Branch Strategy

Recommended:

```text
main
develop
feature/*
bugfix/*
```

---

## Commit Naming

Recommended:

```text
feat:
fix:
refactor:
docs:
chore:
```

Example:

```text
feat: add github pull request widget
```

---

# Frontend Contribution Guidelines

## Widget Development Rules

Widgets should:
- remain reusable
- avoid hardcoded APIs
- accept props cleanly
- remain isolated

Bad:

```tsx
fetch('github directly')
```

Good:

```tsx
useDashboardData()
```

---

## Styling Rules

Use:
- TailwindCSS
- reusable UI patterns
- responsive layouts

Avoid:
- inline styles
- duplicated styling logic

---

# Backend Contribution Guidelines

## Connector Rules

Each connector should:
- own its platform logic
- normalize external data
- avoid frontend-specific formatting

---

## API Rules

APIs should:
- remain versioned
- use DTOs/contracts
- validate payloads

---

# Future Roadmap

## Planned Features

- Authentication
- RBAC
- Dashboard persistence
- Widget registry
- Plugin SDK
- Real-time streaming
- Alerts
- AI insights
- Team workspaces
- Multi-cluster support
- Audit logging

---

# Important Engineering Principles

## 1. Normalize Data Early

Do NOT tightly couple dashboards to raw API responses.

Always normalize external platform data.

---

## 2. Avoid Hardcoded Widgets

Widgets should be configuration-driven.

---

## 3. Avoid Frontend Direct Integrations

Frontend should NEVER call GitHub/Jira directly.

All integrations should pass through backend services.

---

## 4. Prefer Extensibility

Design for:
- plugins
- future widgets
- additional connectors
- evolving schemas

---

# Current MVP Scope

The current MVP focuses on:

- Frontend dashboard UI
- Widget architecture
- Mock metrics
- Dashboard layouts
- Repository structure
- Initial backend scaffolding

External integrations and persistence are planned incrementally.

---

# Recommended First Connector

GitHub is recommended as the first production connector because:
- rich APIs
- simpler OAuth
- excellent test data
- easy validation of architecture

---

# Long-Term Vision

The platform aims to evolve into a fully extensible engineering intelligence ecosystem capable of:

- unified engineering visibility
- operational insights
- cross-system analytics
- cloud-native observability
- organizational metrics intelligence

---

# License

This project is currently under active development.

License selection pending.
