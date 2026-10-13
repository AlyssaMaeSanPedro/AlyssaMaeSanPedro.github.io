export const SHOW = 5;

export const CERTS = [
  // ---- top 5 ----
  { name: "Supervised Machine Learning: Regression and Classification", by: "Coursera", img: "/certs/supervised-ml.webp", url: "https://coursera.org/share/a50684b3356f97ae0d45357ebf331311" },
  { name: "Data Analysis with Python", by: "Cognitive Class (IBM)", img: "/certs/data-analysis-python.webp", url: "https://courses.cognitiveclass.ai/certificates/6c4a083744344273b1bec5cfe546fd4c" },
  { name: "Data Visualization with Python", by: "Cognitive Class (IBM)", img: "/certs/data-viz-python.webp", url: "https://courses.cognitiveclass.ai/certificates/d43340bec83d4753ae35c2777bbd1ce1" },
  { name: "Introduction to Data Science", by: "Cisco", img: "/certs/intro-data-science.webp", badge: "/certs/intro-data-science-badge.webp", url: "https://www.credly.com/badges/54aeea73-0ee0-4bfa-8add-9b8c008d5c47" },
  { name: "Data Science Tools", by: "Cognitive Class (IBM)", img: "/certs/data-science-tools.webp", badge: "/certs/data-science-tools-badge.webp", url: "https://www.credly.com/badges/d33a0daf-263a-4c9c-9e06-83ba2814df16/public_url" },
  // ---- view all ----
  { name: "Getting Started in Google Analytics", by: "Coursera", year: 2025, img: "/certs/google-analytics-start.webp", url: "https://www.coursera.org/verify/ZKNDNR7N4ZJY"},
  { name: "Analyze Website Visitors with Google Analytics Segments", by: "Coursera", img: "/certs/google-analytics-segments.webp", url: "https://www.coursera.org/verify/E103NF8AXCTR" },
  { name: "Data Science 101", by: "Cognitive Class (IBM)", img: "/certs/data-science-101.webp", url: "https://courses.cognitiveclass.ai/certificates/bb19468a08ed44cba94e53221fafc635" },
  { name: "Fundamentals of AI", by: "Cognitive Class (IBM)", img: "/certs/fundamentals-ai.webp", url: "https://cognitiveclass.ai/certificates/300b0be3-93d5-4078-9bdf-387351135a47" },
  { name: "Machine Learning for Healthcare Applications", by: "Cognitive Class (IBM)", img: "/certs/ml-healthcare.webp", url: "https://cognitiveclass.ai/certificates/315939ee-970b-4a21-a85e-82c9ddddcf8d" },
  { name: "Introduction to Cybersecurity", by: "Cisco", img: "/certs/cybersecurity.webp", badge: "/certs/cybersecurity-badge.webp", url: "https://www.credly.com/badges/46c198a9-9e64-4007-a61e-78da2c624d06/public_url" },
  { name: "Computer Hardware Basics", by: "Cisco", img: "/certs/hardware.webp", badge: "/certs/hardware-badge.webp", url: "https://www.credly.com/badges/43fccaf3-f9cf-4550-880b-16327fc8b504/public_url" },
  { name: "Introduction to IoT and Digital Transformation", by: "Cisco", img: "/certs/iot.webp", badge: "/certs/iot-badge.webp", url: "https://www.credly.com/badges/340272ce-b2f6-41ce-ae29-c4d5310215be/public_url" },
  { name: "Applied Data Science with Python - Level 2", by: "Cognitive Class (IBM)", img: "/certs/applied-ds-python-2-badge.webp", url: "https://www.credly.com/badges/7dcb7f3c-8378-4c79-bcfb-14617c52e693/public_url" },
  { name: "Data Analysis Using Python", by: "Cognitive Class (IBM)", img: "/certs/data-analysis-using-python-badge.webp", url: "https://www.credly.com/badges/f499b05e-986b-42ea-80f9-3afca5de26c7/public_url" }
];

// Shown in a collapsed list (not counted). Add a url if the certificate has a link.
export const SEMINARS = [
  "Life After Graduation: The Reality No One Talks About",
  "Building a Home without Windows: A Student’s Guide to Linux",
  "Agentic AI",
  "Web Penetration Testing 101",
  "Behind the Scenes of Game QA: Testing, NDAs, and Daily Life",
  "Power UP your PASSION: Careers in Gaming World",
  "Modern Web Development: How a Full Stack Web App Goes Live",
  "Beyond the Degree: Skills and Competencies for your Future Tech",
  "Rewrite your Legacy: From Comics to Hollywood – A 2D Illustrator’s Journey",
  "Business Communication",
  "How to Earn in Animation",
  "From Frame to Scene: I Have a Degree in Animation. Now, What’s Next?",
  "Optimizing AI Potential: Balancing Prompt Engineering",
  "Data-Driven Facilities Management: The Future of Smart Spaces",
  "The Art of Effective Communication: Becoming a Leader People Trust",
  "Agile Testing in Action – A Beginner’s Guide for Future Testers",
  "Senior Programming Assistance Integration",
].map((name) => ({ name, by: "School seminar" }));
SEMINARS.push({ name: "OpenXAI Vibe Coding Session", by: "OpenXAI · online" });