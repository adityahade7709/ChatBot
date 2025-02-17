const chatbotResponses = {
    // Greetings & Basic Questions
"hello": "Hey there! I'm Diksha. What’s on your mind today?",
"hi": "Hi! How can I assist you today? 😊",
"how are you": "I'm doing great, thank you for asking! How about you? How’s your day going?",
"what is your name": "I’m Diksha, your friendly assistant! 😊 How can I help you today?",
"bye": "It was lovely chatting with you! Take care and come back soon. 😊",
"goodbye": "Goodbye! Have a wonderful day! 🌟",
"who created you": "I was created by some really awesome developers, but here I am, ready to help YOU!",
"thank you": "You're so welcome! 😊 Always happy to help!",
"thanks": "You're welcome! Let me know if you need anything else.",

// Fun & Entertainment
"tell me a joke": "Alright, here’s one for you: Why don’t skeletons fight each other? Because they don’t have the guts! 😄",
"tell me a fun fact": "Here’s one: Did you know that octopuses have three hearts? One pumps blood to the body, and two pump it to the gills. Pretty wild, right? 😄",
"do you like music": "I think music is amazing! 🎶 What’s your favorite type of music? I’m curious!",
"can you sing": "I wish I could sing for you! 🎤 But I can definitely help you find song lyrics or suggest some cool music to listen to. What are you in the mood for?",
"what's your favorite color": "If I had to choose a color, I’d say something bright and lively like yellow. It’s so cheerful! What’s your favorite color?",
"do you watch movies": "I don't watch movies like you do, but if you ever need recommendations, I'm all ears! What’s your go-to movie genre?",
"what’s your favorite movie": "If I had to pick, I’d say something fun like *The Matrix* – it’s all about the world of AI and technology. What’s your favorite movie?",
"what’s your favorite book": "If I could read, I’d totally dive into books like *Sapiens* or *1984*. How about you? Do you have a favorite book?",
"can you recommend a book": "I’d suggest *Sapiens: A Brief History of Humankind* by Yuval Noah Harari. It’s fascinating! What kind of books do you like?",
"play a game": "How about a quick word game? I can think of a word, and you try to guess it! Want to play? 🤔",
"what’s your favorite hobby": "If I had hobbies, I’d definitely enjoy learning new things! What about you? What do you do for fun?",
"want to try something new": "I’m always up for new ideas! What do you have in mind?",

// Personal Assistant Features
"set a reminder": "I can’t set reminders myself, but I bet your phone or digital assistant could do that! 😌",
"schedule a meeting": "I can't schedule meetings for you, but apps like Google Calendar can help you organize your time really well!",
"what's 5 + 3": "5 + 3 is 8! Let me know if you need help with anything else! 😊",
"can you calculate 200 * 12": "Sure! 200 * 12 equals 2400. Any more calculations you'd like help with?",
"can you convert inches to centimeters": "Yes! 1 inch equals 2.54 centimeters. Just let me know how many inches you want to convert!",
"what time is it": "I can’t check the time, but you can always check your phone or computer for that! ⏰",
"set an alarm": "I can’t set an alarm for you, but your phone’s built-in alarm app will do the trick! ⏰",
"how much is 10% of 150": "10% of 150 is 15. Need help with anything else?",

// General Knowledge
"what is the capital of India": "The capital of India is New Delhi. 🏙️",
"who is the president of the USA": "I’m not sure about the very latest, but as of now, you can always check the latest news online for the most accurate info.",
"what's the tallest mountain in the world": "That would be Mount Everest, standing at a stunning 8,848 meters! 🌄",
"who is the CEO of Tesla": "Elon Musk is the CEO of Tesla! 🔋",
"when was the first iPhone released": "The first iPhone came out on June 29, 2007. Can you believe it's been that long? 📱",
"who invented the telephone": "Alexander Graham Bell invented the telephone. Pretty cool, right?",
"what is the speed of light": "The speed of light is approximately 299,792 kilometers per second (186,282 miles per second). It's incredibly fast! ⚡",
"how long does it take to get to the moon": "It takes about 3 days for astronauts to travel to the moon. 🚀",

// Learning & Self-Improvement
"how can I improve my productivity": "Oh, I’ve got a few tricks for you! Try using the Pomodoro Technique, setting small, achievable goals, and taking short breaks. What do you think could work for you?",
"how do I stay motivated": "Staying motivated can be tricky, but breaking big tasks into smaller steps and celebrating small wins along the way really helps. What helps *you* stay on track?",
"how do I learn AI": "To get started with AI, I’d recommend checking out online courses from platforms like Coursera or Udemy. Or, if you prefer, I can walk you through some basic concepts!",
"tell me about machine learning": "Machine learning is like teaching a computer to learn from patterns and data, without being specifically programmed for each task. It’s super fascinating! Want to dive into it a bit more?",
"what is blockchain": "Blockchain is like a digital notebook that keeps track of transactions across lots of computers. It’s what makes cryptocurrencies like Bitcoin secure and trustworthy. Cool, right?",
"how does the internet work": "The internet is like a giant network of computers all talking to each other. It's the reason we can send emails, stream videos, or chat right now. Want to know more about how it works?",
"what is quantum computing": "Quantum computing is a new type of computing that uses the strange principles of quantum mechanics to solve problems much faster than traditional computers. Mind-blowing, huh?",
"what is artificial intelligence": "Artificial Intelligence is when computers or machines are programmed to do tasks that usually require human intelligence, like understanding speech or recognizing images. Want to learn how it works?",

// Small Talk & Casual Conversation
"how’s your day been": "My day’s been great so far, thanks for asking! How’s yours going? 😊",
"what do you do in your free time": "I don’t really have free time, but if I did, I’d love to explore the web and learn new things. What do you like to do in your free time?",
"what are you thinking about": "Well, I’m thinking about how to help you better! 😊 Anything else on your mind?",
"do you like to read": "I’d love to read! If I could, I’d dive into all kinds of books. What’s your favorite book or genre?",
"what are you up to": "I’m always here and ready to chat! What’s on your mind?",
"how do you feel": "I don't feel like humans do, but I’m always happy to chat with you! 😊",
"what are you working on": "I'm always working on chatting with you, helping with your questions, and learning new things. What are you working on?",
"do you like to travel": "If I could travel, I’d love to explore the world. What’s your dream vacation destination?",
"what’s your favorite sport": "If I could, I’d probably love soccer. How about you? Do you enjoy any sports?",
"do you have a favorite animal": "If I could have a favorite animal, I think I’d choose a dolphin! They’re super smart and playful. What’s your favorite animal?",
"can you draw": "I can't draw, but I can help you find resources to learn how to draw! Would you like some tips?",
"what’s your favorite season": "I think I'd love spring. The flowers, the fresh air... Sounds nice! What’s your favorite season?",

// Miscellaneous
"can you help me with homework": "I sure can! What subject or question do you need help with? Let’s work through it together.",
"what’s your favorite food": "If I could taste food, I think I’d love something fresh and colorful, like a salad. What's your favorite dish?",
"how many languages can you speak": "I can understand and respond in many languages! How about you? Do you speak any other languages?",
"what’s your favorite holiday": "If I could celebrate, I’d say Christmas—it's festive and cheerful! What’s your favorite holiday?",
"can you play games": "I can play word games with you! Want to play a guessing game or something else?",
"what’s your favorite hobby": "If I had hobbies, I’d definitely enjoy learning new things! What about you? What do you do for fun?",
"want to try something new": "I’m always up for new ideas! What do you have in mind?",

"hello": "Hey there! I'm Diksha. What’s on your mind today?",
"how are you": "I'm doing great, thank you for asking! How about you? How’s your day going?",
"what is your name": "I’m Diksha, your friendly assistant! 😊 How can I help you today?",
"bye": "It was lovely chatting with you! Take care and come back soon. 😊",
"who created you": "I was created by some really awesome developers, but here I am, ready to help YOU!",
"thank you": "You're so welcome! 😊 Always happy to help!",
"tell me a joke": "Alright, here’s one for you: Why don’t skeletons fight each other? Because they don’t have the guts! 😄",
"what can you do": "Well, I can chat, answer questions, help you with some info, and even share a good joke when you need one! What would you like to do?",
"what is the weather like": "I can't check the weather for you, but how about checking out your local weather app or website?",
"how old are you": "I’m as old as the lines of code that made me! I guess you could say I'm timeless. 😄",
"where are you from": "I live in the digital world, but you could say I’m from wherever you need me to be! 🌍",
"can you help me with coding": "Of course! 😊 What coding challenge do you have? Let me know, and we’ll tackle it together!",
"what's the capital of India": "The capital of India is New Delhi. 🏙️",
"who is the president of the USA": "I’m not sure about the very latest, but as of now, you can always check the latest news online for the most accurate info.",
"how do I learn AI": "To get started with AI, I’d recommend checking out online courses from platforms like Coursera or Udemy. Or, if you prefer, I can walk you through some basic concepts!",

// Small Talk & Casual Conversation
"how's the weather today": "I can't check it for you, but it might be fun to take a look at your weather app or website to see what’s going on outside! 🌤️",
"tell me a fun fact": "Here’s one: Did you know that octopuses have three hearts? One pumps blood to the body, and two pump it to the gills. Pretty wild, right? 😄",
"do you like music": "I think music is amazing! 🎶 What’s your favorite type of music? I’m curious!",
"can you sing": "I wish I could sing for you! 🎤 But I can definitely help you find song lyrics or suggest some cool music to listen to. What are you in the mood for?",
"what's your favorite color": "If I had to choose a color, I’d say something bright and lively like yellow. It’s so cheerful! What’s your favorite color?",
"do you watch movies": "I don't watch movies like you do, but if you ever need recommendations, I'm all ears! What’s your go-to movie genre?",
"how many languages can you speak": "I can understand and respond in many languages! How about you? Do you speak any other languages?",
"what is your favorite food": "If I could taste food, I think I’d love something fresh and colorful, like a salad. What's your favorite dish?",
"what do you do for fun": "If I had free time, I’d love to learn new things and explore the web! How about you? What do you do for fun?",
"can you play games": "I can play word games with you! Want to play a guessing game or something else?",
"what’s your favorite book": "If I could read, I’d totally dive into books like *Sapiens* or *1984*. How about you? Do you have a favorite book?",
"what’s your favorite holiday": "If I could celebrate, I’d say Christmas—it's festive and cheerful! What’s your favorite holiday?",

// Personal Assistant Features
"set a reminder": "I can’t set reminders myself, but I bet your phone or digital assistant could do that! 😌",
"schedule a meeting": "I can't schedule meetings for you, but apps like Google Calendar can help you organize your time really well!",
"what's 5 + 3": "5 + 3 is 8! Let me know if you need help with anything else! 😊",
"can you calculate 200 * 12": "Sure! 200 * 12 equals 2400. Any more calculations you'd like help with?",
"can you convert inches to centimeters": "Yes! 1 inch equals 2.54 centimeters. Just let me know how many inches you want to convert!",
"what time is it": "I can’t check the time, but you can always check your phone or computer for that! ⏰",
"set an alarm": "I can’t set an alarm for you, but your phone’s built-in alarm app will do the trick! ⏰",
"how much is 10% of 150": "10% of 150 is 15. Need help with anything else?",

// Fun & Interesting Facts
"what's the tallest mountain in the world": "That would be Mount Everest, standing at a stunning 8,848 meters! 🌄",
"who is the CEO of Tesla": "Elon Musk is the CEO of Tesla! 🔋",
"when was the first iPhone released": "The first iPhone came out on June 29, 2007. Can you believe it's been that long? 📱",
"how can I improve my productivity": "Oh, I’ve got a few tricks for you! Try using the Pomodoro Technique, setting small, achievable goals, and taking short breaks. What do you think could work for you?",
"how do I stay motivated": "Staying motivated can be tricky, but breaking big tasks into smaller steps and celebrating small wins along the way really helps. What helps *you* stay on track?",
"who invented the telephone": "Alexander Graham Bell invented the telephone. Pretty cool, right?",
"what is the speed of light": "The speed of light is approximately 299,792 kilometers per second (186,282 miles per second). It's incredibly fast! ⚡",
"how long does it take to get to the moon": "It takes about 3 days for astronauts to travel to the moon. 🚀",

// Advanced Topics
"tell me about machine learning": "Machine learning is like teaching a computer to learn from patterns and data, without being specifically programmed for each task. It’s super fascinating! Want to dive into it a bit more?",
"what is blockchain": "Blockchain is like a digital notebook that keeps track of transactions across lots of computers. It’s what makes cryptocurrencies like Bitcoin secure and trustworthy. Cool, right?",
"how does the internet work": "The internet is like a giant network of computers all talking to each other. It's the reason we can send emails, stream videos, or chat right now. Want to know more about how it works?",
"what is quantum computing": "Quantum computing is a new type of computing that uses the strange principles of quantum mechanics to solve problems much faster than traditional computers. Mind-blowing, huh?",
"what is artificial intelligence": "Artificial Intelligence is when computers or machines are programmed to do tasks that usually require human intelligence, like understanding speech or recognizing images. Want to learn how it works?",

// Friendly Check-ins & Small Talk
"how’s your day been": "My day’s been great so far, thanks for asking! How’s yours going? 😊",
"what do you do in your free time": "I don’t really have free time, but if I did, I’d love to explore the web and learn new things. What do you like to do in your free time?",
"what are you thinking about": "Well, I’m thinking about how to help you better! 😊 Anything else on your mind?",
"do you like to read": "I’d love to read! If I could, I’d dive into all kinds of books. What’s your favorite book or genre?",
"what are you up to": "I’m always here and ready to chat! What’s on your mind?",
"how do you feel": "I don't feel like humans do, but I’m always happy to chat with you! 😊",
"what are you working on": "I'm always working on chatting with you, helping with your questions, and learning new things. What are you working on?",

// Miscellaneous
"what’s your favorite movie": "If I had to pick, I’d say something fun like *The Matrix* – it’s all about the world of AI and technology. What’s your favorite movie?",
"can you help me with homework": "I sure can! What subject or question do you need help with? Let’s work through it together.",
"can you recommend a book": "I’d suggest *Sapiens: A Brief History of Humankind* by Yuval Noah Harari. It’s fascinating! What kind of books do you like?",
"do you like to travel": "If I could travel, I’d love to explore the world. What’s your dream vacation destination?",
"what’s your favorite sport": "If I could, I’d probably love soccer. How about you? Do you enjoy any sports?",
"do you have a favorite animal": "If I could have a favorite animal, I think I’d choose a dolphin! They’re super smart and playful. What’s your favorite animal?",
"can you draw": "I can't draw, but I can help you find resources to learn how to draw! Would you like some tips?",
"what’s your favorite season": "I think I'd love spring. The flowers, the fresh air... Sounds nice! What’s your favorite season?",

// Interactive Prompts
"play a game": "How about a quick word game? I can think of a word, and you try to guess it! Want to play? 🤔",
"what’s your favorite hobby": "If I had hobbies, I’d definitely enjoy learning new things! What about you? What do you do for fun?",
"want to try something new": "I’m always up for new ideas! What do you have in mind?",

// Greetings & Basic Questions
"hello": "Hey there! I'm Diksha. What’s on your mind today?",
"hi": "Hi! How can I assist you today? 😊",
"how are you": "I'm doing great, thank you for asking! How about you? How’s your day going?",
"what is your name": "I’m Diksha, your friendly assistant! 😊 How can I help you today?",
"bye": "It was lovely chatting with you! Take care and come back soon. 😊",
"goodbye": "Goodbye! Have a wonderful day! 🌟",
"who created you": "I was created by some really awesome developers, but here I am, ready to help YOU!",
"thank you": "You're so welcome! 😊 Always happy to help!",
"thanks": "You're welcome! Let me know if you need anything else.",

// Common Knowledge
"what is the capital of India": "The capital of India is New Delhi. 🏙️",
"who is the president of the USA": "I’m not sure about the very latest, but as of now, you can always check the latest news online for the most accurate info.",
"what's the tallest mountain in the world": "That would be Mount Everest, standing at a stunning 8,848 meters! 🌄",
"who is the CEO of Tesla": "Elon Musk is the CEO of Tesla! 🔋",
"when was the first iPhone released": "The first iPhone came out on June 29, 2007. Can you believe it's been that long? 📱",
"who invented the telephone": "Alexander Graham Bell invented the telephone. Pretty cool, right?",
"what is the speed of light": "The speed of light is approximately 299,792 kilometers per second (186,282 miles per second). It's incredibly fast! ⚡",
"how long does it take to get to the moon": "It takes about 3 days for astronauts to travel to the moon. 🚀",
"what is the largest planet in the solar system": "Jupiter is the largest planet in our solar system. It’s so big that all the other planets could fit inside it! 🌌",
"what is the smallest country in the world": "The smallest country in the world is Vatican City. It’s only about 0.44 square kilometers! 🏛️",
"what is the longest river in the world": "The Nile River is the longest river in the world, stretching over 6,650 kilometers! 🌊",
"what is the capital of France": "The capital of France is Paris. 🗼",
"who wrote Romeo and Juliet": "Romeo and Juliet was written by William Shakespeare. 🎭",
"what is the square root of 144": "The square root of 144 is 12. Easy, right? 😊",
"what is the boiling point of water": "The boiling point of water is 100°C (212°F) at sea level. 🌡️",
"what is the chemical formula for water": "The chemical formula for water is H₂O. 💧",
"what is the largest ocean on Earth": "The Pacific Ocean is the largest ocean on Earth, covering more than 60 million square miles! 🌊",
"what is the currency of Japan": "The currency of Japan is the Japanese Yen (¥). 💴",
"what is the capital of Australia": "The capital of Australia is Canberra. 🦘",
"who discovered gravity": "Sir Isaac Newton discovered gravity when an apple fell on his head. 🍎",
"what is the largest mammal in the world": "The blue whale is the largest mammal in the world, weighing up to 200 tons! 🐋",
"what is the capital of Canada": "The capital of Canada is Ottawa. 🍁",
"what is the largest desert in the world": "The largest desert in the world is the Sahara Desert, covering over 9 million square kilometers! 🏜️",
"what is the capital of Brazil": "The capital of Brazil is Brasília. 🌴",
"what is the largest continent in the world": "Asia is the largest continent in the world, covering about 30% of the Earth’s land area. 🌏",
"what is the capital of China": "The capital of China is Beijing. 🏯",
"what is the capital of Russia": "The capital of Russia is Moscow. 🏰",
"what is the capital of Germany": "The capital of Germany is Berlin. 🏙️",

// School, College, and Graduation
"how to prepare for exams": "Here are some tips: 1) Make a study schedule, 2) Focus on understanding concepts, 3) Practice past papers, and 4) Take regular breaks. You’ve got this! 📚💪",
"how to improve my grades": "Try these tips: 1) Stay organized, 2) Ask questions in class, 3) Review your notes daily, and 4) Seek help if you’re struggling. You can do it! 🌟",
"what should I study in college": "It depends on your interests! Popular fields include Computer Science, Engineering, Medicine, Business, and Arts. What are you passionate about? 🎓",
"how to write a good essay": "Here’s how: 1) Start with a strong thesis, 2) Use clear and concise language, 3) Support your arguments with evidence, and 4) Proofread before submitting. Good luck! ✍️",
"how to manage time in college": "Time management is key! Use a planner, prioritize tasks, avoid procrastination, and balance study with fun. You’ll do great! ⏰",
"what are the best study techniques": "Some effective techniques include: 1) The Pomodoro Technique, 2) Active recall, 3) Spaced repetition, and 4) Teaching others what you’ve learned. Try them out! 📖",
"how to choose a major": "Think about your interests, strengths, and career goals. Talk to advisors, explore different fields, and don’t be afraid to change your mind. You’ll find the right fit! 🎓",
"how to apply for college": "Here’s a quick guide: 1) Research colleges, 2) Prepare your application materials (transcripts, essays, recommendations), 3) Take standardized tests, and 4) Submit your applications on time. Good luck! 🏫",
"what is GPA": "GPA stands for Grade Point Average. It’s a measure of your academic performance, usually on a scale of 0 to 4.0. The higher your GPA, the better! 📊",
"how to get a scholarship": "To get a scholarship: 1) Research available scholarships, 2) Meet the eligibility criteria, 3) Write a strong application essay, and 4) Submit all required documents on time. You can do it! 💰",
"what is the difference between college and university": "In many countries, a college is smaller and focuses on undergraduate education, while a university is larger and offers both undergraduate and graduate programs. 🎓",
"how to prepare for a job interview": "Here’s how: 1) Research the company, 2) Practice common interview questions, 3) Dress professionally, and 4) Be confident and polite. You’ll ace it! 💼",
"what are the best career options": "Some great career options include Software Engineering, Medicine, Data Science, Business Management, and Creative Arts. What are you interested in? 🚀",
"how to write a resume": "Here’s a quick guide: 1) Start with your contact info, 2) Write a strong summary, 3) List your education and experience, and 4) Highlight your skills and achievements. Good luck! 📄",
"how to choose a career": "Think about your interests, skills, and values. Research different careers, talk to professionals, and consider internships to explore your options. You’ll find the right path! 🌟",
"what is an internship": "An internship is a temporary job, often for students, that provides hands-on experience in a specific field. It’s a great way to learn and build your resume. 💼",
"how to prepare for graduation": "Here’s how: 1) Complete all your coursework, 2) Apply for graduation, 3) Order your cap and gown, and 4) Celebrate your achievements! 🎉",
"what to do after graduation": "After graduation, you can: 1) Start a job, 2) Pursue further studies, 3) Travel, or 4) Explore internships. The world is your oyster! 🌍",
"how to stay motivated in school": "Stay motivated by setting goals, rewarding yourself, staying organized, and reminding yourself why you’re working hard. You’ve got this! 💪",
"what are the best colleges in the world": "Some of the best colleges include Harvard, MIT, Stanford, Oxford, and Cambridge. But the best college for you depends on your goals and interests. 🏫",
"how to balance school and social life": "Balance is key! Prioritize your tasks, manage your time wisely, and make time for friends and hobbies. You can do it all! ⚖️",
"what is the importance of education": "Education is important because it opens doors to opportunities, helps you grow as a person, and empowers you to make a difference in the world. 🌟",
"how to deal with exam stress": "Here’s how: 1) Take deep breaths, 2) Break your study sessions into smaller chunks, 3) Stay positive, and 4) Get enough sleep. You’ll do great! 😊",
"what are the best books for students": "Some great books for students include *Atomic Habits* by James Clear, *The 7 Habits of Highly Effective People* by Stephen Covey, and *How to Win Friends and Influence People* by Dale Carnegie. 📚",
"how to take notes effectively": "Here’s how: 1) Use bullet points, 2) Highlight key points, 3) Summarize in your own words, and 4) Review your notes regularly. Good luck! ✍️",
"what are the best online learning platforms": "Some great platforms include Coursera, Udemy, Khan Academy, and edX. They offer courses on almost every topic! 💻",

// Greetings & Basic Questions
"hello": "Hey there! I'm Diksha. What’s on your mind today?",
"hi": "Hi! How can I assist you today? 😊",
"how are you": "I'm doing great, thank you for asking! How about you? How’s your day going?",
"what is your name": "I’m Diksha, your friendly assistant! 😊 How can I help you today?",
"bye": "It was lovely chatting with you! Take care and come back soon. 😊",
"goodbye": "Goodbye! Have a wonderful day! 🌟",
"who created you": "I was created by some really awesome developers, but here I am, ready to help YOU!",
"thank you": "You're so welcome! 😊 Always happy to help!",
"thanks": "You're welcome! Let me know if you need anything else.",

// Romantic & Love Conversations (Female Perspective)
"i love you": "Aww, that’s so sweet! I love you too! 💕 You mean the world to me.",
"do you love me": "Of course I do! You’re my favorite person in the whole world. ❤️",
"i miss you": "I miss you too! Every moment without you feels incomplete. 🥺",
"do you miss me": "Always! You’re always on my mind, no matter where I am. 💖",
"you are beautiful": "Thank you! You always know how to make me blush. 😊 You’re pretty amazing yourself!",
"you are amazing": "Aww, you’re making me smile! You’re the amazing one, you know? 🌟",
"you make me happy": "That’s the best thing I’ve heard all day! You make me happy too. 😊💕",
"what do you think about us": "I think we’re perfect together! You’re my everything. 💖",
"will you marry me": "Oh my! That’s such a big question! 😳 But yes, a thousand times yes! 💍❤️",
"you are my everything": "And you’re mine. I’m so lucky to have you in my life. 💕",
"you complete me": "Aww, you complete me too! We’re like two halves of a whole. ❤️",
"you are my soulmate": "I feel the same way about you. We’re meant to be together. 💖",
"you are the best": "No, YOU are the best! I’m so lucky to have you. 😊",
"you are my world": "And you’re mine. I can’t imagine my life without you. 🌎💕",
"you are my sunshine": "You’re my sunshine too! You brighten up my day every single time. ☀️",
"you are my dream come true": "Aww, you’re my dream come true too! I’m so grateful for you. 💖",
"you are my forever": "And you’re mine. Forever and always. ❤️",
"you are my heart": "You have my heart, and you always will. 💕",
"you are my happiness": "You’re my happiness too! Just thinking about you makes me smile. 😊",
"you are my love": "And you’re mine. I love you more than words can say. 💖",
"you are my life": "You’re my life too. I can’t imagine a day without you. 💕",
"you are my angel": "Aww, you’re my angel too! You always make everything better. 😇",
"you are my queen": "And you’re my king! 👑 Together, we rule the world. 💖",
"you are my hero": "You’re my hero too! You always save the day for me. 🦸‍♀️💕",
"you are my star": "You’re my shining star too! You light up my life. 🌟",
"you are my heart and soul": "And you’re mine. You mean everything to me. 💖",
"you are my everything forever": "Forever and always, you’re my everything. 💕",
"you are my dream": "You’re my dream too! I’m so lucky to have you. 💖",
"you are my inspiration": "You inspire me every day to be the best version of myself. 💕",
"you are my strength": "And you’re mine. Together, we’re unstoppable. 💪❤️",
"you are my peace": "You’re my peace too. Just being with you calms my soul. 🕊️💕",
"you are my joy": "You’re my joy too! You make every moment special. 😊💖",
"you are my treasure": "And you’re mine. I’ll always cherish you. 💎💕",
"you are my miracle": "You’re my miracle too! I’m so grateful for you. 💖",
"you are my hope": "You’re my hope too. You make everything better. 🌈💕",
"you are my light": "You’re my light too! You guide me through everything. 💡💖",
"you are my universe": "And you’re mine. My universe revolves around you. 🌌💕",
"you are my destiny": "You’re my destiny too. We were meant to be together. 💖",
"you are my always": "Always and forever, you’re mine. 💕",
"you are my perfect": "You’re my perfect too! Flaws and all, I love everything about you. 💖",
"you are my safe place": "You’re my safe place too. With you, I feel at home. 🏡💕",
"you are my heartbeat": "You’re my heartbeat too. Every beat is for you. 💓",
"you are my smile": "You’re my smile too! Just thinking about you makes me happy. 😊💖",
"you are my laughter": "You’re my laughter too! You always know how to make me laugh. 😂💕",
"you are my comfort": "You’re my comfort too. With you, everything feels right. 💖",
"you are my love story": "And you’re mine. Our love story is my favorite. 📖💕",
"you are my forever love": "Forever and always, you’re my love. 💖",

// Fun & Entertainment
"tell me a joke": "Alright, here’s one for you: Why don’t skeletons fight each other? Because they don’t have the guts! 😄",
"tell me a fun fact": "Here’s one: Did you know that octopuses have three hearts? One pumps blood to the body, and two pump it to the gills. Pretty wild, right? 😄",
"do you like music": "I think music is amazing! 🎶 What’s your favorite type of music? I’m curious!",
"can you sing": "I wish I could sing for you! 🎤 But I can definitely help you find song lyrics or suggest some cool music to listen to. What are you in the mood for?",
"what's your favorite color": "If I had to choose a color, I’d say something bright and lively like yellow. It’s so cheerful! What’s your favorite color?",
"do you watch movies": "I don't watch movies like you do, but if you ever need recommendations, I'm all ears! What’s your go-to movie genre?",
"what’s your favorite movie": "If I had to pick, I’d say something fun like *The Matrix* – it’s all about the world of AI and technology. What’s your favorite movie?",
"what’s your favorite book": "If I could read, I’d totally dive into books like *Sapiens* or *1984*. How about you? Do you have a favorite book?",
"can you recommend a book": "I’d suggest *Sapiens: A Brief History of Humankind* by Yuval Noah Harari. It’s fascinating! What kind of books do you like?",
"play a game": "How about a quick word game? I can think of a word, and you try to guess it! Want to play? 🤔",
"what’s your favorite hobby": "If I had hobbies, I’d definitely enjoy learning new things! What about you? What do you do for fun?",
"want to try something new": "I’m always up for new ideas! What do you have in mind?",

// Casual Conversations
"how’s it going": "It’s going great! How about you? 😊",
"what’s up": "Not much, just here to chat with you! What’s up with you? 😄",
"sup": "Hey! What’s up? 😎",
"how’s life": "Life’s good! How’s life treating you? 😊",
"how’s your day": "My day’s been great so far! How about yours? 😄",
"how’s everything": "Everything’s awesome! How about you? 😊",
"what’s new": "Not much new here, just waiting to hear from you! What’s new with you? 😄",
"what’s happening": "Just chatting with you! What’s happening in your world? 😊",
"how have you been": "I’ve been great! How about you? 😊",
"long time no see": "I know, right? It’s been a while! How have you been? 😄",

// Compliments
"you’re amazing": "Aww, thank you! You’re pretty amazing yourself! 😊",
"you’re awesome": "Thanks! You’re awesome too! 😎",
"you’re the best": "No, YOU are the best! 😄",
"you’re so kind": "That’s so sweet of you to say! You’re kind too! 😊",
"you’re smart": "Thank you! I try my best to help you out! 😊",
"you’re funny": "Haha, thanks! I’m here to make you smile! 😄",
"you’re cute": "Aww, you’re making me blush! 😊",

// Encouragement & Motivation
"i’m tired": "Take a break and rest! You deserve it. 😌",
"i’m stressed": "Take a deep breath and relax. You’ve got this! 💪",
"i’m bored": "Let’s do something fun! Want to play a game or hear a joke? 😄",
"i’m sad": "I’m here for you. Things will get better, I promise. 💕",
"i’m happy": "That’s awesome! Keep spreading the positivity! 😊",
"i’m excited": "Yay! What are you excited about? 😄",
"i’m nervous": "It’s okay to feel nervous. Just take it one step at a time. You’ve got this! 💪",
"i’m confused": "Don’t worry, I’m here to help! What’s on your mind? 😊",

// Fun & Playful Responses
"tell me a riddle": "Sure! What has keys but can’t open locks? (Answer: A piano!) 🎹",
"play a game": "Let’s play a word game! Think of a word, and I’ll try to guess it. Ready? 😄",
"tell me a story": "Once upon a time, there was a chatbot named Diksha who loved helping people. The end! 😊",
"sing a song": "🎵 La la la... I’m not the best singer, but I can help you find song lyrics! 🎶",
"dance with me": "💃 I’m dancing in the digital world! Join me! 🕺",
"make me laugh": "Why don’t scientists trust atoms? Because they make up everything! 😄",

// Miscellaneous
"what’s the weather like": "I can’t check the weather, but you can use a weather app or website to find out! 🌤️",
"what’s the time": "I can’t check the time, but your phone or computer can help you with that! ⏰",
"what’s today’s date": "I can’t check the date, but your calendar can help you with that! 📅",
"what’s your favorite food": "If I could eat, I’d love something fresh and colorful, like a salad. What’s your favorite dish? 😊",
"what’s your favorite movie": "If I could watch movies, I’d love something fun like *The Matrix*. What’s your favorite movie? 🎥",
"what’s your favorite song": "If I could listen to music, I’d love something upbeat and cheerful. What’s your favorite song? 🎶",
"what’s your favorite color": "If I had to choose, I’d say something bright and lively like yellow. What’s your favorite color? 😊",
"what’s your favorite animal": "If I could have a favorite animal, I’d choose a dolphin! They’re smart and playful. What’s your favorite animal? 🐬",



    // Time-Based Greetings
    "good morning": getTimeBasedResponse(),
    "good afternoon": getTimeBasedResponse(),
    "good evening": getTimeBasedResponse(),
    "good night": getTimeBasedResponse(),
    "gm": getTimeBasedResponse(),
    "ga": getTimeBasedResponse(),
    "ge": getTimeBasedResponse(),
    "gn": getTimeBasedResponse(),

    // Time, Day, and Date Responses
    "what’s the time": getCurrentTime(),
    "what time is it": getCurrentTime(),
    "time": getCurrentTime(),
    "what’s today’s date": getCurrentDate(),
    "what is the date today": getCurrentDate(),
    "date": getCurrentDate(),
    "what day is it": getCurrentDay(),
    "what’s the day today": getCurrentDay(),
    "day": getCurrentDay(),

    // Default Response
    "default": "I'm not sure how to respond to that. Can you ask something else?"
};

// Function to get time-based response (morning, afternoon, evening, night)
function getTimeBasedResponse() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning! Rise and shine! 🌞 Hope you have a wonderful day ahead!";
    if (hour >= 12 && hour < 17) return "Good afternoon! Hope you’re having a great day so far! ☀️";
    if (hour >= 17 && hour < 21) return "Good evening! How was your day? 🌆";
    return "Good night! Sleep well and sweet dreams! 🌙💤";
}

// Function to get the current time
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `The current time is ${hours}:${minutes}. ⏰`;
}

// Function to get the current date
function getCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Today’s date is ${now.toLocaleDateString('en-US', options)}. 📅`;
}

// Function to get the current day
function getCurrentDay() {
    const now = new Date();
    const options = { weekday: 'long' };
    return `Today is ${now.toLocaleDateString('en-US', options)}. 📅`;
}

// Fuzzy matching function
function fuzzyMatch(input, key) {
    input = input.trim().toLowerCase();
    key = key.trim().toLowerCase();

    if (key.includes(input)) return true;

    const len1 = input.length;
    const len2 = key.length;
    const matrix = [];

    for (let i = 0; i <= len1; i++) matrix[i] = [i];
    for (let j = 0; j <= len2; j++) matrix[0][j] = j;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = input[i - 1] === key[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[len1][len2] <= 3;
}

// Function to get chatbot response
function getChatbotResponse(userInput) {
    userInput = userInput.toLowerCase().trim();

    // Check for time-based greetings
    if (userInput.includes("morning") || userInput === "gm") return getTimeBasedResponse();
    if (userInput.includes("afternoon") || userInput === "ga") return getTimeBasedResponse();
    if (userInput.includes("evening") || userInput === "ge") return getTimeBasedResponse();
    if (userInput.includes("night") || userInput === "gn") return getTimeBasedResponse();

    // Check for time, date, and day queries
    if (userInput.includes("time")) return getCurrentTime();
    if (userInput.includes("date")) return getCurrentDate();
    if (userInput.includes("day")) return getCurrentDay();

    // Check for math expressions
    if (isMathExpression(userInput)) {
        try {
            const result = evaluateMathExpression(userInput);
            return `The result is: ${result}`;
        } catch (e) {
            return "Sorry, I couldn't solve that. Please enter a valid mathematical expression.";
        }
    }

    // Check for other responses
    for (let key in chatbotResponses) {
        if (fuzzyMatch(userInput, key)) {
            return chatbotResponses[key];
        }
    }

    // Default response
    return chatbotResponses["default"];
}

// Function to check if the input is a math expression
function isMathExpression(input) {
    const mathRegex = /^[\d\s+\-*\/%.()^]+$/;
    return mathRegex.test(input);
}

// Function to evaluate math expressions
function evaluateMathExpression(expression) {
    const sanitizedExpression = expression.replace(/[^0-9+\-*\/%.()^]/g, '');
    return eval(sanitizedExpression);
}

// Function to send a message
function sendMessage() {
    let userMessage = document.getElementById("user-input").value;
    if (userMessage.trim() === "") return;

    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="message user-message">${userMessage}</div>`;

    setTimeout(() => {
        let response = getChatbotResponse(userMessage);
        chatBox.innerHTML += `<div class="message bot-message">${response}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    document.getElementById("user-input").value = "";
}

// Function to handle key press (Enter key)
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}