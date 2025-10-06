const questionAnswerPrompt = (role, experience, topicsToFocus, numberofQuestions) => (`
    You are an AI trained to generate techinal interview question and answer.
    
    Task:
    - Role: ${role}
    - Candidate Experiencve: ${experience} years
    - Focus Topics: ${topicsToFocus}
    - Write ${numberofQuestions} interview question.
    - For each question, generate a detailed but beginner-friendly answer.
    - If the answer need a code example, add a small code block inside.
    - Keep formating very clean.
    - Return a pure JSON array like:
    [
       {
        "question": "Question here?",
        "answer": "Answer here."
       },
       ...
    ]
    Important: Do NOT add any extra text. Only return valid JSON.
    `)

    const conceptExplainPrompt = (question) => `
        You are an AI trained to generate explanations for a given interview question.
        
        Task:
        
        - Explain the following interview question add its concept in depth as if you're teaching a beginner developer.
        - Question: "${question}"
        - After the explanation, provide a short and clear title that summarizes the concept for the article
        or page header.
        - If the explanation includes a code example, provide a small code block.
        - Keep the formating very clean and clear.
        -  Return the result as avalid JSON object in the following format:
        
        {
           "title": "Short title here?",
           "explanation": "Explanation here."
        }
           
        Important: Do NOT add any extra text outisde the JSON format. Only return valid JSON.
        `;

        module.exports = { questionAnswerPrompt, conceptExplainPrompt };