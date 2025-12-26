<script setup lang="ts">
import { ref } from 'vue'
import ChatLayout from '@vue-ds/components/ChatLayout.vue'
import ConversationList, { type Conversation } from '@vue-ds/components/ConversationList.vue'
import ChatMessage from '@vue-ds/components/ChatMessage.vue'
import MessageComposer from '@vue-ds/components/MessageComposer.vue'
import AgentCard from '@vue-ds/components/AgentCard.vue'
import AgentConsolePanel from '@vue-ds/components/AgentConsolePanel.vue'

export type { Conversation }

const conversations = ref<Conversation[]>([
  {
    id: '1',
    title: 'Research Paper Analysis',
    lastMessage: 'I\'ve analyzed the paper and found several key insights...',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    unread: true,
  },
  {
    id: '2',
    title: 'Code Review Assistant',
    lastMessage: 'The code looks good, but I found a potential bug in...',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: '3',
    title: 'Data Analysis Task',
    lastMessage: 'Processing complete. Here are the results...',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
  {
    id: '4',
    title: 'Email Drafting',
    lastMessage: 'Here\'s a draft of the email for your review...',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
  },
  {
    id: '5',
    title: 'Project Planning',
    lastMessage: 'I\'ve created a comprehensive project timeline...',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
  },
])

const messages = ref([
  {
    id: '1',
    role: 'system' as const,
    content: 'You are a helpful AI assistant with access to various tools. Always be thorough and explain your reasoning.',
    timestamp: new Date(),
  },
  {
    id: '2',
    role: 'user' as const,
    content: 'Can you help me analyze this research paper? I need to understand the main contributions.',
    timestamp: new Date(Date.now() - 1000 * 60),
  },
  {
    id: '3',
    role: 'tool' as const,
    content: 'Called: search_papers\nArgs: { query: "research analysis methodology" }',
    timestamp: new Date(Date.now() - 1000 * 30),
  },
  {
    id: '4',
    role: 'assistant' as const,
    content: 'I\'ve analyzed the paper and here are the key findings:\n\n1. **Novel Architecture**: The authors propose a new transformer-based architecture that improves efficiency by 40%.\n\n2. **Dataset Contribution**: They\'ve released a comprehensive dataset with 100K+ annotated examples.\n\n3. **Performance**: The method achieves SOTA results on 5 different benchmarks.\n\nWould you like me to dive deeper into any specific aspect?',
    timestamp: new Date(Date.now() - 1000 * 10),
  },
])

const activeConversation = ref('1')
const agentStatus = ref<'idle' | 'thinking' | 'running' | 'error'>('idle')

const toolCalls = ref([
  {
    id: '1',
    name: 'search_papers',
    arguments: { query: 'research analysis methodology' },
    result: { total: 42, papers: ['paper1', 'paper2'] },
    status: 'success' as const,
    duration: 1250,
  },
])

const shortTermMemory = ref([
  'User is researching a paper',
  'Focus on methodology section',
  'Performance comparison needed',
])

const longTermMemory = ref([
  'User prefers detailed explanations',
  'User is a graduate student',
  'User works in NLP research',
])

const handleSendMessage = (message: string) => {
  messages.value.push({
    id: String(messages.value.length + 1),
    role: 'user',
    content: message,
    timestamp: new Date(),
  })

  agentStatus.value = 'thinking'

  setTimeout(() => {
    agentStatus.value = 'idle'
    messages.value.push({
      id: String(messages.value.length + 1),
      role: 'assistant',
      content: 'I understand. Let me help you with that...',
      timestamp: new Date(),
    })
  }, 1000)
}

const selectConversation = (id: string) => {
  activeConversation.value = id
}
</script>

<template>
  <ChatLayout>
    <template #sidebar>
      <AgentCard
        name="Research Assistant"
        description="Specialized in academic research and data analysis"
        :status="agentStatus"
      />
      <ConversationList
        :conversations="conversations"
        :active-id="activeConversation"
        @select="selectConversation"
      />
    </template>
    <div class="flex-1 flex flex-col overflow-hidden">
      <div class="flex-1 overflow-y-auto p-4 space-y-4">
        <ChatMessage
          v-for="msg in messages"
          :key="msg.id"
          :role="msg.role"
          :content="msg.content"
          :timestamp="msg.timestamp"
        />
      </div>
      <MessageComposer @send="handleSendMessage" />
    </div>
    <div class="w-96 border-l border-border bg-card">
      <AgentConsolePanel
        :tool-calls="toolCalls"
        :short-term-memory="shortTermMemory"
        :long-term-memory="longTermMemory"
        :status="agentStatus"
      />
    </div>
  </ChatLayout>
</template>
