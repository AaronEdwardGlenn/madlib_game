function madLib() { 

    const noun1Input = document.getElementById('noun1-input');
    const noun1 = noun1Input.value;
    const noun1Span = document.getElementById('noun1');
          noun1Span.textContent = noun1;

    const noun2Input = document.getElementById('noun2-input');
    const noun2 = noun2Input.value;
    const noun2Span = document.getElementById('noun2');
          noun2Span.textContent = noun2;

    const noun3Input = document.getElementById('noun3-input');
    const noun3 = noun3Input.value;
    const noun3Span = document.getElementById('noun3');
          noun3Span.textContent = noun3;

    const adj1Input = document.getElementById('adj1-input');
    const adj1 = adj1Input.value;
    const adj1Span = document.getElementById('adj1');
          adj1Span.textContent = adj1;

    const adj2Input = document.getElementById('adj2-input');
    const adj2 = adj2Input.value;
    const adj2Span = document.getElementById('adj2');
          adj2Span.textContent = adj2;

    const adj3Input = document.getElementById('adj3-input');
    const adj3 = adj3Input.value;
    const adj3Span = document.getElementById('adj3');
          adj3Span.textContent = adj3;

    const showStory = document.getElementById('lib');
    showStory.classList.remove('hidden');
}