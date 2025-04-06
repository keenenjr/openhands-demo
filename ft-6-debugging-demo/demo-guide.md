**Note:**
This demonstration focuses on showcasing how the OpenHands agent can perform debugging tasks.
Follow the steps below in the same order to recreate the demonstration video.
Please use the interface guides provided in the root directory if you are stuck on how to action a step.
If a filename is mentioned in this guide, the file's location will be in the same directory as this guide.

1. Create a new project.

2. Upload zip file titled 'code.zip' to the new project (via ZIP File Upload)
    - **Note:** This javascript code in 'code.js' creates a simple backend API that retrieves users from a database and caches the requested users for improved performance. The code has multiple bugs including unmanaged cache growth, type mismatches and improper error handling.

3. ENTER THE SIMPLE PROMPT located in 'simple-prompt.txt' (in Chatbox).  

4. Read the agent's output, and open the 'code_updated.js' file in the code explorer to view the changes.
    - View how a simple prompt leads to the type mismatch & improper error handling issues being fixed, but the unmanaged cache growth issue NOT being fixed.

5. ENTER THE COMPLEX PROMPT located in 'complex-prompt.txt' (in Chatbox).

6. Read the agent's output, and open the 'code_updated.js' file in the code explorer to view the changes.
    - View how a complex prompt leads to the unmanaged cache growth issue being fixed with a limit, along with all other issues being fixed aswell.