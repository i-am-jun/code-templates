# Stages of an Interview

Most algorithmic interview rounds are between 45–60 minutes. The interviews can be broken down into stages, and at each stage, there are multiple things you should do to maximize your chances of success. Let's break it down.

---

## 1. Introductions

At the start of the interview, your interviewer will briefly introduce themselves and their role, then ask you to introduce yourself.

- Prepare and rehearse a 30–60 second introduction summarizing your education, work experience, and interests.  
- Smile and speak with confidence.  
- Pay attention when the interviewer talks about their work — it helps you ask relevant questions later.  
- If they mention anything you're also interested in (work or hobby), mention the connection.

---

## 2. Problem Statement

After introductions, the interviewer will give you a problem statement, often pasted into a shared editor.

### What to do:
- **Confirm understanding** by paraphrasing the problem.
- **Ask clarifying questions**, such as:
  - Will the input contain only integers?
  - Is the input sorted?
  - Can the input be empty?
  - How do I handle invalid inputs?
- **Ask about input size.**  
  - Very small → likely backtracking  
  - Medium (100–1000) → O(n²) may be fine  
  - Large → need O(n) or better  
- Walk through provided examples to confirm understanding.

Asking clarifying questions shows attention to detail and consideration of edge cases.

---

## 3. Brainstorming Data Structures & Algorithms

Break down the problem and identify applicable techniques.

- **Think out loud** — helps the interviewer understand your reasoning.
- Mention patterns like sliding window, backtracking, binary search, BFS/DFS, DP, etc.
- Practice LeetCode to improve this skill.
- Outline your approach before coding and get confirmation from the interviewer.
- Be receptive to hints — interviewers want to guide you.

---

## 4. Implementation

Once the approach is confirmed, start coding.

- Ask before using libraries/modules.
- Explain decisions while coding (e.g., why you need a `seen` set).
- Write clean, idiomatic code following language conventions.
- Avoid duplicate code — use loops and helper functions.
- Don’t panic if stuck — talk to your interviewer.
- You can start with brute force, then optimize with the interviewer’s guidance.

---

## 5. Testing & Debugging

After coding, the interviewer will test your solution. Different environments exist:

### **Environment 1: Built-in test cases, code executes**
- Similar to LeetCode.
- Covers all input types and edge cases.
- Less pressure on writing your own tests.

### **Environment 2: Write your own test cases, code executes**
- Create diverse test cases.
- Call your function and print outputs for verification.

### **Environment 3: Write your own test cases, code does NOT execute**
- Walk through test cases manually.
- Update variables step-by-step.
- Summarize trivial loops instead of expanding fully.

### If errors appear:
- Don’t panic.
- Use print statements or walk through small cases manually.
- Vocalize expected vs actual values.

---

## 6. Explanations & Follow-ups

Be prepared to answer:

### **Time & space complexity**
- Speak about worst-case and average-case if relevant.

### **Why you chose a certain approach**
- Explain decisions about data structures, loops, patterns, etc.

### **Can it be optimized?**
- Avoid confidently claiming a solution is optimal unless certain.

If time remains, you may get:
- A brand new question → restart from Step 2  
- Follow-up variations on the same question (new constraints, reduced space, etc.)

Understanding concepts > memorizing solutions.

---

## 7. Outro

The interviewer reserves a few minutes for your questions. While this won’t improve your score much, it **can** hurt if done poorly.

### Ask thoughtful questions:
- What does an average day look like?
- Why did you choose this company?
- What’s your favorite and least favorite thing about the job?
- What kind of work will I be doing?

Read the company’s tech blog beforehand to ask meaningful questions.

### Tips:
- Stay engaged, smile, and ask follow-up questions.
- Avoid looking bored or uninterested — cultural fit matters.

---

