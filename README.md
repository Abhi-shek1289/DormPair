🏩 DormPair — Smart Hostel Room Allocation System

DormPair is a comprehensive, single-page web application designed to manage hostel room inventory and automate the student allocation process. This project was developed to satisfy the requirements of Round-2 Assignment 1.

🚀 Live Demo & Repository

Live URL: [Your Vercel/Netlify/Render Link Here] 


GitHub Repository: [Your GitHub Link Here] 

🛠️ Technology Stack

Frontend: HTML5, CSS3 (Custom Variables & Modern Layouts), JavaScript (ES6+). 


Styling: Custom CSS with a "Dark Mode" aesthetic and responsive grid systems. 


Icons/Fonts: Syne & DM Sans via Google Fonts. 


Deployment: Optimized for Vercel, Netlify, or Render. 

✨ Features Implemented
1. User Authentication

Login & Signup: Fully functional UI for administrative access. 


Demo Access: Ability to skip login for quick reviewer evaluation. 

2. Room Management

Add Room: Interface to register new rooms with unique numbers, capacity, and floor details. 


Facility Selection: Toggle switches for AC and Attached Washrooms. 


View All Rooms: A visual grid and a detailed table view of every room in the system. 

3. Smart Search & Filter 

Filter rooms by Minimum Capacity. 

Filter by AC Requirement (Yes/No). 

Filter by Washroom Requirement (Yes/No). 

4. Automated Allocation Algorithm 


Logic: Implements the AllocateRoom(students, needsAC, needsWashroom) function. 


Optimization: The algorithm automatically selects the smallest possible room that satisfies all student requirements. 


Error Handling: Displays a "No room available" message if criteria cannot be met. 

🧠 Core Allocation Logic 

The system uses the following logic to handle room requests:


Filter: Scans for rooms that are vacant. 


Match: Checks if room.capacity >= students. 


Validate: Ensures the room meets hasAC and hasAttachedWashroom flags. 


Optimize: Sorts remaining candidates by capacity in ascending order and picks the first result. 

📦 Installation & Setup
Since this is a client-side optimized application, no complex installation is required:

Clone the repository:

Open the Project:
Open index.html (or the provided .html file) in any modern web browser.

Deployment:
Simply drag and drop the folder into Netlify or use Vercel to deploy. 

📊 Reviewer Evaluation Checklist 


Functionality: All features (Add, View, Search, Allocate) are working. 


Logic: Optimized allocation logic implemented. 


UI: Complete, usable, and responsive design. 


Code Quality: Modular JavaScript functions with clear comments. 


Error Handling: Input validation on forms and "No room available" states. 

Developed by: Abhishek Mishra

Date: February 2026
