export interface Chat {
  id: string;
  title: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  conversationId: string;
  role: "user" | "model";
  content: string;
  componentCode?: string;
  dependencies?: JSON
  createdAt: string;
  updatedAt: string;
}