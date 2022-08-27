const panels = document.querySelectorAll('.accordion-panel')
panels.forEach((panel) =>
    panel.addEventListener('click', () => {
        if (panel.classList.contains('open')) {
            panel.classList.remove('open')
        } else {
            panels.forEach((otherPanels) => otherPanels.classList.remove('open'))
            panel.classList.add('open')
        }
    })
)
