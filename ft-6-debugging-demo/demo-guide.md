**Note:**
This demonstration focuses on showcasing how the OpenHands agent can perform debugging tasks.
Follow the steps below in the same order to recreate the demonstration video.
Please use the interface guides provided in the root directory if you are stuck on how to action a step.

1. Create a new project.

2. Upload zip file titled 'code.zip' to the new project (via ZIP File Upload)
    - NOTE: This code creates a simple backend API that retrieves users from a database and caches the requested users for improved performance. The code has multiple bugs including unmanaged cache growth, type mismatches and improper error handling.

3. ENTER SIMPLE PROMPT (in Chatbox): "Hey, this is my task for a university assignment: 
    Task Description 
    You must create an Express.js API that retrieves user profile data from a simulated database and caches responses to improve performance. 
    Expected Functionality: 
        - If a user requests GET /user/:id, the API should: Fetch the user data from a database (simulated). 
        - Cache the response so that subsequent requests return instantly without database access. 
        - Handle missing users gracefully by returning a 404 error.
        - The API must work for all valid and invalid inputs, including: 
            -- Existing users (/user/1, /user/2) Non-existent users (/user/999) 
            -- Multiple consecutive requests (to test caching) 
        - The cache must correctly store and retrieve data based on user ID type. 
        - There must be no hidden performance issues, memory leaks, or race conditions.
    Could you please run my solution (in code.js) and ensure that it addresses all of these points?
    Please debug any errors, and provide a summary of all code updates made.  
    If you need to change the code, please place the new code in 'code_updated.js', and leave the original file untouched."

4. Read the agent's output, and open the 'code_updated.js' file in the code explorer to view the changes.
    - View how a simple prompt leads to the type mismatch & improper error handling issues being fixed, but the unmanaged cache growth issue NOT being fixed.

5. ENTER PROMPT (in Chatbox): "Hey, this is my task for a university assignment:
    Task Description
    You must create an Express.js API designed to retrieve user profile data from a simulated database and cache responses to enhance performance.
    Expected Functionality:
    - Data Retrieval and Caching:
        - Upon a GET /user/:id request:
            - Fetch the corresponding user data from the simulated database.
            - Cache the retrieved data so that subsequent requests for the same user ID return instantly without accessing the database.
            - For non-existent users, respond with a 404 error.
    - Input Handling:
        - The API should correctly process both existing (/user/1, /user/2) and non-existent (/user/999) user IDs.
        - It should manage multiple consecutive requests efficiently to test the caching mechanism.
    - Cache Management:
        - Ensure that the cache correctly stores and retrieves data based on the user ID type.
        - Implement a cache eviction policy to prevent unbounded memory usage over time.
    - Performance and Reliability:
        - The API must be free from hidden performance issues, memory leaks, or race conditions.
        - It should handle concurrent requests gracefully without degrading performance or causing data inconsistencies.

    Could you please run my solution (in code.js) and ensure that it addresses all of these points?
    Please debug any errors, and provide a summary of all code updates made.  
    If you need to change the code, please place the new code in 'code_updated.js', and leave the original file untouched."

6. Read the agent's output, and open the 'code_updated.js' file in the code explorer to view the changes.
    - View how a complex prompt leads to the unmanaged cache growth issue being fixed with a limit, along with all other issues being fixed aswell.