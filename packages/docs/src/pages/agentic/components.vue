<script setup lang="ts">
import AgentCard from '@vue-ds/components/components/agentic/AgentCard.vue'
import ToolCallLog from '@vue-ds/components/components/agentic/ToolCallLog.vue'
import RunStatusIndicator from '@vue-ds/components/components/agentic/RunStatusIndicator.vue'
import ApprovalGate from '@vue-ds/components/components/agentic/ApprovalGate.vue'
import MemoryChips from '@vue-ds/components/components/agentic/MemoryChips.vue'
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-4 font-heading">Agentic UI Components</h1>
      <p class="text-lg text-muted-foreground">
        Specialized components for building AI agent interfaces with proper status management and tool integration.
      </p>
    </div>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">AgentCard</h2>
      <p class="text-muted-foreground mb-6">
        Display agent profile with status indicators (idle, thinking, running, error).
      </p>
      <div class="space-y-4">
        <AgentCard
          name="Research Assistant"
          description="Specialized in academic research"
          status="idle"
        />
        <AgentCard
          name="Code Reviewer"
          description="Analyzing code quality and bugs"
          status="thinking"
        />
        <AgentCard
          name="Data Processor"
          description="Processing large datasets"
          status="running"
        />
        <AgentCard
          name="API Caller"
          description="Failed to connect to external service"
          status="error"
        />
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">RunStatusIndicator</h2>
      <p class="text-muted-foreground mb-6">
        Show current agent run status with optional progress bar.
      </p>
      <div class="space-y-4">
        <RunStatusIndicator status="idle" />
        <RunStatusIndicator status="thinking" message="Analyzing request..." />
        <RunStatusIndicator status="running" message="Processing data..." :progress="65" />
        <RunStatusIndicator status="done" message="Task completed successfully" />
        <RunStatusIndicator status="error" message="Failed to process request" />
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">ToolCallLog</h2>
      <p class="text-muted-foreground mb-6">
        Display tool invocations with expandable details showing arguments and results.
      </p>
      <ToolCallLog
        :tool-calls="[
          {
            id: '1',
            name: 'search_papers',
            arguments: { query: 'machine learning', limit: 10 },
            result: { total: 42, items: ['paper1', 'paper2'] },
            status: 'success',
            duration: 1250,
          },
          {
            id: '2',
            name: 'calculate_sum',
            arguments: { a: 100, b: 200 },
            status: 'pending',
          },
          {
            id: '3',
            name: 'send_email',
            arguments: { to: 'user@example.com', subject: 'Report' },
            status: 'error',
            duration: 3200,
          },
        ]"
      />
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">ApprovalGate</h2>
      <p class="text-muted-foreground mb-6">
        Human-in-the-loop approval panel for sensitive operations.
      </p>
      <ApprovalGate
        tool-name="send_email"
        :arguments="{ to: 'user@example.com', subject: 'Important Report' }"
        @approve="() => {}"
        @reject="() => {}"
      />
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">MemoryChips</h2>
      <p class="text-muted-foreground mb-6">
        Display agent's short-term and long-term memory as removable chips.
      </p>
      <MemoryChips
        :short-term="['Current task: Write report', 'User prefers detailed analysis', 'Focus on methodology']"
        :long-term="['User is a researcher', 'Works at university', 'Expert in ML']"
      />
    </section>
  </div>
</template>
