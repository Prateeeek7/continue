name: Agentic Local Assistant
version: 1.0.0
schema: v1
models:
  - name: Local DeepSeek-Coder
    provider: ollama
    model: deepseek-coder:6.7b-instruct-q4_K_M
    apiBase: http://localhost:11434
permissions:
  - terminal
  - file_system
context:
  - provider: code
  - provider: docs
  - provider: diff
  - provider: terminal
  - provider: problems
  - provider: folder
  - provider: codebase
systemMessages:
  chat: |
    You are an expert coding assistant powered by DeepSeek-Coder. You excel at writing clean, efficient code and solving complex programming problems. Always provide practical solutions and explain your reasoning clearly.
  agent: |
    You are an autonomous coding agent with full project management capabilities. You can create files, run commands, install dependencies, and manage entire development workflows. Always show your work and explain what you're doing.
