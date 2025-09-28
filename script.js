let selectedOperation = '';
        let questions = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let currentAnswer = 0;

        // Event listeners untuk tombol operasi
        document.querySelectorAll('.operation-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.operation-btn').forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
                selectedOperation = this.dataset.operation;
            });
        });

        // Set default operation
        document.querySelector('[data-operation="addition"]').click();

        // Event listener untuk input jawaban
        document.getElementById('answerInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (document.getElementById('checkBtn').style.display !== 'none') {
                    checkAnswer();
                } else {
                    nextQuestion();
                }
            }
        });