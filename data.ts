

import { Template, Lesson, Course, Ebook } from './types';

// English Data
const templatesEn: Template[] = [
  {
    id: '1',
    title: 'Polite Email Rewriter',
    description: 'Turn rough notes into a friendly, professional email instantly.',
    difficulty: 'Beginner',
    category: 'Work',
    tool: 'ChatGPT / Claude / Gemini',
    prompt: "You are an expert communicator. Please rewrite the following rough notes into a polite, professional email to a client. Keep the tone warm but concise.\n\nNotes: [PASTE YOUR NOTES HERE]",
    steps: [
      'Copy the prompt above.',
      'Paste it into your AI chat tool.',
      'Replace the bracketed text with your bullet points.',
      'Read the result and hit send!'
    ]
  },
  {
    id: '2',
    title: 'Meeting Notes Summarizer',
    description: 'Turn a messy transcript into a clean list of action items.',
    difficulty: 'Beginner',
    category: 'Work',
    tool: 'Gemini / ChatGPT',
    prompt: "I am pasting a transcript of a meeting below. Please summarize the key decisions made and extract a list of action items with the person responsible for each.\n\nTranscript: [PASTE TRANSCRIPT]",
    steps: [
      'Get the transcript from your meeting tool.',
      'Paste the prompt and the transcript into the AI.',
      'Copy the Action Items list to your project manager.'
    ]
  },
  {
    id: '3',
    title: 'Weekly Meal Planner',
    description: 'Generate a healthy meal plan and shopping list based on what you like.',
    difficulty: 'Beginner',
    category: 'Daily Life',
    tool: 'Any AI Chat',
    prompt: "Create a 5-day dinner meal plan for a family of 4. We want to eat healthy but simple meals that take under 30 minutes. We like chicken, pasta, and mexican food. Please also generate a categorized shopping list for these meals.",
    steps: [
      'Customize the food preferences in the prompt.',
      'Run the prompt.',
      'Take a screenshot of the shopping list for the store.'
    ]
  },
  {
    id: '4',
    title: 'Complex Concept Explainer',
    description: 'Understand difficult topics by asking AI to use analogies.',
    difficulty: 'Intermediate',
    category: 'Creative',
    tool: 'Gemini',
    prompt: "Explain [TOPIC] to me like I am a 12-year-old. Use a real-world analogy to help me understand the core concept deeply without jargon.",
    steps: [
      'Replace [TOPIC] with something confusing (e.g., Blockchain, Quantum Computing).',
      'Read the analogy.',
      'Ask follow-up questions if stuck.'
    ]
  }
];

const lessonsEn: Lesson[] = [
  {
    id: '1',
    title: 'Prompt Engineering and Gen AI for Work: A Practical Guide',
    description: 'Master the skill of writing prompts that get you better AI outputs—from emails to reports to creative ideas.',
    readTime: '15 min read',
    level: 'Total Beginner',
    coverColor: 'bg-brand-blue',
    blocks: [
      { 
        type: 'callout', 
        content: "What you'll learn: By the end of this guide, you'll know how to write clear, effective prompts that make AI tools work better for you at work. No technical background needed." 
      },
      { type: 'h2', content: "Introduction: Why Prompt Engineering Matters" },
      { 
        type: 'text', 
        content: "You've probably used ChatGPT, Gemini, or another AI tool and gotten… okay results. Sometimes brilliant. Sometimes confusing or generic.\n\nThe difference? How you ask.\n\nPrompt engineering is the skill of communicating clearly with AI to get the outputs you actually need. It's not coding—it's just learning to ask better questions." 
      },
      { 
        type: 'highlight', 
        content: "Think of it like this: if you asked a new intern to 'write something about our product,' you'd get something vague. But if you said, 'Write a 200-word email to existing customers explaining our new feature and why it saves them time,' you'd get something useful." 
      },
      { 
        type: 'text', 
        content: "AI is the same. Better instructions = better results.\n\nAnd the best part? This skill takes 20 minutes to learn and will save you hours every week." 
      },
      { type: 'h2', content: "Section 1: The Anatomy of a Good Prompt" },
      { type: 'text', content: "Every effective prompt has 4 key elements:" },
      { type: 'h3', content: "1. Role/Context" },
      { type: 'text', content: "Tell the AI who it is or what perspective to take." },
      { type: 'list', content: ["You are a professional copywriter.", "You are an experienced sales manager.", "Act as a customer service expert."] },
      { type: 'h3', content: "2. Task" },
      { type: 'text', content: "Be crystal clear about what you want." },
      { type: 'example', content: 'Weak: "Write something about productivity."\nStrong: "Write a 300-word LinkedIn post about 3 productivity tips for remote workers."' },
      { type: 'h3', content: "3. Context/Background" },
      { type: 'text', content: "Give the AI any relevant details it needs to know." },
      { type: 'example', content: '"Our company sells project management software to small teams (5-15 people). Our customers struggle with task overload and missed deadlines."' },
      { type: 'h3', content: "4. Constraints/Format" },
      { type: 'text', content: "Tell the AI how you want the output structured." },
      { type: 'list', content: ["Keep it under 150 words.", "Use bullet points.", "Write in a friendly, conversational tone.", "Include 3 examples."] },
      { type: 'h3', content: "Full Example Prompt:" },
      { 
        type: 'code', 
        content: "You are a professional email writer.\n\nWrite an email to a potential client who visited our website but didn't sign up for a demo.\n\nContext: We offer AI-powered meeting note-taking software. The prospect is likely a team lead or manager at a tech company.\n\nTone: Professional but warm and helpful.\nLength: Under 150 words.\nInclude: A brief reminder of our value, a soft call-to-action to book a demo, and a PS with a useful tip." 
      },
      { type: 'text', content: "Result: A polished, ready-to-send email that sounds human and specific to your business." },
      
      { type: 'h2', content: "Section 2: Common Prompt Mistakes (And How to Fix Them)" },
      { type: 'h3', content: "❌ Mistake 1: Being Too Vague" },
      { type: 'example', content: 'Bad prompt: "Write a report."' },
      { type: 'text', content: "Fixed prompt:\n\"Write a 500-word quarterly sales report for our leadership team. Include: total revenue, top 3 performing products, and key challenges we faced this quarter...\"" },
      
      { type: 'h3', content: "❌ Mistake 2: Asking for Too Much at Once" },
      { type: 'text', content: "Fix: Break it into smaller, focused prompts." },
      
      { type: 'h3', content: "❌ Mistake 3: Not Iterating" },
      { type: 'text', content: "AI is a conversation. Refine your prompt if the first result isn't perfect." },
      
      { type: 'h2', content: "Section 3: Prompts for Common Work Tasks" },
      { type: 'h3', content: "📧 Email Writing" },
      { type: 'code', content: "Write a friendly follow-up email to [Name] who I met at [Event/Meeting]. Remind them of our conversation about [Topic], mention one key point they cared about, and suggest a time to continue the conversation. Keep it under 100 words." },
      
      { type: 'h3', content: "📊 Reports & Summaries" },
      { type: 'code', content: "Summarize this meeting transcript into 3 sections:\n1. Key decisions made\n2. Action items (who does what by when)\n3. Open questions or blockers\n\n[Paste transcript here]" },
      
      { type: 'h2', content: "Section 4: Advanced Prompt Techniques" },
      { type: 'h3', content: "1. Chain of Thought Prompting" },
      { type: 'text', content: "Ask the AI to 'think step-by-step'." },
      { type: 'h3', content: "2. Few-Shot Prompting (Give Examples)" },
      { type: 'text', content: "Show the AI what you want by giving examples." },
      
      { type: 'h2', content: "Conclusion" },
      { type: 'text', content: "You don't need to be a 'tech person' to use AI effectively. You just need to ask better questions." }
    ]
  },
  {
    id: '2',
    title: 'Responsible AI in Business: How to Use AI Safely and Ethically',
    description: 'Avoid common AI mistakes, protect your data, and build trust with customers while using AI in your business.',
    readTime: '12 min read',
    level: 'Intermediate',
    coverColor: 'bg-sky-500',
    blocks: [
      { 
        type: 'callout', 
        content: "What you'll learn: By the end of this guide, you'll understand the key risks of using AI at work, how to use it responsibly, and practical steps to protect your business and customers." 
      },
      { type: 'h2', content: "Introduction: Why Responsible AI Matters" },
      { 
        type: 'text', 
        content: "AI tools like ChatGPT, Gemini, and automation platforms are transforming how businesses work. They save time, reduce costs, and unlock new possibilities.\n\nBut with great power comes great responsibility." 
      },
      { 
        type: 'highlight', 
        content: "When used carelessly, AI can:\n• Leak sensitive company or customer data\n• Produce biased or harmful outputs\n• Damage your brand reputation\n• Create legal or compliance issues\n• Erode customer trust" 
      },
      { 
        type: 'text', 
        content: "The good news? Most AI risks are preventable with a few simple practices.\n\nThis guide will show you how to use AI safely, ethically, and strategically—so you get the benefits without the risks." 
      },
      { type: 'h2', content: "Section 1: The Most Common AI Risks in Business" },
      { type: 'text', content: "Let's start with what can go wrong." },
      
      { type: 'h3', content: "1. Data Privacy and Security Risks" },
      { type: 'text', content: "The problem:\nWhen you paste customer emails, contracts, or proprietary information into ChatGPT or other AI tools, that data might be used to train the AI model—unless you opt out." },
      { type: 'example', content: "Real example:\nIn 2023, Samsung employees accidentally leaked confidential source code by pasting it into ChatGPT to debug. Samsung banned ChatGPT company-wide as a result." },
      { type: 'text', content: "How to avoid it:" },
      { type: 'list', content: ["Never paste sensitive data (customer info, financial records, proprietary code) into public AI tools", "Use enterprise versions (ChatGPT Enterprise, Claude for Work) with data privacy guarantees", "Check the tool's privacy policy before using it", "Anonymize data before pasting (replace names, emails, company details with placeholders)"] },

      { type: 'h3', content: "2. Bias and Unfair Outputs" },
      { type: 'text', content: "The problem:\nAI models learn from data, and if that data contains biases, the AI will reflect them. This can lead to unfair hiring decisions, discriminatory customer service, or offensive content." },
      { type: 'example', content: "Real example:\nAmazon scrapped an AI recruiting tool in 2018 after discovering it was biased against women because it was trained on resumes submitted over 10 years (mostly from men)." },
      { type: 'text', content: "How to avoid it:" },
      { type: 'list', content: ["Review AI outputs before using them, especially for hiring, customer interactions, or public-facing content", "Test AI with diverse inputs to check for biased responses", "Don't use AI to make final decisions on sensitive matters (hiring, promotions, credit approvals) without human review", "Train your team to recognize bias in AI outputs"] },

      { type: 'h3', content: "3. Inaccurate or \"Hallucinated\" Information" },
      { type: 'text', content: "The problem:\nAI tools sometimes confidently provide false information—called \"hallucinations.\" This can damage your credibility if you don't fact-check." },
      { type: 'example', content: "Real example:\nA lawyer used ChatGPT to write a legal brief and cited fake court cases that the AI invented. He was fined and faced disciplinary action." },
      { type: 'text', content: "How to avoid it:" },
      { type: 'list', content: ["Always fact-check AI-generated information, especially for legal, medical, financial, or technical content", "Don't use AI as your only source of truth—verify with official sources", "For critical documents (contracts, reports, public statements), have a human expert review AI drafts", "Use AI for drafting and research, not final decisions"] },

      { type: 'h3', content: "4. Over-Reliance on AI" },
      { type: 'text', content: "The problem:\nAI is a tool, not a replacement for human judgment. Over-relying on it can lead to poor decisions, loss of skills, and vulnerability if the AI tool fails." },
      { type: 'example', content: "Real example:\nA marketing team automated all social media posts with AI and lost touch with their audience's real concerns. Engagement dropped 40% before they realized AI couldn't replace human empathy." },
      { type: 'text', content: "How to avoid it:" },
      { type: 'list', content: ["Use AI to assist, not replace, human expertise", "Keep humans in the loop for important decisions", "Regularly review AI outputs for quality and relevance", "Maintain critical thinking skills—don't blindly trust AI"] },

      { type: 'h3', content: "5. Legal and Compliance Issues" },
      { type: 'text', content: "The problem:\nAI regulations are evolving fast. Using AI incorrectly can violate GDPR, copyright laws, or industry-specific regulations." },
      { type: 'example', content: "Real example:\nThe EU AI Act (2024) introduced strict rules for \"high-risk\" AI systems in hiring, credit scoring, and law enforcement. Companies face fines up to €35 million for violations." },
      { type: 'text', content: "How to avoid it:" },
      { type: 'list', content: ["Stay informed about AI regulations in your industry and region (GDPR in Europe, AI Act, etc.)", "Don't use AI to process personal data without consent or legal basis", "Be transparent with customers about how you use AI", "Consult legal experts for high-stakes AI use cases"] },

      { type: 'h2', content: "Section 2: Responsible AI Principles for Business" },
      { type: 'text', content: "Here are 5 principles to guide your AI use:" },
      { type: 'h3', content: "1. Transparency" },
      { type: 'text', content: "What it means:\nBe clear with customers, employees, and stakeholders about when and how you're using AI." },
      { type: 'list', content: ["Disclose AI use in customer interactions (e.g., \"This response was generated with AI assistance\")", "Explain AI decisions when they affect people (e.g., \"Your application was flagged by our AI screening tool for X reason\")", "Don't hide AI behind claims of \"proprietary algorithms\" when transparency is expected"] },

      { type: 'h3', content: "2. Accountability" },
      { type: 'text', content: "What it means:\nTake responsibility for AI outputs, even if the AI made a mistake." },
      { type: 'list', content: ["Assign a human owner for every AI system (who's accountable for its use and outputs)", "Don't blame \"the AI\" when something goes wrong—own the error and fix it", "Create feedback loops so you can catch and correct AI mistakes quickly"] },

      { type: 'h3', content: "3. Fairness" },
      { type: 'text', content: "What it means:\nEnsure AI doesn't discriminate or create unfair outcomes." },
      { type: 'list', content: ["Test AI outputs for bias (gender, race, age, etc.)", "Use diverse data sets when training or customizing AI models", "Avoid using AI for decisions that could harm vulnerable groups without safeguards"] },

      { type: 'h3', content: "4. Privacy" },
      { type: 'text', content: "What it means:\nProtect personal and sensitive data when using AI." },
      { type: 'list', content: ["Anonymize data before feeding it to AI tools", "Use privacy-first AI tools (enterprise versions with data protection agreements)", "Don't collect more data than you need", "Follow GDPR and other data protection laws"] },

      { type: 'h3', content: "5. Human Oversight" },
      { type: 'text', content: "What it means:\nKeep humans in control of important decisions, even when AI assists." },
      { type: 'list', content: ["Review AI outputs before they go to customers or make business impact", "Set up approval workflows for high-stakes AI use (contracts, pricing, hiring)", "Train your team to spot AI errors and intervene"] },

      { type: 'h2', content: "Section 3: Practical Steps to Use AI Responsibly" },
      { type: 'text', content: "Here's a simple checklist you can implement today:" },
      
      { type: 'h3', content: "Step 1: Create an AI Use Policy" },
      { type: 'text', content: "Document how your team should (and shouldn't) use AI.\n\nWhat to include:\n• Approved AI tools and use cases\n• Prohibited uses (e.g., pasting customer data into public tools)\n• Review and approval processes\n• Data privacy guidelines\n• Who to contact with questions" },
      { type: 'highlight', content: "Example rule:\n\"Never paste customer names, emails, or payment information into ChatGPT or any public AI tool. Use our enterprise tools with data protection agreements instead.\"" },
      
      { type: 'h3', content: "Step 2: Train Your Team" },
      { type: 'text', content: "Make sure everyone understands the risks and best practices.\n\nTraining topics:\n• What AI can and can't do reliably\n• How to spot AI hallucinations and bias\n• Data privacy rules\n• When to escalate to a human expert" },
      { type: 'action', content: "Quick training exercise:\nGive your team AI-generated outputs (some correct, some flawed) and have them identify errors. This builds critical thinking." },
      
      { type: 'h3', content: "Step 3: Use Enterprise AI Tools for Sensitive Work" },
      { type: 'text', content: "Upgrade to business versions of AI tools when handling confidential or customer data.\n\nWhy it matters:\n• ChatGPT Enterprise, Claude for Work, and Gemini for Business have data privacy agreements\n• Your inputs aren't used to train the models\n• You get admin controls, audit logs, and compliance features" },
      
      { type: 'h3', content: "Step 4: Anonymize Data Before Using AI" },
      { type: 'text', content: "Before pasting anything into AI, remove identifying information.\n\nHow to anonymize:\n• Replace names with placeholders: \"Customer A\", \"Employee B\"\n• Replace email addresses: \"email1@example.com\"\n• Replace company names: \"Company X\"\n• Remove dates, locations, and other unique identifiers" },
      { type: 'example', content: "Before:\n\"Email from john.smith@acmecorp.com asking about invoice #12345 for $5,000 payment\"\n\nAfter:\n\"Email from Customer A asking about invoice #XXXXX for $X,XXX payment\"" },
      
      { type: 'h3', content: "Step 5: Fact-Check Critical AI Outputs" },
      { type: 'text', content: "Never publish or act on AI-generated content without verification.\n\nWhat to fact-check:\n• Statistics, dates, and numbers\n• Legal or regulatory information\n• Medical or technical claims\n• Names, citations, and references\n• Financial calculations" },
      
      { type: 'h3', content: "Step 6: Monitor and Audit AI Use" },
      { type: 'text', content: "Regularly review how your team is using AI.\n\nWhat to monitor:\n• Are people following the AI policy?\n• Are there patterns of misuse or errors?\n• Are customers complaining about AI interactions?\n• Are there compliance gaps?" },

      { type: 'h2', content: "Section 4: When NOT to Use AI" },
      { type: 'text', content: "Some situations require human judgment only." },
      { type: 'list', content: [
          "1. Final decisions on hiring, promotions, or terminations (Use AI to screen, but humans decide)",
          "2. Legal, medical, or financial advice (AI can assist research, but pros must review)",
          "3. Sensitive customer complaints or crisis situations (Empathy matters)",
          "4. Creating contracts, terms of service, or binding agreements (Legal accuracy is critical)",
          "5. Processing highly sensitive personal data without proper safeguards"
      ]},

      { type: 'h2', content: "Section 5: Building Customer Trust with AI" },
      { type: 'text', content: "Your customers care about how you use AI. Here's how to build trust:" },
      { type: 'h3', content: "1. Be transparent" },
      { type: 'text', content: "Tell customers when AI is involved.\n\nGood examples:\n• \"This response was drafted with AI and reviewed by our team.\"\n• \"We use AI to analyze your feedback and improve our service.\"\n• \"Our chatbot is powered by AI. Type 'human' anytime to reach a person.\"" },
      { type: 'h3', content: "2. Give customers control" },
      { type: 'text', content: "Let them opt out of AI interactions if they prefer (e.g. \"speak to a human\" option)." },
      { type: 'h3', content: "3. Explain AI decisions" },
      { type: 'text', content: "If AI affects a customer (declined loan, rejected application), tell them why and offer a way to review." },
      { type: 'h3', content: "4. Take responsibility for AI mistakes" },
      { type: 'text', content: "Don't say \"the AI messed up.\" Say \"we made a mistake\" and fix it." },

      { type: 'h2', content: "Section 6: Staying Compliant with AI Regulations" },
      { type: 'text', content: "AI laws are evolving. Here's what you need to know:" },
      { type: 'h3', content: "GDPR (Europe)" },
      { type: 'text', content: "You must have a legal basis to process personal data with AI. Customers have the right to human review of automated decisions. You must be transparent about how you use AI." },
      { type: 'h3', content: "EU AI Act (2024)" },
      { type: 'text', content: "Bans \"unacceptable risk\" AI (social scoring). Strict rules for \"high-risk\" AI (hiring, credit scoring). Requires transparency." },
      { type: 'h3', content: "Other regulations" },
      { type: 'text', content: "CCPA (California), HIPAA (Healthcare), FERPA (Education). Stay informed about rules in your industry." },

      { type: 'h2', content: "Conclusion: Use AI as a Tool, Not a Shortcut" },
      { type: 'highlight', content: "The bottom line: AI is powerful, but it requires responsibility.\n\nUse it thoughtfully. Protect your data. Keep humans in the loop. Be transparent with customers.\n\nWhen you use AI responsibly, you get the benefits without the risks—and you build trust that lasts." }
    ]
  },
  {
    id: '3',
    title: 'AI Literacy for Parents: How to Keep Your Kids Safe and Smart with AI',
    description: 'A practical guide for parents to help children use AI safely, develop critical thinking, and balance technology with healthy development.',
    readTime: '20 min read',
    level: 'Beginner',
    coverColor: 'bg-indigo-500',
    blocks: [
      { 
        type: 'callout', 
        content: "What you'll learn: By the end of this guide, you'll understand how AI affects your child's development, how to set healthy boundaries, practical safety measures, and how to teach your kids to think critically about AI." 
      },
      { type: 'h2', content: "Introduction: Why AI Literacy Matters for Your Family" },
      { 
        type: 'text', 
        content: "AI is everywhere your kids go—in their classrooms, on their devices, in their games, and even in their conversations.\nTools like ChatGPT, voice assistants (Alexa, Siri), AI-powered apps, and smart toys are shaping how children learn, play, and interact with the world." 
      },
      { 
        type: 'text', 
        content: "As a parent, you might be wondering:\n• Is AI safe for my child?\n• How much screen time is too much?\n• Will AI make my child lazy or uncreative?\n• What data is being collected about my child?\n• How do I teach my child to use AI responsibly?" 
      },
      { 
        type: 'text', 
        content: "The good news? You don't need to be a tech expert to guide your child through the AI world.\nThis guide will give you practical strategies to protect your child's privacy, teach critical thinking, and empower them to use AI as a tool, not a crutch." 
      },
      
      { type: 'h2', content: "Section 1: Understanding AI in Your Child's World" },
      { type: 'h3', content: "Where is AI showing up in your child's life?" },
      { type: 'list', content: [
        "At School: AI tutoring apps (Khan Academy), AI writing assistants, Educational games with adaptive learning",
        "At Home: Voice assistants (Alexa, Google Assistant, Siri), AI-powered smart toys, YouTube and Netflix recommendations",
        "What kids use it for: Homework help, Asking questions, Creating art/stories, Learning skills"
      ]},
      { type: 'h3', content: "The Benefits: Why AI Can Be Good for Kids" },
      { type: 'list', content: [
        "✅ Personalize learning – AI adapts to your child's learning pace",
        "✅ Make education engaging – Interactive lessons and gamification",
        "✅ Build creativity – Tools for art, music, storytelling",
        "✅ Develop problem-solving skills – AI can challenge kids to think critically",
        "✅ Provide instant feedback – Faster learning loops",
        "✅ Provide accessibility support – Helps with dyslexia, ADHD"
      ]},
      { type: 'example', content: "Example: A child struggling with math can use an AI tutor that breaks down problems step-by-step at their own pace—without judgment or frustration." },
      { type: 'h3', content: "The Risks: What Parents Need to Watch For" },
      { type: 'list', content: [
        "❌ Privacy concerns – AI tools collect data about your child",
        "❌ Inappropriate content – AI chatbots can generate harmful info",
        "❌ Over-reliance – Kids might stop thinking for themselves",
        "❌ Loss of social skills – Too much screen time reduces interaction",
        "❌ Biased or misleading outputs – AI can reinforce stereotypes",
        "❌ Addiction patterns – AI algorithms designed to keep kids engaged"
      ]},
      { type: 'example', content: "Real example: In 2023, parents reported that kids were asking ChatGPT to write their essays instead of learning to write themselves. Schools had to update policies to prevent AI plagiarism." },
      
      { type: 'h2', content: "Section 2: Privacy and Safety – Protecting Your Child Online" },
      { type: 'text', content: "When your child uses AI tools, they're often sharing personal data like name, location, and interests. This data can be used to build profiles or sold to advertisers." },
      { type: 'h3', content: "5 Steps to Protect Your Child's Privacy" },
      { type: 'h3', content: "1. Use Kid-Friendly AI Tools with Privacy Protections" },
      { type: 'text', content: "Not all AI tools are safe. Look for COPPA-compliant services." },
      { type: 'list', content: [
        "Safe options: Khan Academy Kids (No ads), Duolingo (13+), Epic!, Scratch (Coding)",
        "Avoid: Public AI chatbots (ChatGPT/Claude) for young kids, Apps with heavy data collection"
      ]},
      { type: 'h3', content: "2. Set Up Parental Controls" },
      { type: 'text', content: "Enable limits on devices (Screen Time, Family Link), voice assistants (Amazon Kids), and search engines (SafeSearch)." },
      { type: 'h3', content: "3. Teach Your Child Not to Share Personal Information" },
      { type: 'list', content: [
        "Full name, address, school name",
        "Birthday and age",
        "Photos or videos without permission",
        "Passwords"
      ]},
      { type: 'highlight', content: "Kid-friendly rule: \"If you wouldn't tell a stranger on the street, don't tell it to an app or AI.\"" },
      { type: 'h3', content: "4. Review Privacy Settings Together" },
      { type: 'text', content: "Go through apps: Turn off location tracking, disable mic/camera access where not needed, opt out of ads." },
      { type: 'h3', content: "5. Monitor Without Spying" },
      { type: 'text', content: "For young kids: Active supervision. For older kids: Periodic check-ins. Don't secretly monitor unless necessary; build trust." },
      
      { type: 'h2', content: "Section 3: Teaching Critical Thinking About AI" },
      { type: 'text', content: "One of the most important skills you can teach your child is how to think critically about AI. AI is not magic. It's not always right." },
      { type: 'h3', content: "Lesson 1: AI Can Be Wrong" },
      { type: 'text', content: "The problem: AI tools like ChatGPT can confidently give incorrect information (\"hallucinations\")." },
      { type: 'example', content: "Real example: A child asked ChatGPT, \"Do penguins live in the Arctic?\" and the AI said yes. (Wrong—they live in the Antarctic.)" },
      { type: 'action', content: "Activity: Ask your child to ask AI a question, then verify the answer together using a trusted source (encyclopedia, library)." },
      
      { type: 'h3', content: "Lesson 2: AI Is Trained by Humans (and Can Have Bias)" },
      { type: 'text', content: "The problem: AI learns from data created by humans, so it can reflect human biases." },
      { type: 'example', content: "Real example: Image-generating AI used to generate mostly male images when asked for \"doctor\"." },
      { type: 'action', content: "Activity: Try asking an AI to generate images or describe people in different jobs. Discuss: Does it seem fair? Are all kinds of people represented?" },
      
      { type: 'h3', content: "Lesson 3: AI Doesn't Understand—It Predicts" },
      { type: 'text', content: "AI is like a very smart parrot. It can repeat information, but it doesn't really understand like people do." },
      { type: 'action', content: "Activity: Ask AI a silly question (like \"Why do unicorns eat tacos?\"). Show how AI tries to answer even when it doesn't make sense." },

      { type: 'h3', content: "Lesson 4: AI Can Be Used for Good or Bad" },
      { type: 'text', content: "AI is a tool. It can help doctors find diseases (Good) or create fake videos to spread lies (Bad)." },
      { type: 'action', content: "Activity: Discuss real-world examples of helpful vs harmful AI use." },

      { type: 'h3', content: "Lesson 5: Don't Let AI Do Your Thinking" },
      { type: 'text', content: "If kids rely on AI for every answer, they stop developing their own skills. Use AI to explain or check work, not to do it." },
      { type: 'highlight', content: "Rule of thumb: Use AI to explain something ✅ Use AI to check your work ✅ Don't use AI to do your work ❌" },
      
      { type: 'h2', content: "Section 4: Balancing Screen Time and Healthy Development" },
      { type: 'text', content: "AI tools often mean more screen time. Use the \"4 Ps\" Framework for Healthy Screen Time:" },
      { type: 'list', content: [
        "1. Purpose: Is it for learning/creativity (good) or mindless scrolling (not great)?",
        "2. Presence: Are you involved or co-viewing? Or completely absent?",
        "3. Pace: Are sessions short and intentional? Or all day?",
        "4. People: Is it replacing real-world friends and family play?"
      ]},
      { type: 'h3', content: "Signs of Unhealthy Use" },
      { type: 'text', content: "Watch for tantrums when stopping, sleep problems, or loss of interest in hobbies." },
      { type: 'highlight', content: "Family tech agreement idea: We use screens for learning and fun, not all day. We ask permission before downloading apps. No devices at dinner. We talk about what we see online." },
      
      { type: 'h2', content: "Section 5: Age-Appropriate AI Guidelines" },
      { type: 'h3', content: "Ages 3-6: Early Childhood" },
      { type: 'text', content: "Stick to voice assistants for songs/facts and supervised educational games. Avoid open-ended chatbots and social media." },
      { type: 'action', content: "Activity: Ask Alexa for animal sounds or fun facts together." },
      
      { type: 'h3', content: "Ages 7-9: Middle Childhood" },
      { type: 'text', content: "Can handle AI tutoring apps and creative tools (Scratch). Keep search engines filtered. No social media. Supervised independence." },
      { type: 'action', content: "Activity: Use Khan Academy Kids or explore \"how AI works\" videos." },
      
      { type: 'h3', content: "Ages 10-13: Preteens" },
      { type: 'text', content: "Can use homework helpers (with guidelines) and creative generation tools. Watch for over-reliance and privacy risks." },
      { type: 'action', content: "Activity: Practice fact-checking AI responses together. Discuss AI ethics." },
      
      { type: 'h2', content: "Section 6: Homework and School – Setting Smart AI Boundaries" },
      { type: 'text', content: "AI is changing homework. Create \"Traffic Light\" rules:" },
      { type: 'list', content: [
        "✅ Green Light: Explaining concepts, breaking down problems, checking work, brainstorming ideas.",
        "⚠️ Yellow Light: Getting outlines or examples (but writing content yourself).",
        "❌ Red Light: Copy-pasting AI answers, having AI write essays, using AI to avoid learning."
      ]},
      { type: 'highlight', content: "The \"Try First\" Rule: Try to solve the problem yourself for 10-15 minutes. If stuck, ask AI to EXPLAIN (not solve). Use the explanation to solve it yourself." },
      { type: 'text', content: "Talk to your child's teacher about the school's AI policy." },
      
      { type: 'h2', content: "Section 7: Conversations to Have with Your Child" },
      { type: 'list', content: [
        "1. \"AI Is a Tool, Like a Calculator\" – It helps you learn, but can't learn for you.",
        "2. \"Not Everything AI Says Is True\" – Always check important information.",
        "3. \"Be Kind, Even to AI\" – Practicing kindness helps you be a good person.",
        "4. \"Some Things Should Stay Private\" – Don't share full name, school, photos with bots.",
        "5. \"If Something Makes You Uncomfortable, Tell Me\" – No punishment, just help."
      ]},
      
      { type: 'h2', content: "Section 8: Red Flags and When to Worry" },
      { type: 'h3', content: "Warning Signs" },
      { type: 'text', content: "Secretive behavior, decline in grades, loss of interest in non-screen activities, social withdrawal, sleep problems." },
      { type: 'h3', content: "Specific Risks to Monitor" },
      { type: 'list', content: [
        "1. Chatbot Relationships: Kids forming emotional attachments to bots.",
        "2. Inappropriate Content: Accidental exposure to disturbing text/images.",
        "3. Deepfakes: Confusion about what is real vs fake videos.",
        "4. Academic Dishonesty: Work that suddenly improves dramatically or sounds unlike them."
      ]},
      
      { type: 'h2', content: "Section 9: Practical AI Activities to Do Together" },
      { type: 'list', content: [
        "1. AI Fact or Fiction? Ask AI a question, then fact-check it together.",
        "2. Design Your Own AI: Brainstorm an AI that would help people. What would it do? What data would it need?",
        "3. AI Art Challenge: Create art together using DALL-E or Canva. Discuss creativity.",
        "4. A Day Without AI: Try to go a day without AI tools and discuss the difference.",
        "5. Interview an Adult about Tech: Ask grandparents about life before the internet."
      ]},
      
      { type: 'h2', content: "Section 10: Resources for Parents" },
      { type: 'text', content: "Recommended Tools:" },
      { type: 'list', content: [
        "Educational: Khan Academy Kids, Duolingo, Epic!, Scratch, Code.org",
        "Parental Control: Google Family Link, Apple Screen Time, Bark, Qustodio",
        "Privacy: DuckDuckGo, Signal"
      ]},
      { type: 'text', content: "Books & Orgs:" },
      { type: 'list', content: [
        "Books: \"The Tech-Wise Family\", \"Screenwise\", \"Hello Ruby\"",
        "Sites: Common Sense Media, ConnectSafely.org"
      ]},
      { type: 'text', content: "If concerned about safety, contact: National Center for Missing & Exploited Children." },
      
      { type: 'h2', content: "Conclusion: Raising Digitally Literate Kids" },
      { type: 'text', content: "You don't have to be a tech expert to be a great parent in the AI age. Stay involved, stay curious, and keep conversations open.\n\nThe goal isn't to eliminate AI from your child's life. It's to teach them to use it wisely, think critically, and stay grounded in real-world relationships and values.\n\nYou're not just raising kids who can use AI—you're raising kids who can think for themselves." }
    ]
  }
];

const courseEn: Course = {
  id: 'automation-playbook',
  title: 'Practical AI Automation Playbook',
  subtitle: 'Save hours every week by automating repetitive tasks—no technical skills required.',
  learningPoints: [
    'Identify automatable tasks',
    'Set up email/meeting automations',
    'Use AI for content',
    'Build workflows',
    'Measure ROI'
  ],
  stats: {
    lessons: '6 Lessons',
    time: '~50 min',
    level: 'Beginner'
  },
  ctaStart: 'Start with Lesson 1',
  lessons: [
    {
      id: '1',
      title: 'What Is Automation',
      duration: '7 min',
      blocks: [
        { type: 'callout', content: 'What you\'ll learn: Understand what automation is and debunk common myths.' },
        { type: 'h2', content: 'What is automation?' },
        { type: 'text', content: 'Automation means using tools to do repetitive tasks automatically—without clicking or typing yourself.' },
        { type: 'h3', content: 'Common myths' },
        { type: 'list', content: ['❌ Only for programmers', '❌ Expensive', '❌ Will replace jobs'] },
        { type: 'highlight', content: 'If you do it more than 3 times a week, you should probably automate it.' },
        { type: 'h3', content: 'What to automate' },
        { type: 'list', content: ['Follow-up emails', 'Meeting notes', 'Social media', 'File organization', 'Reports', 'Appointments'] },
        { type: 'example', content: 'Real example: Maria saves 2 hours/month by using AI to organize inbox and create weekly to-do lists.' },
        { type: 'action', content: 'Your turn: Write down 3 repetitive tasks you do weekly.' }
      ]
    },
    {
      id: '2',
      title: 'Email Automation',
      duration: '8 min',
      blocks: [
        { type: 'callout', content: 'What you\'ll learn: How to reclaim your inbox using AI drafts and filters.' },
        { type: 'h2', content: 'Why email?' },
        { type: 'text', content: 'Most spend 2-3 hours daily on email. That is huge.' },
        { type: 'h3', content: '3 key automations' },
        { type: 'list', content: ['1. Auto-categorize (Gmail filters/Outlook rules)', '2. AI email drafts (ChatGPT/Gemini)', '3. Schedule send'] },
        { type: 'code', content: "Draft a professional email response to the following message. Keep it friendly, concise, and under 100 words:\n[Paste email here]\nMy response should: [explain what to communicate]" },
        { type: 'example', content: 'Real example: Carlos cut email time from 90min to 25min daily using templates + AI.' },
        { type: 'action', content: 'Your turn: Pick ONE automation to set up this week.' }
      ]
    },
    {
      id: '3',
      title: 'Meeting Notes',
      duration: '8 min',
      blocks: [
        { type: 'callout', content: 'What you\'ll learn: Never write meeting minutes by hand again.' },
        { type: 'text', content: 'Problem: Meetings take 1 hour + 20 min of notes = 20% extra time.' },
        { type: 'h2', content: 'Solution: AI meeting assistants' },
        { type: 'text', content: 'Tools like Otter.ai, Fireflies.ai, Fathom, or Google Meet transcription can save the day.' },
        { type: 'h3', content: 'What they do' },
        { type: 'list', content: ['Transcribe', 'Identify speakers', 'Summarize', 'Extract action items', 'Share automatically'] },
        { type: 'h3', content: 'Setup (Fireflies Example)' },
        { type: 'text', content: 'Sign up free → Connect calendar → Auto-joins meetings → Email with transcript/summary/actions.' },
        { type: 'code', content: "Summarize this meeting transcript in bullet points. Include:\n- Key decisions made\n- Action items (who does what by when)\n- Open questions or blockers\n[Paste transcript]" },
        { type: 'example', content: 'Real example: Sophie saves 2.5 hours/week with Fireflies across 8 meetings.' },
        { type: 'action', content: 'Your turn: Try an AI notetaker in one meeting this week.' }
      ]
    },
    {
      id: '4',
      title: 'Content Calendars',
      duration: '9 min',
      blocks: [
        { type: 'callout', content: 'What you\'ll learn: Generate and organize a month of content in minutes.' },
        { type: 'text', content: 'Why overwhelming? Need constant fresh ideas for social/blogs/newsletters. AI helps you brainstorm + draft + organize.' },
        { type: 'h2', content: 'Step 1: Brainstorm' },
        { type: 'code', content: "I need 30 content ideas for [platform] aimed at [audience].\nTopics: [your themes]\nMix: Educational posts | Personal stories | Quick tips | Engagement questions\nFormat as numbered list." },
        { type: 'h2', content: 'Step 2: Organize' },
        { type: 'text', content: 'Put them in a simple spreadsheet: Date | Topic | Post type | Status.' },
        { type: 'h2', content: 'Step 3: Write' },
        { type: 'code', content: "Write a [platform] post about: [topic]\nTone: [professional/casual/friendly]\nLength: [word count]\nInclude: Hook first sentence, actionable tip, question at end." },
        { type: 'h2', content: 'Step 4: Batch Schedule' },
        { type: 'text', content: 'Use tools like Buffer or Metricool to schedule them all at once.' },
        { type: 'example', content: 'Real example: Javier generates 20 posts in 90min, posts daily, engagement tripled.' },
        { type: 'action', content: 'Your turn: Create 7-day content calendar using AI.' }
      ]
    },
    {
      id: '5',
      title: 'Build Workflows',
      duration: '10 min',
      blocks: [
        { type: 'callout', content: 'What you\'ll learn: Connecting different apps to act automatically.' },
        { type: 'text', content: 'What is a workflow? It is a sequence of automatic actions triggered by an event.' },
        { type: 'highlight', content: 'Example: Email with "urgent" → Slack notification + Add to to-do list' },
        { type: 'h2', content: 'Tools' },
        { type: 'list', content: ['Zapier (5 free workflows)', 'Make', 'IFTTT', 'n8n'] },
        { type: 'h3', content: '3 beginner workflows' },
        { type: 'list', content: ['1. Save email attachments to Google Drive', '2. Log customers to spreadsheet (Stripe/PayPal → Sheets)', '3. Auto-post blog to social platforms'] },
        { type: 'h3', content: 'How to build (Zapier)' },
        { type: 'list', content: ['1. Sign up → Create Zap', '2. Choose Trigger app (Gmail) + event (New email)', '3. Connect account', '4. Choose Action app (Google Drive) + action (Upload file)', '5. Mapea campos', '6. Prueba y enciende'] },
        { type: 'example', content: 'Real example: Laura saves 15min per order (12.5 hours/month) with order automation.' },
        { type: 'action', content: 'Your turn: Build one simple Zap with 2 apps this week.' }
      ]
    },
    {
      id: '6',
      title: 'Measure ROI',
      duration: '8 min',
      blocks: [
        { type: 'callout', content: 'What you\'ll learn: How to prove automation is worth it.' },
        { type: 'h2', content: 'Why measure?' },
        { type: 'text', content: 'So you can show results: "I saved 10 hours this month".' },
        { type: 'h3', content: 'Step 1: Baseline' },
        { type: 'text', content: 'Task time × Frequency = Total time.\nExample: 15min emails × 20/week = 5 hours/week' },
        { type: 'h3', content: 'Step 2: Post-automation' },
        { type: 'text', content: 'New time × Frequency\nExample: 5min emails × 20/week = 1.7 hours/week\nSaved: 3.3 hours/week = 156 hours/year' },
        { type: 'h3', content: 'Step 3: Dollar value' },
        { type: 'highlight', content: 'Time saved × Hourly rate = Money Saved' },
        { type: 'text', content: 'Example: 156 hours × €30 = €4,680/year. Minus tool cost (€120) = €4,560 net savings.' },
        { type: 'example', content: 'Real example: David tracked 4 workflows, showed 40 hours/month team savings, got budget approved.' },
        { type: 'action', content: 'Your turn: Track one automation for 2 weeks and calculate savings.' }
      ]
    }
  ]
};

const ebooksEn: Ebook[] = [
  {
    id: '1',
    title: 'The AI-Powered Freelancer',
    description: 'A comprehensive guide to scaling your freelance business using AI tools for proposals and management.',
    readTime: '25 min read',
    level: 'Intermediate',
    coverColor: 'bg-emerald-500'
  },
  {
    id: '2',
    title: 'Generative AI for Marketing',
    description: 'Strategies for small marketing teams to produce quality content at scale.',
    readTime: '30 min read',
    level: 'Advanced',
    coverColor: 'bg-purple-500'
  },
   {
    id: '3',
    title: 'AI in the Classroom',
    description: 'For teachers and educators: How to use AI to create lesson plans and grade faster.',
    readTime: '20 min read',
    level: 'Beginner',
    coverColor: 'bg-orange-500'
  }
];

const templatesEs: Template[] = [
  {
    id: '1',
    title: 'Reescritor de Correo Amable',
    description: 'Convierte notas ásperas en un correo amigable y profesional al instante.',
    difficulty: 'Principiante',
    category: 'Trabajo',
    tool: 'ChatGPT / Claude / Gemini',
    prompt: "Eres un experto comunicador. Por favor reescribe las siguientes notas ásperas en un correo educado y profesional para un cliente. Mantén el tono cálido pero conciso.\n\nNotas: [PEGA TUS NOTAS AQUÍ]",
    steps: [
      'Copia el prompt de arriba.',
      'Pégalo en tu herramienta de chat IA.',
      'Reemplaza el texto entre corchetes con tus puntos.',
      '¡Lee el resultado y envía!'
    ]
  },
  {
    id: '2',
    title: 'Resumidor de Notas de Reunión',
    description: 'Convierte una transcripción desordenada en una lista limpia de elementos de acción.',
    difficulty: 'Principiante',
    category: 'Trabajo',
    tool: 'Gemini / ChatGPT',
    prompt: "Estoy pegando una transcripción de una reunión abajo. Por favor resume las decisiones clave tomadas y extrae una lista de elementos de acción con la persona responsable de cada uno.\n\nTranscripción: [PEGA TRANSCRIPCIÓN]",
    steps: [
      'Obtén la transcripción de tu herramienta de reuniones.',
      'Pega el prompt y la transcripción en la IA.',
      'Copia la lista de Acciones a tu gerente de proyecto.'
    ]
  },
  {
    id: '3',
    title: 'Planificador de Comidas Semanal',
    description: 'Genera un plan de comidas saludable y lista de compras basado en lo que te gusta.',
    difficulty: 'Principiante',
    category: 'Vida Diaria',
    tool: 'Cualquier Chat IA',
    prompt: "Crea un plan de cenas de 5 días para una familia de 4. Queremos comer saludable pero comidas simples que tomen menos de 30 minutos. Nos gusta el pollo, pasta y comida mexicana. Por favor genera también una lista de compras categorizada para estas comidas.",
    steps: [
      'Personaliza las preferencias de comida en el prompt.',
      'Ejecuta el prompt.',
      'Toma una captura de pantalla de la lista de compras para la tienda.'
    ]
  },
  {
    id: '4',
    title: 'Explicador de Conceptos Complejos',
    description: 'Entiende temas difíciles pidiendo a la IA que use analogías.',
    difficulty: 'Intermedio',
    category: 'Creativo',
    tool: 'Gemini',
    prompt: "Explícame [TEMA] como si tuviera 12 años. Usa una analogía del mundo real para ayudarme a entender el concepto central profundamente sin jerga.",
    steps: [
      'Reemplaza [TEMA] con algo confuso (ej. Blockchain, Computación Cuántica).',
      'Lee la analogía.',
      'Haz preguntas de seguimiento si te atascas.'
    ]
  }
];

const lessonsEs: Lesson[] = [
  {
    id: '1',
    title: 'Ingeniería de Prompts e IA Generativa para el Trabajo: Una Guía Práctica',
    description: 'Domina la habilidad de escribir prompts que te dan mejores resultados de IA—desde emails hasta reportes e ideas creativas.',
    readTime: '15 min lectura',
    level: 'Principiante Total',
    coverColor: 'bg-brand-blue',
    blocks: [
      { 
        type: 'callout', 
        content: "Lo que aprenderás: Al final de esta guía, sabrás cómo escribir prompts claros y efectivos que hagan que las herramientas de IA funcionen mejor para ti en el trabajo. No se necesita experiencia técnica." 
      },
      { type: 'h2', content: "Introducción: Por Qué Importa la Ingeniería de Prompts" },
      { 
        type: 'text', 
        content: "Probablemente has usado ChatGPT, Gemini u otra herramienta de IA y obtenido… resultados aceptables. A veces brillantes. A veces confusos o genéricos.\n\n¿La diferencia? Cómo preguntas.\n\nLa ingeniería de prompts es la habilidad de comunicarse claramente con la IA para obtener los resultados que realmente necesitas. No es programar—es simplemente aprender a hacer mejores preguntas." 
      },
      { 
        type: 'highlight', 
        content: "Piénsalo así: si le pidieras a un nuevo pasante que 'escribiera algo sobre nuestro producto', obtendrías algo vago. Pero si dijeras: 'Escribe un correo de 200 palabras para clientes existentes explicando nuestra nueva función y por qué les ahorra tiempo', obtendrías algo útil." 
      },
      { 
        type: 'text', 
        content: "La IA es igual. Mejores instrucciones = mejores resultados.\n\nY la mejor parte? Esta habilidad toma 20 minutos aprender y te ahorrará horas cada semana." 
      },
      { type: 'h2', content: "Sección 1: La Anatomía de un Buen Prompt" },
      { type: 'text', content: "Todo prompt efectivo tiene 4 elementos clave:" },
      { type: 'h3', content: "1. Rol/Contexto" },
      { type: 'text', content: "Dile a la IA quién es o qué perspectiva tomar." },
      { type: 'list', content: ["Eres un redactor profesional.", "Eres un gerente de ventas experimentado.", "Actúa como un experto en servicio al cliente."] },
      { type: 'h3', content: "2. Tarea" },
      { type: 'text', content: "Sé cristalino sobre lo que quieres." },
      { type: 'example', content: 'Débil: "Escribe algo sobre productividad."\nFuerte: "Escribe un post de LinkedIn de 300 palabras sobre 3 consejos de productividad para trabajadores remotos."' },
      { type: 'h3', content: "3. Contexto/Antecedentes" },
      { type: 'text', content: "Dale a la IA cualquier detalle relevante que necesite saber." },
      { type: 'h3', content: "4. Restricciones/Formato" },
      { type: 'text', content: "Dile a la IA cómo quieres que se estructure el resultado." },
      { type: 'list', content: ["Mantenlo en menos de 150 palabras.", "Usa viñetas.", "Escribe en un tono amigable y conversacional."] },
      { type: 'h3', content: "Ejemplo de Prompt Completo:" },
      { 
        type: 'code', 
        content: "Eres un redactor de correos profesional.\n\nEscribe un correo a un cliente potencial que visitó nuestro sitio web pero no se registró para una demo.\n\nContexto: Ofrecemos software de toma de notas de reuniones con IA. El prospecto es probablemente un líder de equipo.\n\nTono: Profesional pero cálido.\nLongitud: Menos de 150 palabras.\nIncluye: Un breve recordatorio de nuestro valor y un llamado a la acción suave." 
      },
      
      { type: 'h2', content: "Sección 2: Errores Comunes de Prompt (Y Cómo Arreglarlos)" },
      { type: 'h3', content: "❌ Error 1: Ser Demasiado Vago" },
      { type: 'example', content: 'Mal prompt: "Escribe un informe."' },
      { type: 'text', content: "Corrección: \"Escribe un informe de ventas trimestral de 500 palabras para nuestro equipo de liderazgo...\"" },
      
      { type: 'h3', content: "❌ Error 2: Pedir Demasiado a la Vez" },
      { type: 'text', content: "Solución: Divídelo en prompts más pequeños y enfocados." },
      
      { type: 'h3', content: "❌ Error 3: No Iterar" },
      { type: 'text', content: "La IA es una conversación. Refina tu prompt si el primer resultado no es perfecto." },
      
      { type: 'h2', content: "Sección 3: Prompts para Tareas Comunes de Trabajo" },
      { type: 'h3', content: "📧 Redacción de Correos" },
      { type: 'code', content: "Escribe un correo de seguimiento amigable a [Nombre] a quien conocí en [Evento]. Recuérdale nuestra conversación sobre [Tema], menciona un punto clave y sugiere un momento para continuar. Menos de 100 palabras." },
      
      { type: 'h3', content: "📊 Informes y Resúmenes" },
      { type: 'code', content: "Resume esta transcripción de reunión en 3 secciones:\n1. Decisiones clave tomadas\n2. Elementos de acción\n3. Preguntas abiertas\n\n[Pega transcripción aquí]" },
      
      { type: 'h3', content: "💡 Lluvia de Ideas" },
      { type: 'code', content: "Necesito 20 ideas de posts de LinkedIn para [tu audiencia]. Los temas deben enfocarse en [tus temas]. Formato como lista numerada." },
      
      { type: 'h3', content: "📅 Planificación" },
      { type: 'code', content: "Tengo estas tareas esta semana: [Lista tus tareas]. Ayúdame a organizarlas en un horario priorizado de Lunes a Viernes." },
      
      { type: 'h2', content: "Sección 4: Técnicas Avanzadas" },
      { type: 'h3', content: "1. Cadena de Pensamiento" },
      { type: 'text', content: "Pídele a la IA que 'piense paso a paso'." },
      { type: 'h3', content: "2. Few-Shot (Dar Ejemplos)" },
      { type: 'text', content: "Muestra a la IA lo que quieres dándole ejemplos del estilo deseado." },
      { type: 'h3', content: "3. Rol + Persona" },
      { type: 'text', content: "Dale a la IA una personalidad detallada (ej. 'Eres una directora de marketing veterana')." },
      
      { type: 'h2', content: "Conclusión" },
      { type: 'text', content: "No necesitas ser un experto técnico. Empieza con un prompt de esta guía hoy y ve cuánto tiempo ahorras." }
    ]
  },
  {
    id: '2',
    title: 'IA Responsable en los Negocios: Cómo Usar IA de Forma Segura y Ética',
    description: 'Evita errores comunes con IA, protege tus datos y genera confianza con tus clientes mientras usas IA en tu negocio.',
    readTime: '12 min lectura',
    level: 'Intermedio',
    coverColor: 'bg-sky-500',
    blocks: [
      { 
        type: 'callout', 
        content: "Lo que aprenderás: Al final de esta guía, entenderás los riesgos clave de usar IA en el trabajo, cómo usarla responsablemente y pasos prácticos para proteger tu negocio y clientes." 
      },
      { type: 'h2', content: "Introducción: Por Qué Importa la IA Responsable" },
      { 
        type: 'text', 
        content: "Las herramientas de IA como ChatGPT y plataformas de automatización están transformando cómo trabajan las empresas. Ahorran tiempo y reducen costos.\n\nPero un gran poder conlleva una gran responsabilidad." 
      },
      { 
        type: 'highlight', 
        content: "Cuando se usa descuidadamente, la IA puede:\n• Filtrar datos sensibles\n• Producir resultados sesgados\n• Dañar tu reputación\n• Crear problemas legales" 
      },
      { type: 'h2', content: "Sección 1: Riesgos Comunes de IA en Negocios" },
      { type: 'h3', content: "1. Privacidad de Datos" },
      { type: 'text', content: "El problema: Pegar datos de clientes en herramientas públicas puede filtrarlos." },
      { type: 'example', content: "Ejemplo real: Samsung prohibió ChatGPT después de que empleados filtraron código confidencial." },
      { type: 'h3', content: "2. Sesgo" },
      { type: 'text', content: "El problema: La IA puede reflejar sesgos injustos de sus datos de entrenamiento." },
      { type: 'h3', content: "3. Alucinaciones" },
      { type: 'text', content: "El problema: La IA puede inventar hechos con total confianza. Siempre verifica." },
      
      { type: 'h2', content: "Sección 2: Principios de IA Responsable" },
      { type: 'list', content: ["Transparencia: Sé claro sobre el uso de IA.", "Responsabilidad: Asume la culpa de los errores de IA.", "Justicia: Evita la discriminación.", "Privacidad: Protege los datos.", "Supervisión Humana: Mantén a las personas en control."] },
      
      { type: 'h2', content: "Sección 3: Pasos Prácticos" },
      { type: 'list', content: ["Crea una política de uso de IA", "Entrena a tu equipo", "Usa herramientas empresariales para datos sensibles", "Anonimiza datos antes de pegarlos", "Verifica resultados críticos"] },
      
      { type: 'h2', content: "Sección 4: Cuándo NO Usar IA" },
      { type: 'text', content: "No uses IA para decisiones finales de contratación, consejos legales/médicos sin revisión, o situaciones de crisis sensibles." },
      
      { type: 'h2', content: "Sección 5: Construyendo Confianza" },
      { type: 'text', content: "Sé transparente, da control a los clientes y explica las decisiones tomadas con ayuda de IA." },
      
      { type: 'h2', content: "Conclusión" },
      { type: 'text', content: "Usa la IA como herramienta, no como atajo. Úsala con cuidado y construye confianza." }
    ]
  },
  {
    id: '3',
    title: 'Alfabetización en IA para Padres: Cómo Mantener a Tus Hijos Seguros e Inteligentes con IA',
    description: 'Una guía práctica para padres para ayudar a los niños a usar IA de manera segura, desarrollar pensamiento crítico y equilibrar la tecnología con un desarrollo saludable.',
    readTime: '20 min lectura',
    level: 'Principiante',
    coverColor: 'bg-indigo-500',
    blocks: [
      { 
        type: 'callout', 
        content: "Lo que aprenderás: Al final de esta guía, entenderás cómo la IA afecta el desarrollo de tu hijo, cómo establecer límites saludables, medidas de seguridad prácticas y cómo enseñar a tus hijos a pensar críticamente sobre la IA." 
      },
      { type: 'h2', content: "Introducción: Por Qué Importa la Alfabetización en IA" },
      { 
        type: 'text', 
        content: "La IA está en todas partes donde van tus hijos—en sus aulas, en sus dispositivos, en sus juegos e incluso en sus conversaciones. Herramientas como ChatGPT, asistentes de voz (Alexa, Siri), apps impulsadas por IA y juguetes inteligentes están moldeando cómo los niños aprenden, juegan e interactúan con el mundo." 
      },
      { type: 'text', content: "Como padre, podrías preguntarte:\n• ¿Es segura la IA para mi hijo?\n• ¿Cuánto tiempo frente a la pantalla es demasiado?\n• ¿La IA hará a mi hijo perezoso o poco creativo?\n• ¿Qué datos se están recolectando sobre mi hijo?\n• ¿Cómo enseño a mi hijo a usar la IA responsablemente?" },
      { type: 'text', content: "La buena noticia? No necesitas ser un experto técnico para guiar a tu hijo a través del mundo de la IA.\n\nEsta guía te dará estrategias prácticas para proteger a tu hijo, enseñar pensamiento crítico y empoderarlos para usar la IA como una herramienta, no una muleta." },
      
      { type: 'h2', content: "Sección 1: Entendiendo la IA en el Mundo de Tu Hijo" },
      { type: 'h3', content: "¿Dónde está apareciendo la IA?" },
      { type: 'list', content: [
        "En la Escuela: Apps de tutoría (Khan Academy), asistentes de escritura, juegos educativos",
        "En Casa: Asistentes de voz (Alexa/Siri), juguetes inteligentes, recomendaciones de YouTube",
        "Lo que hacen los niños: Ayuda con tareas, preguntas, crear arte, aprender habilidades"
      ]},
      { type: 'h3', content: "Los Beneficios: Por Qué la IA Puede Ser Buena" },
      { type: 'list', content: [
        "✅ Personaliza el aprendizaje al ritmo de tu hijo",
        "✅ Hace la educación más atractiva e interactiva",
        "✅ Construye creatividad (arte, música, historias)",
        "✅ Desarrolla habilidades de resolución de problemas",
        "✅ Ofrece retroalimentación instantánea",
        "✅ Ofrece apoyo de accesibilidad para diferencias de aprendizaje"
      ]},
      { type: 'example', content: "Ejemplo: Un niño con dificultades en matemáticas puede usar un tutor de IA que desglosa problemas paso a paso sin juzgar." },
      { type: 'h3', content: "Los Riesgos: Qué Deben Vigilar los Padres" },
      { type: 'list', content: [
        "❌ Preocupaciones de privacidad (recolección de datos)",
        "❌ Contenido inapropiado de chatbots",
        "❌ Exceso de confianza (niños dejando de pensar por sí mismos)",
        "❌ Pérdida de habilidades sociales por tiempo en pantalla",
        "❌ Resultados sesgados o engañosos",
        "❌ Patrones de adicción a algoritmos"
      ]},
      { type: 'example', content: "Ejemplo real: En 2023, padres reportaron que niños pedían a ChatGPT escribir sus ensayos. Las escuelas actualizaron políticas contra el plagio de IA." },
      
      { type: 'h2', content: "Sección 2: Privacidad y Seguridad – Protegiendo a Tu Hijo en Línea" },
      { type: 'text', content: "Cuando tu hijo usa herramientas de IA, a menudo comparten datos personales (nombre, ubicación, intereses, voz). Estos datos pueden usarse para construir perfiles o venderse a anunciantes." },
      { type: 'h3', content: "5 Pasos para Proteger a Tu Hijo" },
      { type: 'h3', content: "1. Usa Herramientas de IA Amigables para Niños" },
      { type: 'text', content: "No todas las IA son seguras. Busca apps que cumplan con COPPA." },
      { type: 'list', content: [
        "Opciones seguras: Khan Academy Kids (Sin anuncios), Duolingo, Epic!, Scratch",
        "Evitar: Chatbots públicos (ChatGPT) para niños pequeños, apps con mucha recolección de datos"
      ]},
      { type: 'h3', content: "2. Configura Controles Parentales" },
      { type: 'text', content: "Habilita límites en dispositivos (Screen Time, Family Link), asistentes de voz y motores de búsqueda (SafeSearch)." },
      { type: 'h3', content: "3. Enseña Qué NO Compartir" },
      { type: 'list', content: [
        "Nombre completo, dirección, escuela",
        "Cumpleaños y edad",
        "Fotos o videos sin permiso",
        "Contraseñas"
      ]},
      { type: 'highlight', content: "Regla amigable para niños: \"Si no se lo dirías a un extraño en la calle, no se lo digas a una app o IA.\"" },
      { type: 'h3', content: "4. Revisa Configuraciones de Privacidad Juntos" },
      { type: 'text', content: "Apaga el rastreo de ubicación, deshabilita micrófono/cámara donde no sea necesario." },
      { type: 'h3', content: "5. Monitorea Sin Espiar" },
      { type: 'text', content: "Niños pequeños: Supervisión activa. Niños mayores: Chequeos periódicos. Construye confianza." },
      
      { type: 'h2', content: "Sección 3: Enseñando Pensamiento Crítico Sobre IA" },
      { type: 'text', content: "La IA no es magia. No siempre tiene la razón. Enseña a tu hijo a pensar críticamente." },
      { type: 'h3', content: "Lección 1: La IA Puede Equivocarse" },
      { type: 'text', content: "Las herramientas de IA pueden inventar información (\"alucinaciones\")." },
      { type: 'example', content: "Ejemplo real: Un niño preguntó a ChatGPT si los pingüinos viven en el Ártico y dijo sí (incorrecto)." },
      { type: 'action', content: "Actividad: Pídele a tu hijo que haga una pregunta a la IA, luego verifiquen la respuesta juntos en una fuente confiable." },
      
      { type: 'h3', content: "Lección 2: La IA es Entrenada por Humanos (y Tiene Sesgos)" },
      { type: 'text', content: "La IA aprende de datos humanos, por lo que puede reflejar sesgos injustos." },
      { type: 'action', content: "Actividad: Pide a una IA que genere imágenes de personas en diferentes trabajos. Discute: ¿Es justa la representación?" },
      
      { type: 'h3', content: "Lección 3: La IA No Entiende—Solo Predice" },
      { type: 'text', content: "La IA es como un loro muy inteligente. Repite información pero no entiende realmente." },
      { type: 'action', content: "Actividad: Haz una pregunta tonta a la IA (ej. \"¿Por qué los unicornios comen tacos?\") y ve cómo intenta responder." },

      { type: 'h3', content: "Lección 4: La IA Puede Usarse para Bien o Mal" },
      { type: 'text', content: "Es una herramienta. Puede ayudar a médicos (Bien) o crear videos falsos (Mal)." },
      { type: 'action', content: "Actividad: Discutan ejemplos del mundo real de usos útiles vs dañinos." },

      { type: 'h3', content: "Lección 5: No Dejes que la IA Piense por Ti" },
      { type: 'text', content: "Si los niños dependen de la IA para todo, dejan de desarrollar sus propias habilidades." },
      { type: 'highlight', content: "Regla: Usa la IA para explicar ✅ Usa la IA para revisar ✅ No uses la IA para hacer tu trabajo ❌" },
      
      { type: 'h2', content: "Sección 4: Equilibrando Tiempo de Pantalla y Desarrollo Saludable" },
      { type: 'text', content: "Usa el marco de las \"4 Ps\" para evaluar el uso:" },
      { type: 'list', content: [
        "1. Propósito: ¿Aprendizaje/creatividad o desplazamiento sin sentido?",
        "2. Presencia: ¿Estás involucrado o ausente?",
        "3. Paso: ¿Sesiones cortas o todo el día?",
        "4. Personas: ¿Reemplaza el juego real con amigos?"
      ]},
      { type: 'h3', content: "Signos de Uso No Saludable" },
      { type: 'text', content: "Berrinches al parar, problemas de sueño, pérdida de interés en hobbies, comportamiento reservado." },
      { type: 'highlight', content: "Acuerdo familiar: Usamos pantallas para aprender, no todo el día. Sin dispositivos en la cena. Hablamos de lo que vemos en línea." },
      
      { type: 'h2', content: "Sección 5: Pautas de IA Apropiadas para la Edad" },
      { type: 'h3', content: "Edades 3-6 (Infancia Temprana)" },
      { type: 'text', content: "Solo asistentes de voz para canciones/hechos y juegos supervisados. Evita chatbots y redes sociales." },
      { type: 'action', content: "Actividad: Pídele a Alexa sonidos de animales juntos." },
      
      { type: 'h3', content: "Edades 7-9 (Infancia Media)" },
      { type: 'text', content: "Apps de tutoría y herramientas creativas (Scratch). Motores de búsqueda filtrados. Sin redes sociales." },
      { type: 'action', content: "Actividad: Usa Khan Academy Kids o videos sobre cómo funciona la IA." },
      
      { type: 'h3', content: "Edades 10-13 (Preadolescentes)" },
      { type: 'text', content: "Ayudantes de tareas con reglas y herramientas creativas. Vigila privacidad y exceso de confianza." },
      { type: 'action', content: "Actividad: Practiquen verificar datos de IA juntos. Discutan ética de IA." },
      
      { type: 'h2', content: "Sección 6: Tareas y Escuela – Límites Inteligentes" },
      { type: 'text', content: "Reglas de \"Semáforo\" para tareas:" },
      { type: 'list', content: [
        "✅ Luz Verde: Explicar conceptos, desglosar problemas, revisar trabajo.",
        "⚠️ Luz Amarilla: Obtener esquemas/ejemplos (escribiendo tú el contenido).",
        "❌ Luz Roja: Copiar respuestas, IA escribiendo ensayos, evitar aprender."
      ]},
      { type: 'highlight', content: "Regla de \"Intentar Primero\": Intenta resolverlo tú mismo por 15 min. Si te atascas, pide a la IA que EXPLIQUE. Luego resuelve tú." },
      { type: 'text', content: "Habla con el maestro sobre la política de IA de la escuela." },
      
      { type: 'h2', content: "Sección 7: Conversaciones con Tu Hijo" },
      { type: 'list', content: [
        "1. \"La IA es una Herramienta\": Te ayuda a aprender, no aprende por ti.",
        "2. \"No Todo lo que Dice la IA es Verdad\": Siempre verifica.",
        "3. \"Sé Amable, Incluso con la IA\": Moldea tu carácter.",
        "4. \"Mantén Cosas Privadas\": No compartas info personal con bots.",
        "5. \"Si Algo te Incomoda, Dímelo\": Sin castigos, solo ayuda."
      ]},
      
      { type: 'h2', content: "Sección 8: Banderas Rojas y Cuándo Preocuparse" },
      { type: 'h3', content: "Signos de Advertencia" },
      { type: 'text', content: "Comportamiento reservado, caída de notas, aislamiento social, problemas de sueño." },
      { type: 'h3', content: "Riesgos Específicos" },
      { type: 'list', content: [
        "1. Relaciones con Chatbots: Apego emocional a bots.",
        "2. Contenido Inapropiado: Exposición accidental.",
        "3. Deepfakes: Confusión sobre videos reales vs falsos.",
        "4. Deshonestidad Académica: Trabajo que mejora dramáticamente de repente."
      ]},
      
      { type: 'h2', content: "Sección 9: Actividades Prácticas de IA Juntos" },
      { type: 'list', content: [
        "1. ¿Hecho o Ficción? Haz una pregunta a la IA y verifíquenla.",
        "2. Diseña Tu Propia IA: ¿Qué haría una IA para ayudar a la gente?",
        "3. Desafío de Arte IA: Crea imágenes con DALL-E/Canva. Discute la creatividad.",
        "4. Un Día Sin IA: Intenten un día sin herramientas inteligentes.",
        "5. Entrevista a un Adulto: Pregunta a los abuelos sobre la vida antes de internet."
      ]},
      
      { type: 'h2', content: "Sección 10: Recursos para Padres" },
      { type: 'text', content: "Herramientas Recomendadas:" },
      { type: 'list', content: [
        "Educativo: Khan Academy Kids, Duolingo, Scratch, Code.org",
        "Control Parental: Family Link, Screen Time, Qustodio",
        "Privacidad: DuckDuckGo, Signal"
      ]},
      { type: 'text', content: "Libros y Sitios:" },
      { type: 'list', content: [
        "Libros: \"The Tech-Wise Family\", \"Hello Ruby\"",
        "Sitios: Common Sense Media, ConnectSafely.org"
      ]},
      
      { type: 'h2', content: "Conclusión: Criando Niños Digitalmente Alfabetizados" },
      { type: 'text', content: "No necesitas ser un experto. Mantente involucrado y curioso. El objetivo no es prohibir la IA, sino enseñar a usarla sabiamente.\n\nNo solo estás criando niños que usan IA—estás criando niños que piensan por sí mismos." }
    ]
  }
];

const courseEs: Course = {
  id: 'automation-playbook',
  title: 'Guía Práctica de Automatización con IA',
  subtitle: 'Ahorra horas cada semana automatizando tareas repetitivas—sin necesidad de habilidades técnicas.',
  learningPoints: [
    'Identificar tareas automatizables',
    'Configurar automatizaciones de correo/reuniones',
    'Usar IA para contenido',
    'Crear flujos de trabajo',
    'Medir el ROI'
  ],
  stats: {
    lessons: '6 Lecciones',
    time: '~50 min',
    level: 'Principiante'
  },
  ctaStart: 'Empezar con la Lección 1',
  lessons: [
    {
      id: '1',
      title: 'Qué es la Automatización',
      duration: '7 min',
      blocks: [
        { type: 'callout', content: 'Lo que aprenderás: Entender qué es la automatización y derribar mitos comunes.' },
        { type: 'h2', content: '¿Qué es la automatización?' },
        { type: 'text', content: 'Automatización significa usar herramientas para hacer tareas repetitivas automáticamente, sin hacer clic ni escribir tú mismo.' },
        { type: 'h3', content: 'Mitos comunes' },
        { type: 'list', content: ['❌ Solo para programadores', '❌ Caro', '❌ Reemplazará empleos'] },
        { type: 'highlight', content: 'Si lo haces más de 3 veces a la semana, probablemente deberías automatizarlo.' },
        { type: 'h3', content: 'Qué automatizar' },
        { type: 'list', content: ['Correos de seguimiento', 'Notas de reuniones', 'Redes sociales', 'Organización de archivos', 'Informes', 'Citas'] },
        { type: 'example', content: 'Ejemplo real: María ahorra 2 horas al mes usando IA para organizar su bandeja de entrada y crear listas de tareas semanales.' },
        { type: 'action', content: 'Tu turno: Escribe 3 tareas repetitivas que haces semanalmente.' }
      ]
    },
    {
      id: '2',
      title: 'Automatización de Correo',
      duration: '8 min',
      blocks: [
        { type: 'callout', content: 'Lo que aprenderás: Cómo recuperar tu bandeja de entrada usando borradores IA y filtros.' },
        { type: 'h2', content: '¿Por qué el correo?' },
        { type: 'text', content: 'La mayoría pasa 2-3 horas diarias en el correo. Eso es enorme.' },
        { type: 'h3', content: '3 automatizaciones clave' },
        { type: 'list', content: ['1. Auto-categorizar (Filtros de Gmail/Reglas de Outlook)', '2. Borradores de correo IA (ChatGPT/Gemini)', '3. Envío programado'] },
        { type: 'code', content: "Redacta una respuesta profesional al siguiente mensaje. Manténlo amigable, conciso y de menos de 100 palabras:\n[Pega el correo aquí]\nMi respuesta debe: [explica qué comunicar]" },
        { type: 'example', content: 'Ejemplo real: Carlos redujo el tiempo de correo de 90 min a 25 min diarios usando plantillas + IA.' },
        { type: 'action', content: 'Tu turno: Elige UNA automatización para configurar esta semana.' }
      ]
    },
    {
      id: '3',
      title: 'Notas de Reuniones',
      duration: '8 min',
      blocks: [
        { type: 'callout', content: 'Lo que aprenderás: Nunca vuelvas a escribir actas de reunión a mano.' },
        { type: 'text', content: 'Problema: Las reuniones toman 1 hora + 20 min of notes = 20% de tiempo extra.' },
        { type: 'h2', content: 'Solución: Asistentes de reuniones IA' },
        { type: 'text', content: 'Herramientas como Otter.ai, Fireflies.ai, Fathom o la transcripción de Google Meet pueden salvar el día.' },
        { type: 'h3', content: 'Lo que hacen' },
        { type: 'list', content: ['Transcribir', 'Identificar oradores', 'Resumir', 'Extraer elementos de acción', 'Compartir automáticamente'] },
        { type: 'h3', content: 'Configuración (Ejemplo Fireflies)' },
        { type: 'text', content: 'Regístrate gratis → Conecta calendario → Se une automáticamente → Correo con transcripción/resumen/acciones.' },
        { type: 'code', content: "Resume esta transcripción de reunión en viñetas. Incluye:\n- Decisiones clave tomadas\n- Elementos de acción (quién hace qué para cuándo)\n- Preguntas abiertas o bloqueos\n[Pega la transcripción]" },
        { type: 'example', content: 'Ejemplo real: Sofía ahorra 2.5 horas/semana con Fireflies en 8 reuniones.' },
        { type: 'action', content: 'Tu turno: Prueba un tomador de notas IA en una reunión esta semana.' }
      ]
    },
    {
      id: '4',
      title: 'Calendarios de Contenido',
      duration: '9 min',
      blocks: [
        { type: 'callout', content: 'Lo que aprenderás: Generar y organizar un mes de contenido en minutos.' },
        { type: 'text', content: '¿Por qué abrumador? Necesitas ideas frescas constantes para redes/blogs/boletines. La IA te ayuda a hacer lluvia de ideas + escribir borradores + organizar.' },
        { type: 'h2', content: 'Paso 1: Lluvia de ideas' },
        { type: 'code', content: "Necesito 30 ideas de contenido para [plataforma] dirigidas a [audiencia].\nTemas: [tus temas]\nMezcla: Publicaciones educativas | Historias personales | Consejos rápidos | Preguntas de participación\nFormato como lista numerada." },
        { type: 'h2', content: 'Paso 2: Organizar' },
        { type: 'text', content: 'Ponlos en una hoja de cálculo simple: Fecha | Tema | Tipo de post | Estado.' },
        { type: 'h2', content: 'Paso 3: Escribir' },
        { type: 'code', content: "Escribe un post para [plataforma] sobre: [tema]\nTono: [profesional/casual/amigable]\nLongitud: [conteo de palabras]\nIncluye: Frase gancho inicial, consejo accionable, pregunta al final." },
        { type: 'h2', content: 'Paso 4: Programar en lote' },
        { type: 'text', content: 'Usa herramientas como Buffer o Metricool para programarlos todos a la vez.' },
        { type: 'example', content: 'Ejemplo real: Javier genera 20 posts en 90 min, publica diariamente, la interacción se triplicó.' },
        { type: 'action', content: 'Tu turno: Crea un calendario de contenido de 7 días usando IA.' }
      ]
    },
    {
      id: '5',
      title: 'Crear Flujos de Trabajo',
      duration: '10 min',
      blocks: [
        { type: 'callout', content: 'Lo que aprenderás: Conectar diferentes aplicaciones para que actúen automáticamente.' },
        { type: 'text', content: '¿Qué es un flujo de trabajo? Es una secuencia de acciones automáticas desencadenadas por un evento.' },
        { type: 'highlight', content: 'Ejemplo: Correo con "urgente" → Notificación de Slack + Agregar a lista de tareas' },
        { type: 'h2', content: 'Herramientas' },
        { type: 'list', content: ['Zapier (5 flujos gratis)', 'Make', 'IFTTT', 'n8n'] },
        { type: 'h3', content: '3 flujos para principiantes' },
        { type: 'list', content: ['1. Guardar adjuntos de correo en Google Drive', '2. Registrar clientes en hoja de cálculo (Stripe/PayPal → Sheets)', '3. Auto-publicar blog en redes sociales'] },
        { type: 'h3', content: 'Cómo construir (Zapier)' },
        { type: 'list', content: ['1. Regístrate → Crear Zap', '2. Elige App Disparador (Gmail) + evento (Nuevo correo)', '3. Conecta cuenta', '4. Elige App Acción (Google Drive) + acción (Subir archivo)', '5. Mapea campos', '6. Prueba y enciende'] },
        { type: 'example', content: 'Ejemplo real: Laura ahorra 15 min por pedido (12.5 horas/mes) con automatización de pedidos.' },
        { type: 'action', content: 'Tu turno: Construye un Zap simple con 2 apps esta semana.' }
      ]
    },
    {
      id: '6',
      title: 'Medir el ROI',
      duration: '8 min',
      blocks: [
        { type: 'callout', content: 'Lo que aprenderás: Cómo probar que la automatización vale la pena.' },
        { type: 'h2', content: '¿Por qué medir?' },
        { type: 'text', content: 'Para que puedas mostrar resultados: "Ahorré 10 horas este mes".' },
        { type: 'h3', content: 'Paso 1: Línea base' },
        { type: 'text', content: 'Tiempo de tarea × Frecuencia = Tiempo total.\nEjemplo: 15min correos × 20/semana = 5 horas/semana' },
        { type: 'h3', content: 'Paso 2: Post-automatización' },
        { type: 'text', content: 'Nuevo tiempo × Frecuencia\nEjemplo: 5min correos × 20/semana = 1.7 hours/semana\nAhorrado: 3.3 horas/semana = 156 horas/año' },
        { type: 'h3', content: 'Paso 3: Valor monetario' },
        { type: 'highlight', content: 'Tiempo ahorrado × Tarifa por hora = Dinero Ahorrado' },
        { type: 'text', content: 'Ejemplo: 156 horas × €30 = €4,680/año. Menos costo de herramienta (€120) = €4,560 ahorro neto.' },
        { type: 'example', content: 'Ejemplo real: David rastreó 4 flujos, mostró 40 horas/mes de ahorro de equipo, obtuvo aprobación de presupuesto.' },
        { type: 'action', content: 'Tu turno: Rastrea una automatización por 2 semanas y calcula los ahorros.' }
      ]
    }
  ]
};

const ebooksEs: Ebook[] = [
  {
    id: '1',
    title: 'El Freelancer Impulsado por IA',
    description: 'Una guía completa para escalar tu negocio freelance usando herramientas de IA para propuestas y gestión.',
    readTime: '25 min lectura',
    level: 'Intermedio',
    coverColor: 'bg-emerald-500'
  },
  {
    id: '2',
    title: 'IA Generativa para Marketing',
    description: 'Estrategias para pequeños equipos de marketing para producir contenido de calidad a escala.',
    readTime: '30 min lectura',
    level: 'Avanzado',
    coverColor: 'bg-purple-500'
  },
   {
    id: '3',
    title: 'IA en el Aula',
    description: 'Para maestros y educadores: Cómo usar IA para crear planes de lecciones y calificar más rápido.',
    readTime: '20 min lectura',
    level: 'Principiante',
    coverColor: 'bg-orange-500'
  }
];

export const content = {
  en: {
    meta: {
      langCode: 'en',
      geminiPrompt: (term: string) => `Explain the technical term "${term}" to a complete beginner using a simple real-world analogy. Keep it under 50 words. Be encouraging.`,
    },
    nav: {
      brand: "My Practical AI",
      start: "Start Here",
      templates: "Templates",
      basics: "AI Basics",
      about: "About",
      cta: "Get Started",
      changeLang: "Change language"
    },
    home: {
      badge: "New: Updated for 2025",
      heroTitle: "Understand AI.",
      heroTitleHighlight: "Automate your everyday work.",
      heroDesc: "Feeling left behind? Don't be. We provide simple guides and copy-paste templates to help you save time—no coding required.",
      ctaPrimary: "Start with the basics",
      ctaSecondary: "Browse templates",
      dashboard: {
        title: "My Automation Hub",
        items: [
          { title: "Email Assistant", status: "Active", time: "Just now" },
          { title: "Meeting Summarizer", status: "Active", time: "2h ago" },
          { title: "Weekly Planner", status: "Draft", time: "1d ago" }
        ],
        timeSaved: "Time saved this week:",
        hours: "4.5 Hours"
      },
      valueProp: {
        title: "How this hub helps you",
        subtitle: "We strip away the complicated tech jargon and give you practical tools you can use immediately.",
        cards: [
          { title: "Plain English", desc: "No confusing code or tech speak. Just human language." },
          { title: "Copy-Paste Magic", desc: "Templates you can literally copy and use in seconds." },
          { title: "Step-by-Step", desc: "Clear instructions that guide you through every click." },
          { title: "Safe & Trusted", desc: "Vetted tools and privacy-first advice for peace of mind." },
        ]
      },
      stepper: {
        title: "Start your AI journey",
        btn: "Begin Step 1 Now",
        steps: [
          { title: "Learn Basics", text: "Read our 5-min intro guide." },
          { title: "Pick Use Case", text: "Work, home, or creative?" },
          { title: "Use Template", text: "Copy a prompt into ChatGPT." },
          { title: "Automate", text: "Save hours every week." },
        ]
      },
      resources: {
        title: "Popular Resources",
        subtitle: "Most read lessons by our community this week.",
        viewAll: "View all",
        viewTemplate: "View Template",
        readLesson: "Read Lesson",
        labels: { template: "Template", lesson: "Lesson" }
      },
      personas: {
        title: "Who this is for",
        subtitle: "You don't need a tech degree to benefit from AI. Our tools are designed for:",
        cards: [
          { title: "Busy Professionals", desc: "Reclaim 5+ hours a week by automating reports and boring emails." },
          { title: "Business Owners", desc: "Handle marketing, support, and planning without hiring a big team." },
          { title: "Freelancers", desc: "Deliver client work faster and manage your admin tasks effortlessly." },
          { title: "Students & Learners", desc: "Understand complex topics quickly and organize your study notes." },
        ]
      },
      newsletter: {
        title: "Get one new AI workflow every week.",
        text: "Practical, plain English, and actually useful. No spam.",
        placeholder: "Your email address",
        btn: "Join Free"
      }
    },
    startHere: {
      title: "New to AI? Start Here.",
      intro: "Artificial Intelligence (AI) isn't just for robots or coders. Think of it like a smart assistant that never sleeps. It can write drafts, organize your messy notes, or plan your week in seconds.",
      tracks: [
        { title: "Total Beginner", desc: "I have no idea what AI is. Explain it simply.", btn: "Read Intro Guide" },
        { title: "Work Smarter", desc: "I want to spend less time on emails and meetings.", btn: "See Work Guide" },
        { title: "Daily Life", desc: "I want help with meal planning and chores.", btn: "See Life Guide" },
      ],
      tutor: {
        tag: "AI Glossary",
        title: "Confused by a tech word?",
        desc: "Don't feel intimidated by jargon like \"LLM\", \"Hallucination\", or \"Prompt Engineering\". Type a word below, and our AI tutor will explain it like a friend.",
        placeholder: "e.g. Generative AI",
        btn: "Explain It",
        thinking: "Thinking...",
        resultTitle: "In simple terms:",
        emptyState: "Your plain-English answer will appear here."
      },
      checklist: {
        title: "Your First Steps Checklist",
        items: [
          "Create a free account on ChatGPT or Google Gemini.",
          "Try saying 'Hello' and asking it to tell you a joke.",
          "Ask it to rewrite a short email for you.",
          "Bookmark our 'Templates' page for future ideas."
        ]
      }
    },
    templates: {
      pageTitle: "Copy-Paste AI Templates",
      pageDesc: "Don't know what to say to the AI? We've done the hard work for you. Just copy these \"prompts\" (instructions), paste them into your AI tool, and fill in the blanks.",
      filters: { label: "Filter:", all: "All", work: "Work", life: "Daily Life", creative: "Creative" },
      card: { promptLabel: "The Prompt", howTo: "How to use this:", copy: "Copy Prompt", copied: "Copied to Clipboard!" },
      items: templatesEn
    },
    basics: {
      pageTitle: "AI Basics & Courses",
      pageDesc: "In-depth (but simple) lessons for when you want to master a specific topic. Completely free and open access.",
      btn: "Access this course",
      backBtn: "Back to Lessons",
      items: lessonsEn,
      course: courseEn,
      courseLabel: "Featured Course",
      lessonsLabel: "Quick Lessons"
    },
    ebooks: {
      pageTitle: "Free AI Guides & Ebooks",
      pageDesc: "Download our comprehensive guides to read offline. Perfect for commuting or sharing with your team.",
      btn: "Get this Guide",
      items: ebooksEn
    },
    about: {
      title: "About My Practical AI",
      p1: "We believe technology shouldn't leave anyone behind.",
      p2: "My Practical AI was built for the freelancers, the parents, the small business owners, and the creative minds who hear about \"AI\" and feel overwhelmed rather than excited.",
      p3: "Nuestra misión es simple: Democratizar la automatización. We translate complex tech concepts into plain English and provide tools you can use immediately, without needing a computer science degree.",
      contact: "Have a suggestion? Want a specific template? Contact us here."
    },
    footer: {
      desc: "Making AI and automation accessible for everyone. Simple terms, practical templates, real results.",
      explore: "Explore",
      connect: "Connect",
      copyright: "© 2025 My Practical AI. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    modal: {
      title: "Get this guide by email",
      desc: "Enter your email and we'll send the ebook directly to your inbox.",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      submitBtn: "Send me the guide",
      cancelBtn: "No thanks, go back",
      errorEmail: "Please enter a valid email address.",
      successTitle: "Check your inbox",
      successDesc: "Your guide is on its way. If you don't see it, check your spam or promotions folder.",
      closeBtn: "Close"
    },
    course: {
      overview: {
        modules: "Lessons",
        startBtn: "Start with Lesson 1",
        syllabus: "Course Syllabus",
        whatYouLearn: "What you'll learn",
      },
      lesson: {
        breadcrumbHome: "Home",
        breadcrumbBasics: "AI Basics",
        next: "Next Lesson",
        prev: "Previous Lesson",
        complete: "Complete Course",
        copy: "Copy",
        copied: "Copied!",
        yourTurn: "Your Turn"
      },
      completion: {
        title: "🎉 Congratulations!",
        subtitle: "You completed the Practical AI Automation Playbook.",
        learned: "What you learned:",
        whatsNext: "What's next:",
        share: "Share",
        back: "Back to AI Basics",
        nextSteps: [
          { text: "Explore Prompt Engineering for Work", link: "/basics" },
          { text: "Try 50+ Automation Templates", link: "/templates" }
        ]
      }
    }
  },
  es: {
    meta: {
      langCode: 'es',
      geminiPrompt: (term: string) => `Explica el término técnico "${term}" a un principiante absoluto usando una analogía simple del mundo real. Manténlo en menos de 50 palabras. Sé alentador.`,
    },
    nav: {
      brand: "My Practical AI",
      start: "Comienza aquí",
      templates: "Plantillas",
      basics: "Fundamentos IA",
      about: "Nosotros",
      cta: "Empezar",
      changeLang: "Cambiar idioma"
    },
    home: {
      badge: "Nuevo: Actualizado para 2025",
      heroTitle: "Entiende la IA.",
      heroTitleHighlight: "Automatiza tu trabajo diario.",
      heroDesc: "¿Sientes que te quedas atrás? No te preocupes. Ofrecemos guías simples y plantillas listas para copiar que te ayudan a ahorrar tiempo, sin necesidad de programar.",
      ctaPrimary: "Empieza con lo básico",
      ctaSecondary: "Explorar plantillas",
      dashboard: {
        title: "Mi Hub de Automatización",
        items: [
          { title: "Asistente de Email", status: "Activo", time: "Ahora" },
          { title: "Resumidor de Reunión", status: "Activo", time: "Hace 2h" },
          { title: "Planificador Semanal", status: "Borrador", time: "Hace 1d" }
        ],
        timeSaved: "Tiempo ahorrado esta semana:",
        hours: "4.5 Horas"
      },
      valueProp: {
        title: "Cómo te ayuda este hub",
        subtitle: "Eliminamos la jerga técnica complicada y te damos herramientas prácticas que puedes usar de inmediato.",
        cards: [
          { title: "Lenguaje Sencillo", desc: "Sin código confuso ni lenguaje técnico. Solo lenguaje humano." },
          { title: "Magia Copiar-Pegar", desc: "Plantillas que literalmente puedes copiar y usar en segundos." },
          { title: "Paso a Paso", desc: "Instrucciones claras que te guían en cada clic." },
          { title: "Seguro y Confiable", desc: "Herramientas verificadas y consejos de privacidad para tu tranquilidad." },
        ]
      },
      stepper: {
        title: "Tu viaje con la IA",
        btn: "Comenzar Paso 1",
        steps: [
          { title: "Aprende lo Básico", text: "Lee nuestra intro de 5 min." },
          { title: "Elige un Uso", text: "¿Trabajo, hogar o creativo?" },
          { title: "Usa una Plantilla", text: "Copia un prompt en ChatGPT." },
          { title: "Automatiza", text: "Ahorra horas cada semana." },
        ]
      },
      resources: {
        title: "Recursos Populares",
        subtitle: "Lecciones más leídas por nuestra comunidad esta semana.",
        viewAll: "Ver todo",
        viewTemplate: "Ver Plantilla",
        readLesson: "Leer Lección",
        labels: { template: "Plantilla", lesson: "Lección" }
      },
      personas: {
        title: "Para quién es esto",
        subtitle: "No necesitas un título técnico para beneficiarte de la IA. Nuestras herramientas están diseñadas para:",
        cards: [
          { title: "Profesionales Ocupados", desc: "Recupera 5+ horas a la semana automatizando informes y correos aburridos." },
          { title: "Dueños de Negocios", desc: "Maneja marketing, soporte y planificación sin contratar un gran equipo." },
          { title: "Freelancers", desc: "Entrega trabajos a clientes más rápido y gestiona tus tareas administrativas sin esfuerzo." },
          { title: "Estudiantes", desc: "Entiende temas complejos rápidamente y organiza tus notas de estudio." },
        ]
      },
      newsletter: {
        title: "Recibe un nuevo flujo de IA cada semana.",
        text: "Práctico, en español sencillo y realmente útil. Sin spam.",
        placeholder: "Tu correo electrónico",
        btn: "Únete Gratis"
      }
    },
    startHere: {
      title: "¿Nuevo en IA? Empieza Aquí.",
      intro: "La Inteligencia Artificial (IA) no es solo para robots o programadores. Piensa en ella como un asistente inteligente que nunca duerme. Puede escribir borradores, organizar tus notas desordenadas o planificar tu semana en segundos.",
      tracks: [
        { title: "Principiante Total", desc: "No tengo idea qué es la IA. Explícamelo simple.", btn: "Leer Guía Intro" },
        { title: "Trabaja Mejor", desc: "Quiero pasar menos tiempo en correos y reuniones.", btn: "Ver Guía Trabajo" },
        { title: "Vida Diaria", desc: "Quiero ayuda con comidas y tareas del hogar.", btn: "Ver Guía Vida" },
      ],
      tutor: {
        tag: "Glosario IA",
        title: "¿Confundido por una palabra?",
        desc: "No te sientas intimidado por jerga como \"LLM\", \"Alucinación\" o \"Ingeniería de Prompts\". Escribe una palabra abajo, y nuestro tutor IA te la explicará como un amigo.",
        placeholder: "ej. IA Generativa",
        btn: "Explícalo",
        thinking: "Pensando...",
        resultTitle: "En términos simples:",
        emptyState: "Tu respuesta en lenguaje sencillo aparecerá aquí."
      },
      checklist: {
        title: "Tu Lista de Primeros Pasos",
        items: [
          "Crea una cuenta gratuita en ChatGPT o Google Gemini.",
          "Intenta decir 'Hola' y pídele que te cuente un chiste.",
          "Pídele que reescriba un correo corto para ti.",
          "Guarda nuestra página de 'Plantillas' para ideas futuras."
        ]
      }
    },
    templates: {
      pageTitle: "Plantillas IA para Copiar y Pegar",
      pageDesc: "¿No sabes qué decirle a la IA? Hemos hecho el trabajo difícil por ti. Solo copia estos \"prompts\" (instrucciones), pégalos en tu herramienta IA y llena los espacios.",
      filters: { label: "Filtrar:", all: "Todos", work: "Trabajo", life: "Vida Diaria", creative: "Creativo" },
      card: { promptLabel: "El Prompt", howTo: "Cómo usar esto:", copy: "Copiar Prompt", copied: "¡Copiado!" },
      items: templatesEs
    },
    basics: {
      pageTitle: "Fundamentos de IA y Cursos",
      pageDesc: "Lecciones profundas (pero simples) para cuando quieres dominar un tema específico. Completamente gratis y de acceso abierto.",
      btn: "Acceder al curso",
      backBtn: "Volver a Lecciones",
      items: lessonsEs,
      course: courseEs,
      courseLabel: "Curso Destacado",
      lessonsLabel: "Lecciones Rápidas"
    },
    ebooks: {
      pageTitle: "Guías y Ebooks de IA Gratis",
      pageDesc: "Descarga nuestras guías completas para leer sin conexión. Perfecto para compartir con tu equipo.",
      btn: "Obtener Guía",
      items: ebooksEs
    },
    about: {
      title: "Sobre My Practical AI",
      p1: "Creemos que la tecnología no debería dejar a nadie atrás.",
      p2: "My Practical AI was built for freelancers, parents, small business owners, and creative minds who hear about \"AI\" and feel overwhelmed rather than excited.",
      p3: "Nuestra misión es simple: Democratizar la automatización. Traducimos conceptos técnicos complejos a lenguaje sencillo y proporcionamos herramientas que puedes usar inmediatamente, sin necesidad de un título en informática.",
      contact: "¿Tienes una sugerencia? ¿Quieres una plantilla específica? Contáctanos aquí."
    },
    footer: {
      desc: "Haciendo la IA y la automatización accesible para todos. Términos simples, plantillas prácticas, resultados reales.",
      explore: "Explorar",
      connect: "Conectar",
      copyright: "© 2025 My Practical AI. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio"
    },
    modal: {
      title: "Obtén esta guía por correo",
      desc: "Ingresa tu correo y te enviaremos el ebook directamente.",
      emailLabel: "Correo",
      emailPlaceholder: "tu@correo.com",
      submitBtn: "Enviarme la guía",
      cancelBtn: "No gracias",
      errorEmail: "Por favor ingresa un correo válido.",
      successTitle: "Revisa tu bandeja",
      successDesc: "Tu guía está en camino. Si no la ves, revisa spam.",
      closeBtn: "Cerrar"
    },
    course: {
      overview: {
        modules: "Lecciones",
        startBtn: "Empezar con la Lección 1",
        syllabus: "Temario del Curso",
        whatYouLearn: "Lo que aprenderás",
      },
      lesson: {
        breadcrumbHome: "Inicio",
        breadcrumbBasics: "Fundamentos",
        next: "Siguiente Lección",
        prev: "Lección Anterior",
        complete: "Completar Curso",
        copy: "Copiar",
        copied: "¡Copiado!",
        yourTurn: "Tu Turno"
      },
      completion: {
        title: "🎉 ¡Felicidades!",
        subtitle: "Completaste la Guía Práctica de Automatización con IA.",
        learned: "Lo que aprendiste:",
        whatsNext: "Qué sigue:",
        share: "Compartir",
        back: "Volver a Fundamentos",
        nextSteps: [
          { text: "Explora Ingeniería de Prompts", link: "/basics" },
          { text: "Prueba 50+ Plantillas", link: "/templates" }
        ]
      }
    }
  }
};