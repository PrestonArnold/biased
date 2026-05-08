const { Engine, Render, Runner, World, Bodies } = Matter;

// Portrait game size
const WIDTH = 450;
const HEIGHT = 800;

// Engine
const engine = Engine.create();
const world = engine.world;

world.gravity.y = 0;

// Renderer
const render = Render.create({
  canvas: document.getElementById("game"),
  engine,
  options: {
    width: WIDTH,
    height: HEIGHT,
    wireframes: false,
    background: "#2c8a3f",
  },
});

Render.run(render);

// Runner
const runner = Runner.create();
Runner.run(runner, engine);

// Test bowl
const bowl = Bodies.circle(WIDTH / 2, HEIGHT - 80, 20, {
  render: {
    fillStyle: "#e8d7a8",
  },
});

World.add(world, bowl);
