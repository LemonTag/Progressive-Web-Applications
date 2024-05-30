const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';
    textHeader.textContent = 'Click the button to install!';

    butInstall.addEventListener('click', async () => {
        event.promptEvent = window.deferredPrompt
     
        if (!promptEvent) {
            return
        }


         // Show prompt
        promptEvent.prompt();

          // Reset the deferred prompt variable, it can only be used once.
        window.deferredPrompt = null;

        butInstall.classList.toggle('hidden', true)
    });
});



// TODO: Implement a click event handler on the `butInstall` element


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clear prompt
   window.deferredPrompt = null;
});
