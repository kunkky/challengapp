import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css'; // Import the xterm.css for styling

const WebTerminal = () => {
  useEffect(() => {
    const terminal = new Terminal();
    const fitAddon = new FitAddon();

    terminal.loadAddon(fitAddon);
    terminal.open(document.getElementById('terminal-container'));

    terminal.cursorBlink = true;

    fitAddon.fit();

    terminal.onKey(e => {
      const printable = !e.domEvent.altKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;

      if (e.domEvent.key === 'Enter') {
        terminal.write('\r\n'); // Handle Enter key
      } else if (e.domEvent.key === 'Backspace') {
        terminal.write('\b \b'); // Handle Backspace key
      } else if (printable) {
        terminal.write(e.key); // Handle other printable characters
      }
    });

    // Attach event listeners or perform other interactions with the terminal
    terminal.write('Hello, xterm.js!\r\n');

    return () => {
      terminal.dispose(); // Clean up the terminal instance
    };
  }, []);

  return <div id="terminal-container" />;
};

export default WebTerminal;
