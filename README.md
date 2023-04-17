# VoiceGPT

This is a Nodejs (for API) and Reactjs (for UI) app that helps transcribe audio files to text and equally makes further searches on the text from the audio and gives you a response, with some additional features for swift functionality with the help of OpenAI.

<b><u>How To Run App</u></b>

- Since both the backend and frontend applications run concurrently, I've added the script command to do the setup on a go.
- It's best you cd into the backend and frontend folder and runs the command to install the dependencies respectively when working on your local machine.
- Also, check out the envExample to see what the actual .env files (environmental files) on both the backend and frontend folders are meant to look like. So, you need to create new files called <code>_.env_</code> on both folders, with the value in the envExample files, also the environmental value keys are self-descriptive, such as the <code>OPEN_AI_API_KEY</code> (which is needed for running the services on the backend/backend folder using openai).
- The <code>_npm run start_</code> command (on the root directory of the app) can install all dependencies and start-up both apps. This is mainly useful when the app is being deployed.
- The <code>_npm run dev_</code> command (on the root directory of the app) is able to start up both apps without installation. So, I would recommend making use of this in the development mode since you've installed all the dependencies, also make sure all dependencies are installed before running this command.

<h2>Thank You</h2>
