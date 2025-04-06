**Note:**
This demonstration focuses on showcasing how the OpenHands agent can perform code completion tasks.
Follow the steps below in the same order to recreate the demonstration video.
Please use the interface guides provided in the root directory if you are stuck on how to action a step.
If a filename is mentioned in this guide, the file's location will be in the same directory as this guide.

1. Create a new project.

2. Upload zip file titled 'code.zip' to the new project (via ZIP File Upload)
    - **Note:** This python code in 'code.py' creates a simple 'Student' class where each student has an ID, name, subjects & grades. However, there are two methods that need to be completed, i.e., the generate_wam() method and the generate_student_report() function. There is also a seperate 'sample_report.txt' file that conveys an example student report, so that the agent knows what format to generate the student report in.

3. ENTER THE PROMPT located in 'prompt.txt' (in Chatbox).  

4. Read the agent's output in the chat and also in the terminal.
    - View how the agent's terminal output is in the exact same format as the provided 'sample_report.txt' file. 

5. Open the hosted VSCode Application (via the 'Open in VS Code' button)

6. In the hosted VSCode Application, find and open the file titled 'code.py'.
    - View that the two functions were correctly completed by the agent.