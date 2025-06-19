function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();

  if (userText === "") return;

  // Add user message
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = userText;
  chatBox.appendChild(userMessage);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";

  // Simulate bot response
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";

    const msg = userText.toLowerCase();
    if (msg.includes("hello")) {
      botMessage.textContent = "Hi there! 😊";
    } else if (msg.includes("how are you")) {
      botMessage.textContent = "I'm doing great! How about you?";
    } else if (msg.includes("bye")) {
      botMessage.textContent = "Goodbye! 👋";
    } else {
      botMessage.textContent = "Sorry, I'm still learning to respond better!";
    }

    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}
