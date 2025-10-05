document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.ques');
    
    questions.forEach(question => {
        question.addEventListener('click', function() {
            // Get the next element (the answer)
            const answer = this.nextElementSibling;
            
            // Toggle the display of the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                // Close all other answers first (optional)
                closeAllAnswers();
                // Open this answer
                answer.style.display = 'block';
            }
        });
    });
    
    // Function to close all answers
    function closeAllAnswers() {
        const allAnswers = document.querySelectorAll('.ans');
        allAnswers.forEach(answer => {
            answer.style.display = 'none';
        });
    }
});