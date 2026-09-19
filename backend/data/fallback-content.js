const fallbackContent = {
  1: {
    scenes: [
      { time: 0, title: "The Traffic Controller", text: "A busy intersection needs someone directing which car moves when.", visual: "Traffic light switching between cars" },
      { time: 8, title: "Think Like an OS", text: "The OS is that controller — deciding which program gets hardware access.", visual: "OS icon directing app icons" },
      { time: 20, title: "Core Job", text: "It manages memory, files, devices, and CPU access for every running program.", visual: "OS icon connected to memory, file, device icons" },
      { time: 35, title: "Remember", text: "No traffic controller, no order — no OS, no working computer.", visual: "Chaos vs order split screen" },
    ],
    questions: [
      { question: "What does an OS primarily manage?", options: ["Hardware and programs", "Only the internet", "Only files", "Only the screen"], correctAnswer: "Hardware and programs" },
      { question: "Which of these does an OS handle?", options: ["Memory, files, devices, CPU", "Only passwords", "Only graphics", "Only sound"], correctAnswer: "Memory, files, devices, CPU" },
      { question: "Without an OS, a program can:", options: ["Not access hardware properly", "Run faster", "Run without memory", "Ignore the CPU"], correctAnswer: "Not access hardware properly" },
      { question: "An OS acts like a:", options: ["Traffic controller", "Painter", "Musician", "Chef"], correctAnswer: "Traffic controller" },
      { question: "Why is an OS needed?", options: ["To coordinate hardware and software", "To design hardware", "To sell software", "To write documents"], correctAnswer: "To coordinate hardware and software" },
    ],
  },
  2: {
    scenes: [
      { time: 0, title: "The Restaurant Order", text: "A restaurant takes many orders — each one is tracked separately from placement to delivery.", visual: "Order tickets on a kitchen rail" },
      { time: 8, title: "Think Like a Process", text: "Each order is like a process — it has its own state: waiting, cooking, ready, served.", visual: "Order ticket moving through stages" },
      { time: 20, title: "Process States", text: "A process moves through states: new, ready, running, waiting, terminated — just like an order moves from placed to delivered.", visual: "Diagram of states with arrows" },
      { time: 35, title: "Remember", text: "Every running program is a process, tracked and managed separately by the OS.", visual: "Multiple order tickets moving independently" },
    ],
    questions: [
      { question: "What is a process?", options: ["A program in execution", "A file on disk", "A hardware device", "A network cable"], correctAnswer: "A program in execution" },
      { question: "Which is NOT a typical process state?", options: ["Waiting", "Running", "Printed", "Ready"], correctAnswer: "Printed" },
      { question: "A process moves from 'new' to which state next?", options: ["Ready", "Terminated", "Waiting", "Running"], correctAnswer: "Ready" },
      { question: "What happens when a process finishes?", options: ["It becomes terminated", "It becomes new", "It becomes ready", "It restarts automatically"], correctAnswer: "It becomes terminated" },
      { question: "Restaurant orders are similar to processes because:", options: ["Each is tracked separately through states", "They are all identical", "They never change state", "They run without any tracking"], correctAnswer: "Each is tracked separately through states" },
    ],
  },
  3: {
    scenes: [
      { time: 0, title: "The Kitchen Crew", text: "One kitchen has several cooks working together on the same big order.", visual: "Multiple cooks around one order ticket" },
      { time: 8, title: "Think Like Threads", text: "Each cook is a thread — they share the same kitchen (process) but work on different parts independently.", visual: "Cooks sharing counter space, working separately" },
      { time: 20, title: "Shared Resources", text: "Threads share memory within a process, but each has its own task and stack — like cooks sharing ingredients but doing different jobs.", visual: "Shared pantry, separate cutting boards" },
      { time: 35, title: "Remember", text: "Threads let one process do multiple things at once, sharing resources efficiently.", visual: "Finished dish assembled from multiple cooks' work" },
    ],
    questions: [
      { question: "What is a thread?", options: ["The smallest unit of execution within a process", "A separate program entirely", "A type of hardware device", "A file format"], correctAnswer: "The smallest unit of execution within a process" },
      { question: "What do threads within the same process share?", options: ["Memory", "Nothing at all", "Separate CPUs only", "Different processes"], correctAnswer: "Memory" },
      { question: "Why use multiple threads?", options: ["To do multiple things at once efficiently", "To slow down the program", "To use more hard disk space", "To create more processes"], correctAnswer: "To do multiple things at once efficiently" },
      { question: "A kitchen with multiple cooks on one order represents:", options: ["Multiple threads in one process", "Multiple unrelated processes", "A single-threaded process", "A deadlock"], correctAnswer: "Multiple threads in one process" },
      { question: "Threads are considered lighter-weight than processes because:", options: ["They share memory instead of needing separate memory", "They use more resources", "They cannot run in parallel", "They require separate hardware"], correctAnswer: "They share memory instead of needing separate memory" },
    ],
  },
  4: {
    scenes: [
      { time: 0, title: "The Checkout Line", text: "One checkout counter, many customers waiting — someone has to decide who goes next.", visual: "Line of customers at a single counter" },
      { time: 8, title: "Think Like Scheduling", text: "The CPU is like that counter — it can only serve one task at a time, so the OS decides the order.", visual: "CPU icon with a queue of tasks" },
      { time: 20, title: "Round Robin", text: "One fair method: give each customer a fixed time, then move to the next, even if they're not done — like a 2-minute checkout limit.", visual: "Timer counting down per customer" },
      { time: 35, title: "Remember", text: "CPU scheduling decides which task runs next, keeping everything running fairly and smoothly.", visual: "Steady queue moving forward" },
    ],
    questions: [
      { question: "What does CPU scheduling decide?", options: ["Which process runs next on the CPU", "Which files to delete", "Which printer to use", "Which network to connect to"], correctAnswer: "Which process runs next on the CPU" },
      { question: "In Round Robin, each process gets:", options: ["A fixed time slice", "Unlimited time", "No time at all", "A random amount of memory"], correctAnswer: "A fixed time slice" },
      { question: "Why is CPU scheduling necessary?", options: ["Because only one process can use the CPU at a time", "Because computers have unlimited CPUs", "Because files need to be scheduled", "Because memory schedules itself"], correctAnswer: "Because only one process can use the CPU at a time" },
      { question: "A single checkout counter serving many customers represents:", options: ["A CPU serving multiple processes", "A deadlock", "Multiple threads", "A crashed program"], correctAnswer: "A CPU serving multiple processes" },
      { question: "What happens in Round Robin if a task isn't finished when its time is up?", options: ["It goes to the back of the queue", "It is deleted permanently", "It keeps running forever", "It crashes the system"], correctAnswer: "It goes to the back of the queue" },
    ],
  },
  5: {
    scenes: [
      { time: 0, title: "The Resource Grab", text: "Two builders each need a hammer and a nail — one grabs the hammer, the other grabs the nail.", visual: "Two builders holding one tool each" },
      { time: 8, title: "The Circular Wait", text: "Each waits for the other to let go. Neither will, so neither can proceed.", visual: "Circular arrows showing mutual waiting" },
      { time: 20, title: "Enter the Deadlock", text: "In computers, processes hold resources while waiting for others held by different processes — forming a frozen loop.", visual: "Process icons in a circular waiting diagram" },
      { time: 35, title: "Breaking the Chain", text: "The OS can prevent this by forcing a release or requiring all resources be requested at once.", visual: "One builder releasing a tool, freeing the loop" },
    ],
    questions: [
      { question: "What is a deadlock?", options: ["Processes waiting on each other in a circular chain, unable to proceed", "A process that finishes very quickly", "A type of memory upgrade", "A file that cannot be deleted"], correctAnswer: "Processes waiting on each other in a circular chain, unable to proceed" },
      { question: "Why can't processes in a deadlock proceed?", options: ["They are each waiting for a resource held by another", "They have too much memory", "They are running too fast", "They have no CPU access needed"], correctAnswer: "They are each waiting for a resource held by another" },
      { question: "One way to prevent deadlocks is:", options: ["Requiring processes to request all resources at once", "Giving every process unlimited resources", "Running only one process ever", "Deleting all processes immediately"], correctAnswer: "Requiring processes to request all resources at once" },
      { question: "Two builders stuck waiting for each other's tool represents:", options: ["A deadlock", "Successful multitasking", "CPU scheduling", "A single thread"], correctAnswer: "A deadlock" },
      { question: "What is required to break a deadlock?", options: ["Forcing a process to release a resource", "Adding more customers to a queue", "Increasing CPU speed", "Deleting the operating system"], correctAnswer: "Forcing a process to release a resource" },
    ],
  },
};

module.exports = fallbackContent;