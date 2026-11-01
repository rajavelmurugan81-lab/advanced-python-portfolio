export interface SubtopicItem {
  name: string;
  explanation: string;
  codeSnippet?: string;
}

export interface UnitTopic {
  title: string;
  pageReference: string;
  summary: string;
  subtopics: SubtopicItem[];
}

export interface AcademicUnit {
  id: string;
  unitNumber: number;
  unitCode: string;
  title: string;
  pdfFilename: string;
  pdfPath: string;
  fileSize: string;
  pageCount: number;
  category: string;
  overview: string;
  sourceNote: string;
  isProjectReview?: boolean;
  topics: UnitTopic[];
  keyTakeaways: string[];
  tags: string[];
}

export const ACADEMIC_UNITS: AcademicUnit[] = [
  {
    id: 'unit-1',
    unitNumber: 1,
    unitCode: '01',
    title: 'Loan Eligibility Prediction & Supervised Learning Pipeline',
    pdfFilename: 'sub1.pdf',
    pdfPath: '/evidence/learning-outcomes/sub1.pdf',
    fileSize: '142 KB',
    pageCount: 6,
    category: 'Machine Learning & Data Preprocessing',
    overview:
      'A complete supervised learning classification workflow using scikit-learn to predict applicant loan eligibility from financial and demographic indicators. The study establishes clean data pipelines, imputation, categorical encoding, scaling, model evaluation, and inference on unseen applicant profiles.',
    sourceNote:
      'Verified academic laboratory submission (Reg No: 23MID0018, Faculty: Sharmila Banu K). Evaluated on 614 applicant records with an 80/20 train/test split.',
    keyTakeaways: [
      'Built leak-free preprocessing pipelines combining ColumnTransformer with SimpleImputer, StandardScaler, and OneHotEncoder.',
      'Achieved 82.11% accuracy using Logistic Regression (max_iter=1000) on the holdout test set.',
      'Constructed confusion matrix [[19, 21], [1, 82]] with 0.95 precision and 0.99 recall on approved loans.',
      'Engineered an interactive inference function transforming single applicant records into instant loan qualification predictions.'
    ],
    tags: ['Scikit-Learn', 'Logistic Regression', 'Data Pipelines', 'Feature Engineering', 'Model Evaluation'],
    topics: [
      {
        title: 'Dataset Exploration & Schema Investigation',
        pageReference: 'Pages 1–2',
        summary:
          'Exploration of 614 applicant records containing 13 attributes including demographic, credit, and financial features.',
        subtopics: [
          {
            name: 'Feature Identification',
            explanation:
              'Identified applicant features: Loan_ID, Gender, Married, Dependents, Education, Self_Employed, ApplicantIncome, CoapplicantIncome, LoanAmount, Loan_Amount_Term, Credit_History, Property_Area, and target variable Loan_Status (Y/N).'
          },
          {
            name: 'Target Class Distribution',
            explanation:
              'Analyzed target loan approval outcomes across historical credit records to assess class balance prior to training.'
          }
        ]
      },
      {
        title: 'Data Preprocessing & Modular Pipelines',
        pageReference: 'Pages 2–4',
        summary:
          'Constructed scikit-learn Pipelines and ColumnTransformer to systematically handle missing values and feature transformations without data leakage.',
        subtopics: [
          {
            name: 'Numerical Imputation & Standard Scaling',
            explanation:
              'Imputed missing numerical values (ApplicantIncome, CoapplicantIncome, LoanAmount, Loan_Amount_Term, Credit_History) using median strategy, followed by StandardScaler to normalize variance.',
            codeSnippet: `from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer

numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])`
          },
          {
            name: 'Categorical Imputation & One-Hot Encoding',
            explanation:
              'Imputed missing nominal values (Gender, Married, Dependents, Self_Employed, Property_Area) using most_frequent strategy, followed by OneHotEncoder(handle_unknown="ignore").',
            codeSnippet: `categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='most_frequent')),
    ('encoder', OneHotEncoder(handle_unknown='ignore'))
])

preprocessor = ColumnTransformer(transformers=[
    ('num', numeric_transformer, numeric_features),
    ('cat', categorical_transformer, categorical_features)
])`
          }
        ]
      },
      {
        title: 'Model Training, Evaluation & Single-Applicant Inference',
        pageReference: 'Pages 4–6',
        summary:
          'Model fitting using Logistic Regression, comprehensive performance metrics reporting, and live applicant prediction test.',
        subtopics: [
          {
            name: 'Train-Test Splitting & Logistic Regression',
            explanation:
              'Split 614 records into 491 training samples (80%) and 123 testing samples (20%) using random_state=42. Fitted LogisticRegression(max_iter=1000) through the end-to-end pipeline.',
            codeSnippet: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

clf = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', LogisticRegression(max_iter=1000))
])
clf.fit(X_train, y_train)`
          },
          {
            name: 'Evaluation Metrics & Confusion Matrix',
            explanation:
              'Model achieved 82.11% accuracy. The confusion matrix recorded [[19, 21], [1, 82]], showing 19 True Negatives, 21 False Positives, 1 False Negative, and 82 True Positives, with 0.95 precision and 0.99 recall for approved loans.'
          },
          {
            name: 'Single Applicant Inference',
            explanation:
              'Constructed an inference routine taking raw input dictionary, converting to DataFrame, and executing pipeline prediction to output "Loan Approved" or "Loan Rejected".'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    unitCode: '02',
    title: 'File Processing, Encoding, Automation & Web Scraping',
    pdfFilename: 'sub2.pdf',
    pdfPath: '/evidence/learning-outcomes/sub2.pdf',
    fileSize: '1.33 MB',
    pageCount: 23,
    category: 'Automation & System Programming',
    overview:
      'Laboratory assessment covering five automation domains: resolving character encoding and mojibake corruption, manipulating and encrypting PDF files with pypdf, generating formula-driven Excel executive dashboards with openpyxl, analyzing and synthesizing audio signals with librosa and pydub, and parsing live web tables with BeautifulSoup.',
    sourceNote:
      'Verified Lab Assessment 1 submission (CSI3007 Advanced Python Programming, Faculty: Sharmila Banu K). Covers 5 practical tasks with execution benchmarks and terminal outputs.',
    keyTakeaways: [
      'Identified and resolved character encoding mismatches (UTF-8 vs ANSI) handling multi-byte Chinese and Unicode scripts.',
      'Automated PDF extraction, multi-document concatenation, and AES encryption using pypdf.',
      'Generated multi-sheet corporate sales ledgers in openpyxl with automated Excel formulas, styling, and executive dashboards.',
      'Analyzed audio sampling rates, waveforms, and FFT frequency spectrums with librosa and numpy, exporting audio with pydub.',
      'Scraped online bookstore catalogs with requests and BeautifulSoup while adhering to robots.txt and HTTP header standards.'
    ],
    tags: ['openpyxl', 'pypdf', 'BeautifulSoup', 'librosa', 'Encoding', 'Web Scraping'],
    topics: [
      {
        title: 'Character Encoding & Mojibake Resolution',
        pageReference: 'Pages 2–5',
        summary:
          'Investigated character encodings, multi-byte character representation, and resolving mojibake decoding artifacts.',
        subtopics: [
          {
            name: 'UTF-8 vs ANSI / GBK Encoding',
            explanation:
              'Demonstrated how reading UTF-8 encoded text containing Chinese characters ("学生成绩管理系统") using ANSI decoding results in character corruption (mojibake). Resolved through explicit encoding="utf-8" file streams.',
            codeSnippet: `# Correct encoding handling for multilingual files
with open("student_records.txt", "w", encoding="utf-8") as f:
    f.write("学生成绩管理系统\\n学生姓名: 张伟\\n成绩: 95")

with open("student_records.txt", "r", encoding="utf-8") as f:
    content = f.read()`
          }
        ]
      },
      {
        title: 'PDF Automation & Encryption with pypdf',
        pageReference: 'Pages 6–9',
        summary:
          'Programmatic PDF manipulation including metadata inspection, multi-page concatenation, and cryptographic password protection.',
        subtopics: [
          {
            name: 'Metadata Extraction & Document Merging',
            explanation:
              'Extracted /Title, /Author, and /Producer tags using PdfReader. Merged multiple input documents into a unified output using PdfWriter.append().'
          },
          {
            name: 'PDF Encryption with AES',
            explanation:
              'Secured processed PDFs with user and owner passwords using PdfWriter.encrypt(), verifying file protection.',
            codeSnippet: `from pypdf import PdfReader, PdfWriter

writer = PdfWriter()
writer.append("report_part1.pdf")
writer.append("report_part2.pdf")
writer.encrypt(user_password="secure2026", owner_password="admin2026", use_128bit=True)

with open("secured_merged_report.pdf", "wb") as f:
    writer.write(f)`
          }
        ]
      },
      {
        title: 'Corporate Excel Ledger & Dashboard Automation with openpyxl',
        pageReference: 'Pages 10–14',
        summary:
          'Constructed a multi-sheet corporate sales workbook with formula calculations, cell styling, and an executive KPI dashboard.',
        subtopics: [
          {
            name: 'Worksheet Styling & Dynamic Formulas',
            explanation:
              'Applied PatternFill, Font, and Border styling. Embedded Excel formulas (=SUM, =AVERAGE, =MAX, =IF) and applied currency formatting ($#,##0.00).',
            codeSnippet: `import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, numbers

wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Sales_2026"
ws["A1"] = "Corporate Sales Ledger 2026"
ws["A1"].font = Font(size=14, bold=True, color="FFFFFF")
ws["A1"].fill = PatternFill(fill_type="solid", fgColor="B9470B")

ws["E10"] = "=SUM(E2:E9)"
ws["E10"].number_format = "$#,##0.00"`
          },
          {
            name: 'Multi-Sheet Executive Dashboard Linking',
            explanation:
              'Created dedicated summary sheets dynamically referencing quarterly tabs to calculate total corporate revenue and department metrics.'
          }
        ]
      },
      {
        title: 'Audio Signal Processing & FFT Spectrum Analysis',
        pageReference: 'Pages 15–19',
        summary:
          'Extracted acoustic features from audio files, plotted waveforms, and computed frequency spectra using Fast Fourier Transforms.',
        subtopics: [
          {
            name: 'Waveform & Temporal Analysis with librosa',
            explanation:
              'Loaded WAV audio files with librosa.load(sr=22050), extracted duration, channel data, and plotted time-domain signal amplitude.'
          },
          {
            name: 'Frequency Spectrum & FFT Analysis',
            explanation:
              'Calculated frequency magnitudes using numpy.fft.rfft and rfftfreq to detect dominant harmonic frequencies, and concatenated audio segments using pydub.AudioSegment.'
          }
        ]
      },
      {
        title: 'Ethical Web Scraping with BeautifulSoup & Requests',
        pageReference: 'Pages 20–23',
        summary:
          'Extracted structured book catalog data from an online test portal while respecting web scraping etiquette and robots.txt rules.',
        subtopics: [
          {
            name: 'Robots.txt & Request Headers',
            explanation:
              'Inspected server robots.txt policies and added custom User-Agent headers to HTTP GET requests to prevent request blocking.'
          },
          {
            name: 'DOM Parsing & Structured Data Extraction',
            explanation:
              'Traversed HTML DOM with BeautifulSoup, targeting CSS selectors (article.product_pod, h3 a, p.price_color) to extract book titles, ratings, and prices into structured tables.',
            codeSnippet: `import requests
from bs4 import BeautifulSoup

url = "https://books.toscrape.com/"
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
resp = requests.get(url, headers=headers)
soup = BeautifulSoup(resp.content, "html.parser")

for book in soup.select("article.product_pod"):
    title = book.h3.a["title"]
    price = book.select_one(".price_color").get_text()`
          }
        ]
      }
    ]
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    unitCode: '03',
    title: 'Algorithmic Problem Solving & Optimal Complexity Techniques',
    pdfFilename: 'sub3.pdf',
    pdfPath: '/evidence/learning-outcomes/sub3.pdf',
    fileSize: '682 KB',
    pageCount: 12,
    category: 'Algorithms & Data Structures',
    overview:
      'Laboratory assessment solving five benchmark LeetCode algorithmic challenges. The exercises focus on time and space complexity optimization using hash maps, sliding window techniques, the Sieve of Eratosthenes, and greedy monotonic stack algorithms.',
    sourceNote:
      'Verified Lab Assessment 2 submission (CSI3007 Advanced Python Programming, Faculty: Sharmila Banu K). Contains verified solutions, test cases, and algorithmic complexity breakdowns.',
    keyTakeaways: [
      'Applied two-pointer sliding window with hash map to achieve O(N) time complexity for substring extraction.',
      'Implemented the Sieve of Eratosthenes to count primes up to N in O(N log log N) time.',
      'Derived iterative peak extraction for kth-largest element in unsorted sequences.',
      'Analyzed sliding window sub-array maximums across contiguous window intervals.',
      'Designed a greedy monotonic stack with hash set tracking to solve LeetCode 316 (Remove Duplicate Letters) in lexicographical order.'
    ],
    tags: ['LeetCode', 'Sliding Window', 'Monotonic Stack', 'Sieve of Eratosthenes', 'Hash Maps', 'Greedy Algorithms'],
    topics: [
      {
        title: 'Longest Substring Without Repeating Characters (LeetCode 3)',
        pageReference: 'Pages 2–3',
        summary:
          'Optimized substring search using a dynamic two-pointer sliding window and character index hash map.',
        subtopics: [
          {
            name: 'Sliding Window with Hash Map Indexing',
            explanation:
              'Maintains a left pointer and a dictionary storing the most recent index of each character. When a duplicate is encountered inside the active window, the left boundary instantly jumps past the prior occurrence, achieving O(N) linear time and O(min(N, M)) auxiliary space.',
            codeSnippet: `def lengthOfLongestSubstring(s: str) -> int:
    char_map = {}
    left = 0
    max_len = 0
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        char_map[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len`
          }
        ]
      },
      {
        title: 'Prime Counting via Sieve of Eratosthenes (LeetCode 204)',
        pageReference: 'Pages 4–5',
        summary:
          'Implemented the classical prime sieve algorithm replacing trial division with composite elimination.',
        subtopics: [
          {
            name: 'Composite Marking & Complexity Bound',
            explanation:
              'Allocates a boolean array of size N initialized to True. Iteratively marks multiples of primes starting from i * i up to sqrt(N) as False, counting remaining primes in O(N log log N) time.',
            codeSnippet: `def countPrimes(n: int) -> int:
    if n <= 2:
        return 0
    is_prime = [True] * n
    is_prime[0] = is_prime[1] = False
    for i in range(2, int(n ** 0.5) + 1):
        if is_prime[i]:
            is_prime[i * i : n : i] = [False] * len(is_prime[i * i : n : i])
    return sum(is_prime)`
          }
        ]
      },
      {
        title: 'Kth Largest Element & Sliding Window Maximum',
        pageReference: 'Pages 6–9',
        summary:
          'Solving rank order statistics and contiguous array maximum extraction.',
        subtopics: [
          {
            name: 'Kth Largest Element in an Array (LeetCode 215)',
            explanation:
              'Investigated order statistics in unsorted arrays using iterative maximum elimination and min-heap comparison techniques.'
          },
          {
            name: 'Sliding Window Maximum (LeetCode 239)',
            explanation:
              'Extracted maximum values across sliding windows of size k in contiguous sequences nums[i:i+k].'
          }
        ]
      },
      {
        title: 'Remove Duplicate Letters via Monotonic Stack (LeetCode 316)',
        pageReference: 'Pages 10–12',
        summary:
          'Greedy character selection to produce the smallest lexicographical string without duplicate characters.',
        subtopics: [
          {
            name: 'Greedy Monotonic Stack with Visited Set',
            explanation:
              'Tracks the last occurrence index of each character. Using a stack and a visited set, pops characters that are lexicographically larger than the current character if they appear later in the string, guaranteeing uniqueness and minimal lexicographical order in O(N) time.',
            codeSnippet: `def removeDuplicateLetters(s: str) -> str:
    last_occ = {c: i for i, c in enumerate(s)}
    stack = []
    seen = set()
    for i, c in enumerate(s):
        if c not in seen:
            while stack and c < stack[-1] and i < last_occ[stack[-1]]:
                seen.remove(stack.pop())
            seen.add(c)
            stack.append(c)
    return "".join(stack)`
          }
        ]
      }
    ]
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    unitCode: '04',
    title: 'Multilingual Translation Team Architectural Proposal',
    pdfFilename: 'sub4.pdf',
    pdfPath: '/evidence/learning-outcomes/sub4.pdf',
    fileSize: '358 KB',
    pageCount: 1,
    category: 'System Architecture & AI Engineering',
    overview:
      'A system architecture proposal for real-time video tutorial translation and dubbing. The design focuses on neural speech recognition, translation across Indian and global languages, and synthetic voice cloning, with algorithmic guards to protect code syntax and programming identifiers during translation.',
    sourceNote:
      'Verified course project architecture proposal. Note: This document outlines an architectural proposal and research design, not an implemented production deployment.',
    keyTakeaways: [
      'Architected end-to-end speech translation pipeline: VAD -> ASR -> Syntax Protection -> NMT -> TTS.',
      'Designed code and variable token protection to prevent programming identifiers and code blocks from being corrupted by translation models.',
      'Integrated specialized NMT models: AI4Bharat IndicTrans2 for Indian languages and Meta NLLB-200 for international languages.',
      'Selected zero-shot voice cloning tools (OpenVoice V2, XTTS-v2, CosyVoice 2) for natural dubbed audio synthesis.',
      'Structured modular FastAPI microservices to allow independent scaling and optimize GPU compute costs.'
    ],
    tags: ['System Architecture', 'ASR', 'FastAPI', 'IndicTrans2', 'Whisper', 'Voice Cloning'],
    topics: [
      {
        title: 'Pipeline Architecture & Voice Activity Detection',
        pageReference: 'Page 1',
        summary:
          'Modular processing stages from raw multi-track audio to segmented, timestamped speech chunks.',
        subtopics: [
          {
            name: 'Audio Ingestion & Silero VAD',
            explanation:
              'Audio tracks are ingested and pre-processed using Silero Voice Activity Detection (VAD) to segment continuous speech into coherent timestamped chunks, eliminating silence and background noise.'
          },
          {
            name: 'Automatic Speech Recognition (ASR)',
            explanation:
              'Employs OpenAI Whisper Large-v3 and NVIDIA Parakeet TDT 0.6B for speech-to-text transcription with timestamp synchronization.'
          }
        ]
      },
      {
        title: 'Syntax-Preserving Neural Machine Translation (NMT)',
        pageReference: 'Page 1',
        summary:
          'Protecting programming keywords and code identifiers while translating educational narratives.',
        subtopics: [
          {
            name: 'Code Token Isolation & Protection Regex',
            explanation:
              'Pre-processes transcribed text with regular expressions and AST tokenizers to protect inline code, variable names, and programming syntax from being translated into literal language words.'
          },
          {
            name: 'Indic & Global Translation Engines',
            explanation:
              'Routes text to AI4Bharat IndicTrans2 for 22 scheduled Indian regional languages and Meta NLLB-200 (No Language Left Behind) for multilingual translation.'
          }
        ]
      },
      {
        title: 'Synthetic Voice Cloning & Microservice Infrastructure',
        pageReference: 'Page 1',
        summary:
          'High-fidelity voice synthesis and modular microservice infrastructure design.',
        subtopics: [
          {
            name: 'Zero-Shot Voice Cloning (TTS)',
            explanation:
              'Synthesizes translated subtitles into spoken audio matching original speaker pitch and cadence using OpenVoice V2, XTTS-v2, or CosyVoice 2.'
          },
          {
            name: 'Decoupled Microservice Scaling',
            explanation:
              'FastAPI-based microservices decouple ASR, NMT, and TTS tasks into independently scalable containers, minimizing GPU idle time and hosting costs.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-5',
    unitNumber: 5,
    unitCode: '05',
    title: 'Object-Oriented Programming & Multi-Threaded Concurrency',
    pdfFilename: 'sub5.pdf',
    pdfPath: '/evidence/learning-outcomes/sub5.pdf',
    fileSize: '1.15 MB',
    pageCount: 27,
    category: 'Object-Oriented Programming & Concurrency',
    overview:
      'Laboratory practice covering object-oriented domain modeling in Python followed by multi-threaded concurrency. The coursework moves from classes and data validation (Student grading and bioinformatics Gene modeling) to concurrent execution using threading.Thread, ThreadPoolExecutor, and thread-safe producer-consumer pipelines with queue.Queue and Locks.',
    sourceNote:
      'Verified Lab Practice submission (CSI3007 Advanced Python Programming, Faculty: Sharmila Banu K). Contains benchmark comparisons between sequential and multi-threaded downloads, and a hospital blood test case study.',
    keyTakeaways: [
      'Modeled bioinformatics entities with class-based validation, sequence mutation verification, and GC content calculations.',
      'Quantified execution speedups comparing sequential execution with multi-threaded threading.Thread execution.',
      'Managed thread lifecycles, futures, and parallel batch processing using concurrent.futures.ThreadPoolExecutor.',
      'Demonstrated thread safety using threading.Lock() to prevent race conditions during shared resource access.',
      'Built a multi-stage producer-consumer pipeline using queue.Queue() simulating a hospital diagnostic blood testing facility.'
    ],
    tags: ['OOP', 'Bioinformatics', 'Threading', 'ThreadPoolExecutor', 'Thread Safety', 'Producer-Consumer'],
    topics: [
      {
        title: 'Domain Modeling with Classes & Validation',
        pageReference: 'Pages 1–7',
        summary:
          'Constructed object-oriented classes with encapsulation, state management, and strict data validation rules.',
        subtopics: [
          {
            name: 'Student Grade Tracker Class',
            explanation:
              'Implemented Student class managing registration IDs, course marks lists, score append operations, average calculations, and letter grade classifications.'
          },
          {
            name: 'Bioinformatics Gene Class & Sequence Validation',
            explanation:
              'Modeled DNA gene sequences with validation ensuring only valid nucleotide bases (A, C, G, T) are accepted, asserting absence of RNA Uracil (assert "U" not in new_seq), computing GC percentage, and logging mutation events.',
            codeSnippet: `class Gene:
    def __init__(self, gene_id: str, sequence: str):
        self.gene_id = gene_id
        self.sequence = sequence.upper()
        self.validate_sequence()

    def validate_sequence(self):
        valid_bases = set("ACGT")
        assert "U" not in self.sequence, "Uracil detected: Sequence must be DNA, not RNA"
        if not set(self.sequence).issubset(valid_bases):
            raise ValueError(f"Invalid nucleotide detected in {self.gene_id}")

    def gc_content(self) -> float:
        gc_count = self.sequence.count("G") + self.sequence.count("C")
        return (gc_count / len(self.sequence)) * 100`
          }
        ]
      },
      {
        title: 'Multithreading Fundamentals with threading.Thread',
        pageReference: 'Pages 8–14',
        summary:
          'Created, initiated, and synchronized concurrent worker threads with execution timing benchmarks.',
        subtopics: [
          {
            name: 'Thread Creation, Target Execution & Joining',
            explanation:
              'Instantiated threads with target functions and arguments, executing concurrent tasks with .start() and synchronizing termination with .join().'
          },
          {
            name: 'Sequential vs Concurrent Performance Benchmarks',
            explanation:
              'Benchmarked execution runtimes using time.perf_counter(), demonstrating significant latency reductions when overlapping I/O-bound operations across concurrent threads.'
          }
        ]
      },
      {
        title: 'ThreadPoolExecutor & Asynchronous Task Pools',
        pageReference: 'Pages 15–20',
        summary:
          'Applied high-level concurrency using concurrent.futures to manage thread pools and handle task completion.',
        subtopics: [
          {
            name: 'Future Submission & as_completed Tracking',
            explanation:
              'Dispatched tasks to ThreadPoolExecutor using executor.submit(), iterating over completed tasks with as_completed() and batch mapping with executor.map().',
            codeSnippet: `from concurrent.futures import ThreadPoolExecutor, as_completed
import time

def process_sample(sample_id: int):
    time.sleep(0.5)
    return f"Sample #{sample_id} verified"

with ThreadPoolExecutor(max_workers=4) as executor:
    futures = [executor.submit(process_sample, i) for i in range(10)]
    for future in as_completed(futures):
        result = future.result()`
          },
          {
            name: 'Parallel Media Download Case Study',
            explanation:
              'Benchmarked downloading 18 Pixabay video assets concurrently across thread pools versus sequential execution.'
          }
        ]
      },
      {
        title: 'Thread Safety, Locks & Producer-Consumer Queues',
        pageReference: 'Pages 21–27',
        summary:
          'Synchronizing shared state with Locks and implementing decoupled producer-consumer queues.',
        subtopics: [
          {
            name: 'Preventing Race Conditions with threading.Lock',
            explanation:
              'Utilized mutual exclusion locks (with lock:) to guard shared state and terminal output from interleaved race conditions.'
          },
          {
            name: 'Hospital Diagnostic Lab Queue Case Study',
            explanation:
              'Simulated a hospital diagnostic testing lab where worker threads (Patients, Centrifuges, Analyzers) pass blood sample specimens through a thread-safe queue.Queue(), invoking .task_done() and .join() to ensure reliable synchronization.',
            codeSnippet: `import queue
import threading

sample_queue = queue.Queue(maxsize=20)
print_lock = threading.Lock()

def lab_technician_worker():
    while True:
        sample = sample_queue.get()
        if sample is None:
            break
        with print_lock:
            print(f"Processing clinical sample: {sample}")
        sample_queue.task_done()`
          }
        ]
      }
    ]
  },
  {
    id: 'unit-6',
    unitNumber: 6,
    unitCode: '06',
    title: 'Pandas Series Practice & Hierarchical Multi-Level Indexing',
    pdfFilename: 'sub6.pdf',
    pdfPath: '/evidence/learning-outcomes/sub6.pdf',
    fileSize: '232 KB',
    pageCount: 9,
    category: 'Data Science & Scientific Computing',
    overview:
      'Laboratory exercises in 1-dimensional labeled arrays using pandas Series. Covers Series construction from Python collections, automatic index alignment during vectorized arithmetic, handling nulls with fillna/dropna, and constructing hierarchical MultiIndex structures for retail inventory management.',
    sourceNote:
      'Verified Lab Practice submission (CSI3007 Advanced Python Programming, Faculty: Sharmila Banu K). Evaluated on data transformations and multi-index hierarchy querying.',
    keyTakeaways: [
      'Instantiated pandas Series from lists, tuples, and dictionaries with customized string index labels.',
      'Evaluated automatic label alignment during vectorized arithmetic operations, observing NaN generation on mismatched keys.',
      'Applied missing-data handling routines: identifying with .isna(), pruning with .dropna(), and imputing with .fillna().',
      'Engineered hierarchical MultiIndex structures using pd.MultiIndex.from_arrays, from_tuples, and from_product.',
      'Demonstrated hierarchical querying across multi-level indices using level keys and index-slice notation (.loc[1:2]).'
    ],
    tags: ['Pandas', 'Series', 'MultiIndex', 'Data Wrangling', 'Index Alignment'],
    topics: [
      {
        title: 'Series Creation & Custom Indexing',
        pageReference: 'Pages 1–3',
        summary:
          'Constructing 1D labeled arrays from native Python data structures with explicit index labeling.',
        subtopics: [
          {
            name: 'Creation from Lists, Tuples & Dictionaries',
            explanation:
              'Built Series instances from native Python lists, tuples, and key-value dictionaries, specifying custom index labels and exploring dtype assignments.'
          },
          {
            name: 'Index-Label Access & Slicing',
            explanation:
              'Accessed elements using positional integer indexing and label-based indexing (.loc vs .iloc).'
          }
        ]
      },
      {
        title: 'Vectorized Arithmetic & Label Alignment',
        pageReference: 'Pages 4–5',
        summary:
          'Element-wise arithmetic across Series with automatic index alignment.',
        subtopics: [
          {
            name: 'Automatic Index Alignment & NaN Propagation',
            explanation:
              'Demonstrated that arithmetic operators (+, -, *, /) align data based on index labels rather than positional order. When indices do not overlap, Pandas inserts NaN.'
          },
          {
            name: 'Null Detection & Value Imputation',
            explanation:
              'Detected missing values using .isna() and .notna(). Handled missing values using .dropna() and .fillna(value) to restore clean datasets.'
          }
        ]
      },
      {
        title: 'Hierarchical Multi-Level Indexing (MultiIndex)',
        pageReference: 'Pages 6–9',
        summary:
          'Constructed and queried multidimensional data representations using hierarchical MultiIndex structures.',
        subtopics: [
          {
            name: 'MultiIndex Construction Methods',
            explanation:
              'Instantiated MultiIndex objects using pd.MultiIndex.from_arrays(), pd.MultiIndex.from_tuples(), and pd.MultiIndex.from_product() to model retail inventory across Department, Category, and Item levels.',
            codeSnippet: `import pandas as pd

departments = ['Electronics', 'Electronics', 'Apparel', 'Apparel']
categories = ['Phones', 'Laptops', 'Men', 'Women']
multi_idx = pd.MultiIndex.from_arrays([departments, categories], names=['Dept', 'Category'])

sales = pd.Series([120, 85, 230, 310], index=multi_idx)
print(sales.loc['Electronics'])`
          },
          {
            name: 'Level-Based Slicing & Querying',
            explanation:
              'Queried nested hierarchical Series using level-based accessors, partial index keys, and range slices (.loc[1:2]).'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-7',
    unitNumber: 7,
    unitCode: '07',
    title: 'Diagnostic Laboratory Processing Portal — Review 1',
    pdfFilename: 'Sub7.pdf',
    pdfPath: '/evidence/learning-outcomes/Sub7.pdf',
    fileSize: '1.97 MB',
    pageCount: 5,
    category: 'Project Architecture & Web Services',
    isProjectReview: true,
    overview:
      'First formal project review of the Diagnostic Laboratory Processing Portal. Presents the portal architecture for medical laboratories to receive clinical test requests from hospitals via Dropbox, validate incoming request data, record diagnostic results, and synchronize reports back to the hospital.',
    sourceNote:
      'Verified Lab Project Review 1 documentation (Reg No: 23MID0018, Faculty: Sharmila Banu K, Slot: L31+L32+L49+L50). Details the system architecture, UI screenshots, backend data flow, and Render hosting.',
    keyTakeaways: [
      'Documented clinical test exchange architecture connecting hospitals with diagnostic laboratories via Dropbox cloud storage.',
      'Designed authenticated laboratory portal UI: Staff Login, Laboratory Dashboard, Test Requests Management, and Completed Results Repository.',
      'Designed modular backend structure: app.py, routes/, services/, with Pandas validation and SQLite storage.',
      'Established 8-step backend data exchange flow spanning request reception, schema validation, diagnostic entry, and result CSV transmission.',
      'Formulated deployment strategy hosting the Flask application on Render with public URL access.'
    ],
    tags: ['Lab Portal', 'System Architecture', 'Dropbox API', 'Flask', 'Review 1', 'Healthcare Tech'],
    topics: [
      {
        title: 'Project Purpose & Clinical Exchange Workflow',
        pageReference: 'Pages 1–2',
        summary:
          'Addressing secure diagnostic data exchange between hospital wards and clinical processing laboratories.',
        subtopics: [
          {
            name: 'Clinical Operational Workflow',
            explanation:
              'Enables lab technicians to receive patient test requests sent by hospitals through Dropbox, validate patient identifiers and test codes, record measured results, and send finalized findings back.'
          },
          {
            name: 'Staff Authentication',
            explanation:
              'Secure login portal requiring staff ID (e.g., LAB101) and password credentials before granting access to diagnostic queues.'
          }
        ]
      },
      {
        title: 'Frontend Portal Interface & Management Views',
        pageReference: 'Pages 2–4',
        summary:
          'Interface views for test triage, status tracking, and report generation.',
        subtopics: [
          {
            name: 'Laboratory Dashboard & Real-Time Counters',
            explanation:
              'Displays status counters: Pending Requests, Processing Tests, Completed Tests, and Abnormal Results requiring urgent attention, along with a "Sync New Requests" button.'
          },
          {
            name: 'Test Requests & Completed Results Repositories',
            explanation:
              'Searchable table filtering incoming tests by Test ID, Patient ID, Patient Name, Ordering Physician, and processing status, linked to the completed results archive.'
          }
        ]
      },
      {
        title: 'Backend Architecture, Data Flow & Render Hosting',
        pageReference: 'Pages 4–5',
        summary:
          '8-step backend data flow diagram, service modules, and cloud hosting architecture.',
        subtopics: [
          {
            name: '8-Step Data Exchange Pipeline',
            explanation:
              '1. Hospital Portal creates CSV -> 2. Stored in Dropbox /Requests/ -> 3. Flask backend receives file -> 4. Pandas validates schema -> 5. SQLite stores test data -> 6. Technician enters test results & generates result CSV -> 7. Uploaded to Dropbox /Results/ -> 8. Hospital portal retrieves result.',
            codeSnippet: `# Flask modular routing architecture
from flask import Flask, render_template, request, jsonify
import pandas as pd
import sqlite3

app = Flask(__name__)

@app.route("/api/sync-dropbox", methods=["POST"])
def sync_dropbox_requests():
    # Sync new requests from Dropbox /Requests/ folder
    return jsonify({"status": "synced", "new_requests": 0})`
          },
          {
            name: 'Cloud Hosting on Render',
            explanation:
              'Configured deployment on Render as a web service, enabling browser access via a public URL.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-8',
    unitNumber: 8,
    unitCode: '08',
    title: 'Diagnostic Laboratory Processing Portal — Review 2',
    pdfFilename: 'sub8.pdf',
    pdfPath: '/evidence/learning-outcomes/sub8.pdf',
    fileSize: '151 KB',
    pageCount: 2,
    category: 'Project Implementation & Full-Stack Integration',
    isProjectReview: true,
    overview:
      'Second formal project review and spoken presentation transcript for the Diagnostic Laboratory Processing Portal. Details technical implementation of the front-end interface, Flask backend services, Pandas CSV processing, SQLite storage, Dropbox API file exchange, and links to the full Google Drive demonstration video.',
    sourceNote:
      'Verified Lab Project Review 2 documentation (Reg No: 23MID0018, Faculty: Sharmila Banu K). Contains full verbal demonstration transcript and external Google Drive demonstration video link.',
    keyTakeaways: [
      'Documented full stack implementation combining HTML/CSS/JS frontend with Python Flask backend.',
      'Implemented CSV request parsing and validation using Pandas and SQLite persistence.',
      'Integrated Dropbox REST API for automated bidirectional file transfers between hospital and lab folders.',
      'Provided verified Google Drive demonstration video link documenting the live working system.',
      'Recorded technical presentation transcript explaining portal mechanics and clinical benefits.'
    ],
    tags: ['Full Stack', 'Flask', 'Dropbox API', 'Pandas', 'Review 2', 'Video Demo'],
    topics: [
      {
        title: 'Full-Stack Implementation & Technical Stack',
        pageReference: 'Page 2',
        summary:
          'Detailed technology stack powering the deployed diagnostic laboratory portal.',
        subtopics: [
          {
            name: 'Frontend Design & Interactivity',
            explanation:
              'Built with HTML5, CSS3, and JavaScript, creating an intuitive interface for lab staff to inspect requests, track clinical workflows, and record results.'
          },
          {
            name: 'Flask Backend & SQLite Persistence',
            explanation:
              'Python Flask handles user authentication, session security, test request status workflows, and result updates stored in SQLite.'
          }
        ]
      },
      {
        title: 'Data Ingestion & Dropbox API Automation',
        pageReference: 'Page 2',
        summary:
          'Automated clinical data processing using Pandas and Dropbox API file transfers.',
        subtopics: [
          {
            name: 'Pandas Data Ingestion & Sanitization',
            explanation:
              'Uses Pandas to parse incoming CSV test requests from hospitals, validate required columns, verify patient parameters, and generate structured result CSV files upon test completion.',
            codeSnippet: `# Automated result CSV generation and Dropbox upload
import pandas as pd
import dropbox

def export_test_results(test_id, patient_data, measurements):
    df = pd.DataFrame([{
        "Test_ID": test_id,
        "Patient_ID": patient_data["patient_id"],
        "Name": patient_data["name"],
        "Results": measurements,
        "Status": "COMPLETED"
    }])
    csv_bytes = df.to_csv(index=False).encode('utf-8')
    
    dbx = dropbox.Dropbox("ACCESS_TOKEN")
    dbx.files_upload(csv_bytes, f"/Results/result_{test_id}.csv")`
          },
          {
            name: 'Dropbox API Synchronization',
            explanation:
              'Integrates Dropbox API to download incoming requests from the /Requests/ folder and upload completed results to the /Results/ folder for hospital retrieval.'
          }
        ]
      },
      {
        title: 'Demonstration Video & Recorded Transcript',
        pageReference: 'Pages 1–2',
        summary:
          'Archived demonstration walkthrough and spoken presentation transcript.',
        subtopics: [
          {
            name: 'Google Drive Demonstration Video',
            explanation:
              'Full video demonstration of portal features and Dropbox sync workflow hosted on Google Drive: https://drive.google.com/file/d/1TvzCrkt5tEJVjkzVnMaiIc4qQNbNJFbu/view?usp=drivesdk'
          },
          {
            name: 'Spoken Technical Transcript',
            explanation:
              'Complete presentation transcript by Rajavel detailing user workflows, CSV/JSON data exchange, and backend architecture.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-9',
    unitNumber: 9,
    unitCode: '09',
    title: 'CSV and Structured-Data Handling with Python & Pandas',
    pdfFilename: 'sub9.pdf',
    pdfPath: '/evidence/learning-outcomes/sub9.pdf',
    fileSize: '307 KB',
    pageCount: 9,
    category: 'Data Engineering & Serialization',
    overview:
      'Laboratory exercises in structured data persistence comparing Python\'s built-in csv and json modules with high-performance Pandas serialization. Covers CSV readers, writers, DictWriter field mismatch handling, JSON serialization with dump/load, and DataFrame inspection methods (head, info, describe, filtering, column mutations).',
    sourceNote:
      'Verified academic laboratory submission 23mid0018(csv,json).html (Student: Rajavelmurugan S, Reg No: 23MID0018). Contains 9 pages of verified code cells, tracebacks, and terminal outputs.',
    keyTakeaways: [
      'Mastered Python standard csv module: csv.writer, writerow/writerows, and newline="" configuration on Windows.',
      'Handled csv.DictWriter field mismatches and resolved ValueError exceptions when dictionary keys differ from declared fieldnames.',
      'Demonstrated structured data serialization and deserialization using the standard json module (json.dump and json.load).',
      'Compared native serialization with Pandas DataFrame to_csv, read_csv, to_json, and read_json workflows.',
      'Inspected serialized dataframes using .head(), .info(), and .describe(), performing column filtering and dynamic column assignments.'
    ],
    tags: ['CSV Module', 'JSON Module', 'Pandas Serialization', 'Data Inspection', 'Error Handling'],
    topics: [
      {
        title: 'Python Standard csv Module & Error Handling',
        pageReference: 'Pages 1–3',
        summary:
          'Low-level tabular file operations using Python\'s built-in csv library.',
        subtopics: [
          {
            name: 'Basic Writing, Header Specification & Row Appending',
            explanation:
              'Used csv.writer with newline="" to prevent blank line insertion. Wrote header and data rows using writerow() and writerows(), verified paths with os.path.abspath(), and appended records with "a" mode.',
            codeSnippet: `import csv
import os

header = ["Name", "CGPA", "Certification_count", "Internship_Exp_yrs"]
data = [
    ["Raja", "9.11", "3", "3 month"],
    ["Murugan", "9.20", "2", "2 yrs"]
]

with open("student.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(data)`
          },
          {
            name: 'DictWriter & Fieldname Mismatch Handling',
            explanation:
              'Investigated csv.DictWriter with specified fieldnames. Analyzed the ValueError triggered when dictionary keys contained trailing whitespace ("Name ", "CGPA ") not matching declared fieldnames, demonstrating strict schema enforcement.',
            codeSnippet: `fields = ["Name", "CGPA", "Certification_count", "Intern_exp"]
with open("students_dict.csv", "w") as file:
    writer = csv.DictWriter(file, fieldnames=fields)
    # Must match declared fieldnames exactly to avoid ValueError
    writer.writerow({"Name": "Rajavel", "CGPA": 9.11, "Certification_count": 3, "Intern_exp": "3 yrs"})`
          },
          {
            name: 'Reading Records with csv.reader',
            explanation:
              'Opened files in read mode ("r") and iterated over csv.reader row vectors to extract stored values.'
          }
        ]
      },
      {
        title: 'DataFrame CSV Serialization with Pandas',
        pageReference: 'Pages 3–4',
        summary:
          'High-level tabular persistence and DataFrame concatenation.',
        subtopics: [
          {
            name: 'DataFrame Export & Ingestion',
            explanation:
              'Loaded student records into a DataFrame and exported to CSV with index=False using df.to_csv(), then re-ingested with pd.read_csv().'
          },
          {
            name: 'Row Concatenation with pd.concat',
            explanation:
              'Appended new student records to existing DataFrames using pd.concat([df, rec1]), observing column alignment.'
          }
        ]
      },
      {
        title: 'Standard json Module Serialization',
        pageReference: 'Pages 5–6',
        summary:
          'Hierarchical object persistence using Python\'s native json library.',
        subtopics: [
          {
            name: 'json.dump & File Persistence',
            explanation:
              'Serialized Python dictionary collections directly into .json files using json.dump(dict_data, file).',
            codeSnippet: `import json

student_data = [
    {"Name": "Rajavel", "CGPA": 9.11, "Certification_count": 3, "Intern_exp": "3 yrs"},
    {"Name": "Murugan", "CGPA": 7.11, "Certification_count": 4, "Intern_exp": "4 yrs"}
]

with open("student.json", "w") as file:
    json.dump(student_data, file)`
          },
          {
            name: 'json.load & Object Deserialization',
            explanation:
              'Loaded JSON files back into native Python dictionaries and lists using json.load(file), iterating over keys and values.'
          }
        ]
      },
      {
        title: 'Pandas JSON Operations & Structural Data Inspection',
        pageReference: 'Pages 6–8',
        summary:
          'DataFrame JSON I/O, summary statistics, and boolean filtering.',
        subtopics: [
          {
            name: 'df.to_json & df.read_json',
            explanation:
              'Serialized DataFrames to JSON format using df.to_json("student_details.json") and loaded them back with pd.read_json().'
          },
          {
            name: 'Structural Data Inspection (head, info, describe)',
            explanation:
              'Inspected datasets using df.head() for row preview, df.info() for column counts and memory usage, and df.describe() for summary statistics (count, mean, standard deviation, quartiles, min/max).',
            codeSnippet: `import pandas as pd

df = pd.read_json("student_details.json")
print(df.head())
print(df.info())
print(df.describe())

# Boolean mask filtering
certified_students = df[df["certificates"] > 4]
# Adding dynamic column
df["remarks"] = df["certificates"]`
          },
          {
            name: 'Column Selection, Boolean Filtering & Column Mutation',
            explanation:
              'Selected specific columns (df["CGPA"]), filtered records using boolean conditions (df["certificates"] > 4), and added dynamic columns (df["remarks"] = df["certificates"]).'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-case-study',
    unitNumber: 10,
    unitCode: 'CS',
    title: 'Python Symbol Table Analysis — Case Study',
    pdfFilename: 'Case_study.pdf',
    pdfPath: '/evidence/Case_study.pdf',
    fileSize: '494 KB',
    pageCount: 18,
    category: 'Static Code Analysis & Compiler Internals',
    overview:
      "A comprehensive academic case study on Python's built-in symtable module for compiler-generated symbol table access and static code analysis. Analyzes variable and function scopes, namespaces, identifier properties, and compiler symbol tables without executing the source code.",
    sourceNote:
      'Verified academic Case Study submission for CSI3007 Advanced Python Programming (Reg No: 23MID0018, Faculty: Sharmila Banu K, Lab Slot: C1). Contains 18 pages of detailed analysis, code examples with outputs, and method evaluations.',
    keyTakeaways: [
      "Explored Python's built-in symtable module for inspecting compiler-generated symbol tables without executing code.",
      'Documented core symbol table functions: symtable(), get_name(), get_type(), get_lineno(), get_identifiers(), lookup(), and get_children().',
      'Analyzed symbol scope properties: is_global(), is_local(), is_parameter(), is_imported(), is_namespace(), is_referenced(), and is_assigned().',
      'Mapped domain applications across static analysis tools (Pyflakes, Pylint, MyPy, Ruff), IDEs (VS Code, PyCharm), and SAST security tools (CodeQL, Semgrep).',
      'Evaluated advantages (no code execution required, standard library built-in, fast scope analysis) and limitations (no runtime error detection).'
    ],
    tags: ['symtable', 'Symbol Table', 'Static Analysis', 'Compilers', 'Scope Analysis', 'Case Study', 'Jeremy Hylton', 'CodeQL'],
    topics: [
      {
        title: 'Introduction, Objectives & Architecture of symtable',
        pageReference: 'Pages 2–3',
        summary:
          "Exploration of Python's built-in static code analysis module that provides access to compiler-generated symbol tables.",
        subtopics: [
          {
            name: 'About symtable & Static Code Analysis',
            explanation:
              'The symtable module is part of Python\'s Standard Library. Unlike standard modules that execute code, symtable parses Python source into a symbol table storing identifiers (variables, functions, classes, imports) and their scopes without code execution.'
          },
          {
            name: 'Why symtable was Developed & Objectives',
            explanation:
              'Developed to assist the Python compiler in determining identifier visibility before execution: distinguishing variables from functions, resolving local vs global scopes, tracking imports, and aiding linters in detecting scope defects early.'
          },
          {
            name: 'Developer & Contributor Attribution',
            explanation:
              'Originally authored by Jeremy Hylton (credited in official Python documentation), documented by Benjamin Peterson, maintained by the Python Core Development Team under the Python Software Foundation (PSF), created by Guido van Rossum.'
          }
        ]
      },
      {
        title: 'Domain Applications in Developer Tooling',
        pageReference: 'Pages 3–4',
        summary:
          'Real-world industry applications of symbol table analysis across linting, IDE language servers, refactoring, and security auditing.',
        subtopics: [
          {
            name: 'Static Code Analysis & Linters',
            explanation:
              'Detects unused variables, undefined names, and scope issues before execution in tools like Pyflakes, Pylint, MyPy, and Ruff.'
          },
          {
            name: 'IDEs, Code Editors & Language Servers',
            explanation:
              'Powers auto-completion, Go to Definition, Rename Symbol, and real-time error detection in VS Code (Pylance/Pyright), PyCharm, and Jupyter Notebook.'
          },
          {
            name: 'Compiler Education & Code Refactoring',
            explanation:
              'Demonstrates CPython compiler internals in university courses and powers automated refactoring libraries like Rope, LibCST, and Bowler.'
          },
          {
            name: 'Security & Code Auditing (SAST)',
            explanation:
              'Assists Static Application Security Testing (SAST) tools, CodeQL, and Semgrep in variable tracking and data-flow security checks.'
          }
        ]
      },
      {
        title: 'Core symtable Functions & Symbol Table Traversal',
        pageReference: 'Pages 4–9',
        summary:
          'Creating symbol tables and querying metadata, types, line numbers, and child scopes.',
        subtopics: [
          {
            name: 'symtable.symtable() Creation',
            explanation:
              'Creates a SymbolTable instance from source code string, filename, and compile type ("exec", "eval", or "single").',
            codeSnippet: `import symtable

try:
    code = "x = 10"  # Python source code
    table = symtable.symtable(code, "demo.py", "exec")
    print(table)  # <SymbolTable for module demo.py>
except Exception as e:
    print("Error:", e)`
          },
          {
            name: 'get_name(), get_type() & get_lineno()',
            explanation:
              'get_name() returns scope name ("top" for module); get_type() returns "module", "function", or "class"; get_lineno() returns the starting line number in the source file (usually 0 for top module).',
            codeSnippet: `print("Name:", table.get_name())    # Output: top
print("Type:", table.get_type())    # Output: module
print("Line:", table.get_lineno())  # Output: 0`
          },
          {
            name: 'get_identifiers() & lookup()',
            explanation:
              'get_identifiers() returns all identifier names as dict_keys. lookup("x") searches for a specific symbol in the table, returning a Symbol object representing its declaration.',
            codeSnippet: `code = """
a = 10
b = 20
"""
table = symtable.symtable(code, "demo.py", "exec")
print(table.get_identifiers())  # dict_keys(['a', 'b'])
symbol_a = table.lookup("a")     # <symbol 'a': LOCAL, DEF_LOCAL>`
          },
          {
            name: 'get_children() Nested Scope Traversal',
            explanation:
              'Returns child symbol tables for nested blocks (functions, classes). In def add(): pass, table.get_children() returns [<Function SymbolTable for add in demo.py>]. Accessing out-of-range index raises IndexError.',
            codeSnippet: `code = """
def add():
    pass
"""
table = symtable.symtable(code, "demo.py", "exec")
print(table.get_children())  # [<Function SymbolTable for add in demo.py>]`
          }
        ]
      },
      {
        title: 'Symbol Properties & Scope Introspection Methods',
        pageReference: 'Pages 9–17',
        summary:
          'Detailed inspection of individual symbols using boolean predicates to evaluate scope and lifetime.',
        subtopics: [
          {
            name: 'is_global() & is_local() Scope Checks',
            explanation:
              'is_global() returns True for top-level module variables; is_local() returns True for variables declared within function local scopes.',
            codeSnippet: `# Global check
table = symtable.symtable("x = 100", "demo.py", "exec")
print(table.lookup("x").is_global())  # True

# Local check
code = "def test():\\n    a = 10"
table = symtable.symtable(code, "demo.py", "exec")
child = table.get_children()[0]
print(child.lookup("a").is_local())   # True`
          },
          {
            name: 'is_parameter() Function Argument Check',
            explanation:
              'Returns True if the variable is passed as a function argument in def add(a, b): return a + b (child.lookup("a").is_parameter() returns True). Searching for undeclared parameters raises an error.'
          },
          {
            name: 'is_imported() & is_namespace() Checks',
            explanation:
              'is_imported() returns True for modules imported via import statements (table.lookup("math").is_imported() -> True). is_namespace() returns True for class or function definitions (class Student -> True). get_namespaces() returns associated namespace list.'
          },
          {
            name: 'is_referenced() & is_assigned() State Analysis',
            explanation:
              'is_referenced() verifies if a variable is accessed/read after declaration (e.g. print(x) -> True). is_assigned() verifies if a value is assigned in code (x = 100 -> True). Demonstrates AttributeError when miscalling non-existent method is_assign().',
            codeSnippet: `code = """
x = 10
print(x)
"""
table = symtable.symtable(code, "demo.py", "exec")
sym = table.lookup("x")
print("Referenced:", sym.is_referenced())  # True
print("Assigned:", sym.is_assigned())      # True`
          }
        ]
      },
      {
        title: 'Advantages, Limitations & Official References',
        pageReference: 'Pages 17–18',
        summary:
          'Critical appraisal of symtable utility for static analysis alongside documentation citations.',
        subtopics: [
          {
            name: 'Advantages of symtable',
            explanation:
              'No code execution required, built into Python standard library, fast compile-time scope analysis, easy-to-use API, and direct alignment with CPython compiler data structures.'
          },
          {
            name: 'Limitations & Constraints',
            explanation:
              'Does not produce runtime results, limited to symbol/scope metadata rather than full semantic analysis, requires compiler concept understanding, Python-specific, and cannot detect runtime execution exceptions.'
          },
          {
            name: 'Documentation References',
            explanation:
              '1. Python Software Foundation. symtable — Access to the compiler\'s symbol tables. Python 3 Documentation (https://docs.python.org/3/library/symtable.html). 2. Python Software Foundation. The Python Standard Library (https://docs.python.org/3/library/).'
          }
        ]
      }
    ]
  }
];
