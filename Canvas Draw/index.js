let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let width = canvas.width = window.innerWidth
let height = canvas.height = window.innerHeight

function fractalTree(x, y, rot, size, recursions, rx, ry, c)
{
    if (recursions <= 0) return
    ctx.strokeStyle = `rgba( ${c * 255}, 0, 0, ${c * 255})`
    ctx.beginPath()
    ctx.moveTo(x, y)
    let x2 = Math.cos(rot) * size
    let y2 = Math.sin(rot) * size
    ctx.lineTo(x + x2, y + y2)
    ctx.stroke()
    ctx.closePath()
    fractalTree(x + x2, y + y2, rot + rx, size * 0.7, recursions - 1, rx, ry, c - 0.1)
    fractalTree(x + x2, y + y2, rot + ry, size * 0.7, recursions - 1, rx, ry, c - 0.1)
}

let time = 0
function draw()
{
    time += 0.01
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, width, height)

    fractalTree(width / 2, 700, -Math.PI / 2, 200, 15, 0.5 + Math.sin(time) * 0.2, -0.5 + Math.sin(time) * 0.2, 1)

    fractalTree( width / 2 - 300, 700, -Math.PI / 2, 100, 10, 0.5 + Math.sin(time) * 0.2,+ Math.sin(time + 2) * 0.2 - 0.5, 1)

    fractalTree( width / 2 - 500, 700, -Math.PI / 2, 150, 10, 0.5+ Math.sin(time) * 0.2, + Math.sin(time + 3) * 0.2-0.5, 1)
   
    fractalTree( width / 2 + 300, 700, -Math.PI / 2, 100, 10, 0.5+ Math.sin(time) * 0.2, + Math.sin(time + 1) * 0.2-0.5, 1)

    fractalTree( width / 2 + 500, 700, -Math.PI / 2, 150, 10, 0.5+ Math.sin(time) * 0.2, + Math.sin(time + 4) * 0.2-0.5, 1)

    for (let i = 0; i < 20; i++)
    {
        ctx.beginPath()
        ctx.fillStyle = `rgba(255, ${ (1 - i / 20) * 255}, 0, ${1 - i / 20 - 0.1})`
        ctx.moveTo(100, 100)
        ctx.arc(25, 25, 200 * (i / 20), 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }

    ctx.beginPath()
    ctx.moveTo(0, 700)
    ctx.lineTo(width, 700)
    ctx.strokeStyle = "green"
    ctx.stroke()
    ctx.closePath()
    requestAnimationFrame(draw);
}
draw()
