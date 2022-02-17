window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    class InputHandler {
        constructor() {
            this.keys = [];
            window.addEventListener('keydown', e => {
                if ((e.key === 'ArrowDown' ||
                        e.key === 'ArrowUp' ||
                        e.key === 'ArrowLeft' ||
                        e.key === 'ArrowRight') &&
                    this.keys.indexOf(e.key === -1)) {
                    this.keys.push(e.key);
                }
                console.log(this.keys)
            });
            window.addEventListener('keyup', e => {
                if (e.key === 'ArrowDown' ||
                        e.key === 'ArrowUp' ||
                        e.key === 'ArrowLeft' ||
                        e.key === 'ArrowRight' ) {
                    // this.keys.splice(e.key.indexOf(e.key), 1);
                    this.keys.splice(0,this.keys.length);
                }
                console.log(this.keys)
            });
        }

    }
    class Player {
        constructor(gameWidth, gameHeight){
            this.gamewidth = gameWidth;
            this.gameheight = gameHeight;
            this.width = 200;
            this.height = 200;
            this.x = 0;
            this.y = 0;
        }

        draw(context){
            context.fillStyle = 'white';
            context.fillRect(this.x, this.y, this.width, this.height);

        }
        update(){
            this.x++;
            this.y++
        }

    }

    class Background {

    }

    class Enemy {

    }

    function handleEnemies() {

    }

    function displayStatusText() {

    }

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    
    function animate() {
        player.draw(ctx);
        player.update();
        requestAnimationFrame(animate);

    }
    animate();
});