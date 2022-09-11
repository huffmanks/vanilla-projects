const panels = [...document.querySelectorAll('.accordion-panel')]
console.log('🚀 ~ file: app.js ~ line 2 ~ panels', panels)

panels.map((panel) => {
    const panelHeader = panel.querySelector('.accordion-header')
    console.log('🚀 ~ file: app.js ~ line 7 ~ panels.map ~ panelHeader', panelHeader)
    panelHeader.addEventListener('click', () => {
        if (panel.classList.contains('active')) {
            panel.classList.remove('active')
        } else {
            panels.forEach((otherPanels) => otherPanels.classList.remove('active'))
            panel.classList.add('active')
        }
    })
})
