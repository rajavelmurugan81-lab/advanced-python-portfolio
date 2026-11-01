export interface Milestone {
  id: number;
  title: string;
  caption: string;
  icon: string;
  detail: string;
}

export interface LearningTopic {
  id: number;
  title: string;
  description: string;
  icon: string;
  syllabusCategory: string;
}

export interface StarRecognition {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  safeUrl: string;
  aspectRatio: string;
  date?: string;
  note: string;
  evidencePath: string;
  fileExtension: string;
}

export interface ActivityCard {
  id: number;
  title: string;
  category: string;
  shortDesc: string;
  image: string;
  safeUrl: string;
  secondaryImage?: string;
  secondarySafeUrl?: string;
  pdfUrl?: string;
  pdfFilename?: string;
  extendedDesc: string;
  keyTakeaway: string;
  toolsUsed: string[];
  evidenceFolder: string;
  fileExtension: string;
}

export interface CodingQuestion {
  id: number;
  title: string;
  platform: string;
  badge: string;
  badgeColor: string;
  category: string;
  difficulty: string;
  description: string;
  pythonSolution: string;
  evidenceImage?: string;
}

export interface IndexActivity {
  number: string;
  title: string;
  targetId: string;
  badge?: string;
  badgeColor?: string;
  evidencePath?: string;
  driveUrl?: string;
  actionType: 'scroll' | 'lightbox' | 'ppt' | 'video_placeholder' | 'pdf' | 'activity_modal' | 'padlet' | 'audio_website_modal';
}

export interface ProjectScreenshot {
  id: string;
  filename: string;
  path: string;
  safeUrl: string;
  label: string;
  caption: string;
  aspectRatio: string;
  resolution: string;
}

export interface PublishedArticle {
  id: string;
  title: string;
  publication: string;
  publicationUrl: string;
  platform: string;
  status: string;
  readingTime: string;
  articleUrl: string;
  description: string;
  evidenceImage: string;
  evidenceTitle: string;
  evidenceSubtitle: string;
  evidenceCaption: string;
  aspectRatio: string;
}

export interface PublishedWritingSection {
  sectionNumber: string;
  title: string;
  subtitle: string;
  article: PublishedArticle;
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "Rajavelmurugan S.",
    shortName: "RS",
    role: "Integrated M.Tech in Data Science",
    university: "VIT Vellore",
    subject: "Advanced Python Programming",
    websiteTitle: "My Python Journey",
    headlineLine1: "MY PYTHON",
    headlineLine2: "JOURNEY.",
    kicker: "ADVANCED PYTHON PROGRAMMING",
    supportingStatement:
      "A visual record of my learning outcomes, classroom activities, practical projects, faculty recognition and personal growth throughout Advanced Python Programming.",
    tags: [
      "Learning Outcomes",
      "Classroom Activities",
      "Projects",
      "Coding Practice"
    ],
    editorialQuotes: ["LEARN", "PRACTICE", "BUILD", "IMPROVE", "GROW"]
  },

  learningMilestones: [
    {
      id: 1,
      title: "Started the subject",
      caption: "Orientation & syllabus",
      icon: "BookOpen",
      detail: "Orientation to Advanced Python Programming, development environment setup, and foundational principles."
    },
    {
      id: 2,
      title: "Learned Python concepts",
      caption: "Core syntax & structures",
      icon: "Code",
      detail: "Mastered core data structures (lists, tuples, sets, dictionaries), list comprehensions, lambda functions, and OOP."
    },
    {
      id: 3,
      title: "Participated in class activities",
      caption: "Interactive learning",
      icon: "Users",
      detail: "Engaged in classroom group discussions, pair programming exercises, and peer concept debates."
    },
    {
      id: 4,
      title: "Worked on lab projects",
      caption: "Hands-on implementation",
      icon: "FlaskConical",
      detail: "Implemented practical Python solutions in laboratory sessions covering file I/O, regex, and algorithms."
    },
    {
      id: 5,
      title: "Prepared presentations",
      caption: "Technical communication",
      icon: "Presentation",
      detail: "Prepared and delivered technical project presentations conveying system architecture and thesis value."
    },
    {
      id: 6,
      title: "Practised coding questions",
      caption: "Algorithmic thinking",
      icon: "Terminal",
      detail: "Tackled LeetCode algorithmic challenges and contributed active problem solutions on the course Padlet board."
    },
    {
      id: 7,
      title: "Built final project",
      caption: "Audio Recording Website",
      icon: "Laptop",
      detail: "Engineered a full-stack audio recording and file management web application solving real business thesis needs."
    },
    {
      id: 8,
      title: "Reflected and planned ahead",
      caption: "Future roadmap",
      icon: "Flag",
      detail: "Synthesized learning outcomes, received faculty stars, and outlined roadmap for upcoming data science applications."
    }
  ] as Milestone[],

  whatILearned: [
    {
      id: 1,
      title: "Python Basics",
      description: "Variables, data types, operators and input/output.",
      icon: "FileCode",
      syllabusCategory: "Fundamentals"
    },
    {
      id: 2,
      title: "Data Structures",
      description: "Lists, tuples, sets, dictionaries and algorithms.",
      icon: "Layers",
      syllabusCategory: "Core Python"
    },
    {
      id: 3,
      title: "Functions & Modules",
      description: "Reusable functions and organizing code.",
      icon: "Cpu",
      syllabusCategory: "Architecture"
    },
    {
      id: 4,
      title: "File Handling",
      description: "Reading, writing files and working with data.",
      icon: "FolderArchive",
      syllabusCategory: "I/O Systems"
    },
    {
      id: 5,
      title: "Libraries & Frameworks",
      description: "Using useful libraries for real-world applications.",
      icon: "Boxes",
      syllabusCategory: "Ecosystem"
    },
    {
      id: 6,
      title: "Problem Solving",
      description: "Practising with exercises and real-world problems.",
      icon: "Crosshair",
      syllabusCategory: "Algorithmic"
    },
    {
      id: 7,
      title: "Project Development",
      description: "Applying Python concepts in practical projects.",
      icon: "Rocket",
      syllabusCategory: "Application"
    },
    {
      id: 8,
      title: "Teamwork & Collaboration",
      description: "Learning through group activities and discussions.",
      icon: "UsersRound",
      syllabusCategory: "Professional"
    }
  ] as LearningTopic[],

  myStars: [
    {
      id: "star-1",
      title: "Faculty Recognition",
      subtitle: "Stars awarded during the subject.",
      image: "/evidence/01-stars/Star 1.png",
      safeUrl: "/evidence/01-stars/star-1.png",
      aspectRatio: "1149 / 640",
      date: "Class Assessments 2026",
      note: "Continuous evaluation awards: Quiz 1 Star (2nd Place), 3 Stars (20/7/2026), 2 Stars (10/07/2026) verified by faculty signatures.",
      evidencePath: "public/evidence/01-stars/Star 1.png",
      fileExtension: ".png"
    },
    {
      id: "star-2",
      title: "A Memorable Milestone",
      subtitle: "A moment of encouragement.",
      image: "/evidence/01-stars/Star 2.png",
      safeUrl: "/evidence/01-stars/star-2.png",
      aspectRatio: "891 / 376",
      date: "17/09/2026",
      note: "Green star badge awarded for distinguished performance in classroom activities on 17/09/2026.",
      evidencePath: "public/evidence/01-stars/Star 2.png",
      fileExtension: ".png"
    }
  ] as StarRecognition[],

  classroomActivities: [
    {
      id: 1,
      title: "Storyboard",
      category: "Laboratory Activity",
      shortDesc: "Created a storyboard to plan and visualize the project idea.",
      image: "/evidence/02-storyboard/Story board.png",
      safeUrl: "/evidence/02-storyboard/story-board.png",
      extendedDesc:
        "Drafted a comprehensive visual storyboard illustrating the end-to-end user workflow for the Audio Recording web application, from input capture to cloud storage and metadata analysis.",
      keyTakeaway: "Clear upfront planning prevents architectural pitfalls during implementation.",
      toolsUsed: ["Paper Wireframing", "Workflow Mapping", "UI Planning"],
      evidenceFolder: "public/evidence/02-storyboard/",
      fileExtension: ".png"
    },
    {
      id: 2,
      title: "Python Tutorial Discussion",
      category: "Group Learning",
      shortDesc: "Discussed Python concepts and application ideas with classmates.",
      image: "/evidence/03-python-discussion/Python_tutorial_discussion_picture.jpeg",
      safeUrl: "/evidence/03-python-discussion/Python_tutorial_discussion_picture.jpeg",
      pdfUrl: "/evidence/03-python-discussion/Python_tutorial_idea.pdf",
      pdfFilename: "Python_tutorial_idea.pdf",
      extendedDesc:
        "Collaborative seminar exploring advanced Python syntax, generator pipelines, asynchronous tasks, and modular design patterns alongside peers.",
      keyTakeaway: "Explaining code to peers solidifies core conceptual understanding.",
      toolsUsed: ["Peer Code Review", "Interactive Python", "Group Whiteboarding"],
      evidenceFolder: "public/evidence/03-python-discussion/",
      fileExtension: ".jpeg & .pdf"
    },
    {
      id: 3,
      title: "IoT-Based Application",
      category: "Theory-Class Activity",
      shortDesc: "Explored the concept of IoT for independent assessment.",
      image: "/evidence/04-iot-assessment/IOT_based_apllication_1.jpeg",
      safeUrl: "/evidence/04-iot-assessment/IOT_based_apllication_1.jpeg",
      secondaryImage: "/evidence/04-iot-assessment/IOT_based_apllication_2.jpeg",
      secondarySafeUrl: "/evidence/04-iot-assessment/IOT_based_apllication_2.jpeg",
      extendedDesc:
        "Researched micro-controller sensor data ingestion using Python serial communication libraries to bridge hardware signals with high-level data analysis.",
      keyTakeaway: "Python serves as a versatile bridge between embedded hardware and analytics backends.",
      toolsUsed: ["Microcontroller Architecture", "Sensors", "Python Serial"],
      evidenceFolder: "public/evidence/04-iot-assessment/",
      fileExtension: ".jpeg (2 images)"
    },
    {
      id: 4,
      title: "Class Quiz",
      category: "Group Activity",
      shortDesc: "Participated in a group quiz to revise and apply concepts.",
      image: "/evidence/05-class-quiz/Class_quiz.jpeg",
      safeUrl: "/evidence/05-class-quiz/Class_quiz.jpeg",
      extendedDesc:
        "Timed competitive classroom quiz assessing comprehension of algorithmic time complexities, Python memory models, and exception hierarchies, securing second-place recognition.",
      keyTakeaway: "Fast problem recall under pressure reinforces algorithmic efficiency.",
      toolsUsed: ["Quiz Assessment", "Rapid Prototyping", "Peer Competition"],
      evidenceFolder: "public/evidence/05-class-quiz/",
      fileExtension: ".jpeg"
    }
  ] as ActivityCard[],

  featuredProject: {
    headingNumber: "05",
    headingTitle: "Featured Project",
    title: "Hospital – Diagnostic Laboratory Data Exchange System",
    shortTitle: "Diagnostic Laboratory Processing Portal",
    subtitle:
      "Automated Pathology Processing Engine, Dual-Mode Security, and Programmatic REST Server developed for Advanced Python Programming laboratory project.",
    liveUrl: "https://diagnostic-laboratory-portal.onrender.com/",
    videoUrl: "https://drive.google.com/drive/folders/1qkAK6YBkBmYb7Njuh_9Exq-kdBn6qzAH?usp=drive_link",
    documentUrl: "/documents/lab_project_writeup.docx",
    documentFilename: "lab_project_writeup.docx",
    documentSize: "286 KB",
    architectureImage: "/evidence/diagnostic-system-architecture.png",
    overview:
      "An automated, secure laboratory information management system (LIMS) designed for high-throughput clinical diagnostic laboratories. It delivers a digital technician workstation, automated mathematical reference interval evaluation, and programmatic RESTful endpoints to receive hospital test orders and publish verified pathology results.",
    problemAddressed:
      "Eliminating manual sample logs, repetitive reference book comparisons, and third-party file-drop bottlenecks by providing a zero-polling RESTful data exchange gateway with instant automated clinical evaluation.",
    features: [
      {
        icon: "ShieldCheck",
        title: "Dual-Mode Security & REST Gateway",
        desc: "Role-based technician authentication (PBKDF2) alongside token-secured REST API (@require_api_key) for external hospital automation."
      },
      {
        icon: "Cpu",
        title: "Automated Reference Interval Engine",
        desc: "Instant mathematical evaluation of raw analyzer measurements against clinical medical bounds with qualitative classification flags."
      },
      {
        icon: "Database",
        title: "Atomic Persistence & Audit Trail",
        desc: "Dual retention via SQLite (laboratory.db) transaction locking and Pandas-compiled CSV exports for regulatory accreditation."
      },
      {
        icon: "Activity",
        title: "Real-Time Workload Dashboard",
        desc: "Interactive monitoring of pending requests, processing pipeline, and abnormal pathology detections with zero Dropbox polling lag."
      }
    ],
    technologies: [
      "Python 3.10+",
      "Flask",
      "Pandas",
      "NumPy",
      "SQLite3",
      "Gunicorn WSGI",
      "Bootstrap 5",
      "RESTful API",
      "Render PaaS"
    ],
    // 5 Official Lab Website Screenshots
    screenshots: [
      {
        id: "lab-1",
        filename: "Lab_web_1.png",
        path: "/evidence/Lab_web_1.png",
        safeUrl: "/evidence/Lab_web_1.png",
        label: "Staff Authentication & Login",
        caption: "Role-based laboratory technician login portal (/login) with credential authentication (Senior Lab Technician LAB101) enforcing session security.",
        aspectRatio: "2225 / 1252",
        resolution: "2225×1252"
      },
      {
        id: "lab-2",
        filename: "Lab_web_2.png",
        path: "/evidence/Lab_web_2.png",
        safeUrl: "/evidence/Lab_web_2.png",
        label: "Laboratory Dashboard & Queue",
        caption: "Real-time clinical overview (/dashboard) displaying active workload counters (pending, processing, completed, abnormal), REST API mode, and incoming test requests.",
        aspectRatio: "2225 / 1254",
        resolution: "2225×1254"
      },
      {
        id: "lab-3",
        filename: "Lab_web_3.png",
        path: "/evidence/Lab_web_3.png",
        safeUrl: "/evidence/Lab_web_3.png",
        label: "Measurement Intake & Range Workstation",
        caption: "Analyzer numeric measurement intake form (/process/T1001) showing patient demographics, Blood Sugar entry, standard normoglycemia bounds (70 - 140 mg/dL), and automated validation.",
        aspectRatio: "2225 / 1257",
        resolution: "2225×1257"
      },
      {
        id: "lab-4",
        filename: "Lab_web_4.png",
        path: "/evidence/Lab_web_4.png",
        safeUrl: "/evidence/Lab_web_4.png",
        label: "Validation & REST API Ready Modal",
        caption: "Modal confirmation confirming test T1001 completion, qualitative classification as Normal, atomic SQLite persistence, and immediate REST API readiness for hospital retrieval.",
        aspectRatio: "2225 / 1258",
        resolution: "2225×1258"
      },
      {
        id: "lab-5",
        filename: "Lab_web_5.png",
        path: "/evidence/Lab_web_5.png",
        safeUrl: "/evidence/Lab_web_5.png",
        label: "Completed Results & CSV Audit",
        caption: "Permanent diagnostic results repository (/results) displaying processed tests, automated clinical interpretations, audit-ready CSV generation (test_result_T1001.csv), and record viewing.",
        aspectRatio: "2225 / 1253",
        resolution: "2225×1253"
      }
    ] as ProjectScreenshot[],
    submissionEvidencePhoto: {
      path: "/evidence/07-audio-recording-website/Bussiness_thesis_audio_rrecording.jpeg",
      label: "Physical Submission Evidence",
      resolution: "900×1600"
    },
    laboratoryEvidencePhoto: {
      path: "/evidence/audio-website-lab.jpg",
      label: "Activity 07: Audio Recording about Website",
      resolution: "576×1024",
      aspectRatio: "576 / 1024",
      caption: "Original laboratory photograph showing the practical activity of recording audio about our website project."
    },
    presentationFile: {
      path: "/evidence/08-website-ppt/website_ppt.pptx",
      filename: "website_ppt.pptx",
      size: "1.5 MB",
      label: "Website PPT Presentation Deck"
    }
  },

  presentingMyWork: [
    {
      id: "ppt",
      title: "Website PPT",
      caption: "Project presentation slides.",
      actionText: "Open PPT →",
      downloadText: "Download PPTX",
      fileUrl: "/evidence/08-website-ppt/website_ppt.pptx",
      fileName: "website_ppt.pptx",
      fileExtension: ".pptx",
      fileSize: "1.5 MB",
      hasEvidence: true,
      previewImage: "/evidence/07-audio-recording-website/Lab_web_1.png",
      detail:
        "Authentic PowerPoint presentation deck covering the project motivation, architecture diagrams, and business thesis outcomes."
    },
    {
      id: "video",
      title: "Demo Video of Website",
      caption: "Website demonstration & files.",
      actionText: "View on Google Drive ↗",
      hasEvidence: true,
      fileUrl: "https://drive.google.com/file/d/1GAPBIA5BXlGmt91gaTymAza_Etf0wjUN/view?usp=drivesdk",
      hostNote: "Official project documentation & demo hosted on Google Drive.",
      previewImage: "/evidence/07-audio-recording-website/Lab_web_2.png",
      detail:
        "Full demonstration video walkthrough illustrating website features and testing, hosted on Google Drive."
    },
    {
      id: "screenshots",
      title: "Project Screenshots",
      caption: "Application interface and features.",
      actionText: "View Screenshots →",
      fileUrl: "/evidence/07-audio-recording-website/Lab_web_1.png",
      fileName: "Lab_web_1.png",
      fileExtension: ".png",
      fileSize: "322 KB",
      hasEvidence: true,
      previewImage: "/evidence/07-audio-recording-website/Lab_web_1.png",
      detail:
        "High-definition lab website screenshots (Lab_web_1 to Lab_web_5) demonstrating all interface modules."
    }
  ],

  codingPractice: [
    {
      id: 1,
      title: "Two Sum",
      platform: "LeetCode",
      badge: "A",
      badgeColor: "bg-blue-600 text-white",
      category: "Arrays & Hash Table",
      difficulty: "Easy",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target using an O(n) one-pass hash map.",
      pythonSolution: `def twoSum(nums: list[int], target: int) -> list[int]:
    prev_map = {}  # val -> index
    for i, n in enumerate(nums):
        diff = target - n
        if diff in prev_map:
            return [prev_map[diff], i]
        prev_map[n] = i
    return []`
    },
    {
      id: 2,
      title: "Valid Parentheses",
      platform: "LeetCode",
      badge: "{ }",
      badgeColor: "bg-purple-600 text-white",
      category: "Stack & Strings",
      difficulty: "Easy",
      description:
        "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid using a stack data structure.",
      pythonSolution: `def isValid(s: str) -> bool:
    stack = []
    close_to_open = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in close_to_open:
            if stack and stack[-1] == close_to_open[char]:
                stack.pop()
            else:
                return False
        else:
            stack.append(char)
    return True if not stack else False`
    },
    {
      id: 3,
      title: "Merge Two Lists",
      platform: "LeetCode",
      badge: "88",
      badgeColor: "bg-amber-500 text-white",
      category: "Linked List / Two Pointers",
      difficulty: "Easy",
      description:
        "Merge two sorted linked lists and return it as a new sorted list by splicing together the nodes of the first two lists.",
      pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(l1: ListNode, l2: ListNode) -> ListNode:
    dummy = ListNode()
    tail = dummy
    while l1 and l2:
        if l1.val < l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 or l2
    return dummy.next`
    },
    {
      id: 4,
      title: "More Questions",
      platform: "Padlet Board",
      badge: "Padlet",
      badgeColor: "bg-[#794429] text-white",
      category: "Classroom Padlet Repository",
      difficulty: "Evidence Available",
      description:
        "Original course Padlet board screenshot capturing weekly algorithmic submissions and classroom problem solving.",
      pythonSolution: `# Padlet practice repository:
# Topics covered:
# 1. Custom string tokenization algorithms
# 2. Recursive depth-first matrix traversals
# 3. Frequency counter dictionaries
# 4. Binary search tree validations`,
      evidenceImage: "/evidence/10-padlet-coding/Padlet.png"
    }
  ] as CodingQuestion[],

  padletEvidence: {
    image: "/evidence/10-padlet-coding/Padlet.png",
    title: "Classroom Padlet Board Evidence",
    note: "High-resolution full screenshot of the course Padlet submissions.",
    aspectRatio: "1260 / 1144",
    fileExtension: ".png"
  },

  allTenActivities: [
    { 
      number: "01", 
      title: "Stars Photo", 
      targetId: "stars", 
      actionType: 'lightbox',
      evidencePath: "public/evidence/01-stars/"
    },
    { 
      number: "02", 
      title: "Storyboard", 
      targetId: "activities", 
      actionType: 'activity_modal',
      evidencePath: "public/evidence/02-storyboard/Story board.png"
    },
    { 
      number: "03", 
      title: "Python Discussion", 
      targetId: "activities", 
      actionType: 'activity_modal',
      evidencePath: "public/evidence/03-python-discussion/"
    },
    { 
      number: "04", 
      title: "IoT Application", 
      targetId: "activities", 
      actionType: 'activity_modal',
      evidencePath: "public/evidence/04-iot-assessment/"
    },
    { 
      number: "05", 
      title: "Class Quiz", 
      targetId: "activities", 
      actionType: 'activity_modal',
      evidencePath: "public/evidence/05-class-quiz/Class_quiz.jpeg"
    },
    { 
      number: "06", 
      title: "Medium Blog", 
      targetId: "blog", 
      actionType: 'scroll'
    },
    { 
      number: "07", 
      title: "Audio Recording about Website", 
      targetId: "project", 
      badge: "Lab Activity",
      badgeColor: "bg-[#FFF2E8] text-[#B9470B] border border-[#FFD9C0]",
      actionType: 'audio_website_modal',
      evidencePath: "public/evidence/audio-website-lab.jpg",
      driveUrl: "https://drive.google.com/file/d/1GAPBIA5BXlGmt91gaTymAza_Etf0wjUN/view?usp=drivesdk"
    },
    { 
      number: "08", 
      title: "Website PPT", 
      targetId: "presentation", 
      actionType: 'ppt',
      evidencePath: "public/evidence/08-website-ppt/website_ppt.pptx"
    },
    { 
      number: "09", 
      title: "Demo Video", 
      targetId: "presentation", 
      badge: "Google Drive",
      badgeColor: "bg-amber-100 text-amber-800",
      actionType: 'video_link',
      evidencePath: "https://drive.google.com/drive/folders/1qkAK6YBkBmYb7Njuh_9Exq-kdBn6qzAH?usp=drive_link"
    },
    { 
      number: "10", 
      title: "Padlet Questions", 
      targetId: "coding", 
      actionType: 'padlet',
      evidencePath: "public/evidence/10-padlet-coding/Padlet.png"
    }
  ] as IndexActivity[],

  reflection: {
    quote:
      "This subject helped me strengthen my problem-solving skills and gave me the opportunity to apply Python concepts in real-world projects and collaborative activities.",
    author: "Rajavelmurugan S.",
    role: "Integrated M.Tech Data Science, VIT Vellore",
    prompts: [
      {
        id: "p1",
        title: "What I learned",
        answer:
          "I gained comprehensive expertise in Python idioms, modular programming, data structures, and practical application building beyond textbook theory."
      },
      {
        id: "p2",
        title: "Skills I developed",
        answer:
          "Algorithmic problem breakdown, audio stream handling, clean code documentation, and rapid full-stack web prototyping with Python."
      },
      {
        id: "p3",
        title: "Challenges I faced",
        answer:
          "Managing asynchronous audio buffers in browser environments and synchronizing state across web components with Python backends."
      },
      {
        id: "p4",
        title: "What teamwork taught me",
        answer:
          "Effective technical dialogue, cross-functional storyboard iteration, and the critical value of shared code standards in group sprints."
      },
      {
        id: "p5",
        title: "How I improved",
        answer:
          "Progressed from writing procedural scripts to designing clean, maintainable, modular Python software with robust error resilience."
      },
      {
        id: "p6",
        title: "My next learning goals",
        answer:
          "Deep dive into advanced data science frameworks (Pandas, PyTorch, Scikit-Learn) and deploy machine learning models as scalable microservices."
      }
    ]
  },

  stillLearning: {
    blog: {
      platform: "Medium",
      status: "Published",
      title: "Four Python Data Structures That Changed the Way I Think About Data",
      description:
        "A practical exploration of four Python data structures and how they influence the way we organize, manage, and solve programming problems.",
      url: "https://medium.com/python-in-plain-english/four-python-data-structures-that-changed-the-way-i-think-about-data-4c79d79e186f?sharedUserId=rajavelmurugan81"
    },
    futureGoals: [
      "Publish Python learning articles on Medium",
      "Explore advanced Python libraries",
      "Build more real-world projects",
      "Practice more LeetCode questions",
      "Improve my application development skills"
    ],
    editorialTagline: "More Learning, More Possibilities."
  },

  publishedWriting: {
    sectionNumber: "11",
    title: "Published Writing",
    subtitle: "Sharing what I learn through technical writing and practical Python knowledge.",
    article: {
      id: "four-python-data-structures",
      title: "Four Python Data Structures That Changed the Way I Think About Data",
      publication: "Python in Plain English",
      publicationUrl: "https://medium.com/python-in-plain-english",
      platform: "Medium",
      status: "Published · Approved",
      readingTime: "9 minutes",
      articleUrl: "https://medium.com/python-in-plain-english/four-python-data-structures-that-changed-the-way-i-think-about-data-4c79d79e186f?sharedUserId=rajavelmurugan81",
      description: "A practical exploration of four Python data structures and how they influence the way we organize, manage, and solve programming problems.",
      evidenceImage: "/evidence/medium-publication-approved.jpeg",
      evidenceTitle: "Medium Stories Dashboard — Publication & Approval Confirmation",
      evidenceSubtitle: "Python in Plain English • Approved Story",
      evidenceCaption: "Official uncropped Medium dashboard screenshot verifying the publication and Approved status of 'Four Python Data Structures That Changed the Way I Think About Data' in Python in Plain English.",
      aspectRatio: "1024 / 307"
    }
  },

  footer: {
    name: "Rajavelmurugan S.",
    shortName: "RS",
    role: "Advanced Python Programming",
    institution: "VIT Vellore",
    year: "2026",
    links: [
      { label: "Home", href: "#hero" },
      { label: "Learning", href: "#learning" },
      { label: "Activities", href: "#activities" },
      { label: "My Stars", href: "#stars" },
      { label: "Projects", href: "#project" },
      { label: "Reflection", href: "#reflection" },
      { label: "Writing", href: "#writing" },
      { label: "Contact", href: "#contact" }
    ],
    socials: [
      { 
        label: "GitHub", 
        href: "https://github.com/rajavelmurugan81-lab", 
        icon: "Github",
        tooltip: "GitHub: rajavelmurugan81-lab"
      },
      { 
        label: "LinkedIn", 
        href: "https://www.linkedin.com/in/rajavelmurugan-sathyanarayanan-53aa9b289", 
        icon: "Linkedin",
        tooltip: "LinkedIn: Rajavelmurugan Sathyanarayanan"
      },
      { 
        label: "Email", 
        href: "mailto:rajavelmurugan81@gmail.com", 
        icon: "Mail",
        tooltip: "Email: rajavelmurugan81@gmail.com"
      }
    ]
  }
};
