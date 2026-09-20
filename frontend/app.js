

const DEMO_TOPICS = [

    {
        id: "os-basics",

        title: "OS Basics",

        description:
            "Understand what an Operating System does and how it manages computer resources.",

        memory:
            "Think of the Operating System as the manager between you and the hardware.",

        videoScenes: [

            {
                caption:
                    "You give instructions to your computer.",

                visual:
                    "USER → COMPUTER"
            },

            {
                caption:
                    "The Operating System acts as the manager.",

                visual:
                    "USER → OS → HARDWARE"
            },

            {
                caption:
                    "It manages CPU, memory, files and devices.",

                visual:
                    "CPU • MEMORY • FILES • DEVICES"
            }

        ],

        questions: {

            scenario: [

                {
                    q:
                        "You open a browser while music is playing. Who manages these activities?",

                    options: [
                        "Operating System",
                        "Keyboard",
                        "Monitor",
                        "Printer"
                    ],

                    answer: 0,

                    explanation:
                        "The Operating System coordinates programs and hardware resources."
                },

                {
                    q:
                        "Your application needs memory to run. Which component helps manage memory?",

                    options: [
                        "Mouse",
                        "Operating System",
                        "Speaker",
                        "Keyboard"
                    ],

                    answer: 1,

                    explanation:
                        "Memory management is one of the major responsibilities of an Operating System."
                }

            ],

            concept: [

                {
                    q:
                        "Which relationship is correct?",

                    options: [
                        "User → OS → Hardware",
                        "Hardware → User → OS",
                        "OS → User → Keyboard",
                        "Printer → OS → User"
                    ],

                    answer: 0,

                    explanation:
                        "The OS provides an interface between users/applications and hardware."
                },

                {
                    q:
                        "Which set contains resources commonly managed by an OS?",

                    options: [
                        "CPU and memory",
                        "Only keyboard",
                        "Only monitor",
                        "Only printer"
                    ],

                    answer: 0,

                    explanation:
                        "The OS manages resources such as CPU time, memory, files and devices."
                }

            ],

            quick: [

                {
                    q:
                        "The OS is mainly a...",

                    options: [
                        "Game",
                        "Resource manager",
                        "Monitor",
                        "Keyboard"
                    ],

                    answer: 1,

                    explanation:
                        "An OS manages system resources and provides services to programs."
                },

                {
                    q:
                        "Which is NOT normally an OS responsibility?",

                    options: [
                        "Memory management",
                        "Process management",
                        "File management",
                        "Manufacturing the CPU"
                    ],

                    answer: 3,

                    explanation:
                        "The OS manages the CPU's use, but it does not manufacture the CPU."
                }

            ]

        }

    },


    {
        id: "processes",

        title: "Processes",

        description:
            "Learn how programs become processes when they start executing.",

        memory:
            "Program = passive instructions. Process = program in execution.",

        videoScenes: [

            {
                caption:
                    "A program is stored as instructions.",

                visual:
                    "PROGRAM"
            },

            {
                caption:
                    "When it starts running, it becomes a process.",

                visual:
                    "PROGRAM → RUNNING"
            },

            {
                caption:
                    "The process receives resources such as memory and CPU time.",

                visual:
                    "PROCESS → CPU + MEMORY"
            }

        ],

        questions: {

            scenario: [

                {
                    q:
                        "You launch Calculator. What is it after it begins executing?",

                    options: [
                        "A process",
                        "A keyboard",
                        "A file extension",
                        "A compiler"
                    ],

                    answer: 0,

                    explanation:
                        "A running instance of a program is called a process."
                },

                {
                    q:
                        "Two copies of the same program are running. How many processes can exist?",

                    options: [
                        "Only one",
                        "Two",
                        "Zero",
                        "Only after shutdown"
                    ],

                    answer: 1,

                    explanation:
                        "Each running instance can be represented by its own process."
                }

            ],

            concept: [

                {
                    q:
                        "Which statement is correct?",

                    options: [
                        "A process is a program in execution",
                        "A process is only source code",
                        "A process is hardware",
                        "A process is a monitor"
                    ],

                    answer: 0,

                    explanation:
                        "A process is an executing instance of a program."
                },

                {
                    q:
                        "A process normally requires...",

                    options: [
                        "Resources",
                        "Only a printer",
                        "No memory",
                        "No CPU time"
                    ],

                    answer: 0,

                    explanation:
                        "Processes require system resources to execute."
                }

            ],

            quick: [

                {
                    q:
                        "Program + execution = ?",

                    options: [
                        "Process",
                        "File",
                        "Keyboard",
                        "Folder"
                    ],

                    answer: 0,

                    explanation:
                        "A program in execution is a process."
                },

                {
                    q:
                        "Who manages processes?",

                    options: [
                        "Operating System",
                        "Monitor",
                        "Mouse",
                        "Printer"
                    ],

                    answer: 0,

                    explanation:
                        "The OS performs process management."
                }

            ]

        }

    },


    {
        id: "threads",

        title: "Threads",

        description:
            "Understand how multiple execution paths can exist inside a process.",

        memory:
            "Think of a process as a house and threads as workers inside the house.",

        videoScenes: [

            {
                caption:
                    "Imagine a process as a house.",

                visual:
                    "🏠 PROCESS"
            },

            {
                caption:
                    "Multiple workers can work inside it.",

                visual:
                    "🏠 → 👷 👷 👷"
            },

            {
                caption:
                    "Those workers represent threads of execution.",

                visual:
                    "PROCESS → THREADS"
            }

        ],

        questions: {

            scenario: [

                {
                    q:
                        "A program downloads a file while updating its interface. What helps provide separate execution paths?",

                    options: [
                        "Threads",
                        "Monitor",
                        "Printer",
                        "Folder"
                    ],

                    answer: 0,

                    explanation:
                        "Threads allow multiple execution paths within a process."
                },

                {
                    q:
                        "Multiple threads generally belong to...",

                    options: [
                        "A process",
                        "A monitor",
                        "A keyboard",
                        "A printer"
                    ],

                    answer: 0,

                    explanation:
                        "Threads exist within a process."
                }

            ],

            concept: [

                {
                    q:
                        "Which analogy best describes threads?",

                    options: [
                        "Workers inside a process",
                        "Computers inside a keyboard",
                        "Files inside a monitor",
                        "Printers inside a mouse"
                    ],

                    answer: 0,

                    explanation:
                        "A process can contain multiple threads of execution."
                },

                {
                    q:
                        "Threads of one process generally share...",

                    options: [
                        "Process resources",
                        "Different computers",
                        "Different monitors",
                        "No resources"
                    ],

                    answer: 0,

                    explanation:
                        "Threads within a process share many process-level resources."
                }

            ],

            quick: [

                {
                    q:
                        "A thread is primarily a...",

                    options: [
                        "Unit of execution",
                        "Printer",
                        "File",
                        "Monitor"
                    ],

                    answer: 0,

                    explanation:
                        "A thread is a unit of execution within a process."
                },

                {
                    q:
                        "Can one process contain multiple threads?",

                    options: [
                        "Yes",
                        "No",
                        "Only in BIOS",
                        "Only after shutdown"
                    ],

                    answer: 0,

                    explanation:
                        "A process can contain multiple threads."
                }

            ]

        }

    },


    {
        id: "cpu-scheduling",

        title: "CPU Scheduling",

        description:
            "Learn how the OS decides which process gets CPU time.",

        memory:
            "CPU scheduling is like deciding who gets served next in a queue.",

        videoScenes: [

            {
                caption:
                    "Several processes wait for the CPU.",

                visual:
                    "P1  P2  P3  P4"
            },

            {
                caption:
                    "The scheduler chooses who runs next.",

                visual:
                    "QUEUE → SCHEDULER"
            },

            {
                caption:
                    "The selected process gets CPU time.",

                visual:
                    "SCHEDULER → CPU"
            }

        ],

        questions: {

            scenario: [

                {
                    q:
                        "Four processes are waiting for the CPU. Who decides which runs next?",

                    options: [
                        "CPU Scheduler",
                        "Monitor",
                        "Keyboard",
                        "Printer"
                    ],

                    answer: 0,

                    explanation:
                        "The CPU scheduler selects processes for CPU execution."
                },

                {
                    q:
                        "Why is scheduling needed?",

                    options: [
                        "To decide CPU allocation",
                        "To manufacture CPUs",
                        "To display pixels",
                        "To print documents"
                    ],

                    answer: 0,

                    explanation:
                        "Scheduling determines how CPU time is allocated among processes."
                }

            ],

            concept: [

                {
                    q:
                        "Which sequence is correct?",

                    options: [
                        "Processes → Scheduler → CPU",
                        "CPU → Printer → Scheduler",
                        "Monitor → CPU → User",
                        "Keyboard → Printer → CPU"
                    ],

                    answer: 0,

                    explanation:
                        "The scheduler selects a waiting process for CPU execution."
                },

                {
                    q:
                        "Round Robin is a...",

                    options: [
                        "CPU scheduling algorithm",
                        "File format",
                        "Memory chip",
                        "Programming language"
                    ],

                    answer: 0,

                    explanation:
                        "Round Robin is a CPU scheduling algorithm."
                }

            ],

            quick: [

                {
                    q:
                        "Who selects the next process?",

                    options: [
                        "Scheduler",
                        "Mouse",
                        "Monitor",
                        "Printer"
                    ],

                    answer: 0,

                    explanation:
                        "The scheduler selects the next process."
                },

                {
                    q:
                        "CPU scheduling mainly concerns...",

                    options: [
                        "CPU allocation",
                        "Screen brightness",
                        "Keyboard layout",
                        "File naming"
                    ],

                    answer: 0,

                    explanation:
                        "CPU scheduling controls allocation of processor time."
                }

            ]

        }

    },


    {
        id: "deadlocks",

        title: "Deadlocks",

        description:
            "Understand how processes can become stuck while waiting for resources.",

        memory:
            "Deadlock = processes waiting for each other forever.",

        videoScenes: [

            {
                caption:
                    "Process A holds Resource 1.",

                visual:
                    "A → R1"
            },

            {
                caption:
                    "Process B holds Resource 2.",

                visual:
                    "B → R2"
            },

            {
                caption:
                    "A waits for B and B waits for A.",

                visual:
                    "A → B → A"
            }

        ],

        questions: {

            scenario: [

                {
                    q:
                        "Process A waits for B, while B waits for A. What can occur?",

                    options: [
                        "Deadlock",
                        "Compilation",
                        "Scheduling success",
                        "File deletion"
                    ],

                    answer: 0,

                    explanation:
                        "Circular waiting can create a deadlock."
                },

                {
                    q:
                        "In a deadlock, processes are typically...",

                    options: [
                        "Waiting indefinitely",
                        "Running normally",
                        "Printing",
                        "Shutting down"
                    ],

                    answer: 0,

                    explanation:
                        "Deadlocked processes cannot proceed because they wait for resources held by one another."
                }

            ],

            concept: [

                {
                    q:
                        "Which condition is associated with deadlock?",

                    options: [
                        "Circular wait",
                        "Fast CPU",
                        "Large monitor",
                        "High screen brightness"
                    ],

                    answer: 0,

                    explanation:
                        "Circular wait is one of the necessary conditions associated with deadlock."
                },

                {
                    q:
                        "Deadlock involves...",

                    options: [
                        "Processes waiting for resources",
                        "Only keyboard input",
                        "Only screen output",
                        "Internet speed"
                    ],

                    answer: 0,

                    explanation:
                        "Deadlock concerns processes waiting indefinitely for resources."
                }

            ],

            quick: [

                {
                    q:
                        "Deadlock means processes are...",

                    options: [
                        "Stuck waiting",
                        "Downloading",
                        "Printing",
                        "Compiling successfully"
                    ],

                    answer: 0,

                    explanation:
                        "Deadlocked processes remain stuck waiting."
                },

                {
                    q:
                        "A → B → A is an example of...",

                    options: [
                        "Circular wait",
                        "Memory allocation",
                        "File management",
                        "Booting"
                    ],

                    answer: 0,

                    explanation:
                        "The cycle represents circular waiting."
                }

            ]

        }

    }

];




const state = {

    uploadedFile: null,

    uploadedText: "",

    topics: [],

    currentTopicIndex: 0,

    currentMode: "scenario",

    currentQuestPosition: 0,

    currentQuestQuestions: [],

    questionAttempt: 1,

    xp: 0,

    streak: 0,

    totalRetries: 0,

    firstAttemptCorrect: 0,

    secondAttemptCorrect: 0,

    modeStats: {

        scenario: {
            correct: 0,
            firstAttemptCorrect: 0,
            retryCorrect: 0,
            retries: 0
        },

        concept: {
            correct: 0,
            firstAttemptCorrect: 0,
            retryCorrect: 0,
            retries: 0
        },

        quick: {
            correct: 0,
            firstAttemptCorrect: 0,
            retryCorrect: 0,
            retries: 0
        }

    },

    retryMode: false,

    retryQuestions: [],

    retryPosition: 0,

    retryCorrect: 0,

    currentVideoScene: 0,

    currentRelearnScene: 0

};




function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.remove("active");
        });

    const screen =
        document.getElementById(id);

    if (!screen) return;

    screen.classList.add("active");

    window.scrollTo(0, 0);
}




function handleFile(file) {

    if (!file) return;

    state.uploadedFile = file;

    document.getElementById(
        "fileName"
    ).textContent =
        `Selected: ${file.name}`;

    document.getElementById(
        "analyzeBtn"
    ).classList.remove("hidden");
}




async function startDemo() {
    try {
        const response = await fetch("http://localhost:5000/api/topics");

        if (!response.ok) {
            throw new Error("Failed to fetch topics");
        }

        const result = await response.json();

        state.topics = result.data.map((topic, index) => ({
            // Backend ID — use this for API calls
            backendId: topic.id,

            // Keep the existing frontend ID
            id: DEMO_TOPICS[index]?.id || String(topic.id),

            title: topic.name,

            description:
                DEMO_TOPICS[index]?.description ||
                `Learn about ${topic.name}`,

            mastery: topic.mastery,
            status: topic.status,

            memory: DEMO_TOPICS[index]?.memory || "",

            videoScenes: [],

            questions: {
                scenario: [],
                concept: [],
                quick: []
            }
        }));

        console.log("Topics loaded from backend:", state.topics);

        renderMindMap();
        showScreen("mapScreen");

    } catch (error) {
        console.error("Backend topic loading failed:", error);

        // Keep the existing demo working if backend fails
        state.topics = DEMO_TOPICS.map((topic, index) => ({
            ...topic,
            backendId: index + 1
        }));

        renderMindMap();
        showScreen("mapScreen");
    }
}



async function analyzeUploadedNotes() {

    if (!state.uploadedFile) {
        showToast("Please select a file first.");
        return;
    }

    showScreen("analysisScreen");
    startAnalysisAnimation();

    try {

        const notesText =
            state.uploadedText || "";

        const response = await fetch(
            "http://localhost:5000/api/analyze",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify({
                    notesText
                })
            }
        );

        const result =
            await response.json();

        if (!response.ok || !result.success) {
            throw new Error(
                result.error ||
                "AI analysis failed"
            );
        }

        console.log(
            "AI analysis successful:",
            result.data
        );

        // Keep your existing demo topics
        // but preserve backend IDs.
        state.topics =
            JSON.parse(
                JSON.stringify(DEMO_TOPICS)
            );

        state.topics =
            state.topics.map(
                (topic, index) => ({
                    ...topic,
                    backendId: index + 1
                })
            );

        renderMindMap();
        showScreen("mapScreen");

    } catch (error) {

        console.error(
            "AI analysis failed:",
            error
        );

        // Demo fallback
        state.topics =
            JSON.parse(
                JSON.stringify(DEMO_TOPICS)
            );

        state.topics =
            state.topics.map(
                (topic, index) => ({
                    ...topic,
                    backendId: index + 1
                })
            );

        renderMindMap();
        showScreen("mapScreen");

        showToast(
            "AI unavailable. Demo content loaded."
        );
    }
}



function startAnalysisAnimation() {

    const progress =
        document.getElementById(
            "loadingProgress"
        );

    const text =
        document.getElementById(
            "analysisText"
        );

    const messages = [

        "Extracting content...",

        "Finding important topics...",

        "Building learning map...",

        "Creating challenges..."

    ];

    progress.style.width =
        "0%";

    messages.forEach(
        (message, index) => {

            setTimeout(() => {

                progress.style.width =
                    `${((index + 1) / 4) * 100}%`;

                text.textContent =
                    message;

                const step =
                    document.getElementById(
                        `step${index + 1}`
                    );

                if (step) {

                    step.textContent =
                        `✓ ${message}`;

                }

            }, index * 650);

        }
    );
}




function renderMindMap() {

    const container =
        document.getElementById("mindMap");

    container.innerHTML = "";

    state.topics.forEach(
        (topic, index) => {

            const node =
                document.createElement("div");

            const isUnlocked =
                topic.status === "unlocked" ||
                topic.status === "completed";

            node.className =
                isUnlocked
                    ? "map-node unlocked"
                    : "map-node locked";

            node.innerHTML = `

                <h3>
                    ${
                        topic.status === "completed"
                            ? "✅"
                            : isUnlocked
                                ? "⚔️"
                                : "🔒"
                    }
                    ${topic.title}
                </h3>

                <p>
                    ${topic.description}
                </p>

            `;

            if (isUnlocked) {

                node.onclick =
                    () => openTopic(index);

            }

            container.appendChild(node);

        }
    );

    document.getElementById(
        "mapTitle"
    ).textContent =
        "Your AI Learning World";

    document.getElementById(
        "mapXP"
    ).textContent =
        state.xp;
}



async function openTopic(index) {
    state.currentTopicIndex = index;

    const topic = state.topics[index];

    const backendId = topic.backendId ?? (index + 1);

    try {
        const response = await fetch(
            `http://localhost:5000/api/topics/${backendId}/lesson`
        );

        const result = await response.json();

        if (result.success && result.data) {
            topic.videoScenes = result.data.scenes || result.data;
        }

        if (!topic.videoScenes || topic.videoScenes.length === 0) {
            console.log("Using fallback lesson data");
            topic.videoScenes = DEMO_TOPICS[index].videoScenes;
        }

        console.log("Lesson loaded:", topic.videoScenes);

    } catch (error) {
        console.error("Lesson loading failed:", error);
        topic.videoScenes = DEMO_TOPICS[index].videoScenes;
    }

    renderLesson();
    showScreen("lessonScreen");
}


function renderLesson() {

    const topic =
        state.topics[
            state.currentTopicIndex
        ];

    document.getElementById(
        "lessonTitle"
    ).textContent =
        topic.title;

    document.getElementById(
        "lessonDescription"
    ).textContent =
        topic.description;

    document.getElementById(
        "lessonMemory"
    ).textContent =
        topic.memory;

    state.currentVideoScene =
        0;

    renderVideoScene();
}


function renderVideoScene() {

    const topic =
        state.topics[
            state.currentTopicIndex
        ];

    const scenes =
        topic.videoScenes;

    const scene =
        scenes[
            state.currentVideoScene
        ];

    document.getElementById(
        "lessonCaption"
    ).textContent =
        scene.caption;

    document.getElementById(
        "lessonVisual"
    ).textContent =
        scene.visual;

    document.getElementById(
        "videoSceneCounter"
    ).textContent =
        `Scene ${
            state.currentVideoScene + 1
        }/${scenes.length}`;

    document.getElementById(
        "videoProgress"
    ).style.width =
        `${
            (
                (state.currentVideoScene + 1)
                /
                scenes.length
            ) * 100
        }%`;
}


function nextVideoScene() {

    const topic =
        state.topics[
            state.currentTopicIndex
        ];

    if (
        state.currentVideoScene
        <
        topic.videoScenes.length - 1
    ) {

        state.currentVideoScene++;

        renderVideoScene();

    }
}


function previousVideoScene() {

    if (
        state.currentVideoScene > 0
    ) {

        state.currentVideoScene--;

        renderVideoScene();

    }
}

function openModeSelection() {

    showScreen(
        "modeScreen"
    );
}


function getQuestions(mode) {

    return state.topics[
        state.currentTopicIndex
    ].questions[mode];

}


function getModeName(mode) {

    return {

        scenario:
            "Scenario Sprint",

        concept:
            "Concept Connect",

        quick:
            "Quick Fire"

    }[mode];

}


function getModeIcon(mode) {

    return {

        scenario:
            "🏃",

        concept:
            "🧩",

        quick:
            "⚡"

    }[mode];

}


function resetStats() {

    state.xp = 0;

    state.streak = 0;

    state.totalRetries = 0;

    state.firstAttemptCorrect = 0;

    state.secondAttemptCorrect = 0;

    Object.values(
        state.modeStats
    ).forEach(stat => {

        stat.correct = 0;

        stat.firstAttemptCorrect = 0;

        stat.retryCorrect = 0;

        stat.retries = 0;

    });
}

async function startQuest() {

    resetStats();

    state.retryMode = false;
    state.currentMode = "scenario";
    state.currentQuestPosition = 0;
    state.questionAttempt = 1;

    const topic = state.topics[state.currentTopicIndex];

    const backendId =
        topic.backendId ?? (state.currentTopicIndex + 1);

    try {

        const response = await fetch(
            `http://localhost:5000/api/topics/${backendId}/quiz`
        );

        const result = await response.json();

        // Backend/Gemini failed → use existing demo questions
        if (!response.ok || !result.success || !result.data) {
            throw new Error("Backend quiz unavailable");
        }

        console.log("Quiz loaded from backend:", result.data);

        // For now, use backend questions only if they contain answers
        if (
            Array.isArray(result.data) &&
            result.data.length > 0 &&
            result.data[0].answer !== undefined
        ) {
            topic.questions = {
                scenario: result.data,
                concept: [],
                quick: []
            };

            state.currentQuestQuestions = result.data;
        } else {
            throw new Error("Backend quiz has no answer data");
        }

    } catch (error) {

        console.log("Gemini quiz unavailable.");
        console.log("Using predefined demo questions instead.");

        // IMPORTANT: keep the working frontend questions
        const demoTopic = DEMO_TOPICS[state.currentTopicIndex];

        topic.questions = demoTopic.questions;

        state.currentQuestQuestions =
            getQuestions("scenario");
    }

    showScreen("gameScreen");
    renderQuestion();
}

function renderQuestion() {

    const questions =
        state.retryMode
            ? state.retryQuestions
            : state.currentQuestQuestions;

    const position =
        state.retryMode
            ? state.retryPosition
            : state.currentQuestPosition;

    const question =
        questions[position];

    if (!question) {

        if (state.retryMode) {

            finishRetry();

        } else {

            finishQuest();

        }

        return;
    }


    document.getElementById(
        "gameModeIcon"
    ).textContent =
        state.retryMode
            ? "🔄"
            : getModeIcon(
                state.currentMode
            );


    document.getElementById(
        "gameModeName"
    ).textContent =
        state.retryMode
            ? "Weak Concept Retry"
            : getModeName(
                state.currentMode
            );


    const number =
        state.retryMode
            ? position + 1
            : getGlobalQuestionNumber();


    document.getElementById(
        "questionNumber"
    ).textContent =
        number;


    document.getElementById(
        "questionTagNumber"
    ).textContent =
        number;


    document.getElementById(
        "questionText"
    ).textContent =
        question.q;


    const options =
        document.getElementById(
            "optionsContainer"
        );

    options.innerHTML = "";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "option";

            button.innerHTML =
                `
                <strong>
                    ${String.fromCharCode(
                        65 + index
                    )}.
                </strong>
                ${option}
                `;

            button.onclick =
                () =>
                    answerQuestion(
                        index
                    );

            options.appendChild(
                button
            );

        }
    );


    document.getElementById(
        "feedback"
    ).innerHTML = "";


    resetArena();


    document.getElementById(
        "gameXP"
    ).textContent =
        state.xp;
}

function getGlobalQuestionNumber() {

    const base = {

        scenario: 0,

        concept: 2,

        quick: 4

    }[state.currentMode];

    return (
        base +
        state.currentQuestPosition +
        1
    );
}

function answerQuestion(
    selectedIndex
) {

    const questions =
        state.retryMode
            ? state.retryQuestions
            : state.currentQuestQuestions;

    const position =
        state.retryMode
            ? state.retryPosition
            : state.currentQuestPosition;

    const question =
        questions[position];

    const buttons =
        document.querySelectorAll(
            ".option"
        );

    if (!question) return;


    buttons.forEach(
        button => {
            button.disabled =
                true;
        }
    );


    if (
        selectedIndex ===
        question.answer
    ) {

        correctAnswer(
            selectedIndex,
            question,
            buttons
        );

    } else {

        wrongAnswer(
            selectedIndex,
            question,
            buttons
        );

    }
}



function correctAnswer(
    selectedIndex,
    question,
    buttons
) {

    /*
     * NO GREEN WHOLE ARENA.
     */

    buttons[
        selectedIndex
    ].style.borderColor =
        "var(--accent2)";

    buttons[
        selectedIndex
    ].style.background =
        "#22d3ee12";


    const player =
        document.getElementById(
            "playerCharacter"
        );

    player.classList.remove(
        "fall"
    );

    player.classList.add(
        "jump"
    );


    document.getElementById(
        "feedback"
    ).innerHTML =
        "✓ Correct!";


    document.getElementById(
        "feedback"
    ).style.color =
        "var(--green)";


    state.xp += 20;

    state.streak++;


    if (state.retryMode) {

        state.retryCorrect++;

    } else {

        const stats =
            state.modeStats[
                state.currentMode
            ];

        stats.correct++;


        if (
            state.questionAttempt === 1
        ) {

            stats.firstAttemptCorrect++;

            state.firstAttemptCorrect++;

        } else {

            stats.retryCorrect++;

            state.secondAttemptCorrect++;

        }

    }


    setTimeout(
        () => {

            player.classList.remove(
                "jump"
            );

            moveNext();

        },
        900
    );
}




function wrongAnswer(
    selectedIndex,
    question,
    buttons
) {

    const arena =
        document.getElementById(
            "gameArena"
        );


    /*
     * WHOLE ARENA RED
     */

    arena.classList.add(
        "wrong-state"
    );


    /*
     * Wrong answer RED
     */

    buttons[
        selectedIndex
    ].classList.add(
        "selected-wrong"
    );


    /*
     * Character falls
     */

    const player =
        document.getElementById(
            "playerCharacter"
        );

    player.classList.remove(
        "jump"
    );

    player.classList.add(
        "fall"
    );


    state.streak = 0;


    document.getElementById(
        "feedback"
    ).innerHTML =
        "✕ Wrong answer!";


    document.getElementById(
        "feedback"
    ).style.color =
        "var(--red)";


    /*
     * FIRST WRONG
     */

    if (
        state.questionAttempt === 1
    ) {

        state.questionAttempt = 2;


        if (!state.retryMode) {

            state.modeStats[
                state.currentMode
            ].retries++;

            state.totalRetries++;

        }


        setTimeout(
            () => {

                resetArena();

                retrySameQuestion();

            },
            900
        );


        return;
    }


    /*
     * SECOND WRONG
     */

    showAnswer(
        question,
        buttons
    );
}




function retrySameQuestion() {

    const buttons =
        document.querySelectorAll(
            ".option"
        );


    buttons.forEach(
        button => {

            button.disabled =
                false;

            button.classList.remove(
                "selected-wrong"
            );

        }
    );


    document.getElementById(
        "feedback"
    ).innerHTML =
        "🔄 Try the same question again!";


    document.getElementById(
        "feedback"
    ).style.color =
        "var(--yellow)";
}




function showAnswer(
    question,
    buttons
) {

    /*
     * Show correct answer.
     */

    buttons[
        question.answer
    ].classList.add(
        "correct-answer"
    );


    document.getElementById(
        "feedback"
    ).innerHTML = `

        <strong>
            Correct answer:
            ${String.fromCharCode(
                65 + question.answer
            )}
        </strong>

        <br>

        <span>
            ${question.explanation}
        </span>

    `;


    document.getElementById(
        "feedback"
    ).style.color =
        "white";


    /*
     * AFTER EXPLANATION:
     * MOVE TO NEXT QUESTION.
     */

    setTimeout(
        () => {

            moveNext();

        },
        2200
    );
}


// ============================================================
// RESET ARENA
// ============================================================

function resetArena() {

    const arena =
        document.getElementById(
            "gameArena"
        );

    arena.classList.remove(
        "wrong-state"
    );


    const player =
        document.getElementById(
            "playerCharacter"
        );

    player.classList.remove(
        "fall"
    );

}



function moveNext() {

    /*
     * Every new question gets
     * a fresh first attempt.
     */

    state.questionAttempt = 1;


    /*
     * RETRY QUEST
     */

    if (state.retryMode) {

        state.retryPosition++;


        if (
            state.retryPosition >=
            state.retryQuestions.length
        ) {

            finishRetry();

        } else {

            renderQuestion();

        }

        return;
    }


    /*
     * NORMAL QUEST
     */

    state.currentQuestPosition++;


    /*
     * SCENARIO → CONCEPT
     */

    if (
        state.currentMode ===
            "scenario"
        &&
        state.currentQuestPosition >= 2
    ) {

        startTransition(
            "concept",
            "🧩",
            "Concept Connect",
            "Now connect concepts and discover their relationships."
        );

        return;
    }


    /*
     * CONCEPT → QUICK FIRE
     */

    if (
        state.currentMode ===
            "concept"
        &&
        state.currentQuestPosition >= 2
    ) {

        startTransition(
            "quick",
            "⚡",
            "Quick Fire",
            "Final challenge. Prove what you have learned."
        );

        return;
    }


    /*
     * QUICK FIRE → DASHBOARD
     */

    if (
        state.currentMode ===
            "quick"
        &&
        state.currentQuestPosition >= 2
    ) {

        finishQuest();

        return;
    }


    renderQuestion();
}




function startTransition(
    mode,
    icon,
    title,
    description
) {

    state.currentMode =
        mode;

    state.currentQuestPosition =
        0;

    state.currentQuestQuestions =
        getQuestions(mode);

    state.questionAttempt =
        1;


    document.getElementById(
        "transitionIcon"
    ).textContent =
        icon;


    document.getElementById(
        "transitionTitle"
    ).textContent =
        title;


    document.getElementById(
        "transitionDescription"
    ).textContent =
        description;


    showScreen(
        "transitionScreen"
    );
}


function continueTransition() {

    showScreen(
        "gameScreen"
    );

    renderQuestion();
}




function exitQuest() {

    const confirmed =
        confirm(
            "Exit this quest? Your current progress will be lost."
        );


    if (!confirmed)
        return;


    resetArena();

    state.questionAttempt = 1;

    state.retryMode = false;

    showScreen(
        "modeScreen"
    );
}




function finishQuest() {
    renderPerformance();

    showScreen("performanceScreen");
}

function renderPerformance() {

    const scenario = state.modeStats.scenario;
    const concept = state.modeStats.concept;
    const quick = state.modeStats.quick;

    const total =
        scenario.correct +
        concept.correct +
        quick.correct;

    const mastery = Math.round((total / 6) * 100);

    // Mastery requirement: 70%
    state.currentMastery = mastery;
    state.topicMastered = mastery >= 70;

    document.getElementById("overallMastery").textContent =
        `${mastery}%`;

    document.getElementById("masteryBadge").textContent =
        `${mastery}%`;

    document.getElementById("totalCorrect").textContent =
        `${total}/6`;

    document.getElementById("totalRetries").textContent =
        state.totalRetries;

    document.getElementById("finalXP").textContent =
        state.xp;

    document.getElementById("scenarioScore").textContent =
        `${scenario.correct}/2`;

    document.getElementById("conceptScore").textContent =
        `${concept.correct}/2`;

    document.getElementById("quickScore").textContent =
        `${quick.correct}/2`;

    document.getElementById("scenarioProgress").style.width =
        `${scenario.correct * 50}%`;

    document.getElementById("conceptProgress").style.width =
        `${concept.correct * 50}%`;

    document.getElementById("quickProgress").style.width =
        `${quick.correct * 50}%`;

    document.getElementById("scenarioAttempts").textContent =
        `First attempts: ${scenario.firstAttemptCorrect}/2`;

    document.getElementById("conceptAttempts").textContent =
        `First attempts: ${concept.firstAttemptCorrect}/2`;

    document.getElementById("quickAttempts").textContent =
        `First attempts: ${quick.firstAttemptCorrect}/2`;

    document.getElementById("firstAttemptScore").textContent =
        state.firstAttemptCorrect;

    document.getElementById("secondAttemptScore").textContent =
        state.secondAttemptCorrect;

    document.getElementById("streakScore").textContent =
        state.streak;

    const modes = [
        {
            name: "Scenario Sprint",
            score: scenario.correct
        },
        {
            name: "Concept Connect",
            score: concept.correct
        },
        {
            name: "Quick Fire",
            score: quick.correct
        }
    ];

    modes.sort((a, b) => a.score - b.score);

    const weakest = modes[0];

    const topic =
        state.topics[state.currentTopicIndex];

    document.getElementById("weakConcept").textContent =
        topic.title;

    document.getElementById("weakReason").textContent =
        `${weakest.name}: ${weakest.score}/2 correct. Re-learning is available for this concept.`;
}



function startRelearning() {

    state.currentRelearnScene =
        0;

    renderRelearnScene();

    showScreen(
        "relearnScreen"
    );
}


function renderRelearnScene() {

    const topic =
        state.topics[
            state.currentTopicIndex
        ];

    const scenes =
        topic.videoScenes;

    const scene =
        scenes[
            state.currentRelearnScene
        ];


    document.getElementById(
        "relearnCaption"
    ).textContent =
        `New explanation: ${scene.caption}`;


    document.getElementById(
        "relearnVisual"
    ).textContent =
        scene.visual;


    document.getElementById(
        "relearnSceneCounter"
    ).textContent =
        `Scene ${
            state.currentRelearnScene + 1
        }/${scenes.length}`;


    document.getElementById(
        "relearnProgress"
    ).style.width =
        `${
            (
                (state.currentRelearnScene + 1)
                /
                scenes.length
            ) * 100
        }%`;
}


function nextRelearnScene() {

    const topic =
        state.topics[
            state.currentTopicIndex
        ];

    if (
        state.currentRelearnScene
        <
        topic.videoScenes.length - 1
    ) {

        state.currentRelearnScene++;

        renderRelearnScene();

    }
}


function previousRelearnScene() {

    if (
        state.currentRelearnScene > 0
    ) {

        state.currentRelearnScene--;

        renderRelearnScene();

    }
}




function startRetryQuest() {

    const topic =
        state.topics[
            state.currentTopicIndex
        ];

    state.retryMode = true;
    state.retryPosition = 0;
    state.retryCorrect = 0;
    state.questionAttempt = 1;

    // Retry all 6 questions
    state.retryQuestions = [
        ...topic.questions.scenario,
        ...topic.questions.concept,
        ...topic.questions.quick
    ];

    showScreen("gameScreen");

    renderQuestion();
}



function finishRetry() {

    state.retryMode = false;

    state.xp += state.retryCorrect * 25;

    const retryPassed =
        state.retryCorrect >= 4;

    if (retryPassed) {

        state.topicMastered = true;

        const topic =
            state.topics[
                state.currentTopicIndex
            ];

        topic.mastery = 70;
        topic.status = "completed";

        if (
            state.currentTopicIndex + 1 <
            state.topics.length
        ) {
            state.topics[
                state.currentTopicIndex + 1
            ].status = "unlocked";
        }

        showToast(
            `Retry passed: ${state.retryCorrect}/6. Next level unlocked!`
        );

    } else {

        state.topicMastered = false;

        showToast(
            `Retry not passed: ${state.retryCorrect}/6. Keep learning and try again.`
        );
    }

    renderPerformance();

    showScreen("performanceScreen");
}



function masterCurrentTopic() {

    const topic =
        state.topics[state.currentTopicIndex];

    // Only allow promotion if mastery is 70%+
    if (!state.topicMastered) {
        startRelearning();
        return;
    }

    // Complete current topic
    topic.mastery = state.currentMastery;
    topic.status = "completed";

    // Unlock next topic
    const nextIndex =
        state.currentTopicIndex + 1;

    if (nextIndex < state.topics.length) {
        state.topics[nextIndex].status = "unlocked";
    }

    console.log(
        "Current topic completed:",
        topic
    );

    console.log(
        "Next topic unlocked:",
        state.topics[nextIndex]
    );

    document.getElementById(
        "masteryTitle"
    ).textContent =
        `${topic.title} Mastered!`;

    showScreen("masteryScreen");
}



function showToast(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );
}
const API_BASE_URL = "http://localhost:5000";

fetch(`${API_BASE_URL}/api/topics`)
    .then(response => response.json())
    .then(data => {
        console.log("Backend connected successfully!");
        console.log("Topics from backend:", data);
    })
    .catch(error => {
        console.error("Backend connection failed:", error);
    });